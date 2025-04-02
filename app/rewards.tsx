import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from './styles'; 
import ProgressBar  from './composents/ProgressBar'

export default function Rewards() {
    const router = useRouter();
    

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Image source={require('./assets/images/back-icon.png')} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.title}>Rewards Points</Text>
            </View>


            {/* Rewards Section */}
            <View style={styles.rewardsSection}>
                <Text style={styles.rewardsTitle}>Rewards:</Text>
                <Text style={styles.points}>2000 points</Text>
                <View style={styles.infoRow}>
                    <Image source={require('./assets/images/star.png')} style={[styles.cardImage,{left: '75%'}]} />
                    <Text style={styles.infoText}>
                        Every blood donation earns you 100 points because every drop counts!
                    </Text>
                </View>
            </View>

            {/* Badges Section */}
            <View style={styles.badgesSection}>
                <Text style={styles.badgeTitle}>Badge:</Text>

                <View style={[styles.badgeCard,{backgroundColor: '#CD7F32'}]}>
                    <Image source={require('./assets/images/bronz.png')} style={styles.badgeIcon} />
                    <View>
                        <Text style={styles.badgeName}>Donator</Text>
                        <Text style={styles.badgeDescription}>You have to save 3 lives to get this badge</Text>
                    </View>
                </View>

                <View style={[styles.badgeCard,{backgroundColor: '#71706E'}]}>
                    <Image source={require('./assets/images/argent.png')} style={styles.badgeIcon} />
                    <View>
                        <Text style={styles.badgeName}>Life Savior</Text>
                        <Text style={styles.badgeDescription}>You have to save 6 lives to get this badge</Text>
                    </View>
                </View>

                <View style={[styles.badgeCard,{backgroundColor: 'gold'}]}>
                    <Image source={require('./assets/images/dor.png')} style={styles.badgeIcon} />
                    <View>
                        <Text style={styles.badgeName}>Super Hero</Text>
                        <Text style={styles.badgeDescription}>You have to save 10 lives to get this badge</Text>
                    </View>
                </View>
            </View>

            <View>
    <ProgressBar
        progressValue={70}
        logos={[
            require('./assets/images/bronz.png'),
            require('./assets/images/argent.png'),
            require('./assets/images/dor.png'),
        ]}
    />
</View>

            
        </View>
    );
}


