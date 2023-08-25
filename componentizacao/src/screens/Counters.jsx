import { Text, View } from "react-native";
import Button from "../components/Button";
import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";
// import CounterContext from "../contexts/CounterContext";


export default function CounterScreen(props) {

    const { counter, increment, decrement } = useContext(CounterContext);
    console.log({ counter });
  return (
    <View>
      <Text> Tela 3</Text>
      <Text> {counter} </Text>
      <Button
        title="DIMINUIR"
        //   onPress={() => props.goTo('SECOND')}
        onPress={() => decrement()}
      />
      <Button
        title="AUMENTAR"
        onPress={() => increment()}
      />
    </View>
  )
}