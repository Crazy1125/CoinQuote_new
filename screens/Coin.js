import { Block, Text } from "expo-ui-kit";
import React, { useEffect, useState } from 'react';
import { Image, ScrollView } from "react-native";

import axios from 'axios';
import { Button, Icon } from 'galio-framework';
import { StyleSheet } from "react-native";
import { ProgressBar } from 'galio-framework';
import Animated from "react-native-reanimated";
import { AntDesign } from '@expo/vector-icons'
import MultiButtonSelect from './MultiButtonSelect'
import { LinearGradient } from 'expo-linear-gradient';


export default function Coin({ coindata, selectCoin }) {
  // const coinURI = require(path);
  const coinURI = require(`../assets/coinicons/1.png`);
  const [showView, setShowView] = useState(true);
  const [marketCap, setMarketCap] = useState(0);
  const [direction, setDirection] = useState(1);
  const [mulcount, setMulCount] = useState(1);
  const [coinIconUrl, setCoinIconUrl] = useState("");

  const btnTitles1 = ['▲', '▼'];
  const btnTitles2 = ['1x', '2x', '3x', '4x', '5x'];
  const textcolors1 = ['#60ff00', 'red'];
  const textcolors2 = ['#00164f', '#00164f', '#00164f', '#00164f', '#00164f'];
  const handleSelectCoinClick = () => {
    showView ? setShowView(false) : setShowView(true);
    selectCoin(1, coindata, direction, mulcount);
  };
  const handleCancelCoinClick = () => {
    showView ? setShowView(false) : setShowView(true);
    selectCoin(-1, coindata, 0, 0);
  };
  const handleUpDownClick = (value) => {
    if (value == 1)
      console.log("click up button");
    // setDirection(value);
    // selectCoin(1,coindata, value,mulcount);
    if (value == 2)
      console.log("click down button");
    // setDirection(value);
    // selectCoin(1,coindata, value,mulcount);
  };
  const handleMxClick = (value) => {
    console.log("click x button" + value);
    // setMulCount(value);
    // selectCoin(1,coindata, direction,value);
  };






  // handleEnterGame = () => navigation.navigate('SelectCoin')
  const GradientWrapper = ({ children }) => {
    return (
      <LinearGradient
        colors={['#FFFFFF', '#FFFFFF', '#FFFFFF']}
        //  colors={['#374174', '#2c2a58', '#374174']} 
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ ...styles.gradient, borderRadius: 10, marginVertical: 5, borderColor: 'grey', borderWidth: 1 }}
      >
        {children}
      </LinearGradient>
    );
  };

  return (

    <GradientWrapper>
      <Block style={{ ...styles.container_row, }}>

        <Block margin={0} style={{ flex: 1 }} center middle >
          <Image style={{ height: 40 }}
            source={coinURI}

            resizeMode='contain' />
        </Block>
        <Block left style={{ flex: 8 }} marginLeft={10}>
          <Block left top>

            <Block style={{ ...styles.container_row, }} left middle marginHorizontal={15}>
              <Text black style={{ fontSize: 18, fontWeight: 'bold', flex: 0.5 }}>{coindata.symbol}</Text>
              <Block flex={2} style={{ ...styles.container_row, }} left>
                <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold', fontSize: 16, }} white>24h% :</Text>

                {coindata.quote.USD.percent_change_24h > 0 && (
                  <Text style={{ fontSize: 14, color: 'green', fontWeight: 'bold', fontSize: 16, }} white>▲0.25%</Text>
                )}

                {coindata.quote.USD.percent_change_24h < 0 && (
                  <Text style={{ fontSize: 14, color: 'red', fontWeight: 'bold', fontSize: 16, }} white>▼0.12%</Text>
                )}

                {coindata.quote.USD.percent_change_24h === 0 && (
                  <Text style={{ fontSize: 14, color: '#green', fontWeight: 'bold', fontSize: 16, }} white> {coindata.quote.USD.percent_change_24h.toFixed(2)}%</Text>
                )}

              </Block>
              <Block center flex={0.1} marginRight={-10}>
                {showView && (
                  <Button style={{ width: 35, height: 35, borderRadius: 20, backgroundColor: 'green' }}
                    onPress={handleSelectCoinClick}>

                    <Text style={{ fontSize: 28, color: 'white', marginTop: -3 }}>+</Text></Button>
                )}
                {!showView && (

                  <Button success style={{ width: 35, height: 35, borderRadius: 20, }}
                    onPress={handleCancelCoinClick}>

                    <Text style={{ fontSize: 28, color: 'white', marginTop: -3 }}>×</Text></Button>
                )}

              </Block>
            </Block>
            {!showView && (
              <Block style={{ ...styles.container_row, alignItems: 'flex-start' }}   >
                <Block flex={0.6}>
                  <MultiButtonSelect count={2} onSelect={handleUpDownClick} titles={btnTitles1} btnstyle={{ ...styles.multibtn1 }} textstyle={{ fontSize: 18, marginTop: -3 }} textcolors={textcolors1} />
                </Block>
                <Block style={{ ...styles.container_row, }} left marginLeft={0}>

                  <MultiButtonSelect count={5} onSelect={handleMxClick} titles={btnTitles2} btnstyle={{ ...styles.multibtn2 }} textstyle={{ fontSize: 15 }} textcolors={textcolors2} />
                </Block>
              </Block>
            )}
          </Block>
        </Block>

      </Block>
    </GradientWrapper>

  )
}

const styles = StyleSheet.create({
  container_row: {
    flex: 1,
    flexDirection: 'row',

    alignItems: 'center',
    marginBottom: 0,
    marginHorizontal: 20,


  },
  multibtn1: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 0,
    borderColor: 'red'

  },
  multibtn2: {
    width: 30,
    height: 30,
    marginLeft: 0,
    borderRadius: 5,
  },

  progressBar: {
    flex: 0.1,
    height: 10,
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#555555',
    borderWidth: 2,
    borderRadius: 5
  },
  borderBar: {
    flex: 0.001,
    height: 2,
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 1
  },
  borderVBar: {
    flex: 0.001,
    height: '90%',
    width: 2,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 1
  },
  absoluteFill: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
});
