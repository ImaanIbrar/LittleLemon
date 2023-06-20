import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LittlelemonHeader from './components/LittlelemonHeader';
import LittlelemonFooter from './components/LittlelemonFooter';
import WelcomeScreen from './components/Welcomescreen';
import MenuItems from './components/MenuItems';

export default function App() {
  return (
    <View style={styles.container}>
      <LittlelemonHeader/>
      <StatusBar style="auto" />
      <WelcomeScreen/>
      <LittlelemonFooter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
    
  },
});
