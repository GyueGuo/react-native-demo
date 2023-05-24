import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native'
import AdaptStyleSheet from '../../../../utils/adaptStyleSheet';

const Index = ({ navigation }) => {
  const handleGoUser = () => {
    navigation.navigate('home/user')
  };
  return (
    <SafeAreaView style={styles.view}>
      <Text>index</Text>
      <Button
        onPress={handleGoUser}
        title="Go user">
      </Button>
    </SafeAreaView>
  );
};

const styles = AdaptStyleSheet.create({
  view: {
    fontSize: 20,
    color: 'red',
  }
})
export default Index
