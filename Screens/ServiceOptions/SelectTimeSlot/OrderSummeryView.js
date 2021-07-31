// import React from 'react';
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput } from 'react-native';
import FontStyle from '../../../Compoents/FontStyle';
import ContentWithGreenTick from '../../../Compoents/ContentWithGreenTick';


export default function OrderSummery({ addOnTIttle, list, timeView }) {




    return (
        <View style={{ marginTop: 32, marginRight: 16, marginLeft: 16, backgroundColor: '#ffff', marginBottom: 30, borderStyle: "dashed", borderWidth: 1, borderRadius: 12 }}>
            <View style={{ flex: 0.2, borderTopRightRadius: 12, borderTopLeftRadius: 12, flexDirection: 'row' }}>
                <View style={{ flex: 1, borderTopLeftRadius: 12 }}>
                    <Text style={[FontStyle.ag16Semibold, { marginLeft: 16, marginTop: 16, color: '#552EDF' }]}>Steam Wash</Text>
                    <Text style={[FontStyle.ag14Medium, { marginLeft: 16, marginTop: 0 }]}>At Home</Text>
                </View>
                <View style={{ backgroundColor: 'white', flex: 0.5, justifyContent: 'space-between', alignItems: 'center', borderTopRightRadius: 12 }}>
                    <View style={{ width: 88, height: 46, backgroundColor: '#EAECF4', marginTop: 8, marginLeft: 12, justifyContent: 'center', alignItems: 'center', borderRadius: 12 }}>
                        <Text style={[FontStyle.ag18Semibold]}>$1200</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, }}>

                <View style={{ marginTop: 12, marginLeft: 0, marginRight: 0, marginBottom: 12 }}>
                    {/* {list.map((it, i) => {
                        return ( */}


                    <ContentWithGreenTick
                    />
                    <ContentWithGreenTick
                    />
                    <ContentWithGreenTick
                    />
                    <ContentWithGreenTick
                    />
                    <ContentWithGreenTick
                    />
                    <ContentWithGreenTick
                    />
                    <ContentWithGreenTick
                    />
                    <View style={{ height: timeView ? 22 : 0, marginLeft: 16, marginRight: 16, marginTop: timeView ? 8 : 0, alignItems: 'center', flexDirection: 'row' }}>
                        <Image
                            style={{ height: 14, width: timeView ? 14 : 0, marginLeft: 2 }}
                            source={require('../../../Assets/Images/TimeSquareGray.png')}
                        />
                        <Text style={[FontStyle.ag14Reguler, { color: '#989EB1', marginLeft: 14 }]}>25-May-2021 | 10:30 AM</Text>
                    </View>
                </View>
            </View>
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