import { useEffect } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import Button from "./Button";

const NO_ICON = require('../../assets/icon.png')

function Title(props) {
  return (
    <Text style={{
      fontSize: 20,
      fontWeight: 'bold',
    }}>
      {props.children}
    </Text>
  )
}


// tudo em react recebe props por parametro
export default function Card(props) {

  // componente foi montado
  useEffect(() => {
    console.log({
      msg: 'Card montado',
      props
    })
  }, [])

  // return JSX (JavaScript XML)
  return (
    <View style={{
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 10,
      padding: 10,
      margin: 10,
    }}>
      <Title>{props.title}</Title>
      <Text>DESCRIPTION</Text>
      <Image
        style={{
          width: 100,
          height: 100,
        }}
        source={props.icon ? props.icon : NO_ICON}
      />

      <Button title="Click me" onPress={props.onPress} />
    </View>
  )
}