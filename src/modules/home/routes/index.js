import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import routes from './routes';

function component() {
  return (
    <Tab.Navigator>
      {routes.map(router => (
        <Tab.Screen
          name={router.name}
          component={router.component}
          key={router.name}
          options={router.options}
        />
      ))}
    </Tab.Navigator>
  );
}
export default {
  name: 'home',
  component,
};
