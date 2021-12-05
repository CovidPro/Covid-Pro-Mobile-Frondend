import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const protocols = () => {
  
};

const Home = () => {
  
  return (
    <View>
      <Text> </Text>
      <Text>        Covid-19 Protocols</Text>  
      <Text> </Text>
      <Text>        1. Wear cloth face coverings, N95 respirator or better.</Text>
      <Text> </Text>
      <Text>        2. Frequently wash your hands with soap and water for at least 20 seconds</Text>
      <Text> </Text>
      <Text>        3. Avoid touching your eyes, nose and mouth</Text>
      <Text> </Text>
      <Text>        4. Avoid close contact with people who are sick</Text>
      <Text> </Text>
      <Text>        5. Stay home if you feel unwell</Text>
      <Text> </Text>
      <Text>        6. If you have a fever, cough and difficulty breathing, seek medical attention</Text>
      <Text> </Text>
      <Text>        7. Follow the directions of your local health authority</Text>
      <Text> </Text>
      <Text>        Stay safe!</Text>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    fontsize: 30,
    bold: {fontWeight: 'bold'},
    italic: {fontStyle: 'italic'},
    underline: {textDecorationLine: 'underline'}
  },
});

export default Home;
