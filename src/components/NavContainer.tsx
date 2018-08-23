import React, { Component } from 'react';
import { NavigationProp, NavigationState } from 'react-navigation';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import { connect, Provider } from 'react-redux';
import Router from '../Router';
import Store, { IState } from '../Store';

interface IProps extends NavigationProp<NavigationState> { }

const container = reduxifyNavigator<IProps>(Router, 'root');

const mapStateToProps = (state: IState): IProps => ({
    dispatch: () => true,
    state: state.nav as NavigationState,
});

const AppWithNavigationState = connect<IProps, {}, {}, IState>(mapStateToProps)(container);

export default class NavContainer extends Component {
    public render = () => {
        return (
            <Provider store={Store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}
