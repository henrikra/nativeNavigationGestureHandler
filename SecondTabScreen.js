import React, {Component} from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

import {
    PanGestureHandler,
    ScrollView,
    State,
} from 'react-native-gesture-handler';

export class DraggableBox extends Component {
    constructor(props) {
      super(props);
      this._translateX = new Animated.Value(0);
      this._translateY = new Animated.Value(0);
      this._lastOffset = { x: 0, y: 0 };
      this._onGestureEvent = Animated.event(
        [
          {
            nativeEvent: {
              translationX: this._translateX,
              translationY: this._translateY,
            },
          },
        ],
        { useNativeDriver: true }
      );
    }
    _onHandlerStateChange = event => {
      if (event.nativeEvent.oldState === State.ACTIVE) {
        this._lastOffset.x += event.nativeEvent.translationX;
        this._lastOffset.y += event.nativeEvent.translationY;
        this._translateX.setOffset(this._lastOffset.x);
        this._translateX.setValue(0);
        this._translateY.setOffset(this._lastOffset.y);
        this._translateY.setValue(0);
      }
    };
    render() {
      return (
        <PanGestureHandler
          {...this.props}
          onGestureEvent={this._onGestureEvent}
          onHandlerStateChange={this._onHandlerStateChange}
          id="dragbox">
          <Animated.View
            style={[
              styles.box,
              {
                transform: [
                  { translateX: this._translateX },
                  { translateY: this._translateY },
                ],
              },
            ]}
          />
        </PanGestureHandler>
      );
    }
  }

const SecondScreen = () => {
    console.log('SecondScreen');
    return (
        <View>
            <Text>SecondScreen</Text>
            <DraggableBox minDist={30} />
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
      width: 150,
      height: 150,
      alignSelf: 'center',
      backgroundColor: 'plum',
      margin: 10,
      zIndex: 200,
    },
  });

export default SecondScreen;