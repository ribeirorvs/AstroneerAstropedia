import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Home } from '../pages/Home';
import { Planets } from '../pages/Planets';
import { Sylva } from '../pages/Sylva';
import { Desolo } from '../pages/Desolo';
import { Calidor } from '../pages/Calidor';
import { Vesania } from '../pages/Vesania';
import { Novus } from '../pages/Novus';
import { Glacio } from '../pages/Glacio';
import { Atrox } from '../pages/Atrox';
import { Resources } from '../pages/Resources';
import { Ammonium } from '../pages/Ammonium';


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
            <Stack.Screen
                name='Desolo'
                component={Desolo}
                options={{
                    headerShown: false,
                    animation: 'none'
                }}
            />
            <Stack.Screen
                name='Calidor'
                component={Calidor}
                options={{
                    headerShown: false,
                    animation: 'none'
                }}
            />
            <Stack.Screen
                name='Vesania'
                component={Vesania}
                options={{
                    headerShown: false,
                    animation: 'none'
                }}
            />
            <Stack.Screen
                name='Novus'
                component={Novus}
                options={{
                    headerShown: false,
                    animation: 'none'
                }}
            />
            <Stack.Screen
                name='Glacio'
                component={Glacio}
                options={{
                    headerShown: false,
                    animation: 'none'
                }}
            />
            <Stack.Screen
                name='Atrox'
                component={Atrox}
                options={{
                    headerShown: false,
                    animation: 'none'
                }}
            />
            <Stack.Screen
                name='Resources'
                component={Resources}
                options={{
                    headerShown: false,
                    animation: 'none'
                }}
            />
            <Stack.Screen
                name='Ammonium'
                component={Ammonium}
                options={{
                    headerShown: false,
                    animation: 'none'
                }}
            />
        </Stack.Navigator>
    )
}

export default AppRoutes;