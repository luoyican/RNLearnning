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
} from 'react-native';

export default class MusicTab extends Component {
    render() {
        return (
            <View>
                <View style={[styles.tab,{backgroundColor:this.props.backgroundColor}]}>
                    <Image style={[styles.image,]}
                           source={{uri: this.props.uri}}></Image>
                    <View style={[styles.nameAndAuthor,]}>
                        <Text style={[styles.name,]}>{this.props.name}</Text>
                        <Text style={[styles.author,]}>{this.props.author}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export class MusicTitle extends Component{
    render(){
        return (
            <View style={{height:60,flexDirection: 'row', alignItems: 'center', justifyContent: 'center',backgroundColor:"#33FFFF"}}>
                <Text style={{fontSize: 24,color:'red'}}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tab: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 40,
        width: 40,
        margin: 10,
    },
    nameAndAuthor: {
        flex: 1,
        paddingTop: 10,
    },
    name: {
        flex: 1,
        fontSize: 14,
        color: 'black',
    },
    author: {
        flex: 1,
        fontSize: 12,
        color: 'grey',
    },
});

// AppRegistry.registerComponent('RN30Days', ()=>MusicTab);