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
} from 'react-native';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value:"click me",
            isfirst:true,
            timeLeft:15,
        }
    }

    componentDidMount(){

    }

    componentWillUnmount(){

    }

    _onPress(){
        if(this.state.isfirst){
            this.setState({
                value:" pless don't do that ,press me",
                isfirst:false,
            });
        }else{
            this.setState({
                value:" press me",
                isfirst:true,
            });
        }
    }

    _onTime(){
        if(this.state.isfirst){
            this.timer = setInterval(()=>{this.setState({timeLeft: --this.state.timeLeft,})},3000);
            isfirst=false;
        }else{
            this.timer && clearInterval(this.timer);
            isfirst=true;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this._onPress()}>
                    <Text style={styles.instructions}>
                        {this.state.value}
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={()=>this._onTime()}>
                    <Text style={styles.instructions}>
                        点我开始倒计时15秒
                    </Text>
                </TouchableOpacity>
                <Text>倒计时{this.state.timeLeft}秒</Text>
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
    },
});

AppRegistry.registerComponent('RN30Days', ()=>Day2);
