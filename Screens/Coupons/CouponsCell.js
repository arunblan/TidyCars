import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput } from 'react-native';
import FontStyle from '../../Compoents/FontStyle';

export default function CouponsCell({ couponTittle, couponDiscription, applyOnpress }) {
    return (
        <View style={[styles.viewD]} >
            <View style={{ flex: 0.35, backgroundColor: '#ffff', padding: 10, borderRadius: 16 }}>
                <Image
                    style={{ flex: 1, backgroundColor: '#ffff', width: 81, height: 110 }}
                    source={require('../../Assets/Images/DummyCoupons/Coupon1.png')}
                />

            </View>
            <View style={{ flex: 1, backgroundColor: '#ffff', paddingLeft: 16, paddingBottom: 16, paddingTop: 16, paddingRight: 24, borderRadius: 16 }}>
                <View style={{ flex: 1, backgroundColor: '#ffff' }}>
                    <Text style={[FontStyle.ag14Semibold]}>{couponTittle ?? 'Get flat 50%'}</Text>
                    <Text
                        numberOfLines={2}
                        style={[FontStyle.ag14Reguler, { color: '#989EB1' }]}>{couponDiscription ?? 'First sign up will get a flat 50% off'}</Text>
                </View>
                <View style={{ flex: 0.55, backgroundColor: '#ffff', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ height: 28, width: 76, backgroundColor: '#EAECF4', borderColor: '#552EDF', borderWidth: 1, borderStyle: 'dashed', borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={[FontStyle.ag14Medium, { color: '#552EDF' }]}>#FT010</Text>
                    </View>
                    <TouchableOpacity style={{ height: 28, width: 83, backgroundColor: '#552EDF', borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}
                        onPress={applyOnpress}
                    >
                        <Text style={[FontStyle.ag14Medium, { color: '#ffff' }]}>Apply</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    viewD: {
        backgroundColor: '#ffff',
        // marginLeft: 16,
        // marginRight: 16,
        // marginTop: -30,
        // justifyContent: 'center',
        borderRadius: 16,
        // paddingTop: 15,
        // paddingBottom: 15,
        // paddingRight: 18,
        // paddingLeft: 18,
        height: 130,
        // width: 50,
        // alignItems: 'center',
        // height: 19,
        flexDirection: 'row',
        // marginTop: 6,
        // marginBottom: 6,
        flex: 1,

    }
})