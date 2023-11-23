import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const StudentHomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Fulano Sobrenome</Text>
        <Text style={styles.subtitle}>MATRÍCULA</Text>
        <Text style={styles.subtitle}>CURSO</Text>
      </View>
      <Button title="TURMAS" onPress={() => {navigation.navigate("StudentClassroomsScreen")}} />
      <Button title="HISTÓRICO" onPress={() => {navigation.navigate("StudentHistoryScreen")}} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Aulas do dia</Text>
        <Text style={styles.classInfo}>TCC00363 - GERÊNCIA DE PROJETOS</Text>
        <Text style={styles.classInfo}>MANUTENÇÃO DE SOFTWARE AI</Text>
        <Text style={styles.classInfo}>Horário programado: 18:00 - 20:00</Text>
        <Button title="Marcar presença" onPress={() => {navigation.navigate("StudentClassAttendanceScreen")}} />
      </View>
      <Text style={styles.footer}>© TODOS OS DIREITOS RESERVADOS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'gray',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
  },
  section: {
    marginTop: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',StudentHomeScreen
  },
  classInfo: {
    fontSize: 16,
    color: 'white',
  },
  footer: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
});

export default StudentHomeScreen;
