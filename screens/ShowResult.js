import React, { useState } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import { useEffect } from 'react';
import { Image } from "react-native";
import { Button } from 'galio-framework';
import RefreshButton from './RefreshButton';
import { Block } from 'expo-ui-kit';

export default function ShowResult() {
    const [items, setItems] = useState([
        { id: '1', text: 'Coineater : 59.13%, Current Ranking : 1', },
        { id: '2', text: 'Jhon1125 : 49.05%, Current Ranking : 2', },
        { id: '3', text: 'Tony1125 : 48.25%, Current Ranking : 3', },

    ]);
    const [portfolio, setPortfolio] = useState([
        { id: '1', text: 'My portfolio', },
        { id: '2', text: 'BTC : direction : up, mul : 4', },
        { id: '3', text: 'ETH : direction : up, mul : 5', },
        { id: '4', text: 'USDT : direction : up, mul : 5', },
        { id: '5', text: 'BNB : direction : up, mul : 5', },
        { id: '6', text: 'USDC : direction : up, mul : 3', },
        { id: '7', text: 'XRP : direction : up, mul : 5', },
        { id: '8', text: 'ADA : direction : up, mul : 4', },

    ]);

    const goldURI = require('../assets/Gold_Coins.png');

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




    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.text}>{item.text}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* <Button style={{ ...styles.btn_row, width: 100, height: 15, borderRadius: 5, marginTop: 15, marginLeft: 10 }}>
                <Image style={{ flex: 0.4 }}
                    source={goldURI}
                    resizeMode='contain'
                />
                <Text color="#f8e975" style={{ fontWeight: 'bold' }}> 15</Text>
            </Button> */}
            <Block style={styles.refresh} >
                <RefreshButton />
            </Block>
            <Text center style={{ fontSize: 20 }} marginLeft={10} black >Past Game Winner : Jhon1125</Text>
            <Text center style={{ fontSize: 20 }} marginLeft={10} black >BTC, ETH, BNB, XRP, DOGE, TRX, MATIC</Text>
            <Text center style={{ fontSize: 20 }} marginLeft={10} black >12.48 + 16.14 - 0.05 + 11.32 + 5.24 + 10.24 + 5.76</Text>
            <Text center style={{ fontSize: 20 }} marginLeft={10} black >Total Gain : 61.13%</Text>
            <Text center style={{ fontSize: 30 }} marginLeft={10} black >⏱</Text>
            <Text center style={{ fontSize: 20 }} marginTop={5} marginLeft={15} black>{formatTime(remainingTime)}</Text>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

            <FlatList
                data={portfolio}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    refresh: {
        flex: 1,
        paddingRight: 400

    },
    item: {
        paddingTop: 20,
        fontSize: 18,
        height: 44,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
    },
    btn_row: {
        flex: 0.5,
        flexDirection: 'row',
        backgroundColor: 'rgb(255, 105, 180)'
    },
});