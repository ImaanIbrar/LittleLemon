import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LittlelemonHeader from './components/LittlelemonHeader';
import LittlelemonFooter from './components/LittlelemonFooter';
import Logowelcome from './components/Logowelcome';
import WelcomeScreen from './components/Welcomescreen';
import MenuItems from './components/MenuItems';
import LoginForm from './components/LoginForm';

export default function App() {
  return (
    <View style={styles.container}>
      <LittlelemonHeader/>
    <WelcomeScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    
  },
});
