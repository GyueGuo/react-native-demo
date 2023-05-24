import React from 'react';
import { SafeAreaView, Text } from 'react-native'
import AdaptStyleSheet from '../../../../utils/adaptStyleSheet';
const Index = () => (
  <SafeAreaView style={styles.view}><Text>user-setting</Text></SafeAreaView>
)

const styles = AdaptStyleSheet.create({
  view: {
    fontSize: 20,
  }
})
export default Index
