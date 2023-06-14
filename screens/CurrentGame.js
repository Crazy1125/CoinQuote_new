
import { FlatList,Image, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { Block, Text } from 'expo-ui-kit';
import {Card,Button} from 'galio-framework';
import theme from './theme';
const Separator = () => <Block style={{ width: 10 }} />;
const { width } = Dimensions.get('screen');
const images = [
    require('../assets/card_back.png'),
    require('../assets/game2.jpg'),
    require('../assets/game3.jpg'),
    require('../assets/game4.jpg'),
  ];
const CurrentGame = ({cards}) => {
    return (
        <Block>
            <FlatList
            marginLeft ={5}
            marginTop= {10}
            marginBottom={0}
            marginRight={5}
            indicatorStyle='white'
            style={{height:150}}
            horizontal
            data={cards}
            keyExtractor={(card) => `card-${card.id}`}
            ItemSeparatorComponent={Separator}
            renderItem={({ item: card }) => (
                <Card 
                key={`card-${card.id}`}
                flex
                
                shadowColor={theme.COLORS.SUCCESS}
                titleColor={card.full ? theme.COLORS.WHITE : null}
                style={styles.card}
                imageStyle={[card.padded ? styles.rounded : null]}
                imageBlockStyle={[
                    card.padded ? { padding: theme.SIZES.BASE / 2 } : null,
                    card.full ? null : styles.noRadius,
                ]}
                
                >
                
                <Block center>
                    <Image style={styles.image} 
                      source={images[0]} 
                      
                      />
                    
                </Block>
                <Block p="4" marginTop={-20} center >
                    <Block marginTop={-140} style={{...styles.container_row}}>
                        <Image 
                            style={{width:75,resizeMode: 'contain'}}
                            source={card.image1}
                        ></Image>
                        <Text style={{color:'red', marginHorizontal:30, marginTop:0, fontWeight:'bold', fontSize:20}}>{card.caption}</Text>
                        <Image 
                            style={{width:75,resizeMode: 'contain'}}
                            source={card.image2}
                        ></Image>
                    </Block>
                    <Block marginTop={-30}>
                        <Text style={{marginTop:0}} black>{card.title}</Text>
                        <Button handleViewGame={handleViewGame}
                        disabled={card.disabled}
                        color={card.btncolor}
                        style={styles.button}
                        onPress={handleViewGame}
                        >
                        {card.btntitle}
                        </Button>
                    </Block>
                    
                </Block>
                </Card>
            )}
            />
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
      width: width*0.8- theme.SIZES.BASE,
      height:200,
      marginHorizontal:27,
      borderWidth:2,
      borderColor:'white'
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
      borderWidth:0
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
      marginTop:-90,
      height: 150,
      
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
export default CurrentGame;