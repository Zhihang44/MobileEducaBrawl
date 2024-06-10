import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, TextInput, Text, View, Image, ScrollView, FlatList, TouchableOpacity, Button } from 'react-native';

// Home Screen Component
function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.carousel}>
        <Text style={styles.header}>Destaques</Text>
        <ScrollView horizontal pagingEnabled>
          <TouchableOpacity style={styles.carouselItem} onPress={() => navigation.navigate('DestaquesScreen')}>
            <Image source={require('./img/PequenoPrincipe.png')} style={styles.carouselImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.carouselItem} onPress={() => navigation.navigate('DestaquesScreen')}>
            <Image source={require('./img/CâmaraSecreta.png')} style={styles.carouselImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.carouselItem} onPress={() => navigation.navigate('DestaquesScreen')}>
            <Image source={require('./img/EntreSonhos.png')} style={styles.carouselImage} />
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Sobre a EducaBrawl</Text>
        <Text style={styles.paragraph}>
          A EducaBrawl é mais do que uma livraria online; é um portal para o mundo da imaginação e conhecimento para o público jovem. Nosso catálogo é cuidadosamente selecionado para encantar e inspirar leitores de todas as idades, com um foco especial em crianças e adolescentes. Estamos comprometidos em nutrir a paixão pela leitura e pelo aprendizado contínuo, oferecendo títulos que desafiam, entretêm e educam.
        </Text>
        <Text style={styles.paragraph}></Text>
        <Text style={styles.paragraph}>
          Nossa missão é criar uma experiência de leitura que seja ao mesmo tempo educativa e divertida, incentivando os jovens a explorar novos mundos através dos livros. Com atividades interativas e conteúdo envolvente, a EducaBrawl se destaca como uma plataforma que transforma a leitura em uma aventura emocionante e gratificante.
        </Text>
        <Text style={styles.paragraph}></Text>
        <Text style={styles.paragraph}>
          Junte-se a nós na jornada para despertar a curiosidade e o amor pelos livros, enquanto apoiamos o desenvolvimento intelectual e criativo da próxima geração de leitores.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Promoção Relâmpago da Livraria Letras & Saberes 📚</Text>
          <Text style={styles.item}>
            <Text style={styles.bold}>Segunda Literária:</Text> Compre 1, leve outro com 50% de desconto em biografias.
          </Text>
          <Text style={styles.item}>
            <Text style={styles.bold}>Quarta de Clássicos:</Text> 30% off em todos os clássicos literários.
          </Text>
          <Text style={styles.item}>
            <Text style={styles.bold}>Sexta Fantástica:</Text> Fantasia e ficção científica com 20% de desconto.
          </Text>
          <Text style={styles.item}>
            <Text style={styles.bold}>Fim de Semana Poético:</Text> Poesias com 25% de desconto.
          </Text>
          <Text style={styles.item}>
            <Text style={styles.bold}>Todo mês:</Text> um autor em destaque com 40% de desconto em suas obras.
          </Text>
          <Text style={styles.item}>
            <Text style={styles.bold}>Desconto Surpresa:</Text> A cada visita, um livro selecionado com 60% off!
          </Text>
        </View>
    </ScrollView>
  );
}

// Biblioteca Screen Component
function BibliotecaScreen({ navigation }) {
  const livrosKids = books.filter(book => ['1', '6', '7', '8'].includes(book.id));
  const livrosTeens = books.filter(book => ['2', '3', '4', '5'].includes(book.id));

  const renderBookItem = ({ item }) => (
    <TouchableOpacity style={styles.bookItem} onPress={() => navigation.navigate('Detalhes do Livro', { book: item })}>
      <Image source={item.image} style={styles.bookImage} />
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle}>{item.title}</Text>
        <Text>{item.author}</Text>
        <Text>{item.year}</Text>
        <Text>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Livros Teens</Text>
      <FlatList
        data={livrosTeens}
        keyExtractor={item => item.id}
        renderItem={renderBookItem}
      />

      <Text style={styles.header}>Livros Kids</Text>
      <FlatList
        data={livrosKids}
        keyExtractor={item => item.id}
        renderItem={renderBookItem}
      />
    </View>
  );
}

