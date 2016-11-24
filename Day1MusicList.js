import React, {Component} from 'react';
import {
    Platform,
    ListView,
    StyleSheet,
    StatusBar,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
    AppRegistry,
    ScrollView,
    Image,
    ToastAndroid,
    BackAndroid,
    ActivityIndicator,
    InteractionManager,
} from 'react-native';

import Video from 'react-native-video';

import MusicTab, {MusicTitle} from './MusicTab';

export default class Day1MusicList extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            mp3Url: '',
            title: '',
            musics: [],
            isLoading: true,
        };

    }

//组件挂载的时候调用
    componentDidMount() {
        InteractionManager.runAfterInteractions(() =>this.fetchMusic())
    }

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

    onPressMusic(mp3Url, title) {
        console.log(title);
        ToastAndroid.show(title, ToastAndroid.LONG);
        this.setState({
            mp3Url: mp3Url,
        })
    }

    fetchMusic = ()=> {
        ToastAndroid.show("dsdd", ToastAndroid.LONG);
        fetch(this.props.httpUrl)
            .then((response) =>response.json())
            .then((responseData) => {
                this.setState({
                    title: responseData.result.name,
                    musics: responseData.result.tracks,
                    isLoading: false,
                });
            });
    };
    
    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}}>
                    <ActivityIndicator size='large'/>
                    <Text>请稍等，正在加载中...</Text>
                </View>
            );
        } else {
            return (
                <View>
                    <MusicTitle
                        title={this.state.title}/>
                    <ScrollView>
                        {this.state.musics.map((music, index) =>
                            <TouchableOpacity onPress={()=> {
                                this.onPressMusic(music.mp3Url, music.name,)
                            }}>
                                <MusicTab
                                    backgroundColor={index % 2 == 0 ? '#CCFFFF' : '#E5FFCC'}
                                    uri={music.album.picUrl}
                                    name={music.name}
                                    author={music.artists[0].name}/>
                            </TouchableOpacity>
                        )}
                        <Video source={{
                            uri: this.state.mp3Url,
                        }}
                               rate={1.0}                     // 0 is paused, 1 is normal.
                               volume={1.0}                   // 0 is muted, 1 is normal.
                               muted={false}                  // Mutes the audio entirely.
                               paused={false}                 // Pauses playback entirely.
                               resizeMode="cover"             // Fill the whole screen at aspect ratio.
                               repeat={false}                  // Repeat forever.
                               playInBackground={true} // Audio continues to play when app entering background.
                            // onLoadStart={this.loadStart}   // Callback when video starts to load
                            //onLoad={this.setDuration}      // Callback when video loads
                            // onProgress={this.setTime}      // Callback every ~250ms with currentTime
                            // onEnd={this.onEnd}             // Callback when playback finishes
                            // onError={this.videoError}      // Callback when video cannot be loaded
                        />
                    </ScrollView>
                </View>
            );
        }
    }
}

// AppRegistry.registerComponent('RN30Days', ()=>Day1);