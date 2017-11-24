import React from 'react';
import { View, Text, Button } from 'react-native';

const FirstScreen = ({navigator}) => {
    console.log('FirstScreen');
    return (
        <View>
            <Text>FirstScreen</Text>
            <Button onPress={() => navigator.push({screen: 'example.SecondTabScreen'})} title="Press me" />
        </View>
    );
};

export default FirstScreen;