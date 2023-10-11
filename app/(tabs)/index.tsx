import { StyleSheet, Text, View } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paradigma Reactivo</Text>
      <View style={styles.separator} />
      <Text>Integrantes: David Gomez Agudelo y Santiago Trespalacios Bolivar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"white",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    
    backgroundColor:"white",
  },
  separator: {
    marginVertical: 30,
    height: 2,
    width: '80%',
  },
});
