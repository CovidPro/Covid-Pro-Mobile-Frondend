import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const OCR = () => {
  return (
    <View style={styles.container}>
      <Text>Scan Your Id</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OCR;
