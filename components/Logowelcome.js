import React from 'react';
import { ScrollView,View, Image, StyleSheet, Text, ImageBackground,Pressable } from 'react-native';

const Welcome = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
    <ImageBackground style={styles.bg}  source={require('../img/background.jpeg')} resizeMode='cover'>
   
      <Image
        style={styles.logo} resizeMode='center'
        source={require('../img/logo.png')}
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />

       <Image
        style={styles.image} resizeMode='cover'
        source={require('../img/Picture1.png')}
        accessible={true}
        accessibilityLabel={'Food Picture 1'}
      />
       <Image
        style={styles.image} resizeMode='cover'
        source={require('../img/Picture2.png')}
        accessible={true}
        accessibilityLabel={'Food Picture 2'}
      />
       <Image
        style={styles.image} resizeMode='cover'
        source={require('../img/Picture3.png')}
        accessible={true}
        accessibilityLabel={'Food Picture 3'}
      />
       <Image
        style={styles.image} resizeMode='cover'
        source={require('../img/Picture4.png')}
        accessible={true}
        accessibilityLabel={'Food Picture 4'}
      />
      <>
      <Pressable onPress={() => navigation.navigate('Menu')}> 
        <Text style={styles.buttonText}>View Menu</Text> 
      </Pressable>
        </>

       <Text style={
        styles.textbox
      }>All rights reserved by Little Lemon, 2023</Text>
     
  
    </ImageBackground>
    </ScrollView>

    
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 350,
    marginLeft:25,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 5,
    borderWidth: 5,
    borderColor:"black",
    marginBottom: 10,
    justifyContent:"center",
    marginLeft:70,
  },
  container: {
    flex:1,
    backgroundColor: '#fff',
  },

  title: {
    marginTop: 16,
    paddingVertical: 10,
    color: '#333333',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bg:{
    flex:1,
  },
  textbox:{
    backgroundColor: '#EE9972',
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    justifyContent: 'flex-end',
  
    
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
});

export default Welcome;
