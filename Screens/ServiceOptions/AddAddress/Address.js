import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, StyleSheet, Button, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';
// import FontStyle from '../../Compoents/FontStyle';
import { StackActions, NavigationActions } from 'react-navigation';
import FontStyle from '../../../Compoents/FontStyle';
import CrevedNav from '../../../Compoents/CravedNavDesign';
import AddressCell from './AddressStyleCell';

export default class Address extends Component {


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
    addAddressPage = () => {
        // alert('s')
        this.props.navigation.navigate("addAddress")
    }
    summaryPage = () => {
        // alert('s')
        this.props.navigation.navigate("bookSummary")
    }

    // selectStreet


    render() {

        return (
            <View style={styles.viewContainer}>
                {/* <Text>Hello</Text> */}
                <ScrollView style={{ flex: 1, }} bounces={false}>
                    <CrevedNav
                        navTittle='Address'
                        navHeight='100'
                        backOnPress={this.backNavigation}
                        small={true}
                    />
                    <View style={{ flex: 1, }}>
                        <View style={{ marginLeft: 16, marginRight: 16, marginTop: 24, borderRadius: 16 }}
                        // onPress={this.addAddressPage}
                        >
                            {this.state.addressList.map((item) => {
                                return (
                                    <AddressCell
                                        residenceType={item.Type}
                                        buildingName={item.BuildingName}
                                        streetName={item.StreetName}
                                        phoneNumber={item.PhoneNumber}
                                        showRightArrow={true}
                                        addressOnPress={this.summaryPage}

                                    />
                                )

                            })}

                        </View>
                        <TouchableOpacity style={{ marginTop: 24, marginLeft: 16, marginRight: 16, height: 56, backgroundColor: '#ffff', borderRadius: 16, justifyContent: 'center', alignItems: 'center' }}
                            onPress={this.addAddressPage}
                        >
                            <Text style={[FontStyle.ag14Semibold, { color: '#552EDf' }]}>+ Add Address</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, }}>

                    </View>

                </ScrollView>
                {/* <View style={{}}> */}

                {/* </View> */}
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