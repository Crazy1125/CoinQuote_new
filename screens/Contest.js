import { Block, Text } from "expo-ui-kit";
import { Image } from "react-native";
import React from 'react'
import { Button } from 'galio-framework';
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { useState, useEffect } from 'react';
import { Alert } from 'react-native';


export default function Contest({ navigation }) {

  const iconURI = require('../assets/contest/1.png');
  const goldURI = require('../assets/Gold_Coins.png');
  const peopleURI = require('../assets/ivan.png');
  const handleEnterGame = () => {

    // Alert.alert(
    //   'Confirm Game Result',
    //   'coineater : 59.05, Jhon1125 : 62.13, Tony1125 : 48.25',
    //   [
    //     {
    //       text: 'Cancel',
    //       onPress: () => {
    //         console.log('Cancel Pressed');

    //       },

    //     },
    //     {
    //       text: 'OK', onPress: () => {
    //         console.log('OK Pressed');


    //       },
    //     }
    //   ],
    //   { cancelable: false }
    // );
    navigation.navigate('SelectCoin');

  }

  const handleGameResult = () => {
    navigation.navigate('ShowResult');

  }

  const [remainingTime, setRemainingTime] = useState(4 * 60 * 60 * 1000);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 1000);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / (60 * 60 * 1000));
    const minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((time % (60 * 1000)) / 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };



  return (
    <Block height={100} backgroundColor={'white'} style={{ borderWidth: 2, borderRadius: 10, marginTop: 10, borderColor: '#dddddd' }}>
      <Block style={{ ...styles.container_row, ...styles.block }} borderBar={1}>
        <Block flex={0.5}>
          <Block style={styles.container_column} center marginLeft={5} marginTop={0}>
            <Text style={{ fontSize: 12, fontFamily: 'Roboto-Medium', fontWeight: '500' }} color='#0000ff'>Crypto Crash</Text>
            <Block style={{
              flex: 1,
              flexDirection: 'row',
            }}>
              <Image
                style={{ width: 20, height: 20 }}
                source={peopleURI}
                resizeMode='contain'
              />
              <Text center style={{ fontSize: 12 }} black>&nbsp;(20/80)</Text>
            </Block>

          </Block>
          <Block style={styles.container_row} center marginLeft={5}>
            <Image
              style={{ flex: 0.6 }}
              source={iconURI}
              resizeMode='contain'
            />
            <Block marginLeft={10}>
              <Text style={{ fontSize: 12 }} black>200
                CFT</Text>
              <Text style={{ fontSize: 10 }} black>-20.00 USD</Text>
            </Block>
          </Block>
        </Block>
        <Block marginLeft={0} flex={1}>
          <Text marginTop={10} center style={{ fontSize: 12, fontWeight: 'bold' }} black>Pool Info 10% Winners &nbsp;&nbsp;&nbsp;4 hr games
          </Text>

          <Block style={styles.progressBar}>
            <Animated.View style={{ ...styles.absoluteFill, backgroundColor: "red", width: '80%' }} />
          </Block>
          <Block center style={styles.container_row}>

            <Text center style={{ fontSize: 30 }} marginLeft={10} black >⏱</Text>
            <Text center style={{ fontSize: 20 }} marginTop={5} marginLeft={15} black>{formatTime(remainingTime)}</Text>
            {/* <Text center style={{ fontSize: 20 }} marginTop={5} marginLeft={15} black>Finished</Text> */}
            <Button style={{ ...styles.btn_row, width: 20, height: 35, borderRadius: 5, marginTop: 15, marginLeft: 10 }}
              onPress={handleGameResult}>
              <Text color="#00e900" style={{ fontWeight: 'bold' }}>Result</Text>
            </Button>
            <Button style={{ ...styles.btn_row, width: 50, height: 35, borderRadius: 5, marginTop: 15, marginLeft: 10 }}
              handleEnterGame={handleEnterGame} onPress={handleEnterGame}>
              <Image style={{ flex: 0.4 }}
                source={goldURI}
                resizeMode='contain'
              />
              <Text color="#f8e975" style={{ fontWeight: 'bold' }}> 15</Text>
            </Button>
          </Block>
        </Block>
      </Block>
    </Block>
  )
}

const styles = StyleSheet.create({
  container_row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
  },
  container_column: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: -50,
  },
  btn_row: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgb(255, 105, 180)'
  },
  progressBar: {
    marginTop: 10,
    marginLeft: 15,
    flex: 0.05,
    height: 10,
    width: '90%',
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 1,
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
  absoluteFill: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
});
