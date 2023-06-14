import React, { useState } from 'react';
import { ScrollView, FlatList,Image, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { Block, Text } from 'expo-ui-kit';
import { TabView, SceneMap } from 'react-native-tab-view';
import Contest from './Contest';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import GameIntroCard from './GameIntroCard';
import CurrentGame from './CurrentGame';
import {Card,Button} from 'galio-framework';
import theme from './theme';
const cards = [
  {
    id: 1,
  //   image: 'https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?w=840&q=300',
    image1: require('../assets/team_1.png'),
    image2: require('../assets/team_2.png'),
    btntitle:'VIEW GAME',
    title: 'Christopher Moon',
    caption: '4h 10m',
    
    btncolor : theme.COLORS.SUCCESS
  },
  {
    id: 2,
    image1: require('../assets/team_3.png'),
    image2: require('../assets/team_4.png'),
    btntitle:'VIEW GAME',
    title: 'Christopher Moon',
    caption: '3h 50m',
    
    btncolor : theme.COLORS.SUCCESS
  },
  {
    id: 3,
    image1: require('../assets/team_5.png'),
    image2: require('../assets/team_1.png'),
    btntitle:'VIEW GAME',
    title: 'Christopher Moon',
    caption: '1h 40m',
     
    padded: true,
    disabled:true, 
    btncolor : theme.COLORS.GREY
  },
  {
    id: 4,
    image1: require('../assets/team_3.png'),
    image2: require('../assets/team_5.png'),
    btntitle:'VIEW GAME',
    title: 'Christopher Moon',      
    caption: '2h 30m',
    
    padded: true,
    disabled:true,
    btncolor : theme.COLORS.GREY
  },
  
];

const images = [
  require('../assets/card_back.png'),
  require('../assets/game2.jpg'),
  require('../assets/game3.jpg'),
  require('../assets/game4.jpg'),
];

const Tab = createBottomTabNavigator();
const FirstRoute = () => (
  <Block style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
  <Block style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
const Separator = () => <Block style={{ width: 10 }} />;
const { width } = Dimensions.get('screen');
const logoURI = require('../assets/holdplay.png');
function ScreenA({navigation}) {
  return (
    <Block top backgroundColor='white'>
      <ScrollView>
        <Block>
          <GameIntroCard navigation={navigation}/>
          <CurrentGame cards={cards} />
        </Block>
        <Block marginHorizontal={5} marginTop={10}>
          <Text marginLeft={10} style={{fontWeight:'bold', fontSize:18}}>Upcoming matches</Text>
          <Contest navigation={navigation} coincount={7} pay={15}/>
          <Contest navigation={navigation} coincount={5} pay={25}/>
          <Contest navigation={navigation} coincount={6} pay={35}/>
          <Contest navigation={navigation} coincount={10} pay={100}/>
        </Block>
      </ScrollView>
    </Block>
  );
}

function ScreenB() {
  return (
     <Block></Block>  
  );
 
}

export default function MainGame({ navigation }) {
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (

    <Tab.Navigator
      screenOptions={{
          headerShown: false,
      }}
      >
      <Tab.Screen
        name=" "
        component={ScreenA}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon marginTop={10} name="ios-home-outline" color={color} size={size} />
          ),
          
        }}
      />
      <Tab.Screen 
        name="  " 
        component={ScreenB}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon marginTop={10} name="ios-settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1
  },
  scene: {
    flex: 1,
  },
  cards: {
    
    // backgroundColor: theme.COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardContainer: {
      paddingHorizontal: 10,
    },
  card: {
  //   backgroundColor: theme.COLORS.WHITE,
    width: width*0.8- theme.SIZES.BASE,
    height:140,
    marginHorizontal:15
  //   marginVertical: theme.SIZES.BASE * 0.1,
    // elevation: theme.SIZES.BASE / 2,
    
  },
  full: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  noRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  rounded: {
    borderRadius: theme.SIZES.BASE * 0.1875,
  },
  gradient: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    position: 'absolute',
    overflow: 'hidden',
    borderBottomRightRadius: theme.SIZES.BASE * 0.5,
    borderBottomLeftRadius: theme.SIZES.BASE * 0.5,
  },
  
  image: {
    marginTop:-60,
    height: 140,
    
    resizeMode: 'contain',
  },
  subimage: {
    marginTop:10,
    height: 50,
    resizeMode: 'contain',
  },
  button:{
    width:width*2/5 - theme.SIZES.BASE * 2,
    height:30,
    marginTop:10,
    marginLeft:0
  },
  container_row: {
    
    flexDirection: 'row',
    alignItems:'center',
    
    marginBottom:0,
    
  },
});