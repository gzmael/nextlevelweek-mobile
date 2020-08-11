import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import TeacherForm from '../pages/TeacherForm';
import TeachersList from '../pages/TeachersList';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="TeacherForm" component={TeacherForm} />
        <Screen name="TeachersList" component={TeachersList} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
