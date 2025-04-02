import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import IndexScreen from './index';
import HomeScreen from './home';
import AboutScreen from '../about';
import firestore from '@react-native-firebase/firestore'; // Importez Firestore

// Initialiser Firebase
import { getApps, initializeApp, getApp } from '@react-native-firebase/app';
import firebaseConfig from '../../../app/firebaseConfig';

if (getApps().length === 0) {
  try {
    initializeApp(firebaseConfig);
    console.log('Firebase initialisé avec succès !', getApp().options);
  } catch (error) {
    console.error('Erreur lors de l\'initialisation de Firebase:', error);
  }
}

type RootStackParamList = {
  Index: undefined;
  Home: undefined;
  About: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  // Test Firestore
  useEffect(() => {
    const testFirestore = async () => {
      try {
        console.log('Tentative d\'ajout d\'un document à Firestore...');
        
        // Ajoutez un document de test à une collection "testCollection"
        const docRef = await firestore().collection('testCollection').add({
          message: 'Ceci est un test de Firestore',
          timestamp: firestore.FieldValue.serverTimestamp(),
        });

        console.log('Document ajouté avec succès à Firestore ! ID du document :', docRef.id);
      } catch (error) {
        console.error('Erreur lors de l\'ajout du document à Firestore:', error);
      }
    };

    testFirestore();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen 
          name="Index" 
          component={IndexScreen} 
          options={{ title: 'Welcome to Index' }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home Screen' }}
        />
        <Stack.Screen 
          name="About" 
          component={AboutScreen} 
          options={{ title: 'About Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}