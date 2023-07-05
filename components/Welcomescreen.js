import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View ,Image,useColorScheme, useWindowDimensions,Pressable } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks' ;

export default function WelcomeScreen({navigation}) {
  const colorScheme = useColorScheme();
  const window = useWindowDimensions();
  const orientation = useDeviceOrientation() 
 
  return (
    <ScrollView 
      style={[ 
      styles.container, 
      colorScheme === 'dark' 
      ? { backgroundColor: 'white' } 
      : { backgroundColor: '#333333' }, 
      ]}> 
    <View style={styles.headerWrapper}>
      <Image
        style={styles.image}
        source={require('../img/logo2.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />

      <Text style={styles.headerText}>Little Lemon</Text>
    </View>
    <Text style={styles.regular}>
      Little Lemon is a charming neighborhood bistro that serves simple food
      and classic cocktails in a lively but casual environment. We would love
      to hear your experience with us!
     
    </Text>
      <Pressable onPress={() => navigation.navigate('Menu')}> 
        <Text style={styles.buttonText}>View Menu</Text> 
        </Pressable>

  </ScrollView>
  
  );
  
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  regular: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: 'white',
    textAlign: 'center',
   
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
})


/*  SCROLLVIEW FOR WELCOME SCREEN
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
    */
   /*   
    <Text style={styles.regular}> Window Dimensions</Text>
    
    <Text textAlign="center" fontSize={10}  marginHorizontal={80}>  Height: {window.height}
    </Text>
    <Text textAlign="center" fontSize={10}  marginHorizontal={80}>  Width: {window.width}</Text>
    <Text  textAlign="center" fontSize={10}  marginHorizontal={90} >Font scale: {window.fontScale}</Text>
     */
    /*  */