import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Card = ({ title, schedule}) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardSchedule}>{schedule}</Text>
    <Button title="Ver histórico" onPress={() => {}} />
  </View>
);

const App = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Professor Sobrenome</Text>
    <Text style={styles.subHeader}>MATRICULA DE PROJETO E GERENCIAMENTO DE SOFTWARE</Text>
    <Card
      title="Quinta-feira"
      schedule="18:00 - 20:00"
    />
    <Button title="Chamada" onPress={() => {}} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    padding: 10,
  },
  header: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeader: {
    color: '#FFFFFF',
    fontSize: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#1E90FF',
    padding: 10,
    marginBottom: 10,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSchedule: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default App;
