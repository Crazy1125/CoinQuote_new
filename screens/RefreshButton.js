import React, { useState } from 'react';
import { View, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RefreshButton = ({ onPress }) => {
    const [isLoading, setIsLoading] = useState(false);
    const spinValue = useState(new Animated.Value(0))[0];

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    const startAnimation = () => {
        setIsLoading(true);
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            setIsLoading(false);
            spinValue.setValue(0);
        });
        onPress();
    };

    return (
        <TouchableOpacity onPress={!isLoading ? startAnimation : null}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Animated.View style={{ transform: [{ rotate: spin }] }}>
                    <Icon name="refresh" size={24} color={!isLoading ? 'black' : 'gray'} />
                </Animated.View>
            </View>
        </TouchableOpacity>
    );
}

export default RefreshButton;