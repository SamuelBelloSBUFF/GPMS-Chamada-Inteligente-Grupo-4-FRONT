import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ title, schedule }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardSchedule}>{schedule}</Text>
  </View>
);

const App = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Professor Sobrenome</Text>
    <Text style={styles.subHeader}>MATRÍCULA</Text>
    <Card
      title="TCC00363 GERÊNCIA DE PROJETO E MANUTENÇÃO DE SOFTWARE A1"
      schedule="Quinta-feira Horário programado: 18:00 - 20:00"
    />
    <Card
      title="TCC00363 QUALIDADE E TESTE DE SOFTWARE A1"
      schedule="Quinta-feira Horário programado: 20:00 - 22:30"
    />
    <Card
      title="TCC00363 GERÊNCIA DE PROJETO E MANUTENÇÃO DE SOFTWARE A1"
      schedule="Quinta-feira Horário programado: 18:00 - 20:00"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00008B',
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
