import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MyStack } from './src/MyStack';
import Login from './src/screens/Login';
import { useContext, useState } from 'react';
import { AuthContext, AuthProvider } from './src/contexts/auth/auth';

export function AppAuth() {

  const { isLogged } = useContext(AuthContext);

  return (
    <>
      { isLogged ? 
        <MyStack /> : 
        <Login />
      }
    </>
  );
}

export default function App() {

  return (
     <AuthProvider>
        <AppAuth /> 
     </AuthProvider>
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

