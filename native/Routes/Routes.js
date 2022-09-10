import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GithubUsers from '../components/functional/github-users/GithubUsers';
import HomeScreen from '../components/functional/home-screen/HomeScreen';
import { useRef, useState, createContext} from "react";

const Stack = createNativeStackNavigator();
export const UserContext = createContext(null);
const MyStack = () => {
  const [authToken, setAuthToken] = useState("first")
  return (
    <UserContext.Provider value={{authToken, setAuthToken}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen name="Users" component={GithubUsers} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default MyStack;