import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo} resizeMode='contain'
        source={require('../img/logo.png')}
       
      />

     
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 300,
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
  },
  container: {
    flex:1,
    padding:24,
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
});

export default Welcome;
