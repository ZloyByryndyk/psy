/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
// Библиотеки которые мы используем в своем проекте
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
// Компоненты которые мы импортируем
import ModalContainer from './ModalContainer';

export default class LoadingScreen extends React.Component {
  // методы которые используются в теле проекта
  hendlerClick = () => {
    this.props.history.push('/mainpage');
  }

  render() {
    return (
      <View style={styles.Main}>
        <Image
          style={styles.stretch}
          source={require('../../image/welcome.jpg')}
        />
        <View style={styles.Container}>
          <ModalContainer />
        </View>
        <View style={styles.Container2}>
          <Button
            buttonStyle={styles.skip}
            title="skip"
            onPress={this.hendlerClick}
          />
        </View>
      </View>
    );
  }
}

// CSS
const styles = StyleSheet.create({
  Main: { flex: 1 },
  Container: {
    flex: 8,
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  Button: {
    backgroundColor: '#FF8E00',
    width: 150,
    height: 30,
    borderRadius: 10,
    alignSelf: 'center',
  },
  Container2: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
  skip: {
    backgroundColor: '#D3D3D3',
    width: 100,
    height: 30,
    alignSelf: 'center',
    marginLeft: 200,
  },
  stretch: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
  },
});
