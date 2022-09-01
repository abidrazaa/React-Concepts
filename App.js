import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Temperature from './components/class/lifting-state-up/CalculateTemperature';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your apppp!</Text> */}
      <StatusBar style="auto" />
      <Temperature /> 
    </View>
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
