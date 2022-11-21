import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from './pages/home';
import { Photo } from './pages/photo';
import Cam from './pages/camera';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Photo') {
              iconName = focused 
                ? 'image' 
                : 'image-outline';
            } else if (route.name === 'Camera') {
              iconName = focused
                ? 'camera'
                : 'camera-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#C4A6EE',
          tabBarInactiveTintColor: '#5B536A',
          headerShown: false,
          tabBarStyle: { backgroundColor: '#221A2C'},
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Photo" component={Photo} />
        <Tab.Screen name="Camera" component={Cam} />
      </Tab.Navigator>
    </NavigationContainer>


  );
}