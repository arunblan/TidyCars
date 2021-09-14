import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput } from 'react-native';
import { color } from 'react-native-reanimated';
import FontStyle from '../../../Compoents/FontStyle';

export default function Countrynames({ Tittle, addressOne = 'null', addressTwo = 'null', onPress, Active, dailCode }) {
    return (
        <View style={[styles.bgView]}>
            <TouchableOpacity style={styles.touchOpacityStyle} onPress={onPress}>
                <Text
                    style={[styles.textStyle, FontStyle.ag16Semibold, { color: Active ? '#552EDF' : 'black' }]}
                >{Tittle}</Text>
                <Text style={[FontStyle.ag14Reguler]}>
                    {addressOne}
                </Text>
                <Text style={[FontStyle.ag14Reguler]}>
                    {addressTwo}
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({

    bgView: {
        flex: 0.1,
        backgroundColor: '#ffff',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 12,
        marginLeft: 1
    },
    textStyle: {
        // alignSelf: 'center',
        // justifyContent: 'center'
    },
    touchOpacityStyle: {
        flex: 1,
        // justifyContent: 'space-between',
        // flexDirection: 'row',
        marginLeft: 20
    }
})