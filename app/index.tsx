import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { Link, router } from 'expo-router'; 
import { styles } from './styles'; 

export default function About() {
  const cards = [
    { id: 1, title: 'Report', image: require('./assets/images/report.png'), screen: '/report' },
    { id: 2, title: 'Profile', image: require('./assets/images/avatar.png'), screen: '/profile' },
    { id: 3, title: 'Stats', image: require('./assets/images/stats.png'), screen: '/stats' },
    { id: 4, title: 'FAQ', image: require('./assets/images/faq.png'), screen: '/faq' },
    { id: 5, title: 'Contact Us', image: require('./assets/images/contact.png'), screen: '/rewards' },
    { id: 6, title: 'Informations', image: require('./assets/images/inform.png'), screen: '/rewards2' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>About</Text>

        <TouchableOpacity onPress={() => router.push('./notification')}
          style={styles.header}
        >
          <Image source={require('./assets/images/cloche.png')} style={styles.icon}/>
        </TouchableOpacity>
      </View>


      <View style={styles.menu}>
        <ScrollView contentContainerStyle={styles.cardsContainer}>
          {cards.map((card) => (
            <Link 
              key={card.id} 
              href={card.screen} 
              asChild
            >
              <TouchableOpacity style={styles.card}>
                <Image source={card.image} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{card.title}</Text>
              </TouchableOpacity>
            </Link>
          ))}
        </ScrollView>
      </View>

    </View>
  );
}