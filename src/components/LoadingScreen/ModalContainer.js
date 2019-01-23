// Библиотеки которые мы используем в своем проекте
import React from 'react';
import { StyleSheet, View, AppRegistry, TextInput, Modal, Text, TouchableHighlight, Alert} from 'react-native';
import { Button } from 'react-native-elements'
// Компоненты которые мы импортируем
import textJson from '../../text/textJson'

export default class ModalContainer extends React.Component {
// методы которые используются в теле проекта
    state = {
        modalVisible: false,
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        let qwe = [];
        textJson.modalContentText.forEach((element, i) => {
            qwe.push(<Text style={styles.text} key={i}>{element}</Text>);
        });
        
        return (
    <View>
        <Button
            onPress={() => {
            this.setModalVisible(!this.state.modalVisible);
            }}
            buttonStyle={styles.Button}
            title='Прочти меня' >
        </Button>
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {}}
            >        
            <View style={styles.mainModal}>    
                <View style={styles.textModal}>{qwe}
                </View>
                <Button onPress={() => {
                    this.setModalVisible(false);
                    }}        
                    buttonStyle={styles.Button1}
                    title='Спасибо' />  
            </View>
        </Modal> 
    </View>
        );  
    }
}

// CSS
const styles = StyleSheet.create({
    mainModal: {
        flex: 1,
        backgroundColor: '#D3D3D3',
    },
    textModal: {
        flex: 5,
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
    Button: {
        backgroundColor: '#FF8E00',
        width: 150,
        height: 30,
        borderRadius: 10,
        alignSelf: 'center',
    },
    Button1: {
        backgroundColor: '#FF8E00', 
        width: 150,
        height: 30,
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 50,
    },
});