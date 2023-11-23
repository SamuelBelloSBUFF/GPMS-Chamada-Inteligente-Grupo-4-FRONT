import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Card = ({ name, id, button, attendance, navigation }) => (
  <View style={styles.card}>
    <View style={styles.cardRow}>
      <View style={styles.cardHalf}>
        <Text style={styles.cardText}>{name}</Text>
      </View>
      <View style={styles.cardHalf}>
        {button && attendance ? (
          <Button title={button} color="red" onPress={() => {}}/>
        ) : button && !attendance ? (
          <Button title={button} color="green" onPress={() => {}}/>
        ) : (
          <Text style={styles.cardText}>{id}</Text>
        )}
      </View>
    </View>
  </View>
);

const App = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.header}>Professor Sobrenome</Text>
    <Text style={styles.subHeader}>MATRÍCULA</Text>
    <View style={styles.classInfo}>
      <Text style={styles.textClassInfo}>TCC00363 - GERÊNCIA DE PROJETOS</Text>
      <Text style={styles.textClassInfo}>MANUTENÇÃO DE SOFTWARE AI</Text>
      <Text style={styles.textClassInfo}>Horário programado: 18:00 - 20:00</Text>
    </View>
    <View style={styles.cardRow}>
      <View style={styles.cardHalf}>
        <Text style={styles.cardTextBold}>Nome</Text>
      </View>
      <View style={styles.cardHalf}>
          <Text style={styles.cardTextBold}>Matrícula</Text>
      </View>
    </View>
    <Card
      name="Aluno Fulano"
      id="4214523"
    />
    <Card
      name="02/10/2023"
      button="Marcar presença"
      attendance={false}
    />
    <Card
      name="09/10/2023"
      button="Anular Presença"
      attendance={true}
    />
    <Card
      name="16/10/2023"
      button="Anular Presença"
      attendance={true}
    />
    <Card
      name="23/10/2023"
      button="Anular Presença"
      attendance={true}
    />
    <Card
      name="30/10/2023"
      button="Marcar Presença"
      attendance={false}
    />
    <Card
      name="06/11/2023"
      button="Anular Presença"
      attendance={true}
    />
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
  classInfo: {
    marginBottom: 20,
    marginTop: 20,
  },
  textClassInfo: {
    fontSize: 16,
    color: 'white',
    textAlign: "center",
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  cardHalf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  cardTextBold: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
