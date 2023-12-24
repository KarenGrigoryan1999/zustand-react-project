import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ExtraScreen from './ExtraScreen';
import AutorizationScreen from "./screens/AuthorizationScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={AutorizationScreen}
          options={{title: 'Главная страница'}}
        />
        <Stack.Screen
          name="Extra"
          component={ExtraScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
  );
}