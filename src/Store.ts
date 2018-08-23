import { NavigationState } from 'react-navigation';
import {
    createNavigationReducer,
    createReactNavigationReduxMiddleware,
    ReducerState as NavState,
} from 'react-navigation-redux-helpers';
import { applyMiddleware, combineReducers, createStore } from 'redux';

import { SecondPageReducer } from './reducers/SeoundPageReducer';
import { TopPageReducer } from './reducers/TopPageReducer';
import stackNav from './Router';
import ISecondPageState from './states/ISecondPage';
import { ITopPageState } from './states/ITopPageState';

const navReducer = createNavigationReducer(stackNav);

export interface IState {
    nav: NavState;
    secondPage: ISecondPageState;
    topPage: ITopPageState;
    // 追加する
}

export const reducers = combineReducers<IState>({
    nav: navReducer,
    secondPage: SecondPageReducer,
    topPage: TopPageReducer,
});

const middleware = createReactNavigationReduxMiddleware(
    'root',
    (state: IState) => state.nav as NavigationState,
);

export default createStore(reducers, applyMiddleware(middleware));
