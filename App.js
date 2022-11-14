// Home.js
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from "react-native";
import List from "./components/List.js";
import content from "./components/content.json";


/* Sets up search bar */
const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked}) => {
  return (
    <View style={styles.searchContainer}>
      <View style={clicked ? styles.searchBar_Clicked  :  styles.searchBar_Unclicked}>
        <TextInput
          style={styles.input}
          placeholder="Search Tiles"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
      </View>
    </View>
  );
};


const myApp = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [contentData, setContentData] = useState();
  const [subtitle, setSubtitle] = useState("Main Project Page");


  useEffect(() => {

    /* Sets data to the content.json */
    setContentData(content)

    /* Checks if the search phrase is empty and displays correct subtitle */ 
    if (searchPhrase !== "") {
      setSubtitle("Filtered Result")
    } else {
      setSubtitle("Main Project Page")
    }

  });

  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>{subtitle}</Text>
      <Text style={styles.heading}>Research Program on Children and Adversity</Text>
      <Text style={styles.subHeading}>Research Projects</Text>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      {(

          <List
            searchPhrase={searchPhrase}
            data={contentData}
            setClicked={setClicked}
          />

      )}
    </View>
  );
};

export default myApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    margin:10,
  },
  subTitle: {
    fontStyle:"italic",
    fontSize:35,
    fontWeight:"400",
    marginBottom:5,
  },
  heading: {
    backgroundColor:"#013956",
    color: "white",
    fontSize:35,
    padding:20,
    fontWeight:"200",
    textAlign: 'center',
  },
  subHeading: {
    fontSize:25,
    fontWeight:"300",
    marginTop:35,
  },
  searchContainer: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",

  },
  searchBar_Unclicked: {
    borderWidth:2,
    width:"100%",
    height:50,
    borderColor:'black',
    padding:10,
    borderRadius:3,
  },
  searchBar_Clicked: {
    borderWidth:2,
    width:"100%",
    height:50,
    borderColor:'#e59910',
    padding:10,
    borderRadius:3,
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});
