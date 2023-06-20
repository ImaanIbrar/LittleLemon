import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function LittlelemonHeader() {
  return (
    <View >
      <Text
        style={{
          backgroundColor: '#F4CE14',
          fontSize: 20,
          color: 'black',
          textAlign: 'center',
          paddingTop: 30
        }}>
        Little Lemon
      </Text>
    </View>
  );
}

