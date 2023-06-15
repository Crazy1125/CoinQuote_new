
import { FlatList, Image, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { Block, Text } from 'expo-ui-kit';
import { Card, Button } from 'galio-framework';
import theme from './theme';
const Separator = () => <Block style={{ width: 10 }} />;
const { width } = Dimensions.get('screen');
const coinURI = require(`../assets/coinicons/1.png`);
const images = [
  require('../assets/card_back.png'),
  require('../assets/game2.jpg'),
  require('../assets/game3.jpg'),
  require('../assets/game4.jpg'),
];
const SelectedCoin = ({ selcoindata, selcount, coincount }) => {


  return (
    <Block center style={{ ...styles.container_row, position: 'absolute', alignItems: 'center', justifyContent: 'center', height: 50 }} marginLeft={5} width={width * 0.98} >
      <Text h2 center marginRight={10} > {selcount}/{coincount}</Text>
      {Array.from({ length: selcount }).map((_, index) => (
        <Image
          key={index}
          style={{ height: 35, marginHorizontal: -10 }}
          source={coinURI}
          resizeMode='contain'
        />
      ))}

      {Array.from({ length: 7 - selcount }).map((_, index) => (
        <Button key={index} style={{ width: 35, height: 35, borderRadius: 18, backgroundColor: 'transparent', borderColor: 'grey', borderWidth: 2, marginHorizontal: 5 }} />
      ))}


    </Block>
  )
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
    width: width * 0.8 - theme.SIZES.BASE,
    height: 200,
    marginHorizontal: 27,
    borderWidth: 2,
    borderColor: 'white'
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
    borderWidth: 0
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
    marginTop: -90,
    height: 150,

    resizeMode: 'contain',
  },
  subimage: {
    marginTop: 10,
    height: 50,
    resizeMode: 'contain',
  },
  button: {
    width: width * 2 / 5 - theme.SIZES.BASE * 2,
    height: 30,
    marginTop: 10,
    marginLeft: 0
  },
  container_row: {

    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 0,

  },
});
export default SelectedCoin;