import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput } from 'react-native';
import FontStyle from './FontStyle';

export default function searchView({ navTittle, navHeight }) {
    return (
        <View style={[styles.viewD]} >
            {/* <View style={{ height: 20, width: 15, backgroundColor: '#552EDF', flexDirection: 'row' }}> */}
            <View style={styles.backButtonBgView}>
                <TouchableOpacity>
                    <Image style={styles.backImageView}
                        source={require('../Assets/Images/SearchLocation.png')}
                    />

                </TouchableOpacity>
            </View>
            {/* <Text style={[styles.headingText, FontStyle.ag16Semibold, { color: '#ffff', textAlign: 'center', flex: 1, marginLeft: -28 }]}>{navTittle ?? 'Hatch Back'}</Text> */}
            <View style={{ width: '88%', backgroundColor: '#ffff', height: 27, }}>
                <TextInput
                    value='Westhills, Calicut'

                    placeholder='Enter your loaction'
                    style={[styles.textInputStyle, FontStyle.ag14Reguler]}>

                </TextInput>
            </View>

            <Image style={styles.arrowDownImageView}
                source={require('../Assets/Images/downBlackArrow.png')}
            />
            {/* </View> */}

        </View>
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
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 18,
        paddingLeft: 18,
        alignItems: 'center',
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