import { createStackNavigator } from 'react-navigation';
import SecondPage from './components/SecondPage';
import TopPage from './components/TopPage';

export const RootPage = 'Home';

const stackNav = createStackNavigator({
    Home: {
        screen: TopPage,
    },
    Second: {
        screen: SecondPage,
    },
});

export default stackNav;
