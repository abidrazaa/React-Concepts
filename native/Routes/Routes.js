import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GithubUsers from '../components/functional/github-users/GithubUsers';
import HomeScreen from '../components/functional/home-screen/HomeScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Users" component={GithubUsers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;