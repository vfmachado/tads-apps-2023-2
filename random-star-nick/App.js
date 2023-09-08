import 'react-native-gesture-handler';

import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';

// AS TELAS NO NATIVO SAO CONHECIDAS COMO ACTIVITIES
export default function App() {

  const [name, setName] = useState('Vinicius');
  const [btEnabled, setBtEnabled] = useState(true);

  const endpoint = (id) => `https://swapi.dev/api/people/${id}`

  const fnCarregaNome = async (evento) => {
    console.log("CLICOU NO BOTAO");
    //console.log(evento);

    setBtEnabled(false);

    let numero = Math.floor(Math.random() * 82 + 1);
    
    const response = await axios.get(endpoint(numero));
    const { name } = response.data;


    setName(name);

    setBtEnabled(true);
  }

  return (
    <View style={styles.container}>
      <Text>TADS APPS</Text>
      <Text>Prof Vinicius Machado!</Text>

      <Text style={{margin: 10, fontSize: 20}}>ALUNO: {name}</Text>
      <View style={styles.buttonContainer}>
        {btEnabled ? 
        <Button style={styles.button} title='CLICK ME' disabled={!btEnabled} onPress={fnCarregaNome}/>
        :
        <ActivityIndicator />
        }
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '90%',
    height: '50px',
    borderWidth: '4px',
    borderColor: 'red',
  },
  button: {
    width: '100%',
    minHeight: '100%',
  }
});
