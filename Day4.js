/**
 * Created by luoyican on 2016/12/13.
 */
import React, {Component} from 'react';
import {
    View,
    TextInput,
    BackAndroid,
    AppRegistry,
    StyleSheet,
    Text,
} from 'react-native';

export default class Day4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: 0,
            sex: 'man',
            tips: '',
        };
    }

    componentWillMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }

    onBackAndroid = () => {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
            return true;
        }
        return false;
    };

    render() {
        return (
            <View>
                <TextInput style={styles.textInput} underlineColorAndroid="transparent"
                           placeholder="Type here to translate!" onChangeText={(text) => this.setState({name: text})}
                           value={this.state.name}/>
                <Text style={styles.text}>姓名：{this.state.name}</Text>
                <TextInput style={styles.textInput} underlineColorAndroid="transparent"
                           placeholder="Type here to translate!" onChangeText={(text) => this.setState({age: text})}/>
                <Text style={styles.text}>年龄：{this.state.age}</Text>
                <TextInput style={styles.textInput} underlineColorAndroid="transparent"
                           placeholder="Type here to translate!" onChangeText={(text) => this.setState({sex: text})}/>
                <Text style={styles.text}>性别：{this.state.sex}</Text>
                <TextInput style={styles.textInput} underlineColorAndroid="transparent"
                           placeholder="Type here to translate!" onChangeText={(text) => this.setState({tips: text})}/>
                <Text style={styles.text}>简介：{this.state.tips.split(' ').map((word) => word && '🍕').join(' ')}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 42,
        fontSize: 16,
        color: '#0062bf',
        margin: 10,
        backgroundColor: '#bcdfd9',
        borderWidth: 1,
        flex: 1,
    },
    text: {
        height: 30,
        fontSize: 20,
        color: '#ff040d',
        marginLeft: 10,
        flex: 1,
    }

});