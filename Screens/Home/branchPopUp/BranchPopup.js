import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, Modal } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FontStyle from '../../../Compoents/FontStyle';
import BranchPickerCell from './BranchPopUpCell'

export default function BranchPopup({ visible, hideContryPickerPopUp, setSelectedCountry, branchs }) {
    // #552EDF


    onPressAction = (item) => {
        setSelectedCountry()
        hideContryPickerPopUp(item)
    }
    componentDidMount = () => {

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
                        <Text style={[FontStyle.ag16Medium, { color: '#ffff' }]}>Select a branch</Text>
                    </View>
                    <View style={{ flex: 0.3, backgroundColor: '#ffff', borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}>
                        <ScrollView
                            style={{ borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}
                        >
                            {branchs.map(item => {
                                return (<BranchPickerCell
                                    Tittle={item.branch_name}
                                    addressOne={item.address_line1}
                                    addressTwo={item.address_line2}
                                    onPress={() => { onPressAction(item) }}
                                />)
                            })}
                        </ScrollView>


                        {/* <BranchPickerCell
                            Tittle='dasd'
                            onPress={() => { onPressAction() }}
                        /> */}




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