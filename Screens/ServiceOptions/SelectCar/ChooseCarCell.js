import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, Platform } from 'react-native';
import FontStyle from '../../../Compoents/FontStyle';

export default function crevedNavigation({ navTittle, navHeight, backOnPress, small, showRightArrow }) {
    // #552EDF
    return (
        <View style={{ borderRadius: 16, width: '100%', flexDirection: 'row' }}>
            <View style={{ flex: 0.5, justifyContent: 'center', borderTopLeftRadius: 16, borderBottomLeftRadius: 16 }}>
                <Image
                    style={{ height: 100, width: 100, borderRadius: 12, marginLeft: 8, marginTop: 8, marginBottom: 8 }}
                    source={require('../../../Assets/Images/Civic.png')}

                />
            </View>
            <View style={{ flex: 1, borderTopRightRadius: 16, borderBottomRightRadius: 16 }}>
                <Text style={[FontStyle.ag18Semibold, { marginTop: 16, marginLeft: 10 }]}>Honda</Text>
                <Text style={[FontStyle.ag18Semibold, { marginTop: -5, marginLeft: 10 }]}>Civic</Text>
                <Text style={[FontStyle.ag14Reguler, { marginLeft: 10, position: 'absolute', bottom: 16 }]}>KL 14 AB 5985</Text>
                <View style={{ position: 'absolute', backgroundColor: 'red', bottom: Platform.OS == 'ios' ? 21 : 24, left: 110, height: 12, width: 12, borderRadius: 12 / 2 }}></View>
                <Image
                    style={{ position: 'absolute', bottom: 21, right: 16, height: showRightArrow ? 16 : 0, width: 8 }}
                    source={require('../../../Assets/Images/RightBlackArrow.png')}
                />
            </View>
        </View >
    )
}