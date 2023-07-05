import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function LittlelemonHeader() {
  return (
    <View  
      style={{justifyContent: 'flex-end' }}
    >
      <Text style={
        styles.textbox
      }>All rights reserved by Little Lemon, 2023</Text>
      <StatusBar style="auto" />
    </View>
    
  );
  
}
const styles=StyleSheet.create({
  textbox:{
    backgroundColor: '#EE9972',
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  
    
  }

})



