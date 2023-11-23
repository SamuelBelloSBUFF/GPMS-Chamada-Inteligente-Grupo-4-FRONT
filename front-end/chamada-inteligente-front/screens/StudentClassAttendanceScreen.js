import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import * as Location from 'expo-location';

import Toast from 'react-native-root-toast';
 
const handleAttendance = async () => {
  let location = await Location.getCurrentPositionAsync({});
  console.log(location)
  let toast = Toast.show('Presença Marcada', {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    backgroundColor: 'green',
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    onShow: () => {
        // calls on toast\`s appear animation start
    },
    onShown: () => {
        // calls on toast\`s appear animation end.
    },
    onHide: () => {
        // calls on toast\`s hide animation start.
    },
    onHidden: () => {
        // calls on toast\`s hide animation end.
    }
});

  
};

const Card = ({ date, name, onPress }) => (
  <View style={styles.card}>
    <Text style={styles.cardDate}>{date}</Text>
    <Text style={styles.cardName}>{name}</Text>
    <Button title="Marcar presença" onPress={handleAttendance} />
  </View>
);

const App = () => (
  <View style={styles.container}>
    <Text style={styles.header}>TCC00363 GERÊNCIA DE SOFTWARE E MANUTENÇÃO INTELIGENTE</Text>
    <Card
      date="Data"
      name="Nome"
      onPress={() => {}}
    />
    <Text style={styles.footer}>© TODOS OS DIREITOS Reservados</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  header: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#1E90FF',
    textAlign: 'center',
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
  },
  cardDate: {
    color: '#000000',
    fontSize: 18,
  },
  cardName: {
    color: '#1E90FF',
    fontSize: 18,
  },
  footer: {
    color: '#000000',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default App;
