import React, { useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import Navigator, { navigatorHeight } from '../../../../components/navigator';
import AdaptStyleSheet from '../../../../utils/adaptStyleSheet';

const Index = ({ navigation }) => {
  const [num, setNum] = useState(0);
  const finalWrapStyles = useMemo(() => ({
    ...styles.view,
    paddingTop: navigatorHeight,
  }), []);
  return (
    <View style={finalWrapStyles}>
      <Navigator title="设置" navigation={navigation}/>
      <Text>user-setting</Text>
      <Text onPress={() => {
        setNum(num => num+ 1)
      }}>{num}</Text>
    </View>
  );
};

const styles = AdaptStyleSheet.create({
  view: {
    fontSize: 20,
  }
})
export default Index
