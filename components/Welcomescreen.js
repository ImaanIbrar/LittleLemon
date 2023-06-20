import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1 }}
    >
      <ScrollView  indicatorStyle={"black"} style={{
          paddingHorizontal: 40,
          paddingVertical: 40,
          backgroundColor: "#495E57",
        }}>
         
        <Text style={
        styles.textbox  
      } numberOflines={2}>Welcome to Little Lemon</Text>
      <Text style={{ fontSize:25,  color: 'white',
    textAlign: 'center', padding:40,}}  numberOflines={7}>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
    </Text>
      <StatusBar style="auto" /></ScrollView>
      
    </View>
    
  );
  
}
const styles=StyleSheet.create({
  textbox:{
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    paddingTop:20,
  }

})



