// Библиотеки которые мы используем в своем проекте
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
// Компоненты которые мы импортируем
import LoadingScreen from './src/components/LoadingScreen';
import MainPage from './src/components/MainPage';
import Test_Tepping from './src/components/MainPage/Test_tepping';
import Discription from './src/components/MainPage/Test_tepping/Discription';
import Charts from './src/components/MainPage/Test_tepping/Discription/Charts';

export default class App extends React.Component {
  state = {
    counts_tepping: [],
  }

  saveCountsTepping = (counts) => {
    this.setState({counts_tepping:counts})
  }

  render() {
    return (
      <NativeRouter>
        <View style={styles.background}>
          <Switch>
            <Route exact path="/" component={LoadingScreen} />
            <Route exact path="/mainpage" component={MainPage} />
            <Route exact path="/test_tepping" component={Test_Tepping} />
            <Route exact path="/discription" render={props => <Discription saveCountsTepping={this.saveCountsTepping} history={props.history}/>}/>
            <Route exact path="/charts" render={props => <Charts counts_tepping={this.state.counts_tepping} />}/>
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  }
});