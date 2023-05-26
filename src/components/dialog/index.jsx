import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import AdaptStyleSheet from '../../utils/adaptStyleSheet';
import {deviceScreen} from '../../utils/device';
import Text from '../text';

const styles = AdaptStyleSheet.create({
  wrap: {
    zIndex: 9999,
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  container: {
    zIndex: 2,
    width: '75%',
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 6,
    backgroundColor: '#ffffff'
  },
  title: {
    fontSize: 16,
    lineHeight: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  content: {
    fontSize: 14,
    lineHeight: 28,
    textAlign: 'center'
  },
  btnWrap: {
    paddingTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    width: '35%',
    overflow: 'hidden',
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#7D0909',
  },
  confirmBtn: {
    lineHeight: 24,
    color: '#ffffff',
    backgroundColor: '#7D0909',
    textAlign: 'center',
  },
  cancelBtn: {
    lineHeight: 24,
    color: '#7D0909',
    textAlign: 'center',
  }
})

export default ({ visible, title, content, confirmText, cancelText, onConfirm, onCancel, onOverlayClick }) => {
  return visible ? (
    <View style={{...styles.wrap, width: deviceScreen.width, height: deviceScreen.height}}>
      <TouchableWithoutFeedback onPress={onOverlayClick || onCancel}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <View style={styles.container}>
        { title ? (<Text style={ styles.title }>{title}</Text>) : null }
        {content ? (<Text style={ styles.content }>{content}</Text>) : null }
        <View style={styles.btnWrap}>
          { onConfirm ? (<View style={styles.btn}>
            <Text style={styles.confirmBtn} onPress={onConfirm}>{ confirmText || '确定'}</Text>
            </View>) : null }
          { onCancel ? (<View style={styles.btn}><Text style={styles.cancelBtn} onPress={onCancel}>{ cancelText  || '取消'}</Text></View>) : null }
        </View>
      </View>
    </View>
  ) : null
}
