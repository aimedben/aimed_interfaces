import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { router } from 'expo-router';
import notifications from './notif.json'; // Assurez-vous que le chemin est correct
import { styles } from './points'; // Vérifiez que les styles sont compatibles

export default function Notif() {
  const [notificationList, setNotificationList] = useState(notifications);

  // Marquer comme lu
  const markAsRead = (id) => {
    setNotificationList(prev =>
      prev.map(item =>
        item.id === id ? { ...item, isRead: true } : item
      )
    );
  };

  // Supprimer une notification
  const deleteNotification = (id) => {
    setNotificationList(prev => prev.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image 
            source={require('./assets/images/back-icon.png')} 
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>NOTIFICATIONS</Text>
      </View>



      {/* Liste des notifications */}
      <FlatList
        data={notificationList}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.notificationItem, item.isRead && styles.readNotification]}
            onPress={() => {markAsRead(item.id);if (item.deepLink) router.push(item.deepLink);}}
          >
            <Image source={require('./assets/images/blood-donation.png')} style={styles.notificationIcon}
            />
            
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>{item.title}</Text>
              <Text style={styles.notificationMessage}>{item.message}</Text>
              <Text style={styles.notificationTime}>
                {new Date(item.timestamp).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'short',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => deleteNotification(item.id)}
              style={styles.deleteButton}
            >
              <Image source={require('./assets/images/supprimer.png')} style={styles.icon}
            />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Aucune notification</Text>
          </View>
        }
      />
    </View>
  );
}