import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../styles/colors';
import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Home } from '../pages/Home';
import { Planets } from '../pages/Planets';
import { Sylva } from '../pages/Sylva';


const Stack = createNativeStackNavigator();

function AppRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{
                    headerShown: false,
                    animation: 'none'
                }}
            />
            <Stack.Screen
                name='UserIdentification'
                component={UserIdentification}
                options={{
                    headerShown: false,
                    animation: 'none'
                }}
            />
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false,
                    animation: 'none'
                }}
            />
            <Stack.Screen
                name='Planets'
                component={Planets}
                options={{
                    headerShown: false,
                    animation: 'none'
                }}
            />
            <Stack.Screen
                name='Sylva'
                component={Sylva}
                options={{
                    headerShown: false,
                    animation: 'none'
                }}
            />
        </Stack.Navigator>
    )
}

export default AppRoutes;