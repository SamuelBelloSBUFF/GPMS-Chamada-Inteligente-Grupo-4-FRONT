import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import * as Location from 'expo-location';

import Toast from 'react-native-root-toast';

const handleAttendance = async () => {
  let location = await Location.getCurrentPositionAsync({});
  console.log(location)
  let toast = Toast.show('Chamada Iniciada', {
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
}
 
const TeacherHomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Fulano Sobrenome</Text>
        <Text style={styles.subtitle}>MATRÍCULA</Text>
        <Text style={styles.subtitle}>Professor</Text>
      </View>
      <Button title="TURMAS" onPress={() => {navigation.navigate("TeacherClassroomsScreen")}} />
      <Button title="AGENDAR" onPress={() => {navigation.navigate("TeacherScheduleAttendanceScreen")}} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Aulas do dia</Text>
        <Text style={styles.classInfo}>TCC00363 - GERÊNCIA DE PROJETOS</Text>
        <Text style={styles.classInfo}>MANUTENÇÃO DE SOFTWARE AI</Text>
        <Text style={styles.classInfo}>Horário programado: 18:00 - 20:00</Text>
        <Button title="Iniciar chamada" onPress={() => handleAttendance()} />
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
    fontWeight: 'bold',TeacherHomeScreen
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

export default TeacherHomeScreen;
