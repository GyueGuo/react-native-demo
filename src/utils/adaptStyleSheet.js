import {StyleSheet} from 'react-native';
import {deviceScreen} from './device';

const deviceWidthDp = deviceScreen.width;
const deviceHeightDp = deviceScreen.height;

const w = Math.min(deviceWidthDp, deviceHeightDp);

const uiWidthPx = 375;

export const pxToDp = uiElementPx => {
  return (uiElementPx * w) / uiWidthPx;
};

const AdaptStyleSheet = {
  create(style) {
    let s = {...style};
    // 目前仅对以下的属性进行处理
    let list = [
      'width',
      'height',
      'margin',
      'marginTop',
      'marginBottom',
      'marginLeft',
      'marginRight',
      'marginVertical',
      'marginHorizontal',
      'marginEnd',
      'marginStart',
      'padding',
      'paddingTop',
      'paddingRight',
      'paddingBottom',
      'paddingLeft',
      'paddingHorizontal',
      'paddingVertical',
      'paddingStart',
      'paddingEnd',
      'borderWidth',
      'borderEndWidth',
      'borderTopWidth',
      'borderLeftWidth',
      'borderRightWidth',
      'borderStartWidth',
      'borderBottomWidth',
      'borderRadius',
      'borderTopEndRadius',
      'borderTopLeftRadius',
      'borderTopRightRadius',
      'borderTopStartRadius',
      'borderBottomEndRadius',
      'borderBottomLeftRadius',
      'borderBottomRightRadius',
      'borderBottomStartRadius',
      'top',
      'right',
      'bottom',
      'left',
      'fontSize',
      'lineHeight',
      'minWidth',
      'maxWidth',
      'minHeight',
      'maxHeight',
    ];
    for (let outKey in s) {
      for (let innerKey in s[outKey]) {
        if (
          list.includes(innerKey) &&
          typeof s[outKey][innerKey] === 'number'
        ) {
          s[outKey][innerKey] = pxToDp(s[outKey][innerKey]);
        }
      }
    }
    return StyleSheet.create(s);
  },
};

export default AdaptStyleSheet;
