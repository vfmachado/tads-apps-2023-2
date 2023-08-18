import { Text, View } from "react-native";
import Button from "../components/Button";


export default function InitialScreen(props) {

  return (
    <View>
      <Text> Tela 1 </Text>
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