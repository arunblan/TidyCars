import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, StyleSheet, Button, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';
// import FontStyle from '../../Compoents/FontStyle';
import { StackActions, NavigationActions } from 'react-navigation';
import FontStyle from '../../../Compoents/FontStyle';
import CrevedNav from '../../../Compoents/CravedNavDesign';
import AddressCell from './AddressStyleCell';

// export default class StreetSuggestionsCell extends Component {
export default function StreetSuggestionsCell({ mainName, streetName, addressOnPress }) {



    addAddressPage = () => {
        // alert('s')
        this.props.navigation.navigate("addAddress")
    }




    return (
        // <View style={styles.viewContainer}>


        <TouchableOpacity style={[{ height: 56, marginLeft: 16, marginRight: 16, marginTop: 5, borderRadius: 15, justifyContent: 'center', flexDirection: 'row' }]}
            onPress={addressOnPress}
        >
            <View style={{ flex: 0.15, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 34, height: 34, borderRadius: 10, backgroundColor: '#ffff', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{ height: 18, width: 14, }}
                        source={require('../../../Assets/Images/LocationPinBlack.png')}
                    />
                </View>
            </View>
            <View style={{ flex: 1, paddingTop: 8 }}>
                <Text style={[FontStyle.ag14Medium, { marginLeft: 12 }]}>{mainName ?? 'Damam'}</Text>
                <Text
                    numberOfLines={1}
                    style={[FontStyle.ag14Reguler, { marginLeft: 12, color: '#989EB1' }]}>{streetName ?? '321 Cross,Between hilite mall, kozhkode, kerala'} </Text>
            </View>
            {/* <TextInput placeholder={'Damam'} style={[FontStyle.ag16Reguler, { marginLeft: 20 }]}></TextInput> */}
        </TouchableOpacity>



    )

}

const styles = StyleSheet.create({

    viewContainer: {
        flex: 1,
        backgroundColor: '#EAECF4',
        width: '100%',
        height: 2077
    },
    dateSubTittle: {
        marginTop: 40,
        marginLeft: 16
    },
    timeSubTittle: {
        marginTop: 32,
        marginLeft: 16
    },
    subTittle: {
        marginTop: 30,
        marginLeft: 16
    },

}
)