import { Text, SafeAreaView, StyleSheet, View, ScrollView,} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Kitkat from './components/kitkat';
import Snickers from './components/snickers';
import Lacta from './components/lacta';
import Botaoo from './components/botaoo';

export default function App() {
  return (
    <View style={styles.container}>
    <ScrollView>
    
      <Card style={styles.card}>
      <Text style={styles.paragraph}> Melhores Doces</Text>
        <View style={styles.bloco}>
          <Kitkat />
          <Snickers />
          <Lacta />
          <Botaoo />
        </View>
         <Text style={styles.aluno}> Pedro Rosa 3ºC </Text>
      </Card>
      
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    margin: -10,
  },
  paragraph: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#F7D6E0',
    backgroundColor: '#EF476F',
    padding: 20,
  },


  card: {
    backgroundColor: '#F7D6E0',
    textAlign: 'center',
    height: 800,
  },

  bloco: {
    backgroundColor: '#F7D6E0',
    height: '80%',
    paddingTop: 20,
    borderRadius: 25,
  },

  aluno: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#EF476F',
    
  },
});
