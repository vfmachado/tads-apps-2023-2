import { useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Home(props) {

  const [name, setName] = useState('')

  useEffect(() => {
    console.log('Mounting Home');
    return () => {
      console.log('Unmounting Home');
    }
  }, []);

  const goToScreen2 = () => {
    console.log({ navigation: props.navigation })
    props.navigation.navigate('Screen2', { nameT2: name })
  }

  return (
    <View>
      <Text>Home</Text> 
      <Text>{name.length == 0 ? 'Digite seu nome' : name}</Text>
      <TextInput onChangeText={setName}/>
      <Button onPress={goToScreen2}
      title="TELA 2"></Button>

    </View>
  )
}