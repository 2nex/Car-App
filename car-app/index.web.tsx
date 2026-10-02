import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name} from './app.json';
import './web/fonts.css';

AppRegistry.registerComponent(name, () => App);
AppRegistry.runApplication(name, {rootTag: document.getElementById('root')});
