import React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './index_styles';



const HomeScreen = () => {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <View style={styles.centerContent}>
                <Text style={styles.title}>SaveLife</Text>
                <Button title="Go to Index" onPress={() => navigation.navigate('index')} />
            </View>
            <View style={styles.waveContainer}>
                <View style={styles.wave}></View>
                <View style={styles.waveLight}></View>
            </View>
        </View>
    );
};

export default HomeScreen;


  