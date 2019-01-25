import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { LineChart, Grid } from 'react-native-svg-charts';

export default class Charts extends React.Component {
    render() {
        const { counts_tepping } = this.props;
        const line = [];
        const strong = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

        for (let i in counts_tepping) {
            line.push (counts_tepping[i])
        }
        console.log(line);
        
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('../../../../../image/page1.jpg')}
                />
                <View style={styles.section1}>
                    <LineChart
                        style={{ height: 200 }}
                        data={ line }
                        svg={{ stroke: 'rgb(134, 65, 244)' }}
                        contentInset={{ top: 20, bottom: 20 }}
                    >
                        <Grid/>
                    </LineChart>
                </View>
                <View style={styles.section2}>
                    <View style={styles.box1}>
                    <LineChart
                        style={{ height: 200 }}
                        data={ strong }
                        svg={{ stroke: 'rgb(134, 65, 244)' }}
                        contentInset={{ top: 20, bottom: 20 }}
                    >
                        <Grid/>
                    </LineChart>
                    </View>
                    <View style={styles.box2}/>
                    <View style={styles.box3}/>
                    <View style={styles.box4}/>
                </View>
            </View>
        )
    }
}

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
    section1: {
        width: '100%',
        height: '40%',
        backgroundColor: 'red',
    },
    section2: {
        width: '100%',  
        height: '60%',
        backgroundColor: 'blue',
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: 'wrap',
    },
    box1: {
        width: "50%",
        height: "50%",
        backgroundColor: "black"
      },
      box2: {
        width: "50%",
        height: "50%",
        backgroundColor: "green"
      },
      box3: {
        width: "50%",
        height: "50%",
        backgroundColor: "yellow"
      },
      box4: {
        width: "50%",
        height: "50%",   
        backgroundColor: "pink"
      },
})