import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Home from './components/Home';
import Tasks from './components/Tasks';
import PositiveCase from './components/PositiveCase';
import { useLogin } from './context/LoginProvider';
import Notifications from './components/notifications';
import OCR from './components/OCR';

const Drawer = createDrawerNavigator();

const CustomDrawer = props => {
  const { setIsLoggedIn, profile } = useLogin();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#f6f6f6',
            marginBottom: 20,
          }}
        >
          <View>
            <Text>{profile.fullname}</Text>
            <Text>{profile.email}</Text>
          </View>
          <Image
            source={{
              uri:
                profile.avatar ||
                'https://th.bing.com/th/id/OIP.G2hRZj6ScpxqHeDE-hnwzQHaIk?w=125&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',
            }}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 50,
          backgroundColor: '#f6f6f6',
          padding: 20,
        }}
        onPress={() => setIsLoggedIn(false)}
      >
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitle: '',
      }}
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen component={Home} name='Home' />
      <Drawer.Screen component={Notifications} name='Notifications' />
      <Drawer.Screen component={Tasks} name='QR-Scanner' />
      <Drawer.Screen component={PositiveCase} name='Positive Case' />
      <Drawer.Screen component={OCR} name='Id-scanner' />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
