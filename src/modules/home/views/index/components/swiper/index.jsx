import React, { useState } from "react";
import { View } from "react-native";
import SwiperFlatList from 'react-native-swiper-flatlist';

import { deviceScreen } from '../../../../../../utils/device'
import AdaptStyleSheet from "../../../../../../utils/adaptStyleSheet";

const styles = AdaptStyleSheet.create({
  wrap: {
    margin: 10,
    borderRadius: 6,
    overflow: 'hidden',
  },
  item: {
    height: 100,
    width: deviceScreen.width - 20,
  }
})
export default function () {
  const [list ,setList] = useState(['red', 'blue'])
  return (
    <View style={styles.wrap}>
      <SwiperFlatList>
        {
          list.map((backgroundColor) => (
            <View style={[styles.item, { backgroundColor }]} />
          ))
        }
      </SwiperFlatList>

    </View>
  )
}