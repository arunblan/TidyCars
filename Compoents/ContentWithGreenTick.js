import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput } from 'react-native';
import FontStyle from './FontStyle';

export default function ContentWithGreenTick({ Tittle }) {
    return (
        <View style={[styles.viewD]} >
            <Image style={{ height: 18, width: 18, }}
                source={require('../Assets/Images/GreenCheck.png')}
            />
            <Text style={[FontStyle.ag14Reguler, { marginLeft: 12 }]}>{'Steam Wash'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewD: {
        backgroundColor: '#ffff',
        marginLeft: 16,
        marginRight: 16,
        // marginTop: -30,
        // justifyContent: 'center',
        // borderRadius: 16,
        // paddingTop: 15,
        // paddingBottom: 15,
        // paddingRight: 18,
        // paddingLeft: 18,
        alignItems: 'center',
        height: 19,
        flexDirection: 'row',
        marginTop: 6,
        marginBottom: 6
    }
})