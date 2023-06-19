import React, { useState } from 'react';
import { Block, Text } from "expo-ui-kit";
import { Image, Alert, Dimensions, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Button, Input, NavBar } from 'galio-framework';
import PhoneInput from 'react-native-phone-number-input';
import theme from './theme';
import auth from "../config/firebaseConfigs";
import db from "../config/firebaseConfigs_firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const { width } = Dimensions.get('window');

const MARGIN_LEFT = '5%';
const SOCIAL_ICON_SIZE = theme.SIZES.BASE * 1.5;
const SOCIAL_BTN_SIZE = theme.SIZES.BASE * 3;
const imageURI = require('../assets/login.png');


const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [con_password, setcon_Password] = useState('');
  const [username, setUsername] = useState('');

  const updatePhone = (phone) => {
    setPhone(phone);
  }

  const handleGoBack = () => Alert.alert('Back button pressed');

  const handleSignUp = () => {
    if (password != con_password) {
      Alert.alert("Check the Confirm password");
    }
    else {
      Alert.alert('Sign up action', `Email: ${email}, Mobile: ${phone}`);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          setDoc(doc(db, "Userinfo", email), {

            email: email,
            name: username,
            phone: phone,
            password: password,

          });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });


      navigation.navigate('Login');
    }
  }

  handleSignIn = () => navigation.navigate('Login')

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
          {/* <Text center h1 white marginHorizontal={30} marginTop={-70}>SIGN UP</Text> */}

          <Block flex middle marginTop={-200}>
            <Form email={email} setEmail={setEmail}
              phone={phone} updatePhone={updatePhone}
              username={username} setUsername={setUsername}
              setPassword={setPassword} setcon_Password={setcon_Password}
              password={password} con_password={con_password} />
            <SignButtons handleSignIn={handleSignIn} handleSignUp={handleSignUp} />
          </Block>
        </KeyboardAvoidingView>
      </ScrollView>
    </Block>
  );
}

const Form = ({ email, setEmail, phone, updatePhone, password, setPassword, con_password, setcon_Password, username, setUsername }) => (
  <Block style={{ marginBottom: 20 }}>
    <Text h4 white marginTop={10} marginLeft={30}>Email *</Text>
    <Input
      borderless
      type="email-address"
      placeholder="Enter your email"
      autoCapitalize="none"
      style={styles.input}
      onChangeText={setEmail}
      value={email}
    />
    <Text h4 white marginTop={0} marginLeft={30}>Mobile Number *</Text>
    <PhoneInput
      style={styles.phone}
      defaultCode="US"
      layout="first"
      placeholder="Enter phone number"
      containerStyle={styles.phoneContainer}
      textContainerStyle={styles.phoneTextContainer}
      onChangeFormattedText={updatePhone}
      value={phone}

    />
    <Input
      borderless
      placeholder="Enter your username"
      autoCapitalize="none"
      style={styles.input}
      onChangeText={setUsername}
      value={username}
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

    <Input
      borderless
      secureTextEntry
      placeholder="Confirm your password"
      autoCapitalize="none"
      style={styles.input}
      onChangeText={setcon_Password}
      value={con_password}
    />

  </Block>
);

const SignButtons = ({ handleSignUp, handleSignIn }) => (
  <Block flex center style={{ marginBottom: 10, marginTop: -15 }}>
    <Button
      shadowless
      style={styles.button}

      color="white"
      onPress={handleSignUp}
    >
      <Text style={{ fontWeight: 'bold' }}>
        Sign up
      </Text>
    </Button>

  </Block>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#001145',
    paddingTop: 20,
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
    borderWidth: theme.SIZES.BASE * 0.3,
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
    width: width * 0.89,

    borderRadius: 5,
    marginLeft: 25,
    marginTop: 10
  },
  phoneTextContainer: {
    borderRadius: 10,
  },
  phone: {

  },
});

export default SignUp;