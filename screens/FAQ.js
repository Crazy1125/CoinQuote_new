import {ScrollView,StyleSheet, Dimensions} from 'react-native';
import { Block, Text } from "expo-ui-kit";
import { Accordion} from 'galio-framework';
import React from 'react'


export default function FAQ() {
  const data = [
    { title: "How to select the gamepool ?", content: "All game pools are unique in terms of the no of participants, reward pool size & credits required to join the game. Choose a game & pick a portfolio of tokens having the best investment selection strategy to top the leaderboard.", 
      
   },
    { title: "How do I get my rewards ?", content: "Rewards will be distributed by the smart contracts as Beta CoinFantasy Tokens on the wallet provided to each user in a decentralized manner." },
    { title: "How do I withdraw the CoinFantasy tokens ?", content: "You can accumulate as many CFTs as you need by playing games 24*7. CFTs will be listed very soon on major exchanges." },
    { title: "How do I select my portfolio of coins ?", content: "A winning portfolio needs to have a correct assessment of the direction of the movement as well as an understanding of basic parameters like the market capitalization of the coin, Price movement,etc. You will have live charts in the game that can be used while selecting the lineup of coins." },
    { title: "what are ways to benefit the most from coinfantasy ?", content: "Join more games to maximize the rewards. By playing regularly one can earn multiple game rewards such as APY, GPY & streak. Each of these rewards shall be explained in different stages of gameplay." },
    { title: "Where do I get game updates?", content: "Follow us on social channels to make sure you never miss any updates from CoinFantasy. Our social presence: Discord, Telegram, Instagram, Twitter, LinkedIn, and Medium." },
  ];
  const screenHeight = Dimensions.get('screen').height;
  const renderHeader = (item, expanded) => (
    <Block style={styles.header}>
      <Text style={styles.headerText}>{item.title}</Text>
      {expanded ? (
        <Text style={styles.expandedIcon}>{'\u25BC'}</Text>
      ) : (
        <Text style={styles.collapsedIcon}>{'\u25B6'}</Text>
      )}
    </Block>
  );

  const renderContent = (item) => (
    <Block style={styles.content}>
      <Text style={styles.contentText}>{item.content}</Text>
    </Block>
  );

  return (
    <Block 
      center 
      style={{ height: screenHeight }} 
      color="#23266f"
      >
      <Text h2 white marginVertical={20}>FAQ</Text>
      <Accordion dataArray={data} 
      headerStyle = {styles.header}
      contentStyle = {styles.contentText}
      />
    </Block>
  );
  
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 3, // add borderBottomWidth
    borderBottomColor: '#ccc', 
    
    // add borderBottomColor
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  collapsedIcon: {
    fontSize: 20,
  },
  expandedIcon: {
    fontSize: 20,
    transform: [{ rotate: '180deg' }],
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  contentText: {
    fontSize: 14,
    lineHeight: 20,
  },
  sectionContainer: {
    borderBottomWidth: 1, // add borderBottomWidth
    borderBottomColor: '#ccc', // add borderBottomColor
  },
  activeSectionContainer: {
    borderBottomWidth: 1, // add borderBottomWidth
    borderBottomColor: '#ccc', // add borderBottomColor
  },
});
