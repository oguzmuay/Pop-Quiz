import React from 'react';

import RegisterPage from './src/pages/RegisterPage';
import EntryPage from './src/pages/EntryPage';
import StudentPage from './src/pages/StudentPage';
import TeacherPage from './src/pages/TeacherPage';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
const Stack = createStackNavigator();
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Login'}>
          <Stack.Screen
            name={'Login'}
            component={EntryPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Register'}
            component={RegisterPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Student'}
            component={StudentPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Teacher'}
            component={TeacherPage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