// Destaques Screen Component
function DestaquesScreen({ navigation }) {
  const destaques = books.filter(book => ['1', '4', '7'].includes(book.id));

  const renderBookItem = ({ item }) => (
    <TouchableOpacity style={styles.bookItem} onPress={() => navigation.navigate('Detalhes do Livro', { book: item })}>
      <Image source={item.image} style={styles.bookImage} />
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle}>{item.title}</Text>
        <Text>{item.author}</Text>
        <Text>{item.year}</Text>
        <Text>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Livros em Destaque</Text>
      <FlatList
        data={destaques}
        keyExtractor={item => item.id}
        renderItem={renderBookItem}
      />
    </View>
  );
}

// Book Details Screen Component
function BookDetailsScreen({ route, navigation }) {
  const { book } = route.params;

  return (
    <View style={styles.container}>
      <Image source={book.image} style={styles.detailImage} />
      <Text style={styles.bookTitle}>{book.title}</Text>
      <Text>{book.author}</Text>
      <Text>{book.year}</Text>
      <Text>{book.price}</Text>
      <Text style={styles.paragraph}>{book.description}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Alugar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Login Screen Component
const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <View style={styles.form}>
        <View style={styles.formGroup}>
          <Text>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira o email"
          />
        </View>
        <View style={styles.formGroup}>
          <Text>Senha:</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira a senha"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={[styles.button, styles.alunoButton]} onPress={() => navigation.navigate('Perfil do Aluno')}>
            <Text style={styles.buttonText}>Aluno</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.professorButton]} onPress={() => { /* lógica para professor */ }}>
            <Text style={styles.buttonText}>Professor</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

function StudentProfileScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Perfil do Aluno</Text>
      <View style={styles.row}>
        <View style={styles.infoBox}>
          <Image source={require('./img/Criança.jpg')} style={styles.image} />
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Nome: João Silva</Text>
          <Text style={styles.infoText}>Nome do Responsável: Maria Silva</Text>
          <Text style={styles.infoText}>Email do Responsável: maria@example.com</Text>
          <Text style={styles.infoText}>Email do Aluno: joao@example.com</Text>
          <Text style={styles.infoText}>Número do Responsável: (11) 98765-4321</Text>
          <Text style={styles.infoText}>Endereço: Rua ABC, 123</Text>
          <Text style={styles.infoText}>CEP: 12345-678</Text>
          <Text style={styles.infoText}>Série: 7º ano</Text>
          <Text style={styles.infoText}>Cursos que está fazendo: Matemática, Música</Text>
          <Text style={styles.infoText}>Idade: 13 anos</Text>
          <Button title="Editar" onPress={() => {}} color="#007bff" />
          <Button title="Logout" onPress={() => navigation.navigate('Home')} color="#dc3545" />
        </View>
      </View>
    </ScrollView>
  );
}

// Componente para o perfil do professor
const ProfessorProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Perfil do Professor</Text>
      <View style={styles.profileContainer}>
        <View style={styles.profileInfo}>
          <Image source={require('./img/Mozart.jpg')} style={styles.image} />
          <Text>Nome: Wolfgang Amadeus Mozart</Text>
          <Text>Endereço: Av. XYZ, 456</Text>
          <Text>CEP: 98765-432</Text>
          {/* Adicione mais informações conforme necessário */}
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={[styles.button, styles.editButton]}>
            <Text style={styles.buttonText}>Editar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};



const products = [
  { id: '1', image: require('./img/boné.png'), name: 'Boné', description: 'Boné com logo do brawl', price: 'R$ 20,00' },
  { id: '2', image: require('./img/camisa.png'), name: 'Camisa', description: 'Camisa com estampa do brawl', price: 'R$ 30,00' },
  { id: '3', image: require('./img/bermuda.png'), name: 'Bermuda', description: 'Bermuda', price: 'R$ 25,00' },
  { id: '4', image: require('./img/moletom.png'), name: 'Moletom', description: 'Moletom do spike', price: 'R$ 50,00' },
];
function VendasScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Produtos</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productDescription}>{item.description}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
              <Button title="Comprar" onPress={() => {}} />
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

