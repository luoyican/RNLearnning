/**
 * Created by luoyican on 2016/12/12.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Navigator,
    ScrollView,
    AppRegistry,
    StyleSheet,
}from 'react-native';
import Day1MusicTitle from './Day1';
import Day2 from './Day2';
import Day3 from './Day3';
import Day4 from './Day4';

export default class chooseDays extends Component {
constructor(props){
    super(props);
    console.disableYellowBox = true;
}
    _Day1 = () => {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: '音乐',
                component: Day1MusicTitle,
                params: {}
            })
        }
    };

    _Day2 = () => {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: '屏保',
                component: Day2,
                params: {}
            })
        }
    };
    _Day3 = () => {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: '动画',
                component: Day3,
                params: {}
            })
        }
    };

    _Day4 = () => {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: '输入',
                component: Day4,
                params: {}
            })
        }
    };

    render() {
        return (
            <View style={{flex:1,}}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>请选择需要查看的某一天</Text>
                </View>
                <ScrollView style={styles.scrollView}>
                        <TouchableOpacity style={[styles.itemTouch,{backgroundColor:'#9c9993'}]} onPress={this._Day1}>
                            <Text style={styles.itemText}>Day 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.itemTouch,{backgroundColor:'#d7bfce'}]} onPress={this._Day2}>
                            <Text style={styles.itemText}>Day 2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.itemTouch,{backgroundColor:'#9c9993'}]} onPress={this._Day3}>
                            <Text style={styles.itemText}>Day 3</Text>
                        </TouchableOpacity>
                    <TouchableOpacity style={[styles.itemTouch,{backgroundColor:'#d7bfce'}]} onPress={this._Day4}>
                        <Text style={styles.itemText}>Day 4</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    titleView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#0786fe'
    },
    titleText: {
        fontSize: 24,
        color: '#e41f19'
    },
    scrollView: {
        flexDirection: 'column',
        flex: 1,
    },
    itemTouch: {
        height: 40,
        flex:1,
        justifyContent:'center'
    },
    itemText: {
        fontSize: 18,
        color: '#01fb7f',
        marginLeft:20,
    },
});
