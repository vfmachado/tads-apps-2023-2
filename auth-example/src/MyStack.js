import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator
        initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
    </NavigationContainer>
  );
}
