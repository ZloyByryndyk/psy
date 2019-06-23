import React from 'react';
import { Text, StyleSheet, View, Image, AsyncStorage, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import text from '../../../text/text';

export default class Interpretation_geo extends React.Component {
    state = { geoId: null }

    async componentDidMount() {
      const Id = await AsyncStorage.getItem('geo_id');
      this.setState({ geoId: Id });
    }

    hendlerClick = () => {
      this.props.history.push('/mainpage');
    }

    render() {
      return (
        // eslint-disable-next-line react/jsx-filename-extension
        <ScrollView contentContainerStyle={styles.mainContainer}>
          <Image
            style={styles.image}
            source={require('./../../../image/page1.jpg')}
          />
          <View style={styles.box}>
            <View style={styles.container}>
              <Text style={styles.text}>
                {text.Interpretation_geo[this.state.geoId]}
              </Text>
              <Button
                buttonStyle={styles.close}
                title="Закрыть"
                onPress={this.hendlerClick}
              />
            </View>
          </View>
        </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
  mainContainer: {
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
    marginVertical: 20,
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
