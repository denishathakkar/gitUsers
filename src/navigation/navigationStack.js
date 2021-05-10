import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserDetail from '../screens/UserDetail';
import Users from '../screens/Users';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const NavigationStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Users" 
                    component={Users} 
                />

                <Stack.Screen
                    name="UserDetail"
                    component={UserDetail}
                />
            </Stack.Navigator>
         
        </NavigationContainer>
    )

}

export default NavigationStack;