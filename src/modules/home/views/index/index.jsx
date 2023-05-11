import React from 'react';
import { SafeAreaView, Text, StyleSheet, Button } from 'react-native'
const Index = ({ navigation}) => {
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

const styles = StyleSheet.create({
    view: {
        fontSize: 20,
        color: 'red',
    }
})
export default Index
