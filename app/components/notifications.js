import React from 'react';
import { View, StyleSheet, Text, Button, Alert } from 'react-native';
import client from '../api/client';

const findNotifications = async () => {
  // console.log(global.foo);
  const notify = await client.post('/find', { ...global.foo });
  
  console.log(notify.data);
  if (notify.data) {
    Alert.alert(notify.data);
  }
  else {
    Alert.alert('You Are Ok.. Stay Safe!');
  }
  return notify.data;
};

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Text>Covid Updates</Text>
      <Text></Text>
      <Text>Check for updates</Text>
      <Button title={'CLICK HERE'} color='rgba(27,27,51,1)'onPress={ () =>   findNotifications()} />
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

export default Notifications;
