import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card from './src/components/Card';
import Button from './src/components/Button';
import { useState } from 'react';
import InitialScreen from './src/screens/Initial';
import CounterContext, { CounterProvider } from './src/contexts/CounterContext';
import CounterScreen from './src/screens/Counters';

export default function App() {

  const [activeScreen, setActiveScreen] = useState('INITIAL')

  return (
    <CounterProvider>
    <View style={styles.container}>

      {activeScreen === 'INITIAL' && 
      <InitialScreen
        goTo={(praOnde) => setActiveScreen(praOnde)}
        navigate={setActiveScreen}
      />
      }

      {activeScreen === 'SECOND' &&
      <View
        // nao eh muito comum, mas é uma possibilidade
        // style={{
        //   display: activeScreen === 'SECOND' ? 'flex' : 'none'
        // }}
      >
        <Card
          title="Titulo 1"
          onPress={() => alert('Clicou no card 1')}
        />
        <Card 
          title="Titulo 2"
          icon="https://media.tenor.com/4EAKayO3n_cAAAAM/kitten-cat.gif"
          onPress={() => alert('Clicou no card 2')}
        />

        <Button
          title="Voltar"
          onPress={() => setActiveScreen('INITIAL')}
        />
      </View>
      }

      {activeScreen === 'THIRD' &&
      <View>
        <CounterScreen />
        <Button
          title="Voltar"
          onPress={() => setActiveScreen('INITIAL')}
        />
      </View>
      }

    </View>
    </CounterProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
