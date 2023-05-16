import React from 'react';
import { SafeAreaView, Text, StyleSheet, Button } from 'react-native'
const Index = ({ navigation}) => {
    const handleClick = () => {
        navigation.navigate('user/setting');
    };
    return (
        <SafeAreaView style={styles.view}>
            <Text>user-center</Text>
            <Button onPress={ handleClick } title="go user-setting"/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    view: {
        fontSize: 20,
    }
})
export default Index
