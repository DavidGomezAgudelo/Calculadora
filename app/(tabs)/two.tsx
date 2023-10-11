import { StyleSheet, Text, View } from 'react-native';
import App from '../../components/result';
import { ScrollView } from 'react-native-gesture-handler';

export default function TabTwoScreen() {
  return (
    <ScrollView style={{
      backgroundColor:"white"
    }
    }>
      <View style={styles.container}>
      <Text style={styles.title}>EJEMPLO CALCULADORA DE LA VIDA</Text>
      <View style={styles.separator}/>
      <App />
      </View>
    </ScrollView>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor:'white'

  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
