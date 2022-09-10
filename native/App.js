import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Temperature from './components/class/lifting-state-up/CalculateTemperature';
import ErrorBoundary from './components/class/error-boundaries/ErrorBoundary';
import GithubUsers from './components/functional/github-users/GithubUsers';
import MyStack from './Routes/Routes';

export default function App() {
  return (
    // <View style={styles.container}>
    //   {/* Encapsulating in Error Boundary */}
    //   <ErrorBoundary>
    //     <View>Content</View>
    //     <Temperature /> 
    //   </ErrorBoundary>
    // </View>
    // <View style={styles.container}>
    //   <GithubUsers />
    // </View>
    <MyStack />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
