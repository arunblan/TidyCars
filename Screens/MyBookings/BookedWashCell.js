import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import FontStyle from '../../Compoents/FontStyle';
import ContentWithGreenTick from '../../Compoents/ContentWithGreenTick';

export default function BookedWashCell({ navTittle, navHeight, backOnPress, small }) {
    // #552EDF
    return (
        <View style={{ borderRadius: 16, width: '100%', }}>
            <View style={{ flexDirection: 'row', }}>

                <View style={{ flex: 0.3, marginTop: 9, marginLeft: 9, borderTopLeftRadius: 16, borderBottomLeftRadius: 16 }}>
                    <Image
                        style={{ height: 79, width: 79, borderRadius: 12 }}
                        source={require('../../Assets/Images/Civic.png')}

                    />
                </View>
                <View style={{ flex: 1, borderTopRightRadius: 16, borderBottomRightRadius: 16, marginTop: 9, }}>
                    <Text style={[FontStyle.ag18Semibold, { marginTop: 1, marginLeft: 16 }]}>Honda</Text>
                    <Text style={[FontStyle.ag18Semibold, { marginTop: -5, marginLeft: 16 }]}>Civic</Text>
                    <View style={{ marginLeft: 16, marginTop: 12, height: 20, marginRight: 16, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[FontStyle.ag14Reguler, {}]}>KL 14 AB 5985</Text>
                        <View style={{ marginLeft: 9, backgroundColor: 'red', height: 12, width: 12, borderRadius: 24 / 2 }}></View>

                    </View>

                    <TouchableOpacity style={{ height: 39, width: 39, position: 'absolute', top: 12, right: 12, backgroundColor: '#552EDF', borderRadius: 39 / 2, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={{ height: 17, width: 17, resizeMode: 'contain' }}
                            source={require('../../Assets/Images/Phone.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginLeft: 16, marginRight: 16, marginTop: 16, height: 68, backgroundColor: '#EAECF4', borderRadius: 16, }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 16, }}>
                    <Text style={[FontStyle.ag14Medium, { color: '#552EDF' }]}>At Home</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>


                    {/* <View style={{ marginLeft: 16, marginRight: 16, marginTop: 14, height: 50, borderRadius: 16, backgroundColor: '#ffff', flexDirection: 'row' }}> */}
                    <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', borderTopLeftRadius: 16, borderBottomLeftRadius: 16, }}>
                        <Image
                            style={{ width: 12, height: 14, marginLeft: 8, marginLeft: 24 }}
                            source={require('../../Assets/Images/CalendarBlack.png')}
                        />
                        <Text style={[FontStyle.ag16Reguler, { marginLeft: 11 }]}>25-May-2021</Text>
                    </View>
                    <View style={{ width: 1, height: 18, backgroundColor: '#D4D7DE', alignSelf: 'center' }}></View>
                    <View style={{ flex: 1, flexDirection: 'row', borderTopRightRadius: 16, borderBottomRightRadius: 16 }}>
                        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                            <Image
                                style={{ width: 12, height: 14, marginLeft: 8, }}
                                source={require('../../Assets/Images/BlackClock.png')}
                            />
                            <Text style={[FontStyle.ag16Reguler, { marginLeft: 11 }]}>10:30 AM</Text>
                        </View>
                        <View style={{ flex: 0.4, justifyContent: 'center', borderTopRightRadius: 16, borderBottomRightRadius: 16 }}>

                        </View>
                    </View>

                </View>


            </View>
            <View style={{ marginLeft: -8, marginTop: 21, marginRight: 0, marginBottom: 12 }}>
                <ContentWithGreenTick />
                <ContentWithGreenTick />
                <ContentWithGreenTick />
            </View>
        </View >
    )
}