// Drawer Navigator
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Tela Inicial" component={HomeScreen} />
      <Drawer.Screen name="Biblioteca" component={BibliotecaStack} />
      <Drawer.Screen name="Vendas" component={VendasScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
  );
}

function BibliotecaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BibliotecaScreen" component={BibliotecaScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Detalhes do Livro" component={BookDetailsScreen} />
    </Stack.Navigator>
  );
}

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MyDrawer} options={{ headerShown: false }} />
      <Stack.Screen name="DestaquesScreen" component={DestaquesScreen} options={{ headerShown: true, title: 'Destaques', headerBackTitle: 'Tela Inicial' }} />
      <Stack.Screen name="Detalhes do Livro" component={BookDetailsScreen} />
      <Stack.Screen name="Perfil do Aluno" component={StudentProfileScreen} options={{ headerShown: true, title: 'Perfil do Aluno' }} />
    </Stack.Navigator>
  );
}


// Main App Component
export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    form: {
      width: '80%',
    },
    formGroup: {
      marginBottom: 15,
    },
    input: {
      borderWidth: 1,
      borderColor: 'gray',
      padding: 10,
    },
    buttonGroup: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    alunoButton: {
      backgroundColor: 'blue',
    },
    professorButton: {
      backgroundColor: 'green',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    profileContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    profileInfo: {
      marginRight: 20,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
    },
  productItem: {
    flexDirection: 'row',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 14,
    marginBottom: 5,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileInfo: {
    marginLeft: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
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
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
  },
  section: {
    marginBottom: 20,
  },
  bookItem: {
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  bookImage: {
    width: 50,
    height: 75,
    marginRight: 10,
  },
  bookInfo: {
    justifyContent: 'center',
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailImage: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  item: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    width: '45%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

// Dummy Data
const books = [
  {
    id: '1',
    title: 'Contos de Fadas',
    author: 'Brothers Grimm',
    year: '1812',
    price: 'R$ 20,00',
    image: require('./img/ContosFadas.png'),
    description: 'Os Contos de Fadas dos Brothers Grimm são uma coleção de histórias clássicas que têm encantado gerações. Com personagens icônicos como Cinderela, Branca de Neve, e Rapunzel, estas histórias são cheias de magia, aventura, e lições de moral. Cada história é única em sua essência, apresentando lições de moral, aventuras emocionantes e finais felizes que cativam leitores de todas as idades. Contos de Fadas continua a ser uma fonte inesgotável de inspiração, ensinando-nos sobre coragem, amor, perseverança e a importância de acreditar nos nossos sonhos.'
  },
  {
    id: '2',
    title: 'O Sol é para Todos',
    author: 'Harper Lee',
    year: '1960',
    price: 'R$ 30,00',
    image: require('./img/OSol.png'),
    description: 'Este livro é um clássico da literatura norte-americana, que aborda temas como racismo, injustiça e moralidade. A história se passa na década de 1930, no sul dos Estados Unidos, e é narrada pela pequena Scout Finch. Ela relata a jornada de seu pai, Atticus Finch, um advogado que defende um homem negro acusado injustamente de estuprar uma mulher branca. O livro oferece uma poderosa reflexão sobre a natureza humana, a tolerância e a luta pela justiça.'
  },
  {
    id: '3',
    title: 'Harry Potter e a Pedra Filosofal',
    author: 'J.K. Rowling',
    year: '1997',
    price: 'R$ 25,00',
    image: require('./img/HPotterPedra.png'),
    description: 'Este é o primeiro livro da famosa série Harry Potter. Ele nos apresenta ao mundo mágico de Hogwarts e aos personagens inesquecíveis criados por J.K. Rowling. A história segue Harry Potter, um jovem bruxo que descobre sua verdadeira identidade no seu aniversário de onze anos. Ele é convidado a frequentar a Escola de Magia e Bruxaria de Hogwarts, onde enfrenta desafios emocionantes, faz amizades duradouras e descobre segredos sobre seu passado.'
  },
  {
    id: '4',
    title: 'Harry Potter e a Câmara Secreta',
    author: 'J.K. Rowling',
    year: '1998',
    price: 'R$ 30,00',
    image: require('./img/CâmaraSecreta.png'),
    description: 'Neste segundo livro da série Harry Potter, Harry retorna a Hogwarts para seu segundo ano letivo, onde descobre que a Câmara Secreta foi aberta, libertando um monstro que ameaça os alunos nascidos de trouxas. Junto com seus amigos Ron e Hermione, Harry investiga a origem da Câmara e enfrenta novos desafios enquanto tenta proteger a escola.'
  },
  {
    id: '5',
    title: 'Harry Potter e a Ordem da Fênix',
    author: 'J.K. Rowling',
    year: '2003',
    price: 'R$ 45,00',
    image: require('./img/OrdemFenix.png'),
    description: 'No quinto livro da série Harry Potter, Harry retorna a Hogwarts para seu quinto ano e se depara com uma série de desafios. Ele lidera um grupo secreto de estudantes chamado Armada de Dumbledore para ensinar Defesa Contra as Artes das Trevas, enquanto enfrenta a resistência do Ministério da Magia, que se recusa a acreditar na volta de Lord Voldemort. A história culmina em uma batalha épica entre o bem e o mal.'
  },
  {
    id: '6',
    title: 'O Pequeno Príncipe',
    author: 'Antoine de Saint-Exupéry',
    year: '1943',
    price: 'R$ 20,00',
    image: require('./img/PequenoPrincipe.png'),
    description: 'A história começa com um piloto perdido no deserto do Saara, onde ele encontra um pequeno príncipe que veio de um asteroide distante. O Pequeno Príncipe conta suas aventuras e encontros peculiares em sua jornada por diferentes planetas, cada um habitado por um personagem singular, como o Rei, o Vaidoso, o Bêbado e a Raposa. Ao longo do livro, são explorados temas profundos, como amizade, amor, solidão, e a importância de ver além das aparências. A história nos convida a refletir sobre a inocência da infância, a simplicidade da vida e os verdadeiros valores que muitas vezes são esquecidos na correria do mundo adulto.'
  },
  {
    id: '7',
    title: 'Entre Sonhos e Dragões',
    author: 'Adriana Carranca',
    year: '2023',
    price: 'R$ 35,00',
    image: require('./img/EntreSonhos.png'),
    description: 'Entre Sonhos e Dragões é uma obra da escritora Adriana Carranca que mergulha os leitores em uma aventura fantástica repleta de magia, amizade e superação. A história segue a jornada de um grupo de jovens protagonistas que descobrem a existência de um mundo paralelo habitado por seres mágicos, como dragões e fadas. Confrontados com desafios e perigos, os personagens precisam aprender a lidar com suas próprias habilidades especiais e a trabalhar em equipe para enfrentar as ameaças que surgem em seu caminho. Ao longo da narrativa, são explorados temas como amizade, coragem, autoconhecimento e a importância de acreditar nos próprios sonhos.'
  },
  {
    id: '8',
    title: 'Reinações de Narizinho',
    author: 'Monteiro Lobato',
    year: '1931',
    price: 'R$ 22,00',
    image: require('./img/Reinações.png'),
    description: 'Reinações de Narizinho é uma obra clássica da literatura infantil brasileira escrita por Monteiro Lobato. A história se passa no Sítio do Picapau Amarelo, onde a menina Narizinho vive diversas aventuras ao lado de sua boneca Emília, do Visconde de Sabugosa, do Marquês de Rabicó e outros personagens encantadores. O livro é uma coletânea de contos que mesclam fantasia e realidade, levando os leitores a viagens emocionantes por terras distantes e mundos imaginários. Cada capítulo apresenta uma nova aventura, seja enfrentando bruxas malvadas, explorando tesouros escondidos ou fazendo amizade com seres mágicos.'
  },
];
