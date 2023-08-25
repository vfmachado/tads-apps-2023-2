import { Text, View } from "react-native";
import Button from "../components/Button";
import {CounterContext} from "../contexts/CounterContext";
import { useContext } from "react";


export default function InitialScreen(props) {

  const { counter } = useContext(CounterContext);

  return (
    <View>
      <Text> Tela 1 </Text>
      <Text> { counter } </Text>
      <Button
        title="Ir para tela 2"
        //   onPress={() => props.goTo('SECOND')}
        onPress={() => props.navigate('SECOND')}
      />
      <Button
        title="Ir para tela 3"
        onPress={() => props.goTo('THIRD')}
      />
    </View>
  )
}