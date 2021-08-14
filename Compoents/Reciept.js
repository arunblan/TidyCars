// import React from 'react';
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput } from 'react-native';
import FontStyle from './FontStyle';
// import ContentWithGreenTick from '../../../Compoents/ContentWithGreenTick';


export default function RecieptView({ addOnTIttle, list, timeView }) {

    return (
        <View style={{ marginTop: 32, marginRight: 16, marginLeft: 16, backgroundColor: '#ffff', marginBottom: 30, borderStyle: "dashed", borderColor: '#D4D7DE', borderWidth: 1, borderRadius: 12 }}>
            {/* <View style={{ flex: 0.2, borderTopRightRadius: 12, borderTopLeftRadius: 12, flexDirection: 'row', backgroundColor: 'red' }}> */}
            <View style={{ flex: 1, borderTopLeftRadius: 12, borderTopRightRadius: 12, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={[FontStyle.ag16Semibold, { marginLeft: 16, marginTop: 21, color: '#552EDF' }]}>Reciept</Text>
                <View style={{ height: 1, width: '86%', marginRight: 16, marginLeft: 16, marginTop: 16, backgroundColor: '#D4D7DE' }}></View>
                <View style={{ marginTop: 16, marginLeft: 16, marginRight: 16, backgroundColor: '#fff', width: '86%', }}>

                    <View style={{ height: 17, marginRight: 0, marginLeft: 0, marginBottom: 12, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={FontStyle.ag14Reguler}>Steam Wash</Text>
                        <Text style={FontStyle.ag14Reguler}>400</Text>
                    </View>
                    <View style={{ height: 17, marginRight: 0, marginLeft: 0, marginBottom: 12, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={FontStyle.ag14Reguler}>Service from home</Text>
                        <Text style={FontStyle.ag14Reguler}>300</Text>
                    </View>
                    <View style={{ height: 17, marginRight: 0, marginLeft: 0, marginBottom: 12, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={FontStyle.ag14Reguler}>Engine Room Wash</Text>
                        <Text style={FontStyle.ag14Reguler}>100</Text>
                    </View>
                    <View style={{ height: 17, marginRight: 0, marginLeft: 0, marginBottom: 12, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={FontStyle.ag14Reguler}>Polish</Text>
                        <Text style={FontStyle.ag14Reguler}>500</Text>
                    </View>
                    <View style={{ height: 17, marginRight: 0, marginLeft: 0, marginBottom: 12, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={FontStyle.ag14Reguler}>Service Charge</Text>
                        <Text style={FontStyle.ag14Reguler}>800</Text>
                    </View>
                    <View style={{ height: 17, marginRight: 0, marginLeft: 0, marginBottom: 12, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={FontStyle.ag14Reguler}>Tax</Text>
                        <Text style={FontStyle.ag14Reguler}>40</Text>
                    </View>




                </View>
                <View style={{ height: 1, width: '86%', marginRight: 16, marginLeft: 16, marginTop: 9, backgroundColor: '#D4D7DE' }}></View>


            </View>
            <View style={{ flex: 0.5, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginTop: 12, marginBottom: 16 }}>
                <Text style={[FontStyle.ag14Reguler, { marginLeft: 16 }]}>Total</Text>
                <View style={{ width: 88, height: 46, backgroundColor: '#EAECF4', marginRight: 16, justifyContent: 'center', alignItems: 'center', borderRadius: 12 }}>
                    <Text style={[FontStyle.ag18Semibold]}>₹1200</Text>
                </View>
            </View>
            {/* </View> */}

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