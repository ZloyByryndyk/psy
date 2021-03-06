import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import RF from 'react-native-responsive-fontsize';


export default class test_tepp extends React.Component {
    state = {
      status: 'Старт',
      timer: 5,
      globalTimer: 30,
      counts: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      },
      curentSpinner: 0,
      isStarted: false,
    }

    hendlerStartTimer = () => {
      const { timer } = this.state;
      this.setState({ status: timer, isStarted: true }, () => {
        this.tic();
      });
    }

    tic = () => {
      this.timerId = setInterval(() => {
        const { globalTimer, timer, curentSpinner } = this.state;
        if (globalTimer <= 0) return clearInterval(this.timerId);


        const isLess = (timer - 1) <= 0;
        const newTime = isLess ? 5 : timer - 1;
        this.setState({
          timer: newTime,
          globalTimer: globalTimer - 1,
          status: (globalTimer - 1) <= 0 ? 'Next' : newTime,
          curentSpinner: isLess ? curentSpinner + 1 : curentSpinner,
        });
      }, 1000);
    }

    clicker = () => {
      const { globalTimer, isStarted, counts, curentSpinner } = this.state;
      if (globalTimer <= 0 || !isStarted) return;
      this.setState({
        counts: {
          ...counts,
          [curentSpinner]: counts[curentSpinner] + 1,
        },
      });
    }

    onPress = () => {
      const arr = Object.values(this.state.counts);

      this.props.saveCountsTepping(arr);
      this.props.history.push('/charts');
    }

    getStyle = (index) => {
      const commonStyle = styles.slot;
      const hoverStyle = styles.hover;

      if (!this.state.isStarted) return commonStyle;

      if (this.state.curentSpinner === index) {
        return hoverStyle;
      }
      return commonStyle;
    }

    hendlerClick = () => {
      this.props.history.push('/charts');
    }

    render() {
      const { curentSpinner } = this.state;

      const countKeys = Object.keys(this.state.counts).length;

      const numbers = [1, 2, 3, 4, 5, 6];


      return (
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../../image/page1.jpg')}
          />
          <Text style={styles.numbers}>
            {this.state.counts[this.state.curentSpinner]}
          </Text>
          <View style={styles.box1}>
            {numbers.map((number, index) => (
              <Text style={this.getStyle(index)} key={number}>
                {number}
              </Text>
            ))}
          </View>
          <View style={styles.box2}>
            <Text
              style={styles.timer}
              onPress={curentSpinner === countKeys ? this.onPress : this.hendlerStartTimer}
            >
              {this.state.status}
            </Text>
          </View>
          <View style={styles.box3}>
            <Button
              buttonStyle={styles.click}
              title=""
              onPress={this.clicker}
            />
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1: {
  // flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
  // flex: 3,
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box3: {
  // flex: 5,
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slot: {
    backgroundColor: '#FF8E00',
    padding: 10,
    color: 'white',
    borderColor: 'black',
    borderWidth: 2,
    margin: 10,
    height: 50,
  },
  hover: {
    backgroundColor: 'green',
    padding: 10,
    color: 'white',
    borderColor: 'black',
    borderWidth: 2,
    margin: 10,
    height: 50,
  },
  timer: {
    backgroundColor: '#FF8E00',
    padding: 10,
    color: 'white',
    width: '30%',
    height: '30%',
    borderColor: 'black',
    borderWidth: 2,
    fontSize: 30,
    textAlign: 'center',
  },
  image: {
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    zIndex: -2,
  },
  click: {
    backgroundColor: '#FF8E00',
    width: '90%',
    height: '70%',
    borderRadius: 10,
  },
  textView: {
    fontSize: 32,
    alignItems: 'center',
  },
  numbers: {
    position: 'absolute',
    zIndex: -1,
    fontSize: RF(50),
    color: 'rgba(0,0,0,0.3)',
  },
  next: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 2,
  },
});
