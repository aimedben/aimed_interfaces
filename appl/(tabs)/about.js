import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Pour les icônes
import { useNavigation } from '@react-navigation/native';

const AboutScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Section About */}
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('AboutDetails')}>
        <Icon name="info" size={24} color="#000" />
        <Text style={styles.text}>About</Text>
      </TouchableOpacity>

      {/* Section Report Profile */}
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ReportProfile')}>
        <Icon name="report-problem" size={24} color="#000" />
        <Text style={styles.text}>Report Profile</Text>
      </TouchableOpacity>

      {/* Section Stats */}
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Stats')}>
        <Icon name="bar-chart" size={24} color="#000" />
        <Text style={styles.text}>Stats</Text>
      </TouchableOpacity>

      {/* Section FAQ */}
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FAQ')}>
        <Icon name="help" size={24} color="#000" />
        <Text style={styles.text}>FAQ</Text>
      </TouchableOpacity>

      {/* Section CONTACT */}
      <View style={styles.contactSection}>
        <View style={styles.contactHeaderContainer}>
          <Icon name="contact-mail" size={24} color="#000" />
          <Text style={styles.contactHeader}>CONTACT</Text>
        </View>
        <Text style={styles.contactSubHeader}>Contact Us Informations</Text>
      </View>

      {/* Bouton HOME */}
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('home')}>
        <Text style={styles.buttonText}>HOME</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    
    elevation: 3,
  },
  text: {
    marginLeft: 15,
    fontSize: 16,
    color: '#000',
  },
  contactSection: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    
    elevation: 3,
  },
  contactHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
  },
  contactSubHeader: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AboutScreen;