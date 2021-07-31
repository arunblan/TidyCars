import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput } from 'react-native';
import FontStyle from '../../Compoents/FontStyle';

export default function CouponsSearchCell({ navTittle, navHeight }) {
    return (
        <View style={[styles.viewD]} >
            <View style={{ flex: 1, borderRadius: 16, marginLeft: 16, marginRight: 16 }}>
                <TextInput
                    placeholder={'Enter Coupon Code'}
                    style={[FontStyle.ag14Reguler, { backgroundColor: '#fff', flex: 1, }]}
                />
            </View>
            <TouchableOpacity style={{ flex: 0.35, borderRadius: 16, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={[FontStyle.ag14Semibold, { color: '#552EDF' }]}>Apply</Text>
            </TouchableOpacity>

        </View >
    )
}

const styles = StyleSheet.create({
    viewD: {
        backgroundColor: '#ffff',
        marginLeft: 16,
        marginRight: 16,
        marginTop: -30,
        // justifyContent: 'center',
        borderRadius: 16,

        // alignItems: 'center',
        height: 60,
        flexDirection: 'row'

    },

    headingText: {
        // marginTop: 0,
        // alignSelf: 'center',
        // justifyContent: 'center'
        marginLeft: 20,
        textAlign: 'center',
    },
    backButtonBgView: {
        marginTop: 0,
        marginLeft: 0,
        height: 17,
        width: 14,
        flex: 0.7,
        // backgroundColor: '#ffff'
    },
    backImageView: {
        height: 24,
        width: 24,
        resizeMode: 'contain'
    },
    arrowDownImageView: {
        height: 9,
        width: 6,
        flex: 0.5,

        marginLeft: 6
    },
    textInputStyle: {
        flex: 1,
        paddingLeft: 20,
        color: 'black',
        // textAlign: 'bottom'
    }
})