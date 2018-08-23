import { Action, Reducer } from 'redux';

import { initTopPageState, ITopPageState } from '../states/ITopPageState';
import A2R from '../utils/ActionToReducerMapper';

export const a2r = A2R<ITopPageState>();

export const TopPageReducer: Reducer = (state: ITopPageState = initTopPageState, action: Action) => {
    return a2r.execute(state, action);
};
