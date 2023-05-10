import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.view}>
      <Text style={styles.text}>Hello, world!</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view: {},
  text: {
    color: '#ff0000',
  }
})

export default App;
