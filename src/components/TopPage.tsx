import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { connect } from 'react-redux';
import { ITopPageState } from '../states/ITopPageState';
import { IState } from '../Store';

interface IProps {
    data: ITopPageState;
    navigation?: NavigationScreenProp<IState>;
}

class TopPage extends Component<IProps> {
    public render() {
        const nav = this.props.navigation as NavigationScreenProp<IState>;
        return (
            <View style={styles.container}>
                <Text>{this.props.data.text}</Text>
                <Button title="次のページ" onPress={() => {nav.navigate('Second'); }}></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
    },
});

const mapStateToProps = (state: IState): IProps => {
    return {
        data: state.topPage,
    };
};

export default connect(mapStateToProps)(TopPage);
