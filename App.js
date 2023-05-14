import { StyleSheet, Text, View } from 'react-native';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Screens
import MainScreen from './components/Main';
import LoginScreen from './components/auth/Login';
import RegisterScreen from './components/auth/Register';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen
          key={Date.now()}
          name='Main'
          component={MainScreen}
          navigation={this.props.navigation}
        />
        <Stack.Screen
          key={Date.now()}
          name='Login'
          component={LoginScreen}
          navigation={this.props.navigation}
        />
        <Stack.Screen
          key={Date.now()}
          name='Register'
          component={RegisterScreen}
          navigation={this.props.navigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
