import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

import AboutScreen from "./screens/AboutScreen";
import StackNavigation from "../stack";
import EventScreen from "./screens/EventScreen";

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
          if(route.name === 'Events') {
            iconName = focused ? "calendar" : "calendar-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'silver',
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          borderRadius: 30,
          paddingBottom: 10,
          paddingTop: 10,
          height: 60,
        }
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
        <Tab.Screen
          name="Events"
          component={EventScreen}
          options={{headerShown: false, title: 'Список событий'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}