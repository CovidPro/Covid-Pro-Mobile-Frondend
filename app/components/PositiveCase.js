import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { Button } from 'react-native-web';
import client from '../api/client';
import axios from 'axios';

const positive = async () => {
  Alert.alert('You are positive');
  console.log('positive');
  await client.post('/positive');
  // axios.post('http://localhost:5000/positive');
};
  
const PositiveCase = () => {
  return (
    <View style={styles.container}>
      <Text>If You Are Covid-19 Positive</Text>
        <Button title={'CLICK HERE'} onPress={() => positive()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PositiveCase;
