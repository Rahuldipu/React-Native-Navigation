//important imports
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native'; // To add Styles
import { NavigationContainer } from '@react-navigation/native'; // contains navigator and screen
import { createStackNavigator } from '@react-navigation/stack'; // Insert screens into a stack
import HomeScreen from './HomeScreen'; // Home Screen
import AboutScreen from './AboutScreen'; // About Screen
import AsyncStore from './components/AsyncStore'; // Ignore it for now

const Stack = createStackNavigator(); // createStackNavigator is used to create a stack like structure. 
// Whenever we navigate to a screen, it gets pushed to the stack and whenever we click the back button, 
// the screen pops off from the top of the stack.

class App extends React.Component {
  render() {
    return (
      <NavigationContainer> {/* Inside the render function, we have added NavigationContainer components. */}
        <Stack.Navigator> {/* Then we have added the Stack.Navigator component inside the NavigationContainer component. */}
{/* stack.Navigator contains all the screens using stack.Screen component. It has multiple props. For now, we are using two props i.e. name and component. */}

          <Stack.Screen 
            name="AsyncStorage"
            component={AsyncStore}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="About"
            component={AboutScreen}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;