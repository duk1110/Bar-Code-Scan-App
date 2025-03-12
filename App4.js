import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import ScanScreen from './ScanScreen';

// Tạo Stack Navigator
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack chứa cả HomeScreen và ScanScreen
const MainStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Scan" component={ScanScreen} />
  </Stack.Navigator>
);

// Bottom Tabs Navigator
const Tabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName = route.name === 'Home' ? 'home-outline' : 'camera-outline';
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarStyle: { backgroundColor: '#fff', paddingBottom: 5, height: 60 },
      tabBarActiveTintColor: '#007AFF',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Home" component={MainStack} options={{ title: 'Home', headerShown: false }} />
  </Tab.Navigator>
);

// Main App
export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
