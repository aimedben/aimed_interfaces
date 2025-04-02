import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles'; 
import { router } from 'expo-router';

export default function Faq() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity 
      onPress={() => router.back()}
      style={styles.header} // Style pour positionner l'icône
    >
      <Image 
        source={require('./assets/images/back-icon.png')} 
        style={[styles.backIcon]}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>FAQ</Text>

    
  </View>

            {/* Carré gris au centre */}
            <View style={styles.tab} >
                <Text style={styles.tabhead}>
                Looking for a Blood Donor? Here’s
                       How It Works!
                </Text>
                <Text style={styles.tabText}>
                If you need blood, you can post an announcement by selecting your blood group, location, and phone number. Once you tap Send Announcement, all donors will receive your request.
                Donors can filter announcements based on their blood group or location. If a donor sees your request, they can respond after confirming that they meet the health conditions. If a donor is not in good health, they won’t be able to donate blood.
                You can check your request history in the History section.
                Your donation can save lives, and your generosity makes a real difference. Thank you for being a hero!
                If you wish to save lives by donating blood, register as a donor in the application</Text>
            </View>
        </View>
    );
}
