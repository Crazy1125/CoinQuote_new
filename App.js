import React from "react";
import { StyleSheet } from "react-native";
import { Block, Text } from "expo-ui-kit";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNav from "./Drawer";
import { Provider } from 'react-redux';
import store from './store/store';




export default function App() {
  return (

    <Provider store={store}>

      <NavigationContainer>
        <DrawerNav />
        {/* <Block secondary center middle>
      <Text>welcome react native for ppp</Text>
    </Block> */}
      </NavigationContainer>

    </Provider>

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
