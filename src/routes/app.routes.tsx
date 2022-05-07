import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AppStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import { Header } from '../components/Header';
import { Profile } from '../screens/Profile';
import { WeightControl } from '../screens/Profile/WeightControl';


import Historic from '../pages/Historic';
import HistoricDetail from '../pages/Historic/HistoricDetail';
import Dashboard from '../pages/Dashboard';
import DailyTrainning from '../pages/DailyTrainning';
import TrainningDetail from '../pages/DailyTrainning/TrainningDetail';

export default function AppRoutes() {
  function ProfileRoute() {
    return (
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name='Seu Perfil' component={Profile} />
        <AppStack.Screen name='Controle de peso' component={WeightControl} />
      </AppStack.Navigator>
    );
  }

  function TrainningStack() {
    return (
      <>
        <Header />
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
          <AppStack.Screen name='Dashboard' component={Dashboard} />
          <AppStack.Screen name='Treino do dia' component={DailyTrainning} />
          <AppStack.Screen name='Exercício' component={TrainningDetail} />
        </AppStack.Navigator>
      </>
    );
  }

  function HistoricRoute() {
    return (
      <>
        <Header />
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
          <AppStack.Screen name='Historic' component={Historic} />
          <AppStack.Screen name='HistoricDetail' component={HistoricDetail} />
        </AppStack.Navigator>
      </>
    );
  }
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let iconName;

            switch (route.name) {
              case 'Seu Perfil':
                iconName = 'account-box';
                break;

              case 'Treino do dia':
                iconName = 'fitness-center';
                break;

              case 'Histórico':
                iconName = 'calendar-today';
                break;

              default:
                iconName = null;
            }

            return <MaterialIcons name={iconName} size={46} color='#0B4455' />;
          },
        })}
        initialRouteName='Treino do dia'
        tabBarOptions={{
          activeTintColor: '#0B4455',
          labelStyle: {
            fontSize: 16,
          },
          style: {
            backgroundColor: '#f0f0f0',
            height: Platform.OS === 'ios' ? 110 : 90,
          },
        }}
      >
        <Tab.Screen name='Seu Perfil' component={ProfileRoute} />
        <Tab.Screen name='Treino do dia' component={TrainningStack} />
        <Tab.Screen name='Histórico' component={HistoricRoute} />
      </Tab.Navigator>
    </>
  );
}
