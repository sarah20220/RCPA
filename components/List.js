import React from "react";
import {StyleSheet,Text,View,FlatList,SafeAreaView} from "react-native";


/* Variable for item, will be rendered in a flatlist */
const Item = ({ title, summary }) => (
  <View style={styles.listContainer}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.summary}>{summary}</Text>
  </View>
);

/* filter for content */
const List = ({ searchPhrase, setClicked, data }) => {
  const renderItem = ({ item }) => {
    /* when the input is empty, show all */
    if (searchPhrase === "") {
      return <Item title={item.title} summary={item.summary} />;
    }
    if (item.title.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item title={item.title} summary={item.summary} />;
    }

  };

  return (
    <SafeAreaView style={styles.root}>
      <View
        onStartShouldSetResponder={() => {
          setClicked(false);
        }}>
        <FlatList
          removeClippedSubviews={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  listContainer: {
    margin: 30,
    padding:10,
    borderTopWidth: 7,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: "#dcca9d"
  },
  summary: {
    marginRight:10,
    marginLeft:10,
    marginBottum:20,
  },
  title: {
    marginRight:10,
    marginLeft:10,
    fontSize: 20,
  },
});