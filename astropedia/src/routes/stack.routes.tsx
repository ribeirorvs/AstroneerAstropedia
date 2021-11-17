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
import { Astronium } from '../pages/Astronium';
import { Clay } from '../pages/Clay';
import { Compound } from '../pages/Compound';
import { Graphite } from '../pages/Graphite';
import { Hematite } from '../pages/Hematite';
import { Laterite } from '../pages/Laterite';
import { Lithium } from '../pages/Lithium';
import { Malachite } from '../pages/Malachite';
import { Organic } from '../pages/Organic';
import { Quartz } from '../pages/Quartz';
import { Resin } from '../pages/Resin';
import { Sphalerite } from '../pages/Sphalerite';


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
            <Stack.Screen
                name='Astronium'
                component={Astronium}
                options={{
                    headerShown: false,
                    animation: 'none'
                }}
            />
            <Stack.Screen
                name='Clay'
                component={Clay}
                options={{
                    headerShown: false,
                    animation: 'none'
                }}
            />
            <Stack.Screen
                name='Compound'
                component={Compound}
                options={{
                    headerShown: false,
                    animation: 'none'
                }}
            />
            <Stack.Screen
                name='Graphite'
                component={Graphite}
                options={{
                    headerShown: false,
                    animation: 'none'
                }}
            />
            <Stack.Screen
                name='Hematite'
                component={Hematite}
                options={{
                    headerShown: false,
                    animation: 'none'
                }}
            />
            <Stack.Screen
                name='Laterite'
                component={Laterite}
                options={{
                    headerShown: false,
                    animation: 'none'
                }}
            />
            <Stack.Screen
                name='Lithium'
                component={Lithium}
                options={{
                    headerShown: false,
                    animation: 'none'
                }}
            />
            <Stack.Screen
                name='Malachite'
                component={Malachite}
                options={{
                    headerShown: false,
                    animation: 'none'
                }}
            />
            <Stack.Screen
                name='Organic'
                component={Organic}
                options={{
                    headerShown: false,
                    animation: 'none'
                }}
            />
            <Stack.Screen
                name='Quartz'
                component={Quartz}
                options={{
                    headerShown: false,
                    animation: 'none'
                }}
            />
            <Stack.Screen
                name='Resin'
                component={Resin}
                options={{
                    headerShown: false,
                    animation: 'none'
                }}
            />
            <Stack.Screen
                name='Sphalerite'
                component={Sphalerite}
                options={{
                    headerShown: false,
                    animation: 'none'
                }}
            />
        </Stack.Navigator>
    )
}

export default AppRoutes;