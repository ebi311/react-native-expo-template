import { NavigationAction } from 'react-navigation';
import stackNav, { RootPage } from '../Router';

const navState = stackNav.router.getStateForAction(
    stackNav.router.getActionForPathAndParams(RootPage) as NavigationAction);

const NavReducer = (state = navState, action: NavigationAction) => {
    const nextState = stackNav.router.getStateForAction(action, state);
    return nextState || state;
};

export default NavReducer;
