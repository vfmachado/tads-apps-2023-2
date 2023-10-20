import { useContext, useEffect, useState } from "react";
import { Button, Dimensions, ScrollView, Text, TextInput, View } from "react-native";
import Card from "../../components/Card";
import { AuthContext } from "../../contexts/auth/auth";

export default function Home(props) {

  const [name, setName] = useState('')

  const { user } = useContext(AuthContext);

  // Dimensions.get('window' | 'screen').width|height

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
    <View style={{
      padding: 20,
    }}>
      
      <Text>Benefícios</Text>
      <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
        flexDirection: 'row',

        // justifyContent: 'space-between',

      }}>
        <Card bgColor="orange"></Card>
        <Card bgColor="salmon"></Card>
        <Card bgColor="pink"></Card>
        <Card></Card>
      </ScrollView>

      <Text>USUARIO {user.email}</Text>
      
    </View>
  )
}