import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { LineChart, Grid } from 'react-native-svg-charts';
import Modal from "react-native-modal";


export default class Charts extends React.Component {
    state = {
        isModalVisible: true
    };
    
    hendlerClick = () => {
        this.props.history.push("/interpretation")
    }

    render() {
        const { counts_tepping } = this.props;
        const line = [];
        const convex = [ 3, 4, 6, 5, 4.5, 4, ]
        const smooth = [ 5, 4.5, 6, 5, 5, 5.5, ]
        const down = [ 5, 4, 4, 3, 2, 1, ]
        const concave = [ 3, 5, 4, 3, 2, 0, ]

        counts_tepping.forEach(element => {
            line.push(element)
        });
        
        // const ff =  d3.line()
        // .x(function(d) { return x(d.date); })
        // .y(function(d) { return y(d.value); })
        // .curve(d3.curveCatmullRom.alpha(0.5));
        
        return (
            <View style={styles.container}>
                <View>
                    <Modal isVisible={this.state.isModalVisible}>
                    <View style={styles.modal}>
                        <Text>Сравните свой график с представленными и выберете наиболее подходящий просто кликнув на него</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={()=>this.setState({isModalVisible:false})}>
                            <Text>Закрыть</Text>
                        </TouchableOpacity>
                    </View>
                    </Modal>
                </View>
                <Image
                    style={styles.image}
                    source={require('../../../image/page1.jpg')}
                />
                <View style={styles.section1}>
                    <View style={styles.box2}>
                        <LineChart
                            style={{ height: 200 }}
                            data={ line }
                            svg={{ stroke: 'rgb(255, 255, 255)',strokeWidth:2 }}
                            contentInset={{ top: 20, bottom: 20 }}
                        >
                        </LineChart>
                    </View>
                </View>
                <View style={styles.section2}>
                    <TouchableOpacity style={styles.box} onPress={this.hendlerClick}>
                            <LineChart
                                style={{ height: 150 }}
                                data={convex}
                                svg={{
                                    stroke: 'rgb(255, 255, 255)',
                                    strokeWidth: 2,
                                    animate: true,
                                    animationDuration: 500,
                                }}                          
                            >
                            </LineChart>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={this.hendlerClick}>
                            <LineChart
                                style={{ height: 150 }}
                                data={smooth}
                                svg={{
                                    stroke: 'rgb(255, 255, 255)',
                                    strokeWidth: 2,
                                    animate: true,
                                    animationDuration: 500,
                                }}                          
                            >
                            </LineChart>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={this.hendlerClick}>
                            <LineChart
                                style={{ height: 150 }}
                                data={down}
                                svg={{
                                    stroke: 'rgb(255, 255, 255)',
                                    strokeWidth: 2,
                                    animate: true,
                                    animationDuration: 500,
                                }}                          
                            >
                            </LineChart>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={this.hendlerClick}>
                            <LineChart
                                style={{ height: 150 }}
                                data={concave}
                                svg={{
                                    stroke: 'rgb(255, 255, 255)',
                                    strokeWidth: 2,
                                    animate: true,
                                    animationDuration: 500,
                                }}                          
                            >
                            </LineChart>
                    </TouchableOpacity>
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
        width: "45%",
        height: "45%",
        margin: '2.5%',
        padding: 5,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        overflow: 'hidden',
    },
    box2: {
        width: "80%",
        height: "80%",
        padding: 5,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
      },
      modal: {
        alignSelf: 'center',
        position:'absolute',
        backgroundColor:'white',
        marginHorizontal:30,
        paddingHorizontal:30,
        paddingVertical:20,
        justifyContent:'space-between',
        alignItems: 'center',
      },
      closeButton: {
        marginTop: 10,
      },
     
});