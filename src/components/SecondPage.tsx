import { Text, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ISecondPageState from '../states/ISecondPage';
import { IState } from '../Store';

interface IProps {
    data: ISecondPageState;
    navigation?: NavigationScreenProp<IState>;
}

class SecondPage extends Component<IProps> {
    public render() {
        return (
            <View>
                <Text>{this.props.data.text}</Text>
            </View>
        );
    }
}

const mapStateToProps = (state: IState): IProps => {
    return {
        data: state.secondPage,
    };
};

export default connect(mapStateToProps)(SecondPage);
