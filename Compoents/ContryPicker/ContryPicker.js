import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, Modal } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FontStyle from '../FontStyle';
import { Countrynames } from './ContryName.js';
import ContryPickerCell from './ContryPickerCell'
// import ContentWithGreenTick from '../../Compoents/ContentWithGreenTick';

export default function CountryPopUp({ visible, hideContryPickerPopUp, setSelectedCountry }) {
    // #552EDF


    onPressAction = (dialCode) => {
        setSelectedCountry(dialCode)
        hideContryPickerPopUp()
    }

    return (
        <Modal
            style={{}}
            transparent={true}
            visible={visible}
        >
            <View style={{ flex: 1, backgroundColor: '#000000aa' }}>
                <View style={{ flex: 1, marginRight: 16, marginLeft: 16, marginTop: 126, marginBottom: 96, }}>
                    <View style={{ marginTop: 0, marginLeft: 0, marginRight: 0, height: 51, backgroundColor: '#552EDF', justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
                        <Text style={[FontStyle.ag16Medium, { color: '#ffff' }]}>Select a Country</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#ffff', borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}>
                        <ScrollView
                            style={{ borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}
                        >
                            {Countrynames.map(item => {
                                return (<ContryPickerCell
                                    // onPress={() => { setSelectedCountry(item.dial_code), alert(item.dial_code) }}
                                    onPress={() => { onPressAction(item.dial_code) }}
                                    Tittle={item.name}
                                    dailCode={item.dial_code}

                                />)
                            })}
                        </ScrollView>






                    </View>

                </View>

                {/* <TouchableOpacity style={[{ height: 56, left: 16, right: 16, bottom: 20, backgroundColor: '#552EDF', borderRadius: 15, justifyContent: 'center', alignItems: 'center', position: 'absolute', }]}
                    onPress={() => hideContryPickerPopUp()}
                >
                    <Text style={[FontStyle.ag14Semibold, { color: '#ffff' }]}>Submit</Text>
                </TouchableOpacity> */}
            </View>
        </Modal >
    )
}