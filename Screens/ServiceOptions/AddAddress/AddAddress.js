import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, StyleSheet, Button, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';
// import FontStyle from '../../Compoents/FontStyle';
import { StackActions, NavigationActions } from 'react-navigation';
import FontStyle from '../../../Compoents/FontStyle';
import CrevedNav from '../../../Compoents/CravedNavDesign';
import AddressCell from './AddressStyleCell';

export default class AddAddress extends Component {


    constructor() {
        super()
        this.state = {

            addressList: [
                { id: 1, Type: 'Home', StreetName: 'Palazhi', BuildingName: 'LandMark', PhoneNumber: '+919895266369' },
                { id: 2, Type: 'Office', StreetName: 'Hill Top', BuildingName: 'Skyline', PhoneNumber: '+919539820823' },
            ],
            serviceTypeId: null,
            washingMethodId: null

        }
    }

    componentDidMount = () => {
    }

    backNavigation = () => {
        // alert('s')
        this.props.navigation.goBack()
    }
    selectStreetPage = () => {
        // alert('s')
        this.props.navigation.navigate("selectStreet")
    }


    render() {

        return (
            <View style={styles.viewContainer}>
                {/* <Text>Hello</Text> */}
                <ScrollView style={{ flex: 1, }} bounces={false}>
                    <CrevedNav
                        navTittle='Add Address'
                        navHeight='100'
                        backOnPress={this.backNavigation}
                        small={true}
                    />
                    <Text style={[styles.subTittle, FontStyle.ag16Medium]}>Street Name</Text>
                    <TouchableOpacity style={[{ height: 56, marginLeft: 16, marginRight: 16, marginTop: 16, backgroundColor: '#ffff', borderRadius: 15, justifyContent: 'center' }]}
                        onPress={this.selectStreetPage}
                    >
                        <Text style={[FontStyle.ag16Reguler, { marginLeft: 20, color: '#989EB1' }]}>Eg: Ridge Hills</Text>
                    </TouchableOpacity>

                    <Text style={[styles.subTittle, FontStyle.ag16Medium]}>Building / House / Flat</Text>
                    <View style={[{ height: 56, marginLeft: 16, marginRight: 16, marginTop: 16, backgroundColor: '#ffff', borderRadius: 15, justifyContent: 'center' }]}>
                        <TextInput placeholder={'Building / House / Flat'} style={[FontStyle.ag16Reguler, { marginLeft: 20 }]}></TextInput>
                    </View>

                    <Text style={[styles.subTittle, FontStyle.ag16Medium]}>Phone number</Text>
                    <View style={[{ height: 56, marginLeft: 16, marginRight: 16, marginTop: 16, backgroundColor: '#ffff', borderRadius: 15, justifyContent: 'center' }]}>
                        <TextInput placeholder={'Enter phone number here'} style={[FontStyle.ag16Reguler, { marginLeft: 20 }]}></TextInput>
                    </View>
                    <Text style={[styles.subTittle, FontStyle.ag16Medium]}>Save as</Text>
                    <View style={[{ height: 34, marginLeft: 16, marginRight: 16, marginTop: 16, borderRadius: 15, alignItems: 'center', flexDirection: 'row' }]}>
                        <TouchableOpacity style={{ width: 80, height: 32, borderRadius: 15, backgroundColor: '#ffff', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={[FontStyle.ag16Reguler]}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 80, height: 32, borderRadius: 15, marginLeft: 12, backgroundColor: '#ffff', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={[FontStyle.ag16Reguler]}>Office</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 80, height: 32, borderRadius: 15, marginLeft: 12, backgroundColor: '#ffff', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={[FontStyle.ag16Reguler]}>Other</Text>
                        </TouchableOpacity>


                    </View>

                </ScrollView>
                <TouchableOpacity style={[{ height: 56, marginLeft: 16, marginRight: 16, marginTop: 32, marginBottom: 24, backgroundColor: '#552EDF', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }]}
                    onPress={this.backNavigation}
                >
                    <Text style={[FontStyle.ag14Semibold, { color: '#ffff' }]}>Save</Text>
                </TouchableOpacity>

            </View >
        )
    }
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