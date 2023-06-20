import React from "react";
import { StyleSheet } from "react-native";
import { Block, Text } from "expo-ui-kit";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNav from "./Drawer";



export default function App() {
  return (


    <NavigationContainer>
      <DrawerNav />
      {/* <Block secondary center middle>
      <Text>welcome react native for ppp</Text>
    </Block> */}
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
