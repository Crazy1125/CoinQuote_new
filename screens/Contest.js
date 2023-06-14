import { Block, Text } from "expo-ui-kit";
import { Image } from "react-native";
import React from 'react'
import {Button } from 'galio-framework';
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

export default function Contest({ navigation }) {
  const iconURI = require('../assets/contest/1.png'); 
  const goldURI = require('../assets/Gold_Coins.png'); 
  handleEnterGame = () => navigation.navigate('SelectCoin')
  return (
    <Block height={100} backgroundColor={'#dddddd'} style={{borderWidth:2, borderRadius:10, marginTop:10, borderColor:'grey'}}> 
      <Block style={{...styles.container_row, ...styles.block}} borderBar={1}>
        <Block flex={0.5}>
          <Block style={styles.container_row} center marginLeft={10} marginTop={-10}>
            <Text style={{fontSize:14}} color='#0000ff'>Crypto Crash</Text>
            <Text center style={{fontSize:12}} black>&nbsp;(20/80)</Text>
          </Block>
          <Block style={styles.container_row} center marginLeft={5}>
            <Image 
              style={{flex:0.6}}
              source={iconURI}
              resizeMode='contain'
            />
            <Block marginLeft={10}>
              <Text style={{fontSize:12}} black>200 
              CFT</Text>
              <Text style={{fontSize:10}} black>-20.00 USD</Text>
            </Block>
          </Block>
        </Block>
        <Block marginLeft={0} flex={1}>
          <Text marginTop={10} center style={{fontSize: 13, fontWeight: 'bold'}} black>Pool Info 10% Winners &nbsp;&nbsp;&nbsp;4 hr games
          </Text>
          
          <Block style={ styles.progressBar }>
            <Animated.View style={{ ...styles.absoluteFill, backgroundColor: "red", width: '80%' }}/>
          </Block>
          <Block center style={styles.container_row}>
              
              <Text center style={{fontSize:30}} marginLeft={10} black >⏱</Text>
              <Text center style={{fontSize:13}} marginTop={5} black> 2hr 33m 24s left</Text>
              <Button style={{...styles.btn_row, width:70, height:35, borderRadius:5, marginTop:15, marginLeft:50}}
          handleEnterGame={handleEnterGame} onPress={handleEnterGame}>
                <Image style={{flex:0.4}}
                      source={goldURI}
                      resizeMode='contain'
                  />
                <Text color="#f8e975" style={{fontWeight:'bold'}}> 15</Text>
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
  btn_row: {
    flex: 1,
    flexDirection: 'row',
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
    flex:0.001,
    height: 2,
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 1
  },
  absoluteFill :{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
});
