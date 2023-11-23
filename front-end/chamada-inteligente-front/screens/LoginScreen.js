import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const LoginScreen = ({navigation}) => {
 const [cpf, setCpf] = useState('');
 const [senha, setSenha] = useState('');

 const handleCpfChange = (text) => {
    setCpf(text);
 };

 const handleSenhaChange = (text) => {
    setSenha(text);
 };

 const handleSubmit = () => {
   if(cpf === '1'){
      navigation.navigate("StudentHomeScreen")
   }else{
      navigation.navigate("TeacherHomeScreen")
   }
 };

 return (
    <View style={styles.container}>
      <Text style={styles.title}>Chamada Inteligente</Text>
      <TextInput
        style={styles.input}
        placeholder="CPF"
        keyboardType="numeric"
        onChangeText={handleCpfChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={handleSenhaChange}
      />
      <Button title="Entrar" onPress={handleSubmit} />
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },
 title: {
    fontSize: 24,
    marginBottom: 20,
 },
 input: {
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    marginBottom: 10,
    padding: 10,
 },
});

export default LoginScreen