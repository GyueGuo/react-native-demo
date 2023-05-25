import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import AdaptStyleSheet from '../../../../utils/adaptStyleSheet';
import routes from '../../routes/config';
import Tab from '../../components/tab';
import Text from '../../../../components/text';

const styles = AdaptStyleSheet.create({
  wrap: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#f2f2f2',
  },
});

export default (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleTabChange = useCallback(data => {
    setActiveIndex(data);
  }, []);
  return (
    <View style={styles.wrap}>
      {
          routes.map((route, index) => (
              index === activeIndex ? (<route.component { ...props } key={route.name}/>) : null
          ))
      }
      <Tab onChange={handleTabChange} active={activeIndex} routes={routes} />
    </View>
  );
};