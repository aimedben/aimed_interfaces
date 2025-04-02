import React, { useRef } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import ViewShot from 'react-native-view-shot';
import { shareAsync } from 'expo-sharing';
import ProgressBar from './composents/ProgressBar';
import { styles } from './points';

const Rewards2: React.FC = () => {
    const router = useRouter();
    const viewShotRef = useRef<ViewShot | null>(null);

const handleShare = async () => {
    try {
        const uri = await viewShotRef.current?.capture; // Stocke `current` dans une variable

        if (!uri) {
            throw new Error("Failed to capture image");
        }

        await shareAsync(uri, {
            mimeType: "image/jpeg",
            dialogTitle: "Share this image",
            UTI: "public.jpeg",
        });
    } catch (error) {
        console.error('Erreur lors du partage :', error);
    }
};


    
    
    
    return (
        <ViewShot 
            ref={viewShotRef} 
            options={{ format: 'jpg', quality: 1 }}
            style={[styles.container, { backgroundColor: '#EDE7F9' }]}
        >
            {/* En-tête */}
            <View style={styles.head}>
                <Text style={styles.title}>Configuration!!</Text>
            </View>

            {/* Vies utilisées */}
            <View style={styles.lifes}>
                You have saved 7 lives so far
                <Image 
                    source={require('./assets/images/congratulation.png')} 
                    style={styles.image} 
                />
            </View>

            {/* Points de récompense */}
            <View style={styles.sect}>
                <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>
                    Rewards points: <Text style={{ color: 'black' }}>2100</Text>
                </Text>
                <Image 
                    source={require('./assets/images/badge.png')} 
                    style={[styles.badgeIcon, { marginHorizontal: 8, left: 15, top: -6 }]} 
                />
            </View>

            {/* Barre de progression */}
            <ProgressBar
                progressValue={70}
                logos={[
                    require('./assets/images/bronz.png'),
                    require('./assets/images/argent.png'),
                    require('./assets/images/dor.png'),
                ]}
            />

            {/* Description */}
            <View style={styles.discr}>
                <Text style={styles.descrtxt}>
                    Share your accomplishment on social media and inspire your friends by showing how you're making a life-saving impact.
                </Text>
            </View>

            {/* Boutons */}
            <View style={styles.btn}>
                <TouchableOpacity 
                    style={[styles.button, { backgroundColor: 'white', borderColor: 'red', borderWidth: 1 }]}
                    onPress={() => router.back()}
                >
                    <Text style={[styles.buttonText, { color: 'red' }]}>No, Later</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button} 
                    onPress={handleShare}
                >
                    <Text style={styles.buttonText}>Share</Text>
                </TouchableOpacity>
            </View>
        </ViewShot>
    );
};

export default Rewards2;