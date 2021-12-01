import React from 'react';
import { View, StyleSheet, Text, Alert, Button } from 'react-native';
import client from '../api/client';
import axios from 'axios';




const positive = async () => {
  
  Alert.alert('You are positive');
  console.log('positive');
  await client.post('/positive', { ...global.foo });
  // axios.post('http://localhost:5000/positive');
};
  
const PositiveCase = () => {

  const { email, password } = global.foo;
  return (
    <View style={styles.container}>
      <Text>{email}</Text>
      <Text>If You Are Covid-19 Positive</Text>
        <Button title={'CLICK HERE'} onPress={() => positive()} ></Button>
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
