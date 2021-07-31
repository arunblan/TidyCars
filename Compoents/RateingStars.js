import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
// import FontStyle from '../../../Compoents/FontStyle';

export default function RateingStars({ navTittle, navHeight, backOnPress, small }) {
    // #552EDF
    return (
        <View style={{ height: 32, flex: 1, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity style={{ height: 31, width: 31, backgroundColor: '#fff' }}>
                <Image
                    style={{ height: 28, width: 31, }}
                    source={require('../Assets/Images/UncheckedStar.png')}
                />
            </TouchableOpacity>

            <TouchableOpacity style={{ height: 31, width: 31, backgroundColor: '#fff' }}>
                <Image
                    style={{ height: 28, width: 28, }}
                    source={require('../Assets/Images/UncheckedStar.png')}
                />
            </TouchableOpacity>

            <TouchableOpacity style={{ height: 31, width: 31, backgroundColor: '#fff' }}>
                <Image
                    style={{ height: 28, width: 28, }}
                    source={require('../Assets/Images/UncheckedStar.png')}
                />
            </TouchableOpacity>

            <TouchableOpacity style={{ height: 31, width: 31, backgroundColor: '#fff' }}>
                <Image
                    style={{ height: 28, width: 28, }}
                    source={require('../Assets/Images/UncheckedStar.png')}
                />
            </TouchableOpacity>

            <TouchableOpacity style={{ height: 31, width: 31, backgroundColor: '#fff' }}>
                <Image
                    style={{ height: 28, width: 28, }}
                    source={require('../Assets/Images/UncheckedStar.png')}
                />
            </TouchableOpacity>
        </View>
    )
}