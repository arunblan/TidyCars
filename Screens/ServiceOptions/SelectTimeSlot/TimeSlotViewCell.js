import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, } from 'react-native';
import FontStyle from '../../../Compoents/FontStyle';

export default function timeSlotViewCell({ time, Active, timeOnPress }) {
    // #552EDF
    return (
        <TouchableOpacity style={{ width: 108, height: 42, borderRadius: 15, marginLeft: 12, marginBottom: 12, backgroundColor: Active ? '#552EDF' : '#ffff', justifyContent: 'center', alignItems: 'center' }}
            onPress={timeOnPress}
        >
            <Text style={[FontStyle.ag14Reguler, { color: Active ? '#ffff' : 'black' }]}>{time ?? "null"}</Text>
        </TouchableOpacity>
    )
}