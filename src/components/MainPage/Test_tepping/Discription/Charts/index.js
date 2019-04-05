import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { LineChart, Grid } from 'react-native-svg-charts';

export default class Charts extends React.Component {
    render() {
        const { counts_tepping } = this.props;
        const line = [];
        const strong = [ 11, -33, 23, -15, 22, -31, ]

        counts_tepping.forEach(element => {
            line.push(element)
        });

        // const ff =  d3.line()
        // .x(function(d) { return x(d.date); })
        // .y(function(d) { return y(d.value); })
        // .curve(d3.curveCatmullRom.alpha(0.5));
        
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('../../../../../image/page1.jpg')}
                />
                <View style={styles.section1}>
                    <View style={styles.box2}>
                        <LineChart
                            style={{ height: 200 }}
                            data={ line }
                            svg={{ stroke: 'rgb(134, 65, 244)' }}
                            contentInset={{ top: 20, bottom: 20 }}
                        >
                            <Grid/>
                        </LineChart>
                    </View>
                </View>
                <View style={styles.section2}>
                    <View style={styles.box}>
                        <LineChart
                            style={{ height: 180 }}
                            data={strong}
                            svg={{
                                stroke: 'rgb(0, 0, 255)',
                                strokeWidth: 3,
                                animate: true,
                                animationDuration: 500,
                            }}                          
                        >
                            <Grid/>
                        </LineChart>
                    </View>
                    <View style={styles.box}/>
                    <View style={styles.box}/>
                    <View style={styles.box}/>
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
        alignItems: "center",
        justifyContent: "center",
    },
    section2: {
        width: 'auto',  
        height: '55%',
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: 'wrap',
        margin: 5,
    },
    box: {
        width: "50%",
        height: "50%",
        padding: 5,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 40,
    },
    box2: {
        width: "80%",
        height: "80%",
        padding: 5,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 40,
      },
     
})