import {ScrollView, FlatList,Image, StyleSheet, Dimensions, Platform, TouchableOpacity, View} from 'react-native';
import { Block } from "expo-ui-kit";
import theme from './theme';
import ImageSlider from './ImageSlider';

const { width } = Dimensions.get('screen');

// const cards = [
//     {
//       id: 1,
//     //   image: 'https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?w=840&q=300',
//       image: require('../assets/game1.jpg'),
//       // subimage: require('../assets/hodl_play_text.png'),
//       btntitle:'VIEW GAME',
//       title: 'Christopher Moon',
//       caption: 'HODL through the market\'s ups and downs',
      
//       btncolor : theme.COLORS.SUCCESS
//     },
//     {
//       id: 2,
//       image: require('../assets/game2.jpg'),
//       subimage: require('../assets/defi.png'),
//       btntitle:'VIEW GAME',
//       title: 'Christopher Moon',
//       caption: 'Twist the traditional finance with DeFi',
      
//       btncolor : theme.COLORS.SUCCESS
//     },
//     {
//       id: 3,
//       image: require('../assets/game3.jpg'),
//       subimage: require('../assets/yeild_coins.png'),
//       btntitle:'COMING SOON',
//       title: 'Christopher Moon',
//       caption: 'Yield farming for the savvy investor',
      
//       padded: true,
//       disabled:true,
//       btncolor : theme.COLORS.GREY
//     },
//     {
//       id: 4,
//       image: require('../assets/game4.jpg'),
//       subimage: require('../assets/memecoin.png'),
//       btntitle:'COMING SOON',
//       title: 'Christopher Moon',      
//       caption: 'Laughing all the way to the crypto bank',
      
//       padded: true,
//       disabled:true,
//       btncolor : theme.COLORS.GREY
//     },
    
//   ];

const images = [
  require('../assets/game1.jpg'),
  require('../assets/game2.jpg'),
  require('../assets/game3.jpg'),
  require('../assets/game4.jpg'),
];

export default function GameIntroCard({ navigation }) {
    const Separator = () => <Block style={{ width: 10 }} />;
    handleViewGame = () => navigation.navigate('maingamenav')
  return (
    // <FlatList
    //     marginLeft ={10}
    //     horizontal
    //     data={cards}
    //     keyExtractor={(card) => `card-${card.id}`}
    //     ItemSeparatorComponent={Separator}
    //     renderItem={({ item: card }) => (
    //         <Card
    //         key={`card-${card.id}`}
    //         flex
    //         borderless
    //         shadowColor={theme.COLORS.SUCCESS}
    //         titleColor={card.full ? theme.COLORS.WHITE : null}
    //         style={styles.card}
    //         imageStyle={[card.padded ? styles.rounded : null]}
    //         imageBlockStyle={[
    //             card.padded ? { padding: theme.SIZES.BASE / 2 } : null,
    //             card.full ? null : styles.noRadius,
    //         ]}
    //         footerStyle={card.full ? styles.full : null}
    //         >
    //         {card.full ? (
    //             <LinearGradient
    //             colors={['transparent', 'rgba(0,0,0, 0.8)']}
    //             style={styles.gradient}
    //             />
    //         ) : null}
    //         <Block center>
    //             <Image style={styles.image} 
    //               source={card.image} 
    //               width={width*0.9}
    //               />
                
    //         </Block>
    //         <Block p="4" marginTop={10} center marginBottom={-5}>
    //             <Text marginTop={-200} white>{card.caption}</Text>
    //             <Button handleViewGame={handleViewGame}
    //             disabled={card.disabled}
    //             color={card.btncolor}
    //             style={styles.button}
    //             onPress={handleViewGame}
    //             >
    //             {card.btntitle}
    //             </Button>
    //         </Block>
    //         </Card>
    //     )}
    //     />
    <ImageSlider images={images}/>
  )
}


const styles = StyleSheet.create({
    cards: {
      width,
      // backgroundColor: theme.COLORS.WHITE,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    cardContainer: {
        paddingHorizontal: 10,
      },
    card: {
    //   backgroundColor: theme.COLORS.WHITE,
      width: width*0.81- theme.SIZES.BASE,
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
    container: {
        flex: 1
    },
    image: {
      marginTop:-60,
      height: 210,
      
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
      marginTop:130,
      marginLeft:-150
    }
});