import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Titre à gauche, icône à droite
    alignItems: 'center', // Alignement vertical
    paddingHorizontal: 16, // Espacement latéral
    paddingVertical: 12,
    backgroundColor: '#FF3B30',
    height: 150,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerText: {
    flex: 1,
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center', 
  },
  
  
  menu: {
    height: 550,
    backgroundColor: 'red',
    top: 60,
    margin: 20,
    borderRadius: 40,
    paddingVertical: 15,
    alignItems: 'center',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  card: {
    flexBasis: '40%', // Chaque carte prend environ la moitié de l'espace
    width: '40%',
    backgroundColor: '#F0F0F0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
    marginTop: 20,
  },
  cardImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  bottomNav: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#EAEAEA',
    marginBottom: 15,
    bottom: 0,
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navButton: {
    padding: 10,
    borderRadius: 20,
  },
  activeNavButton: {
    backgroundColor: '#D61C4E',
    paddingHorizontal: 20,
  },
  activeNavText: {
    color: 'white',
    fontWeight: 'bold',
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  icon: {
    position: 'absolute',
    width: 30,
    height: 30,
    right: 10,
    marginLeft: 20,
  },
  tab: {
    display: 'flex',
    backgroundColor: '#D9D9D9',  
    top: 100,
    padding: 20,
    margin: 25,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, 
},
tabhead: {
    color: 'black',
    fontWeight: 'bold',  
    fontSize: 26, 
    marginBottom: 10,
},
tabText: {
    color: '#333',  
    fontSize: 14, 
},

backIcon: {
  backgroundColor: '#eee',
    width: 25,
    height: 25,
    left: 10,
    marginLeft: 5,
},






head: {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 15,
  paddingTop: 40,
},
title: {
  flex: 1, // Permet au texte de s'étendre et de se centrer
  textAlign: 'center',
  fontSize: 28,
  fontWeight: 'bold',
  color: 'red',
  margin: 5, // Compensation pour l'icône de retour (si existante)
},

rewardsSection: {
  backgroundColor: '#e74c3c',
  padding: 20,
  borderBottomLeftRadius: 15,
  borderBottomRightRadius: 15,
},
rewardsTitle: {
  fontSize: 30,
  fontWeight: 'bold',
  color: '#fff',
  marginBottom: 10,
},
points: {
  left: 50,
  fontSize: 25,
  fontWeight: 'bold',
  color: '#fff',
},
infoRow: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 5,
},

infoText: {
  maxWidth: 200,
  color: '#fff',
  fontSize: 12,
  fontWeight: 'bold',
  right: -10,
},
badgesSection: {
  padding: 20,
  margin: 20,
},
badgeTitle: {
  left: 50,
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 20,
},
badgeCard: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderColor: '#ddd',
  borderWidth: 1,
  padding: 15,
  borderRadius: 10,
  marginBottom: 15,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 3,
  alignSelf: 'stretch', // Permet d'occuper toute la largeur disponible
},
badgeIcon: {
  width: 50,
  height: 50,
  marginRight: 10,
},
badgeName: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#E9D4FF',//red
},
badgeDescription: {
  fontSize: 12,
  color: '#fff',
},
  


lifes: {
  position: 'absolute',
  alignSelf: 'center',
  fontFamily: 'sans-serif',
  fontSize: 24,
  fontWeight: '800',
  color: 'black',
  top: 120,
},

image: {
  width: 150,
  height: 150,
  alignSelf: 'center',
  marginTop: 40,
},

sect: {
  display: 'flex',
  flexDirection: 'row',
  paddingVertical: 8,
  paddingTop: 20,
  paddingHorizontal: 30,
  width: 360,
  top: 300,
  alignSelf: 'center',
  borderRadius: 10,
  borderColor: '#555',
  borderWidth: 1,
  shadowColor: '#000',
  shadowOffset: { width: 8, height: 10 },
  shadowOpacity: 0.1,
  shadowRadius: 10,
},
discr: {
  position: 'absolute',
  alignItems: 'center',
  padding: 30,
  bottom: 100,

},

descrtxt: {
  textAlign: 'center', // Centre le texte horizontalement
  fontSize: 24, // Taille du texte
  fontWeight: 'bold',
  color: '#333', // Couleur du texte
  marginHorizontal: 20, // Espacement sur les côtés
  marginBottom: 20, // Espacement en bas avant les boutons
  lineHeight: 22, // Améliore la lisibilité
},



btn: {
  position: 'absolute',
  bottom: 5, // Distance depuis le bas
  left: 0, 
  right: 0, 
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  paddingVertical: 40,
},
button: {
  backgroundColor: 'red',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 15,
  width: 130,
  height: 50,
},
buttonText: {
  color: 'white',
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center', // Centre horizontalement
  textAlignVertical: 'center', // Centre verticalement (Android uniquement)
  flex: 1, // Permet au texte de prendre toute la hauteur du bouton
},
level: {
  top: '36%',
  height: 150, // Augmenté pour bien inclure les logos
  alignItems: 'center', // Centre les éléments
  justifyContent: 'center',
  paddingVertical: 10, // Ajoute de l’espace autour
},

progressContainer: {
  width: '80%',
  height: 20,
  backgroundColor: '#ddd',
  borderRadius: 10,
  overflow: 'hidden',
  marginBottom: 10, // Moins d’espace pour rapprocher la barre et les logos
},

progressBar: {
  height: '100%',
  backgroundColor: '#4caf50',
},

logoContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between', // Centrage horizontal
  alignItems: 'center', 
  width: '80%',
  marginTop: 10, // Ajuste l’espace après la barre
},

logo: {
  width: 60, // Taille fixe pour éviter les déformations
  height: 60,
  resizeMode: 'contain',
  marginHorizontal: 5, // Espacement entre les logos
},




notificationItem: {
  top: 50,
  flexDirection: 'row',
  padding: 15,
  marginHorizontal: 20,
  marginBottom: 10,
  backgroundColor: '#fff',
  borderRadius: 15,
  alignItems: 'center',
},
readNotification: {
  opacity: 0.3,
},
notificationIcon: {
  width: 50,
  height: 50,
  marginRight: 15,
},
notificationContent: {
  flex: 1,
},
notificationTitle: {
  fontWeight: 'bold',
  marginBottom: 5,
},
notificationMessage: {
  color: '#444',
  marginBottom: 5,
},
notificationTime: {
  color: '#666',
  fontSize: 12,
},
deleteButton: {
  width: 20,
  height: 20,
  padding: 5,
},
emptyContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 50,
},
emptyText: {
  fontSize: 26,
  color: '#555',
}

});
