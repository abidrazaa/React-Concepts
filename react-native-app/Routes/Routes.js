import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GithubUsers from '../components/github-users/GithubUsers';
import HomeScreen from '../components/home-screen/HomeScreen';
import { useRef, useState, createContext} from "react";
import CreditBookUsers from '../components/creditbook-users/CreditBookUsers';
import Counter from '../components/counter/Counter';


const Stack = createNativeStackNavigator();
export const UserContext = createContext(null);
const MyStack = () => {

  // passing empty string from UserContext that will be updated on HomeScreen
  // This could be used throughout the app as all the components are encapsulated in UserContext
  const [authToken, setAuthToken] = useState("")

  return (
    // Passing setAuthToken in value so that it can be modified from Login/HomeScreen
    <UserContext.Provider value={{authToken, setAuthToken}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen 
            name="Github Users" 
            component={GithubUsers} 
          />
          <Stack.Screen 
            name="Students" 
            component={CreditBookUsers} 
          />
          <Stack.Screen 
            name="Counter" 
            component={Counter} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default MyStack;