/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './Src/Navigations/App';
import signupscreen from './Src/login/Signupscreen';
import Loginscreen from './Src/login/Loginscreen';
import Welcomes from './Src/login/Welcomes';

AppRegistry.registerComponent(appName, () => App);
