import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { Button } from 'react-native-web';
import client from '../api/client';

const positive = async() => {
  console.log('positive......');
  const res = await client.post('/positive', 'Im Covid-19 positive');
};
  
const PositiveCase = () => {
  return (
    <View style={styles.container}>
      <Text>If You Are Covid-19 Positive</Text>
        <Button onPress={()=> positive()} title='Click Here' />
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
