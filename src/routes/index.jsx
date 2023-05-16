import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import routes from './routes'
const Stack = createNativeStackNavigator();
const screenOptions = {
  headerShown: false,
}
export default () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName='home/index'
      screenOptions={{ headerShown: false }}
    >
      {
        routes.map((item) => {
          return (
            <Stack.Screen
              key={item.name}
              name={item.name}
            >
              { item.component }
            </Stack.Screen>
          )
        })
      }
    </Stack.Navigator>
  </NavigationContainer>
)