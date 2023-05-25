import React, {useCallback} from 'react';
import {View, TouchableWithoutFeedback, SafeAreaView} from 'react-native';

import Text from '../../../../components/text';
import adaptStyleSheet from '../../../../utils/adaptStyleSheet';

const styles = (function () {
  const btnText = {
    lineHeight: 24,
    fontSize: 12,
    color: '#808080',
  };
  return adaptStyleSheet.create({
    wrap: {
      zIndex: 9,
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      shadowColor: 'rgba(0, 0, 0, 0.08)',
      shadowRadius: 10,
      shadowOpacity: 1,
    },
    btn: {
      width: 0,
      flex: 1,
      paddingTop: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnText,
    activeBtnText: {
      ...btnText,
      color: '#039bfb',
    },
  });
})();

export default function ({routes, onChange, active}) {
  const handleClick = useCallback(
    data => {
      if (data !== active) {
        onChange(data);
      }
    },
    [active, onChange],
  );
  return (
    <SafeAreaView style={styles.wrap}>
      {routes.map((route, index) => (
        <TouchableWithoutFeedback
          key={route.name}
          onPress={() => {
            handleClick(index);
          }}>
          <View style={styles.btn}>
            {route.renderIcon(index === active)}
            <Text
              style={index === active ? styles.activeBtnText : styles.btnText}>
              {route.title}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </SafeAreaView>
  );
}
