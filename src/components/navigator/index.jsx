import React, { useCallback, useMemo } from "react";
import { NativeModules, View, Platform, TouchableWithoutFeedback } from "react-native";
import Text from '../text'
import Arrow from '../../assets/svg/arrow-right.svg';
import AdaptStyleSheet from "../../utils/adaptStyleSheet";

const { StatusBarManager } = NativeModules;
const extraHeight = Platform.OS === 'ios' ? StatusBarManager.HEIGHT : StatusBarManager.currentHeight

const wrapHeight = 30;
const styles = AdaptStyleSheet.create({
  wrap: {
    zIndex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  back: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    paddingLeft: 10,
    paddingTop: 4, 
    paddingBottom: 4,
  },
  backIcon: {
    color: '#999',
    transform: [{
      rotate: '180deg',
    }]
  },
  title: {
    marginLeft: 50,
    marginRight: 50,
    fontSize: 14,
    lineHeight: wrapHeight,
    color: '#333',
    whiteSpace: 'nowrap'
  }
})

export const navigatorHeight = extraHeight + wrapHeight;

export default function Navigator ({ isLeftVisible = true, onBack, title, navigation, wrapStyles = {} }) {
  const handleBackClick = useCallback(() => {
    if (typeof onBack === 'function') {
      onBack()
      return
    }
    if (navigation && typeof navigation.goBack === 'function') {
      navigation.goBack();
    }
  }, [onBack, navigation])
  const finalWrapStyles = useMemo(() => ({
    ...styles.wrap,
    ...wrapStyles,
    paddingTop: extraHeight,
  }), [wrapStyles]);
  return (
    <View style={finalWrapStyles}>
      { isLeftVisible ? (
        <TouchableWithoutFeedback  onPress={handleBackClick}>
          <View  style={styles.back}>
            <Arrow style={styles.backIcon} width={22} height={22}/>
          </View>
        </TouchableWithoutFeedback>
      ) : null }
      { title ? <Text style={styles.title}  numberOfLines={1}>{ title }</Text> : null }
    </View>
  );
}