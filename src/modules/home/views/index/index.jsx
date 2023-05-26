import React from 'react';
import { View, Button } from 'react-native'
import Text from '../../../../components/text'
import AdaptStyleSheet from '../../../../utils/adaptStyleSheet';

const Index = ({ navigation }) => {
  const handleGoUser = () => {
    navigation.navigate('home/user')
  };
  return (
    <View style={styles.view}>
        <Text>index</Text>
        <Button
          onPress={handleGoUser}
          title="Go user">
        </Button>
      </View>
    );
};

const styles = AdaptStyleSheet.create({
  view: {
    fontSize: 20,
    color: 'red',
  }
})
export default Index
