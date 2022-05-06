import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import StackRoutes from './AppRoutes';

function Routes() {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    )
}

export default Routes;