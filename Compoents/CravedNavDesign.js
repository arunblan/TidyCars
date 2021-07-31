import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import FontStyle from './FontStyle';

export default function crevedNavigation({ navTittle, navHeight, backOnPress, small }) {
    // #552EDF
    //552EDF
    return (
        <View style={[styles.viewD, { height: parseInt(navHeight) ?? 120 }]} >
            <View style={{ height: 20, flexDirection: 'row', marginLeft: 16, marginRight: 66, marginTop: small ? 20 : 0 }}>
                <TouchableOpacity style={[{ height: 30, width: 50 },]}
                    onPress={backOnPress}
                >
                    <Image style={styles.backImageView}
                        source={require('../Assets/Images/WhiteBackArrow.png')}
                    />

                </TouchableOpacity>
                <Text style={[styles.headingText, FontStyle.ag16Semibold, { color: '#ffff', textAlign: 'center', flex: 1, marginLeft: 8 }]}>{navTittle ?? 'Hatch Back'}</Text>
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    viewD: {
        backgroundColor: '#552EDF',
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        justifyContent: 'center',
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32
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
        marginLeft: 16,
        height: 16,
        width: 8,
        // backgroundColor: '#ffff',
        height: 20,
        width: 20
    },
    backImageView: {
        height: 16,
        width: 8
    }
})