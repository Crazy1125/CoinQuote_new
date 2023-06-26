import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Profile = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>Tony1125</Text>
            <Text style={styles.occupation}>Email : masterweb1125@gmail.com</Text>
            <Text style={styles.occupation}>Phone number : +1234234234</Text>
            <Text style={styles.occupation}>Balance : 27</Text>
            <Text style={styles.occupation}>Game Joined : 1</Text>
            <Text style={styles.occupation}>Previous game Point : 48.25, 3nd</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        paddingTop: 100,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
        padding: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        padding: 10,
    },
    occupation: {
        fontSize: 18,
        color: '#666',
        padding: 10,
    },
});

export default Profile;