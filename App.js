import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

// Home Screen Component
function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.carousel}>
        <Text style={styles.header}>Destaques</Text>
        <ScrollView horizontal pagingEnabled>
          <View style={styles.carouselItem}>
            <Image source={require('./img/PequenoPrincipe.png')} style={styles.carouselImage} />
          </View>
          <View style={styles.carouselItem}>
            <Image source={require('./img/CâmaraSecreta.png')} style={styles.carouselImage} />
          </View>
          <View style={styles.carouselItem}>
            <Image source={require('./img/EntreSonhos.png')} style={styles.carouselImage} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Sobre a EducaBrawl</Text>
        <Text style={styles.paragraph}>
          A EducaBrawl é mais do que uma livraria online; é um portal para o mundo da imaginação e conhecimento para o público jovem...
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Eventos</Text>
        <Text style={styles.paragraph}>
          Promoção Relâmpago da Livraria Letras & Saberes 📚
          Segunda Literária: Compre 1, leve outro com 50% de desconto em biografias...
        </Text>
      </View>
    </ScrollView>
  );
}

// About Screen Component
function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sobre a EducaBrawl</Text>
      <Text style={styles.paragraph}>
        A EducaBrawl é mais do que uma livraria online; é um portal para o mundo da imaginação e conhecimento para o público jovem...
      </Text>
    </View>
  );
}

// Biblioteca Screen Component
function BibliotecaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Biblioteca</Text>
      <Button title="Livros Kids" onPress={() => {}} />
      <Button title="Livros Teens" onPress={() => {}} />
    </View>
  );
}

// Vendas Screen Component
function VendasScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Vendas</Text>
    </View>
  );
}

// Login Screen Component
function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
    </View>
  );
}

// Drawer Navigator
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Sobre" component={AboutScreen} />
      <Drawer.Screen name="Biblioteca" component={BibliotecaScreen} />
      <Drawer.Screen name="Vendas" component={VendasScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
  );
}

// Main App Component
export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  carousel: {
    marginBottom: 20,
  },
  carouselItem: {
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  carouselImage: {
    width: 220,
    height: 180,
    borderRadius: 10,
  },
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
  },
});
