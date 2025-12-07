import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './src/screens/MapScreen';
import GymDetailScreen from './src/screens/GymDetailScreen';
import AddGymScreen from './src/screens/AddGymScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6366f1',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Map" 
          component={MapScreen}
          options={{ title: 'Find Gyms' }}
        />
        <Stack.Screen 
          name="GymDetail" 
          component={GymDetailScreen}
          options={{ title: 'Gym Details' }}
        />
        <Stack.Screen 
          name="AddGym" 
          component={AddGymScreen}
          options={{ title: 'Add New Gym' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
