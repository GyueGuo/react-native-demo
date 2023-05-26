import React, { useMemo } from "react";
import { View } from "react-native";
import { safeAreaHeight } from '../../../../../../components/navigator'

import AdaptStyleSheet from "../../../../../../utils/adaptStyleSheet";

const styles = AdaptStyleSheet.create({
  wrap: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    backgroundColor: '#039bfb',
  },
  search: {
    backgroundColor: '#fff',
    borderRadius: 13,
    height: 26,
    flex: 1,
  }
})

export default function () {
  const finalWrapStyles = useMemo(() => ({
    ...styles.wrap,
    paddingTop: styles.wrap.paddingLeft + safeAreaHeight
  }), [])
  return (
    <View style={finalWrapStyles}>
      <View style={styles.search}></View>
      <View style={styles.icon}></View>
    </View>
  )
}