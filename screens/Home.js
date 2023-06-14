import { Block, Text } from "expo-ui-kit";
import { Button } from "galio-framework";
import { Image, ScrollView, Dimensions} from "react-native";
import { StyleSheet} from "react-native";
import theme from './theme';
import React from 'react'

const { width } = Dimensions.get('window');
export default function Home({ navigation }) {
  const logoURI = require('../assets/logo.jpg'); 
  handleRegister = () => navigation.navigate('Signup')
  handleLogin = () => navigation.navigate('Login')
  return (
    <ScrollView>
    <Block left top color="#001145">
      <Block center top marginTop={-150}>
        <Image marginTop={-20}
              source={logoURI}
              resizeMode='contain'
              style={{width: width}}
          />
        <Text h5 white center marginTop={-180} marginHorizontal={30}>The Future of Investment is Gamified Experience the Thrill with our Theme Based Games</Text>
        <Button success color="grey" style={{width:width*0.9,}} 
        onPress={handleRegister}>
        <Text color={'black'} style={{fontWeight:'bold'}}>Register</Text></Button>
        
      </Block>
      <Button color="transparent" shadowless onPress={handleLogin} flex={2} width={width}>
        <Text center color={theme.COLORS.PRIMARY} size={theme.SIZES.FONT * 0.9} marginTop={0}>
          {"Already a user? Log in"}
        </Text>
      </Button>
    </Block>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  
});

