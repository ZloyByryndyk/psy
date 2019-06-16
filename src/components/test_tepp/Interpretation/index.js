import React from 'react';
import { Text, StyleSheet, View, Image, Alert, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import text from '../../../text/text'

export default class Interpretator extends React.Component {

    state = {
        graphId:null,
    }

    async componentDidMount() {
        const Id = await AsyncStorage.getItem("graphId")
        this.setState({
            graphId:Id,
        })
    }

    hendlerClick = () => {
        this.props.history.push("/mainpage")
  }
    render() {
        return (
            <View style={styles.mainContainer}>
                <Image
                        style={styles.image}
                        source={require('./../../../image/page1.jpg')}
                />
                <View style={styles.box}>
                    <View style={styles.container}>
                        <Text style={styles.text}>
                             {text.Interpretation[this.state.graphId]}
                        </Text>
                        <Button
                            buttonStyle={styles.close}
                            title='Закрыть'
                            onPress={this.hendlerClick}/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
    },
    box: {
        width: '80%',
        height: '80%',
        backgroundColor: 'rgba(255, 255, 255, .7)',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    container: {
        flex: 1,
        width: '80%',
        textAlign: 'center',
    },
    close: {
        backgroundColor: '#FF8E00', 
        width: 150,
        height: 30,
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 50,
    },
    text: {
        color: 'black',
        fontSize: 12,
        fontStyle: 'italic',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
});