import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Button } from 'react-native-elements';

export default class Discription extends React.Component {
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
        isStarted:false,
    }

    hendlerStartTimer = () => {
        this.setState({ status: this.state.timer, isStarted: true }, () => {
            this.tic()
        })
    }

    tic = () => {
        this.timerId = setInterval(() => {
            if (this.state.globalTimer <= 0) return clearInterval(this.timerId);
            
            const isLess = (this.state.timer - 1) <= 0;
            const newTime = isLess ? 5 : this.state.timer - 1;
            this.setState({
                timer: newTime,
                globalTimer: this.state.globalTimer - 1,
                status: (this.state.globalTimer - 1) <= 0 ? 'over' : newTime,
                curentSpinner: isLess ? this.state.curentSpinner + 1 : this.state.curentSpinner,
            })
        }, 1000);
    }

    clicker = () => {
        if (this.state.globalTimer <= 0 || !this.state.isStarted) return;
        this.setState({
            counts: {
            ...this.state.counts,
            [this.state.curentSpinner]: this.state.counts[this.state.curentSpinner] + 1
            }
        });
    }

    onPress = () => {
        console.log(this.props)

        const arr = Object.values(this.state.counts) 
        
        this.props.saveCountsTepping(arr)
        this.props.history.push("/charts")    
    }
    getStyle = (index) => {
        const commonStyle = styles.slot;
        if (!this.state.isStarted) return commonStyle;
        
        if (index*5 <= 30 - this.state.globalTimer) {
        commonStyle.backgroundColor = 'red';
        } else {
        commonStyle;
        }
        return commonStyle;
    }
    hendlerClick = () => {
        this.props.history.push("/charts")
    }
    
    render() {
        const { counts, curentSpinner } = this.state
        
        const countKeys = Object.keys(this.state.counts).length;

        const numbers = [1, 2, 3, 4, 5, 6];

        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('../../../../image/page1.jpg')}
                />
                <View style={styles.box1}>
                    {numbers.map((number, index) => (
                        <Text style={this.getStyle(index)}>
                            {number}
                        </Text>
                    ))}
                </View>
                <View><Text style={styles.textView}>{counts[curentSpinner]}</Text></View>
                <View style={styles.box2}>
                    <Text
                        style={styles.timer}
                        onPress={curentSpinner === countKeys? this.onPress: this.hendlerStartTimer}
                    >{this.state.status}
                    </Text>
                </View>
                <View style={styles.box3}>
                    <Button
                        buttonStyle={styles.click}
                        title='' 
                        onPress={this.clicker}
                    />
                </View>
                <View>
                    <Button
                    buttonStyle={styles.next}
                    title='костыль'
                    onPress={this.hendlerClick}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        
        alignItems: 'center',
        justifyContent: 'center',
    },
    box1: {
        // flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    box2: {
        // flex: 3,
        width: '100%',
        height: '35%',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    box3: {
        // flex: 5,
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    slot: {
        backgroundColor: '#FF8E00',
        marginTop: 10,
        padding: 10,
        color: 'white',
        borderColor: 'black',
        borderWidth: 2,
        margin: 15,
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
    },
    click: {
        backgroundColor: '#FF8E00', 
        width: '90%',
        height: '70%',
        borderRadius: 10,
    },
    textView: {
        fontSize: 22,
    },
    next: {
        backgroundColor: '#FF8E00',
        padding: 10,
        color: 'white',
        borderColor: 'black',
        borderWidth: 2,
        margin: 15,
        height: 50,
    },
  });