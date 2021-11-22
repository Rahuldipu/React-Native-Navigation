import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

class AsyncStore extends Component {

    state = {
        name: ''
    }

    nameHandler = (name) => {
        this.setState({
            name: name 
        })
    }

    storeName = async (name) => {
        await AsyncStorage.setItem('@name', name)
    }

    submitHandler = () => {
        this.storeName(this.state.name)
    }

    showName = async () => {
        const name = await AsyncStorage.getItem('@name')
        alert(name)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>You are on Storage page</Text>
                <TextInput 
                    value={this.state.name}
                    placeholder={'Enter your name'}
                    onChangeText={this.nameHandler}
                />
                <Button
                    style={styles.button}
                    title="Submit"
                    onPress={this.submitHandler}
                />
                <Button
                    style={styles.button}
                    title="show name"
                    onPress={this.showName}
                />
                <Button
                    style={styles.button}
                    title="Back to home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  });

export default AsyncStore
