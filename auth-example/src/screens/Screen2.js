import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Screen2(props) {

  const { nameT2 } = props.route.params;

  useEffect(() => {
    console.log('Mounting Screen2');
    return () => {
      console.log('Unmounting Screen2');
    }
  }, []);

  return (
    <View>
      <Text> Tela 2</Text> 
      <Text>{nameT2}</Text>
    </View>
  )
}