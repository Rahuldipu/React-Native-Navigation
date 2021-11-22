import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';// Importinh react native components

// About screen contains the text “You are on the about page” and a button.
class AboutScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You are on about page</Text>
        {/* On button click, we will navigate to the home page. */}
        <Button
            title="Back to home"
            onPress={() => this.props.navigation.navigate('Home')}
        />
        {/* Button has two props title and onPress.
        On onPress, we are calling the navigate function on this.props.navigation.
        As our HomeScreen is included in the stack.navigator so this.props.navigation will inherit props from the navigation object. */}

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

export default AboutScreen;