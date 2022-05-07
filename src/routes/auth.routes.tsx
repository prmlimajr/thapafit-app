import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screens/SignIn';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name='SignIn' component={SignIn} />
      </Navigator>
    </NavigationContainer>
  );
}
