import {ScrollView, Image, StyleSheet, Dimensions} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Block, Text } from "expo-ui-kit";
import {Card} from 'galio-framework';
import theme from './theme';

const { width } = Dimensions.get('screen');
export default function Blog() {
  const blogs = [
    {
      id: 1,
    //   image: 'https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?w=840&q=300',
      image: require('../assets/hanger.png'),
      title: 'Vignesh Ravi',
      avatar:require('../assets/vignesh.png'),
      body: 'I am a big fan of CoinFantasy. It is one of the best P2E games in the market providing a fully immersive trading experience. This game helps me understand crypto better.',
      location: 'Chennai, India',
      
    },
    {
      id: 2,
      image: require('../assets/hanger.png'),
      title: 'Ivan',
      avatar:require('../assets/ivan.png'),
      body: 'I\'ve been trading crypto for a while now, and I have to say that CoinFantasy is the best crypto fantasy portfolio trading platform I\'ve come across. It has a clean interface, great customer service, and is always up-to-date with the latest events and market prices.',
      location: 'Handi, Vietnam',
    },
    {
      id: 3,
      image: require('../assets/hanger.png'),
      title: 'Davor',
      avatar: require('../assets/Davor.png'),
      body: 'I have been playing CoinFantasy for the past three months & I am enjoying the game. Its exciting to be at the top of game leaderboard.',
      location: 'Ljubljana, Slovenia',
    },
    {
      id: 4,
      image: require('../assets/hanger.png'),
      title: 'Onoja Mercy',
      avatar: require('../assets/Onoja.png'),
      body: 'I never thought investing could be this much fun! The investment-gaming platform has made it easy and engaging to build my portfolio and watch my investments grow. Highly recommend to anyone looking for a unique and enjoyable way to invest.',
      location: 'Lagos, Nigeria',
    },
    
  ];
  return (
    <ScrollView >
      <Block color="#23266f">
        <Block center>
        <Text h2 white marginTop={40}>What's all the buzz about</Text>
        </Block>
        {blogs && blogs.map((card, id) => (
          <Card center
              key={`card-${card.id}`}
              flex
              borderless
              shadowColor={theme.COLORS.BLACK}
              titleColor={card.full ? theme.COLORS.WHITE : null}
              style={styles.card}
              
              imageStyle={[card.padded ? styles.rounded : null]}
              imageBlockStyle={[
                  card.padded ? { padding: theme.SIZES.BASE / 2 } : null,
                  card.full ? null : styles.noRadius,
              ]}
              footerStyle={card.full ? styles.full : null}
              >
              {card.full ? <LinearGradient colors={['transparent', 'rgba(0,0,0, 0.8)']} style={styles.gradient} /> : null}
              <Block left>
                
                <Image style={styles.image} source={card.image} />
                
                <Text h3 margin={10} >{card.body}</Text>
                <Block style={styles.avatarContainer}>
                  <Image source={card.avatar} margin={10} style={styles.avatar}/>
                  <Block left>
                  <Text h3 marginTop={10} >{card.title}</Text>
                  <Text h5 color='grey'>{card.location}</Text>
                  </Block>
                </Block>
              </Block>
          </Card>
        ))}
      </Block>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  cards: {
    width,
    backgroundColor: theme.COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardContainer: {
      paddingHorizontal: 10,
    },
  card: {
    backgroundColor: theme.COLORS.WHITE,
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
    elevation: theme.SIZES.BASE / 2,
    
  },
  avatar:{
    height:60,
    resizeMode: 'contain',
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
  avatarContainer:{
    flex: 1,
    flexDirection: 'row'
  },
  container: {
      flex: 1
      
    },
    image: {
      height:40,
      marginTop:-30,
      resizeMode: 'contain',
    },
    subimage: {
      marginTop:10,
      height: 50,
      resizeMode: 'contain',
    },
    button:{
      width:width*2/5 - theme.SIZES.BASE * 2,
    }
});
