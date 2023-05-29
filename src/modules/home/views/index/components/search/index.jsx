import React, { useCallback, useMemo, useState } from "react";
import { View, TouchableWithoutFeedback, Text } from "react-native";
import SwiperFlatList from 'react-native-swiper-flatlist';

import { safeAreaHeight } from '../../../../../../components/navigator'
import ScanIcon from '../../../../../../assets/svg/scan.svg'
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
    borderRadius: 15,
    height: 30,
    flex: 1,
    overflow: 'hidden',
  },
  icon: {
    marginLeft: 10,
  },
  swiperItem: {
    paddingLeft: 10,
    paddingRight: 10,
    width: '100%',
    lineHeight: 30,
    height: 30,
  }
})

export default function () {
  const [list, setList ] = useState([1,2,3]);
  const finalWrapStyles = useMemo(() => ({
    ...styles.wrap,
    paddingTop: styles.wrap.paddingLeft + safeAreaHeight
  }), []);
  const handleScan = useCallback(() => {

  }, []);
  const handleSearch = useCallback(() => {

  }, []);
  const renderSwiperItem = useCallback((data) => {
    console.log(data)
    return (
      <Text key={data} style={styles.swiperItem} numberOfLines={1}>{data}</Text>
    )
  }, []);
  return (
    <View style={finalWrapStyles}>
      <TouchableWithoutFeedback onPress={handleSearch}>
        <View style={styles.search}>
          <SwiperFlatList
            vertical
            autoplay
            autoplayLoop
            autoplayLoopKeepAnimation
            data={list}
            renderItem={renderSwiperItem}
          />
        </View>
      </TouchableWithoutFeedback>
      <ScanIcon style={styles.icon} color="#fff" width={30} height={30} onClick={handleScan}/>
    </View>
  )
}