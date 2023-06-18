import React, { useState } from 'react';
import { Block, Text, View } from "expo-ui-kit";
import { Image, Alert, Dimensions, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Button, Input, NavBar } from 'galio-framework';
import PhoneInput from 'react-native-phone-number-input';
import theme from './theme';
import auth from "../firebaseConfigs";
import { getAuth, signInWithEmailAndPassword, sendEmailVerification, } from "firebase/auth";

const { width } = Dimensions.get('window');

const MARGIN_LEFT = '5%';

const SOCIAL_BTN_SIZE = theme.SIZES.BASE * 3;
const imageURI = require('../assets/login.png');

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleGoBack = () => Alert.alert('Back button pressed');

  const handleSignIn = async () => {
    Alert.alert('Sign In action', `Email: ${email}`);
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.navigate('maingamenav');
      })
      .catch((error) => {
        Alert.alert('Password is wrong, Enter correct password');
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  }
  // const handleSignUp = () => {
  //   Alert.alert('Sign Up action', `Email: ${email}`);
  // }

  handleSignUp = () => navigation.navigate('Signup')

  return (
    <Block safe flex style={styles.container}>

      <ScrollView style={styles.flex} keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={5}
        >
          <Image
            center
            source={imageURI}
            resizeMode='contain'
            style={{ width: width }}
            marginTop={-70}
          />
          {/* <Text center h1 white marginTop={-150} marginHorizontal={30}>SIGN IN</Text> */}

          <Block flex middle marginTop={-80}>
            <Form email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
            <SignButtons handleSignIn={handleSignIn} handleSignUp={handleSignUp} />
          </Block>
        </KeyboardAvoidingView>
      </ScrollView>
    </Block>
  );
}

const Form = ({ email, setEmail, password, setPassword }) => (
  <Block style={{ marginBottom: 20 }}>
    <Text h4 white marginTop={10} marginLeft={30}>Email / Mobile Number *</Text>
    <Input
      borderless
      type="email-address"
      placeholder="Enter your email"
      autoCapitalize="none"
      style={styles.input}
      onChangeText={setEmail}
      value={email}
    />
    <Input
      borderless
      secureTextEntry
      placeholder="Enter your password"
      autoCapitalize="none"
      style={styles.input}
      onChangeText={setPassword}
      value={password}
    />

  </Block>
);

const SignButtons = ({ handleSignIn, handleSignUp }) => (
  <Block flex left style={{ marginBottom: 20, marginLeft: 15, marginTop: -20 }}>
    <Button
      shadowless
      style={styles.button}

      color="white"
      onPress={handleSignIn}
    >
      <Text style={{ fontWeight: 'bold' }}>Log in</Text>

    </Button>


    <Button color="transparent" shadowless onPress={handleSignUp} >

      <Block flex={1} row>
        <Text center color={'white'} size={theme.SIZES.FONT * 0.9} width={200} marginLeft={50} marginTop={-30} >
          Don't have an account?
        </Text>
        <Text center size={theme.SIZES.FONT * 0.9} marginTop={-30} style={{ textDecorationLine: 'underline', textDecorationColor: 'white', color: 'rgb(255, 255, 255)' }} >
          Sign Up
        </Text>
      </Block>
    </Button>
  </Block>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#001145',
    paddingTop: 70,
  },
  flex: {
    flex: 1,
  },
  social: {
    width: SOCIAL_BTN_SIZE,
    height: SOCIAL_BTN_SIZE,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
  },
  socialContainer: {
    marginVertical: theme.SIZES.BASE * 1.875,
  },
  input: {
    alignSelf: 'center',
    width: width * 0.89,
    borderBottomColor: theme.COLORS.BLACK,
    borderWidth: theme.SIZES.BASE * 0.5,
    borderRadius: 10,
    paddingHorizontal: 0,
  },
  button: {
    marginVertical: 10,
    width: width * 0.89,
  },
  borderColor: {
    borderColor: theme.COLORS.GREY,
  },
  header: {
    width: '50%',
    marginLeft: MARGIN_LEFT,
  },
  phoneContainer: {
    marginLeft: 25
  }
});

export default Login;