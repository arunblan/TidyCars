import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import React from 'react';

import HomeScreen from '../Screens/Home/Home';
import CalanderScreen from '../Screens/MyBookings/Bookings';
import CarScreen from '../Screens/MyCars/MyCars';
import ProfileScreen from '../Screens/Profiles/Profile';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    height: 80
                }
            }}
        >
            <Tab.Screen name='Home' component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10, }}>
                            <Image
                                source={require('../Assets/Images/TabBarIcon/HomeIcons.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#552EDF' : '#989EB1'
                                }}
                            />
                            {/* <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}> Home </Text> */}
                        </View>
                    ),
                }}
            />

            <Tab.Screen name='Find' component={CalanderScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10, }}>
                            <Image
                                source={require('../Assets/Images/TabBarIcon/CalendarIcon.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#552EDF' : '#989EB1'
                                }}
                            />
                            {/* <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}> Find </Text> */}
                        </View>
                    ),
                }}
            />
            <Tab.Screen name='Chat' component={CarScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10, }}>
                            <Image
                                source={require('../Assets/Images/TabBarIcon/CarIcon.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#552EDF' : '#989EB1'
                                }}
                            />
                            {/* <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}> Profile </Text> */}
                        </View>
                    ),
                }}
            />
            <Tab.Screen name='Post' component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10, }}>
                            <Image
                                source={require('../Assets/Images/TabBarIcon/ProfileIcon.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#552EDF' : '#989EB1'
                                }}
                            />
                            {/* <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}> Calender </Text> */}
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;