import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import AdaptStyleSheet from '../../utils/adaptStyleSheet';

const styles = AdaptStyleSheet.create({
  wrap: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -50}, {translateY: -50}],
    width: 100,
    height: 100,
    justifyContent: 'center',
  },
});
export default function ({visible = true, size, color = '#999999'}) {
  return visible ? (
    <View style={styles.wrap}>
      <ActivityIndicator size={size} color={color} />
    </View>
  ) : null;
}
