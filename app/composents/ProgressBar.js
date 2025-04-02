import React, { useEffect, useRef } from 'react';
import { View, Image, Animated, StyleSheet, Text } from 'react-native';
import { styles } from '../points';

const ProgressBar = ({ progressValue, logos }) => {
    const progress = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(progress, {
            toValue: progressValue, 
            duration: 500,
            useNativeDriver: false,
        }).start();
    }, [progressValue]);

    const progressWidth = progress.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%'],
    });

    return (
        <View style={styles.level}>
        <View style={styles.progressContainer}>
            <Animated.View style={[styles.progressBar, { width: progressWidth }]} />
            </View>
            <View style={styles.logoContainer}>
                {logos.length > 0 ? (
                    logos.map((logo, index) => {
                        console.log('Logo chargé:', logo);
                        return <Image key={index} source={logo} style={styles.logo} />;
                    })
                ) : (
                    <Text style={{ color: 'red' }}>Aucun logo disponible</Text>
                )}
                
            </View>
        </View>
    );
};

export default ProgressBar;
