import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Button } from 'react-native-elements';

export default class Description extends React.Component {
  hendlerClick = () => {
    this.props.history.push('/test_tepp');
  };

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../../image/page1.jpg')} />
        <View style={styles.box}>
          <Text>
          «После нажатия кнопки «СТАРТ» Вы должны часто нажимать на оранжевый квадрат.
          Все время работайте в максимальном для себя темпе»
          </Text>
          <Button buttonStyle={styles.start} title="Приступить" onPress={this.hendlerClick} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
    padding: 20,
  },
  start: {
    backgroundColor: '#FF8E00',
    padding: 5,
    marginTop: 40,
  },
});
