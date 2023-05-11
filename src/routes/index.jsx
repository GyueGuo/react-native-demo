import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import routes from './routes'
console.log(routes)
const Stack = createNativeStackNavigator();
const screenOptions = {
    headerShown: false,
}
export default () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='home/index'>
            {
                routes.map((item) => {
                    return (
                        <Stack.Screen
                            key={item.name}
                            name={item.name}
                            component={item.component}
                            options={({ route }) => ({
                                // title: getChildTitle(route) || item.title,
                                // headerStyle: {
                                //     backgroundColor: '#fff',
                                //     height: 40
                                // },
                                // headerTitleStyle: {
                                //     color: '#000',
                                //     fontSize: 15
                                // },
                                headerShown: false, //不显示头部标题
                            })}
                        />
                    )
                })
            }
        </Stack.Navigator>
        {/* {
            routes.map((route) => (
                <Stack.Screen
                    name={route.name}
                    component={route.component}
                    key={route.name}
                    options={route.options}
                />
            ))
           }
         </Stack.Navigator> */}
    </NavigationContainer>
)