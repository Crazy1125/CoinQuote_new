import { Block, Text } from "expo-ui-kit";
import { Image, ScrollView} from "react-native";
import React from 'react'


export default function Contact() {
  const contactusURI = require('../assets/contact_us.png'); 
  return (

    <Block center top color="#000000">
      <Image 
              source={contactusURI}
              resizeMode='center'
              style={{width: 600, height: 200}}
          />
      <Text h1 white>CoinFantasy</Text>
      <Text h4 color={'gray'} margin={10}>10 616 members, 249 online</Text>
      <Text h3 white margin={10}>Official Telegram Group of CoinFantasy</Text>
      <Text h3 white marginTop={20}>Join our Announcement Channel!</Text>
      <Text h3 white >https://t.me/CoinFantasy_ann</Text>

    </Block>
  )
}
