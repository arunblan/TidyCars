import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, Platform } from 'react-native';
import FontStyle from '../../../Compoents/FontStyle';

export default function addressViewCell({ residenceType, buildingName, streetName, phoneNumber, addressOnPress, editMode, editOnPress, removeHideButton, showRightArrow }) {
    // #552EDF
    if (removeHideButton) {
        return (

            <TouchableOpacity style={{ borderRadius: 16, width: '100%', flexDirection: 'row', backgroundColor: '#fff', marginTop: 10 }}
                onPress={addressOnPress}
            >
                <View style={{ flex: 1, }}>
                    <Text style={[FontStyle.ag18Semibold, { marginTop: 16, marginLeft: 16 }]}>{residenceType ?? 'Home'}</Text>
                    <Text style={[FontStyle.ag14Reguler, { marginTop: 4, marginLeft: 16 }]}>{buildingName ?? 'LandmarkWorld, 12B'}</Text>
                    <Text style={[FontStyle.ag14Reguler, { marginTop: 0, marginLeft: 16 }]}>{streetName ?? 'Ridge Hill,Calicut'}</Text>
                    <Text style={[FontStyle.ag14Reguler, { marginTop: 0, marginLeft: 16, marginBottom: 11 }]}>{phoneNumber ?? '+919895266369'}</Text>
                    {/* <Text style={[FontStyle.ag14Reguler, { marginLeft: 10, position: 'absolute', bottom: 16 }]}>KL 14 AB 5985</Text> */}




                </View>
            </TouchableOpacity >
        )
    } else {
        return (

            <TouchableOpacity style={{ borderRadius: 16, width: '100%', flexDirection: 'row', backgroundColor: '#fff', marginTop: 10 }}
                onPress={addressOnPress}
            >
                <View style={{ flex: 1, }}>
                    <Text style={[FontStyle.ag18Semibold, { marginTop: 16, marginLeft: 16 }]}>{residenceType ?? 'Home'}</Text>
                    <Text style={[FontStyle.ag14Reguler, { marginTop: 4, marginLeft: 16 }]}>{buildingName ?? 'LandmarkWorld, 12B'}</Text>
                    <Text style={[FontStyle.ag14Reguler, { marginTop: 0, marginLeft: 16 }]}>{streetName ?? 'Ridge Hill,Calicut'}</Text>
                    <Text style={[FontStyle.ag14Reguler, { marginTop: 0, marginLeft: 16, marginBottom: 11 }]}>{phoneNumber ?? '+919895266369'}</Text>
                    {/* <Text style={[FontStyle.ag14Reguler, { marginLeft: 10, position: 'absolute', bottom: 16 }]}>KL 14 AB 5985</Text> */}
                    <TouchableOpacity
                        style={{ position: 'absolute', top: 16, right: 18, height: editMode ? 18 : 27, width: editMode ? 16 : 6 }}
                        onPress={editOnPress}
                    >
                        <Image style={{
                            height: editMode ? 24 : 23, width: editMode ? 24 : 6, resizeMode: 'contain'
                        }}
                            source={editMode ? require('../../../Assets/Images/EditGray.png') : require('../../../Assets/Images/Moregray.png')
                            }
                        >
                        </Image>


                    </TouchableOpacity>

                    <Image
                        style={{ position: 'absolute', bottom: 21, right: 16, height: showRightArrow ? 16 : 0, width: 8, }}
                        source={require('../../../Assets/Images/RightBlackArrow.png')}
                    />

                </View>
            </TouchableOpacity >
        )
    }
}