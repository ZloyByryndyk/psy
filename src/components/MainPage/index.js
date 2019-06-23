import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button } from 'react-native-elements';

export default class MainPage extends React.Component {
    state = { heightModal: 0 }

    hendlerClick = () => {
      this.props.history.push('/Description');
    }

    hendlerClick2 =() => {
      this.props.history.push('/Description_geometrical');
    }

    showModalClick = () => {
      const { heightModal } = this.state;
      if (heightModal > 0) {
        this.setState({ heightModal: 0 });
      } else {
        this.setState({ heightModal: 100 });
      }
    }

    render() {
      return (
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../../image/page1.jpg')}
          />
          <View style={styles.box}>
            <Button
              buttonStyle={styles.test}
              title="Тесты"
              onPress={this.showModalClick}
            />
            <View style={{ height: this.state.heightModal }}>
              {
                  this.state.heightModal ? (
                    <>
                      <Button
                        buttonStyle={[styles.tepping, this.state.heightModal && { marginTop: 10 }]}
                        title="Теппинг тест"
                        onPress={this.hendlerClick}
                      />
                      <Button
                        buttonStyle={[styles.geo, this.state.heightModal && { marginTop: 10 }]}
                        title="Психогеометрический тест"
                        onPress={this.hendlerClick2}
                      />
                    </>
                  ) : null
              }
            </View>
            <Button
              buttonStyle={styles.settings}
              title="Настройки"
            />
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
  },
  test: {
    backgroundColor: '#FF8E00',
    width: 150,
    height: 30,
    borderRadius: 10,
    alignSelf: 'center',
    margin: 20,
  },
  settings: {
    backgroundColor: '#FF8E00',
    width: 150,
    height: 30,
    borderRadius: 10,
    alignSelf: 'center',
  },
  tepping: {
    backgroundColor: 'green',
    width: 150,
    height: 30,
    borderRadius: 10,
    alignSelf: 'center',
  },
  geo: {
    backgroundColor: 'green',
    width: 250,
    height: 30,
    borderRadius: 10,
    alignSelf: 'center',
  },
});
