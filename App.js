import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet,View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LittlelemonHeader from './components/LittlelemonHeader';
import LittlelemonFooter from './components/LittlelemonFooter';
import Logowelcome from './components/Logowelcome';
import WelcomeScreen from './components/Welcomescreen';
import MenuItems from './components/MenuItems';
import LoginForm from './components/LoginForm';
import { Ionicons } from '@expo/vector-icons';
import Resume from './components/Resume';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ResumewithSectionList from './components/ResumewithSectionList';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator ();
export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Welcome" component={WelcomeScreen} />
      <Drawer.Screen name="Menu" component={MenuItems} />
    </Drawer.Navigator>
  </NavigationContainer>
  
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

/*
<View style={styles.container}>
  <LittlelemonHeader/>
   <LoginForm/>
  </View>

*/

/*     use of stack navigator
 <>
      <NavigationContainer>
        <View style={styles.container}>
          <LittlelemonHeader />
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleAlign:"center",
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} component={LoginForm}  />
            <Stack.Screen name="Menu" component={MenuItems} />
            
          </Stack.Navigator>
        </View>
        <View style={styles.footerContainer}>
          <LittlelemonFooter />
        </View>
      </NavigationContainer>
    </>
    
 */ 
/* use of tab navigation 
  <>
      <NavigationContainer>
        <View style={styles.container}>
        
          <Tab.Navigator  screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Welcome') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Menu') {
            iconName =  'ios-list';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
            <Tab.Screen name="Welcome" options={{
          title: "Welcome",
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleAlign:"center",
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}component={WelcomeScreen} />
            
            <Tab.Screen name="Menu"options={{
          title: 'Menu',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleAlign:"center",
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} component={MenuItems} />
            
          </Tab.Navigator>
        </View>
        <View style={styles.footerContainer}>
          
        </View>
      </NavigationContainer>
    </>
*/
