import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'; // Importing react native components

// The home screen contains the text “You are on the home page” and a button.
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You are on home page</Text>
        {/* On button click, we will navigate to the about page. */}
        <Button
            title="About page"
            onPress={() => this.props.navigation.navigate('About')}
        />
{/* Button has two props i.e title and onPress
On onPress, we are calling the navigate function on this.props.navigation.
As our HomeScreen is included in the stack.navigator so this.props.navigation will inherit props from the navigation object. */}

        <Button 
          title="Storage page"
          onPress={() => this.props.navigation.navigate('AsyncStorage')}
        /> {/* Ignore this for now */}
      </View>
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

export default HomeScreen;