import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { Block } from 'expo-ui-kit';


import axios from 'axios';

import List from "./List";
import SearchBar from "./SearchBar";
import SelectedCoin from "./SelectedCoin";

const { width } = Dimensions.get('screen');

export default function SelectCoin({ navigation, coincount }) {
  console.log("ss:" + coincount);
  coincount = 7;
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [count, setCount] = useState(0);
  const [searchPhrase, setSearchPhrase] = useState("");
  // const [clicked, setClicked] = useState(false);
  const [coindata, setCoinData] = useState();
  const [selectedcoindata, setSelectedCoinData] = useState();

  const coinURI = require(`../assets/coinicons/1.png`);
  const selectCoin = (index, selcoindata, direction, multicount) => {
    setCount(count + index);
    if (index == 1) {
      newSelCoin = {};
      newSelCoin.data = selcoindata;
      newSelCoin.direction = direction;
      newSelCoin.multicount = multicount;
      selectedcoindatas = selectedcoindata;
      selectedcoindatas.push(newSelCoin);
      setSelectedCoinData(selectedcoindatas);
    }
    console.log(selcoindata.symbol);
  }
  useEffect(() => {

  }, []);
  return (
    <Block safe top backgroundColor='#ffffff'>


      {/* <Text h2 center margin={10} white>Select 1-7 coins</Text> */}


      <Block >
        <SelectedCoin selcoindata={selectedcoindata} selcount={count} coincount={coincount}></SelectedCoin>
        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}

        // clicked={clicked}
        // setClicked={setClicked}
        />

      </Block>

      <List
        searchPhrase={searchPhrase}
        data={coindata}
        selectCoin={selectCoin}

      />

    </Block>

  );
}
const styles = StyleSheet.create({
  container_row: {

    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 0,

  },
  root: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    position: 'absolute',
    width: width * 0.95
  },

  container: {
    marginTop: StatusBar.currentHeight,
  },




});
