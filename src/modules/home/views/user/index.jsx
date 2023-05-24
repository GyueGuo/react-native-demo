import React, { useCallback, useState } from 'react';
import { SafeAreaView, View, TouchableWithoutFeedback, Image } from 'react-native'
import AdaptStyleSheet from '../../../../utils/adaptStyleSheet';

import Text from '../../../../components/text';
import Dialog from '../../../../components/dialog';

import Arrow from '../../../../assets/svg/arrow-right.svg';
import defaultAvatar from '../../../../assets/images/default-avatar.webp';

const User = ({ navigation }) => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const handleNavigateToSetting = useCallback(() => {
    navigation.push('user/setting');
  }, [navigation]);

  const handleLogout = useCallback(() => {
    setIsDialogVisible(true)
  }, [navigation]);

  const handleDialogClose = useCallback(() => {
    setIsDialogVisible(false);
  }, []);

  return (
    <SafeAreaView>
      <View style={ styles.infoWrap }>
        <Image source={defaultAvatar} style={styles.avatar} />
        <Text style={styles.nickname}>昵称</Text>
      </View>
      <View style={ styles.menuList }>
        <TouchableWithoutFeedback  onPress={handleNavigateToSetting}>
          <View style={styles.menuItem}>
            <Text style={styles.content}>设置</Text>
            <Arrow style={styles.icon} />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={handleLogout}>
          <View style={{ ...styles.menuItem, ...styles.menuItemLastest }}>
            <Text style={styles.content}>退出登录</Text>
            <Arrow style={styles.icon} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <Dialog
        visible={isDialogVisible}
        onCancel={handleDialogClose}
        onConfirm={handleDialogClose}
        title="确定退出登录？"
        // content="退出后续重新登录"
      />
    </SafeAreaView>
  )
}
const styles = AdaptStyleSheet.create({
  infoWrap: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
  },
  nickname: {
    lineHeight: 30,
    marginTop: 8,
    fontSize: 12,
  },
  menuList: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff'
  },
  menuItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#f4f5f6',
    borderBottomWidth: 1
  },
  menuItemLastest: {
    borderBottomColor: 'transparent',
  },
  icon: {
    flexShrink: 0,
    width: 16,
    height: 16,
    color: '#808288'
  },
  content: {
    lineHeight: 50,
    fontSize: 14,
    flex: 1,
  }
})
export default User
