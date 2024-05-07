import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './Navigator';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='dark' />
      <Navigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'FFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
