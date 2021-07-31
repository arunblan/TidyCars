import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput } from 'react-native';
import { color } from 'react-native-reanimated';
import FontStyle from '../../Compoents/FontStyle';

export default function ServiceTypeView({ Tittle, onPress, Active }) {
    return (
        <View style={[styles.bgView]}>
            <TouchableOpacity style={styles.touchOpacityStyle} onPress={onPress}>
                <Text
                    style={[styles.textStyle, FontStyle.ag14Medium, { color: Active ? '#552EDF' : 'black' }]}
                >{Tittle}</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({

    bgView: {
        flex: 0.3,
        height: 42,
        backgroundColor: '#ffff',
        borderRadius: 12,
        alignContent: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        alignSelf: 'center',
        justifyContent: 'center'
    },
    touchOpacityStyle: {
        flex: 1,
        justifyContent: 'center'
    }
})