import './AsyncStorage'
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Navigator,
    ScrollView,
    AppRegistry,
}from 'react-native';
import chooseDays from './ChooseDays';

class chooseDaysNavigator extends Component {
    render() {
        let defaultName = 'ChooseDays';
        let defaultComponent = chooseDays;
        return (
            <Navigator
                initialRoute={{name: defaultName, component: defaultComponent}}
                configureScene={(route) => Navigator.SceneConfigs.HorizontalSwipeJump
                }
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator}/>
                }}/>
        );
    }
}

AppRegistry.registerComponent('RN30Days', () => chooseDaysNavigator);