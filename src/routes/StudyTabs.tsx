import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TeachersList from '../pages/TeachersList';
import Favorites from '../pages/Favorites';

const { Screen, Navigator } = createBottomTabNavigator();

function StudyTabs(): React.ReactElement {
  return (
    <Navigator
      tabBarOptions={{
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        activeTintColor: '#32264d',
        inactiveTintColor: '#c1bccc',
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
      }}
    >
      <Screen
        name="TeachersList"
        component={TeachersList}
        options={{
          tabBarLabel: 'Proffys',
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-easel" size={size} color={color} />;
          },
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-heart" size={size} color={color} />;
          },
        }}
      />
    </Navigator>
  );
}

export default StudyTabs;
