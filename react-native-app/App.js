import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Provider } from 'react-redux';
import MyStack from './Routes/Routes';
import store from './redux/store'


export default function App() {
  
  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
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
