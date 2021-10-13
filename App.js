import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './Navigator/Navigator';

import Mode from './Screens/Mode';
import ScanQr from './Screens/ScanQr';
import Login from './Screens/Login';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './Screens/Menu';



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
  <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ title: 'Menu' }}
        />
      <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Home"
          component={Mode}
          options={{ title: 'Pointage' }}
        />
        <Stack.Screen name="Scan" component={ScanQr} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
