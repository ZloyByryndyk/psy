import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';


export default class Charts extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('../../../../../image/tepping.jpg')}
                />
                <View>
                </View>
                <View style={styles.section2}>
                    <View style={styles.box1}/>
                    <View style={styles.box2}/>
                    <View style={styles.box3}/>
                    <View style={styles.box4}/>
                </View>
            </View>
        )
    }
}

