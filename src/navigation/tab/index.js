import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

import AboutScreen from "./screens/AboutScreen";
import StackNavigation from "../stack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
          let iconName;
          if(route.name === 'Home') {
            iconName = focused ? "home" : "home-outline";
          }
          if(route.name === 'Todo') {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'silver',
      })}>
        <Tab.Screen
          name="Home"
          component={StackNavigation}
          options={{headerShown: false, title: 'Главная'}}
        />
        <Tab.Screen
          name="Todo"
          component={AboutScreen}
          options={{title: 'Список дел'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}