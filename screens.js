import { Navigation } from 'react-native-navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import FirstTabScreen from './FirstTabScreen';
import SecondTabScreen from './SecondTabScreen';

export function registerScreens() {
  Navigation.registerComponent('example.FirstTabScreen', () => gestureHandlerRootHOC(FirstTabScreen));
  Navigation.registerComponent('example.SecondTabScreen', () => gestureHandlerRootHOC(SecondTabScreen));
}