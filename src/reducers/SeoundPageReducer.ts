import { Action, Reducer } from 'redux';

import ISecondPageState, { initSecondPageState } from '../states/ISecondPage';
import A2R from '../utils/ActionToReducerMapper';

export const a2r = A2R<ISecondPageState>();

export const SecondPageReducer: Reducer = (state: ISecondPageState = initSecondPageState, action: Action) => {
    return a2r.execute(state, action);
};
