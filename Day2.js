/**
 * Created by luoyican on 2016/11/24.
 */
import React from 'react';
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    AppRegistry,
    Image,
} from 'react-native';

class Day2 extends React.Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            isfirst: true,
            timeLeft: 15,
            value: "倒计时" + 15 + "秒",
            iconBG: require('./img/Koala.jpg'),
            pressTime: 0,
        }

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    changeBG() {
        let i = this.state.pressTime % 8;
        this.state.pressTime += 1;
        switch (i) {
            case 0:
                this.setState({
                    iconBG: require('./img/Hydrangeas.jpg'),
                });
                break;
            case 1:
                this.setState({
                    iconBG: require('./img/Desert.jpg'),
                });
                break;
            case 2:
                this.setState({
                    iconBG: require('./img/Jellyfish.jpg'),
                });
                break;
            case 3:
                this.setState({
                    iconBG: require('./img/Koala.jpg'),
                });
                break;
            case 4:
                this.setState({
                    iconBG: require('./img/Chrysanthemum.jpg'),
                });
                break;
            case 5:
                this.setState({
                    iconBG: require('./img/Lighthouse.jpg'),
                });
                break;
            case 6:
                this.setState({
                    iconBG: require('./img/Penguins.jpg'),
                });
                break;
            case 7:
                this.setState({
                    iconBG: require('./img/Tulips.jpg'),
                });

        }
    }

    _onPress() {
        this.changeBG();
    }

    _onBegin() {
        this.timer && clearInterval(this.timer);

        this.timer = setInterval(()=> {
            if (this.state.timeLeft > 0) {
                this.changeBG();
                this.setState({
                    timeLeft: --this.state.timeLeft,
                    value: "倒计时" + this.state.timeLeft + "秒",
                })
            } else {
                this.timer && clearInterval(this.timer);
                this.setState({
                    value: "倒计时完成lo，精彩继续",
                });
            }
        }, 500);

    }

    _onStop() {
        if (this.state.timeLeft > 10) {
            console.log('this.state.timeLeft > 10');
            this.timer && clearInterval(this.timer);
        } else {
            console.log('this.state.timeLeft <= 10');
            this.setState({
                timeLeft: this.state.timeLeft * 2 + 10,
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={this.state.iconBG}
                       style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
                        <Image source={this.state.iconBG} style={{height: 100, width: 100,}}/>

                        <TouchableOpacity onPress={()=>this._onPress()}>
                            <Text style={styles.instructions}>
                                更改背景图
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>this._onStop()}>
                            <Text style={styles.instructions}>
                                Pause or Reset
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>this._onBegin()}>
                            <Text style={styles.instructions}>
                                点我开始倒计时{this.state.timeLeft}秒
                            </Text>
                        </TouchableOpacity>
                        <Text>{this.state.value}</Text>
                    </View>
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    instructions: {
        fontSize: 16,
        textAlign: 'center',
        margin: 15,
        color: 'red',
    },
});

AppRegistry.registerComponent('RN30Days', ()=>Day2);
