// import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import routes from './routes';

// const Stack = createNativeStackNavigator();

// function component() {
//   return (
//     <Stack.Navigator>
//       {routes.map(router => (
//         <Stack.Screen
//           name={router.name}
//           component={router.component}
//           key={router.name}
//           options={router.options}
//         />
//       ))}
//     </Stack.Navigator>
//   );
// }
// export default {
//   name: 'user',
//   component,
// };
import Setting from '../views/setting';

export default [
  {
    name: 'user/setting',
    component: Setting,
  },
];
