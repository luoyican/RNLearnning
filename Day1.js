import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    StatusBar,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
    AppRegistry,
    ListView,
    Image,
    ToastAndroid,
    BackAndroid,
    Navigator,
} from 'react-native';

import Day1MusicList from './Day1MusicList';

export default class Day1MusicTitle extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['金马奖金曲', '春天', '某用户喜欢的歌', '任贤齐', '谁喜欢的音乐']),
            album: ['37880978', '58451795', '33234785', '378807758', '12434535'],
        };
    }

    //android返回键处理
    componentWillMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }

    onBackAndroid = ()=> {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
            return true;
        }
        return false;
    };

    onPressButton(index) {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: '音乐',
                component: Day1MusicList,
                params: {
                    httpUrl: ('http://music.163.com/api/playlist/detail?id=' + this.state.album[index]),
                }
            })
        }
    }

    _renderRow(rowData, sectionID, rowID) {
        return (
            <TouchableOpacity
                style={{
                    height: 50,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingLeft: 10,
                    backgroundColor: (Number(rowID) % 2 == 0 ? '#CCFFFF' : '#E5FFCC'),
                }}
                activeOpacity={0.8} onPress={()=> {
                this.onPressButton(rowID);
            }}>
                <Text style={{fontSize: 20}}>{1 + Number(rowID)}：{rowData}</Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={{flex: 1,}}>
                <View style={{
                    height: 60,
                    backgroundColor: 'cyan',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{fontSize: 24,}}>选择音乐类型</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}/>
            </View>
        );
    }
}

AppRegistry.registerComponent('RN30Days', ()=>Day1MusicTitle);