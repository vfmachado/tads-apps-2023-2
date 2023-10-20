
import { useContext, useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-web";
import { AuthContext } from "../../contexts/auth/auth";

export default function Login(props) {

    const { signIn } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log('Mounting Login');
        return () => {
            console.log('Unmounting Login');
        }
    }, []);

    const fazLogin = () => {
        console.log('Fazendo login com email: ' + email + ' e senha: ' + password);
        signIn(email);
    };

    return (
        <View style={styles.container}>
            <Text> Tela de Login</Text>
            <Text>Informe seu email</Text>
            <TextInput value={email} onChangeText={setEmail} />
            <Text>Informe sua senha</Text>
            <TextInput value={password} onChangeText={setPassword} />

            <Button title="Login" 
                onPress={() => {
                    fazLogin();
                }}
            />
            
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
  });