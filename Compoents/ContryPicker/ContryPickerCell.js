import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput } from 'react-native';
import { color } from 'react-native-reanimated';
import FontStyle from '../../Compoents/FontStyle';

export default function Countrynames({ Tittle, onPress, Active, dailCode }) {
    return (
        <View style={[styles.bgView]}>
            <TouchableOpacity style={styles.touchOpacityStyle} onPress={onPress}>
                <Text
                    style={[styles.textStyle, FontStyle.ag14Medium, { color: Active ? '#552EDF' : 'black' }]}
                >{Tittle}</Text>
                <Text style={{ marginRight: 20 }}>{dailCode}</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({

    bgView: {
        flex: 0.3,
        height: 42,
        backgroundColor: '#ffff',
        // borderRadius: 12,
        alignContent: 'center',
        justifyContent: 'center',
        // borderBottomLeftRadius: 12
    },
    textStyle: {
        // alignSelf: 'center',
        // justifyContent: 'center'
    },
    touchOpacityStyle: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: 20
    }
})