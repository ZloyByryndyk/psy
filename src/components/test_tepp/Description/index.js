import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Button } from 'react-native-elements';

export default class Description extends React.Component {
    hendlerClick = () => {
            this.props.history.push("/test_tepp")
      }

    render() {
        return (
            <View style={styles.container}>
                <Image
                        style={styles.image}
                        source={require('../../../image/page1.jpg')}
                />
                <View style={styles.box}>
                    <Text>По сигналу экспериментатора Вы должны начать проставлять точки в каждом квадрате бланка. В течение 5 секунд необходимо поставить как можно больше точек. Переход с одного квадрата на другой осуществляется по команде экспериментатора, не прерывая работу и только по направлению часовой стрелки. Все время работайте в максимальном для себя темпе. Возьмите в правую (или левую руку) карандаш и поставьте его перед первым квадратом стандартного бланка". 
                          Экспериментатор подает сигнал: "Начали", а затем через каждые 5 секунд дает команду: "Перейти на другой квадрат". По истечении 5 секунд работы в 6-м квадрате экспериментатор подает команду: "Стоп"</Text>
                    <Button
                        buttonStyle={styles.start}
                        title='Приступить'
                        onPress={this.hendlerClick}/>
                </View>
            </View>
        )
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
        padding: 20,
    },
    start: {
        backgroundColor: '#FF8E00',
        padding: 5,
        marginTop: 40,
    },
  });