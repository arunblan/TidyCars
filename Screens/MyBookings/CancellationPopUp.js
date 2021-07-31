import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, Modal } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FontStyle from '../../Compoents/FontStyle';
// import ContentWithGreenTick from '../../Compoents/ContentWithGreenTick';

export default function CancellationPopUp({ visible, hideCancelPopUp }) {
    // #552EDF
    return (
        <Modal
            style={{}}
            transparent={true}
            visible={visible}
        >
            <View style={{ flex: 1, backgroundColor: '#000000aa' }}>
                <View style={{ flex: 1, marginRight: 16, marginLeft: 16, marginTop: 126, marginBottom: 96 }}>
                    <View style={{ marginTop: 0, marginLeft: 0, marginRight: 0, height: 61, backgroundColor: '#552EDF', justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
                        <Text style={[FontStyle.ag16Medium, { color: '#ffff' }]}>Reason for Cancellation</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#ffff', borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}>


                        <View style={{ justifyContent: 'center', flexDirection: 'row', margin: 16, alignItems: 'center' }}>
                            <Image
                                style={{ marginLeft: 16, height: 24, width: 24, }}
                                source={require('../../Assets/Images/UnCheckedRound.png')}
                            />
                            <Text style={[FontStyle.ag14Reguler, { marginLeft: 20, marginRight: 16 }]}>Lorem ipsum dolor sit amet, ctetuer adipiscing elit,</Text>
                            {/* <View style={{ backgroundColor: '#ffff', flex: 1, }}></View> */}
                        </View>

                        <View style={{ justifyContent: 'center', flexDirection: 'row', margin: 16, alignItems: 'center' }}>
                            <Image
                                style={{ marginLeft: 16, height: 24, width: 24, }}
                                source={require('../../Assets/Images/UnCheckedRound.png')}
                            />
                            <Text style={[FontStyle.ag14Reguler, { marginLeft: 20, marginRight: 16 }]}>Lorem ipsum dolor sit amet, ctetuer adipiscing elit,</Text>
                            {/* <View style={{ backgroundColor: '#ffff', flex: 1, }}></View> */}
                        </View>

                        <View style={{ justifyContent: 'center', flexDirection: 'row', margin: 16, alignItems: 'center' }}>
                            <Image
                                style={{ marginLeft: 16, height: 24, width: 24, }}
                                source={require('../../Assets/Images/UnCheckedRound.png')}
                            />
                            <Text style={[FontStyle.ag14Reguler, { marginLeft: 20, marginRight: 16 }]}>Lorem ipsum dolor sit amet, ctetuer adipiscing elit,</Text>
                            {/* <View style={{ backgroundColor: '#ffff', flex: 1, }}></View> */}
                        </View>

                        <View style={{ justifyContent: 'center', flexDirection: 'row', margin: 16, alignItems: 'center' }}>
                            <Image
                                style={{ marginLeft: 16, height: 24, width: 24, }}
                                source={require('../../Assets/Images/UnCheckedRound.png')}
                            />
                            <Text style={[FontStyle.ag14Reguler, { marginLeft: 20, marginRight: 16 }]}>Lorem ipsum dolor sit amet, ctetuer adipiscing elit,</Text>
                            {/* <View style={{ backgroundColor: '#ffff', flex: 1, }}></View> */}
                        </View>

                        <View style={{ justifyContent: 'center', flexDirection: 'row', margin: 16, alignItems: 'center' }}>
                            <Image
                                style={{ marginLeft: 16, height: 24, width: 24, }}
                                source={require('../../Assets/Images/UnCheckedRound.png')}
                            />
                            <Text style={[FontStyle.ag14Reguler, { marginLeft: 20, marginRight: 16 }]}>Lorem ipsum dolor sit amet, ctetuer adipiscing elit,</Text>
                            {/* <View style={{ backgroundColor: '#ffff', flex: 1, }}></View> */}
                        </View>

                        <View style={{ justifyContent: 'center', flexDirection: 'row', margin: 16, alignItems: 'center' }}>
                            <Image
                                style={{ marginLeft: 16, height: 24, width: 24, }}
                                source={require('../../Assets/Images/UnCheckedRound.png')}
                            />
                            <Text style={[FontStyle.ag14Reguler, { marginLeft: 20, marginRight: 16 }]}>Lorem ipsum dolor sit amet, ctetuer adipiscing elit,</Text>
                            {/* <View style={{ backgroundColor: '#ffff', flex: 1, }}></View> */}
                        </View>

                        <TouchableOpacity style={[{ height: 56, left: 16, right: 16, bottom: 20, backgroundColor: '#552EDF', borderRadius: 15, justifyContent: 'center', alignItems: 'center', position: 'absolute', }]}
                            onPress={() => hideCancelPopUp()}
                        >
                            <Text style={[FontStyle.ag14Semibold, { color: '#ffff' }]}>Submit</Text>
                        </TouchableOpacity>


                    </View>
                </View>
            </View>
        </Modal >
    )
}