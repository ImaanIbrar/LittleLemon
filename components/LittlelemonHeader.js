import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function LittlelemonHeader() {
  return (
    <View >
      <Text
        style={{
          backgroundColor: '#EE9972',
          fontSize: 30,
          color: 'black',
          textAlign: 'center',
          paddingTop: 40
        }}>
        Little Lemon
      </Text>
    </View>
  );
}
