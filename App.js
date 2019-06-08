// Библиотеки которые мы используем в своем проекте
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
// Компоненты которые мы импортируем
import Welcome from './src/components/Welcome';
import MainPage from './src/components/MainPage';
import Description from './src/components/test_tepp/Description';
import Test_tepp from './src/components/test_tepp';
import Charts from './src/components/test_tepp/Charts';
import Interpretation from './src/components/test_tepp/Interpretation'

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
              <Route exact path="/" component={Welcome} />
              <Route exact path="/mainpage" component={MainPage} />
              <Route exact path="/Description" component={Description} />
              <Route exact path="/test_tepp" render={props => <Test_tepp saveCountsTepping={this.saveCountsTepping} history={props.history}/>}/>
              <Route exact path="/charts" render={props => <Charts counts_tepping={this.state.counts_tepping} history={props.history} />}/>
              <Route exact path="/interpretation" component={Interpretation}/>
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