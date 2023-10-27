import { useContext, useEffect, useState } from "react";
import { Button, Dimensions, ScrollView, Text, TextInput, View } from "react-native";
import Card from "../../components/Card";
import { AuthContext } from "../../contexts/auth/auth";
import { fetchUsers } from "../../api/users";
import { ActivityIndicator } from "react-native-web";

export default function Home(props) {

  const [name, setName] = useState('')

  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Dimensions.get('window' | 'screen').width|height
  const loadData = async () => {
    setLoading(true);
    try {
      const usersData = await fetchUsers()
      setUsers(usersData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    console.log('Mounting Home');
    loadData();
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

      <Text>USUARIO LOGADO {user.email}</Text>
      {loading ? <ActivityIndicator /> : 
      <>
        <Text>Lista de usuários</Text>
        <ScrollView>
          {users.map((user, index) => (
            <Text key={index}>{user.email}</Text>
          ))}
        </ScrollView>
      </>}
    </View>
  )
}