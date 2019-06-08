import React from 'react';
import { Text, StyleSheet, View, Image, Alert } from 'react-native';
import { Button } from 'react-native-elements';

export default class Interpretator extends React.Component {

    hendlerClick = () => {
        this.props.history.push('/src/components/MainPage/')
  }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>

                </Text>
                <Button
                    buttonStyle={styles.close}
                    title='Закрыть'
                    onPress={this.hendlerClick}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    close: {
        backgroundColor: '#FF8E00',
        padding: 5,
        marginTop: 40, 
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft: 50,
        marginTop: 50,
        marginRight: 50,
    },
});