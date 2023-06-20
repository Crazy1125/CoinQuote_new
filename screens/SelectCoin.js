import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { Block, Row, Col } from 'expo-ui-kit';
import axios from 'axios';
import List from "./List";
import SearchBar from "./SearchBar";
import SelectedCoin from "./SelectedCoin";
import { View, Text } from 'react-native';
import RefreshButton from './RefreshButton';




const { width } = Dimensions.get('screen');

export default function SelectCoin({ navigation, coincount }) {
  coincount = 7;
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [count, setCount] = useState(0);
  const [searchPhrase, setSearchPhrase] = useState("");
  // const [clicked, setClicked] = useState(false);
  const [coindata, setCoinData] = useState();
  const [selectedcoindata, setSelectedCoinData] = useState([]);
  const [track, setTracking] = useState(0);



  const coinURI = require(`../assets/coinicons/1.png`);
  selectedcoindatas = selectedcoindata;

  const selectCoin = (index, selcoindata, direction, multicount) => {

    setCount(count + index);

    if (index == -1) {
      console.log("selcoindata", selcoindata.symbol);
      selectedcoindatas = selectedcoindata;
      selectedcoindatas.map(item => {
        if (item.symbol == selcoindata.symbol) {
          console.log("delete");
          updated_array = selectedcoindatas.filter(item => item.symbol != selcoindata.symbol);
          console.log("updated_array", updated_array);
          selectedcoindatas = updated_array;
          setSelectedCoinData(selectedcoindatas);
        } else {
          return item;
        }
      })
    }


    if (index == 1) {
      newSelCoin = {};
      newSelCoin.symbol = selcoindata.symbol;
      newSelCoin.selectedprice = selcoindata.quote.USD.price;
      newSelCoin.direction = direction;
      newSelCoin.multicount = multicount;
      selectedcoindatas = selectedcoindata;
      selectedcoindatas.push(newSelCoin);
      setSelectedCoinData(selectedcoindatas);
    }
    // console.log("coindata", selcoindata.symbol, direction, multicount);
  }

  const getData = async () => {
    const response = await axios.get(
      //       // 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      {
        headers: {
          'X-CMC_PRO_API_KEY': '0b646e2f-36da-4808-92ef-bfc5137c0c92',
        },
        params: {
          start: '1',
          limit: '20',
          convert: 'USD',
        },
      }
    );
    response.data.data.forEach(item => {

      // console.log(item.quote.USD.percent_change_24h);
    });
    coindatas = response.data.data;
    setCoinData(coindatas);
    selectedcoindatas = []
    setSelectedCoinData(selectedcoindatas);
    setLoaded(true);
  };

  const handleRefresh = async () => {
    getData();
  };






  useEffect(() => {
    getData();
  },
    []
  );

  // if (!loaded) {
  //   getData();
  // }
  //   }, 100000);

  //   return () => {
  //     clearTimeout(timer);
  //   };


  // }, [track]);
  return (
    <Block safe top backgroundColor='#ffffff'>


      {/* <Text h2 center margin={10} white>Select 1-7 coins</Text> */}


      <Block >

        <Block flex={1} row>
          <Block style={{ backgroundColor: 'transparent' }} flex={9}>
            <SelectedCoin selcoindata={selectedcoindata} selcount={count} coincount={coincount}></SelectedCoin>
          </Block>
          <Block style={{ backgroundColor: 'transparent' }} flex={1}>
            <RefreshButton onPress={handleRefresh} />
          </Block>
        </Block>
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
        count={count}
        selectedcoindatas={selectedcoindatas}

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
