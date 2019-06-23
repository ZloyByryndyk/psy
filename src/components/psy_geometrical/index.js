import React from 'react';
import { View, StyleSheet, Image, AsyncStorage, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';


export default class psy_geometrical extends React.Component {
    hendlerClick = id => async () => {
      await AsyncStorage.setItem('geo_id', id);
      this.props.history.push('/Interpretation_geo');
    }

    render() {
      return (
        <View style={styles.container}>
          <Image style={styles.image} source={require('../../image/page1.jpg')} />
          {/* <View style={styles.section}> */}
          <Image style={styles.section} source={require('../../image/geo.png')} />
          {/* </View> */}
          <View style={styles.buttons_container}>
            <Button buttonStyle={styles.button} title="Квадрат" onPress={this.hendlerClick('Квадрат')} />
            <Button buttonStyle={styles.button} title="Прямоугольник" onPress={this.hendlerClick('Прямоугольник')} />
            <Button buttonStyle={styles.button} title="Треугольник" onPress={this.hendlerClick('Треугольник')} />
            <Button buttonStyle={styles.button} title="Зигзак" onPress={this.hendlerClick('Зигзак')} />
            <Button buttonStyle={styles.button} title="Круг" onPress={this.hendlerClick('Круг')} />
          </View>
        </View>
      );
    }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  image: {
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
  },
  section: {
    width: '90%',
    height: '70%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 40,
    overflow: 'hidden',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: '5%',
  },
  buttons_container: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  },
  button: {
    width: width / 2 - 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#FF8E00',
    marginTop: 10,
  },
});
