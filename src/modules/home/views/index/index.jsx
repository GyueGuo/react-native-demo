import React from 'react';
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import Text from '../../../../components/text'
import AdaptStyleSheet from '../../../../utils/adaptStyleSheet';
import Swiper from './components/swiper'
import Search from './components/search'

const Index = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Search />
      <LinearGradient colors={['#039bfb', 'rgba(3, 155, 251, 0.8)', 'rgba(3, 155, 251, 0.4)', 'rgba(3, 155, 251, 0)']} style={styles.linearGradient}/>
      <Swiper />
    </View>
  );
};

const styles = AdaptStyleSheet.create({
  view: {
    fontSize: 20,
    color: 'red',
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: 200,
  }
})
export default Index
