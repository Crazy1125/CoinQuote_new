import React, { useState } from 'react';
import { Block, Text } from 'expo-ui-kit';
import { Button } from 'galio-framework';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import auth from "../config/firebaseConfigs";
import db from "../config/firebaseConfigs_firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function MultiButtonSelect({ count, onSelect, btnstyle, textstyle, textcolors, titles, selected, alert, cal_count, selectedcoindatas, navigation }) {

  const [currentUserEmail, setCurrentUserEmail] = useState(null);


  const handlePress = (value) => {
    onSelect(value);
    // console.log("count+alert", cal_count, alert);
    if (cal_count == 7) {
      if (alert >= 2) {
        Alert.alert(
          'Confirm Action',
          'Are you sure you want to perform this selection?',
          [
            {
              text: 'Cancel',
              onPress: () => {
                console.log('Cancel Pressed', selectedcoindatas, currentUserEmail);

              },

            },
            {
              text: 'OK', onPress: () => {
                console.log('OK Pressed', selectedcoindatas, currentUserEmail);
                navigation.goBack();
                setDoc(doc(db, "selection_coin_info", currentUserEmail), {

                  email: currentUserEmail,
                  data: selectedcoindatas,

                });


              },
            }
          ],
          { cancelable: false }
        );
      }
    }
  };

  const renderButtons = () => {
    const buttonArray = [];

    for (let i = 0; i < count; i++) {
      buttonArray.push(
        <Button
          key={i + 1}
          title={`Option ${i + 1}`}
          onPress={() => handlePress(`${i + 1}`)}
          color={selected === `${i + 1}` ? '#52b2f8' : 'white'}

          style={{ ...btnstyle, borderColor: 'grey', borderWidth: 1 }}
        >
          <Text style={{ ...textstyle, fontWeight: 'bold' }} color={selected === `option${i + 1}` ? textcolors[i] : textcolors[i]}>{titles[i]}</Text></Button>
      );
    }

    return buttonArray;
  };



  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const email = user.email;
        setCurrentUserEmail(email);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  },
    []
  );

  return <Block marginTop={-3} left style={{ flexDirection: 'row' }}>{renderButtons()}</Block>;
}