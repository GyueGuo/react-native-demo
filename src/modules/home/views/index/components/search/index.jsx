import React, { useMemo } from "react";
import { View } from "react-native";
import { safeAreaHeight } from '../../../../../../components/navigator'

import AdaptStyleSheet from "../../../../../../utils/adaptStyleSheet";

const styles = AdaptStyleSheet.create({
  wrap: {
    backgroundColor: '#039bfb',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    flexDirection: 'row',
  },
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