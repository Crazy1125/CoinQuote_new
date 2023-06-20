// List.js
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Block } from 'expo-ui-kit';
import Coin from "./Coin";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ coindata, selectCoin, count, selectedcoindatas, navigation }) => (
  <Coin coindata={coindata} selectCoin={selectCoin} count={count} selectedcoindatas={selectedcoindatas} navigation={navigation} />
);

// the filter
const List = ({ searchPhrase, data, selectCoin, count, selectedcoindatas, navigation }) => {
  const renderItem = ({ item }) => {
    // when no input, show all
    if (searchPhrase === "") {
      return <Item coindata={item} selectCoin={selectCoin} count={count} selectedcoindatas={selectedcoindatas} navigation={navigation} />;
    }
    // filter of the name
    if (item.symbol.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item coindata={item} selectCoin={selectCoin} count={count} selectedcoindatas={selectedcoindatas} navigation={navigation} />;
    }

  };

  return (
    <SafeAreaView style={styles.list__container}  >
      <Block
        onStartShouldSetResponder={() => {
          //   setClicked(false);
        }}
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Block>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "96%",
    position: 'absolute',
    marginTop: 100
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});