import { Text, TouchableOpacity } from "react-native";

export default function Button(props) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 10,
        margin: 10,
      }}
      onPress={props.onPress}
    >
      <Text style={{
        color: 'white',
        textAlign: 'center',
      }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}