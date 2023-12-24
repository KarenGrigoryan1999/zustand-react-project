import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ExtraScreen from './ExtraScreen';
import AutorizationScreen from "./screens/AuthorizationScreen";
import TestScreen from "./screens/TestScreen";
import MatrixStackScreen from "./screens/MatrixStackScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={AutorizationScreen}
        options={{ headerShown: false, title: 'Главная страница' }}
      />
      <Stack.Screen
        name="Test"
        component={TestScreen}
        options={{ headerShown: false, title: 'Тест' }}
      />
      <Stack.Screen
        name="Extra"
        component={ExtraScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name="MatrixSt"
        component={MatrixStackScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
}