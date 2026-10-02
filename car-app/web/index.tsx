import 'react-native-gesture-handler';
import './fonts';
import React from 'react';
import {AppRegistry} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import App from '../App';

const PreviewApp = () => (
  <SafeAreaProvider>
    <App />
  </SafeAreaProvider>
);

AppRegistry.registerComponent('QentWeb', () => PreviewApp);
AppRegistry.runApplication('QentWeb', {rootTag: document.getElementById('root')});
