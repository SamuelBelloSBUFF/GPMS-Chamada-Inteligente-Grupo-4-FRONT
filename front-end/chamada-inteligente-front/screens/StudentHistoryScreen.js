import React from 'react';
import { View, Text, Button } from 'react-native';

const StudentHistoryScreen = () => {
  const classes = [
    { code: 'TCC0033', name: 'QUALIDADE E TESTE DE SOFTWARE', day: 'Thursday', time: '20:00 - 22:00', performance: '70%', attendance: '100%' },
    // Add more classes here
  ];

  return (
    <View style={{ flex: 1, backgroundColor: 'gray', }}>
      <Text style={{ color: 'white' }}>Fulano Sobrenome</Text>
      <Text style={{ color: 'white' }}>MATRÍCULA</Text>

      {classes.map((classItem, index) => (
        <View key={index} style={{ backgroundColor: 'gray', margin: 10, padding: 10 }}>
          <Text style={{ color: 'white' }}>{classItem.code}</Text>
          <Text style={{ color: 'white' }}>{classItem.name}</Text>
          <Text style={{ color: 'white' }}>{classItem.day}</Text>
          <Text style={{ color: 'white' }}>Horário programado: {classItem.time}</Text>
          <Text style={{ color: 'white' }}>Rendimento: {classItem.performance}%</Text>
          <Text style={{ color: 'white' }}>Frequência: {classItem.attendance}%</Text>
        </View>
      ))}

      <Button title="Intelligent Calling" onPress={() => console.log('Intelligent Calling')} />

      <Text style={{ color: 'white', position: 'absolute', bottom: 0 }}>© 2023 Todos os direitos reservados</Text>
    </View>
  );
};

export default StudentHistoryScreen;
