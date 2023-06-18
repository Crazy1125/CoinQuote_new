import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { Block } from "expo-ui-kit";
import { color } from "react-native-elements/dist/helpers";

const SearchBar = ({ clicked, searchPhrase, setSearchPhrase }) => {
  return (
    <Block style={{ ...styles.container, position: 'absolute' }} marginLeft={10}>
      <Block
        style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={30}
          color="white"
          style={{
            marginLeft: 0, marginTop: 0, height: 40, backgroundColor: 'rgba(128, 128, 128, 0.5)', borderTopLeftRadius: 5, borderBottomLeftRadius: 5,
            paddingLeft: 5, paddingTop: 5
          }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search coins"
          placeholderTextColor={'grey'}
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            //setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
            setSearchPhrase("")
          }} />
        )}
      </Block>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <Block>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              //setClicked(false);
            }}
          ></Button>
        </Block>
      )}
    </Block>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "98%",
    marginTop: 60,



  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "50%",
    height: 35,
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "50%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 0,
    width: "90%",
    height: 40,
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
    color: 'white',
    paddingLeft: 10,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5

  },
});