import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, StyleSheet, Button, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';
// import FontStyle from '../../Compoents/FontStyle';
import { StackActions, NavigationActions } from 'react-navigation';
import FontStyle from '../../../Compoents/FontStyle';
import CrevedNav from '../../../Compoents/CravedNavDesign';
import AddressCell from './AddressStyleCell';
import StreetSuggestions from './StreetSuggestionsCell'
export default class SelectStreet extends Component {


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


    render() {

        return (
            <View style={styles.viewContainer}>
                {/* <Text>Hello</Text> */}
                <ScrollView style={{ flex: 1, }}>
                    <CrevedNav
                        navTittle='Select Street'
                        navHeight='100'
                        backOnPress={this.backNavigation}
                        small={true}
                    />
                    <View style={{ flex: 1, backgroundColor: 'yellow' }}></View>
                    <View style={[{ height: 56, marginLeft: 16, marginRight: 16, marginTop: 16, backgroundColor: '#ffff', borderRadius: 15, justifyContent: 'center' }]}>
                        <TextInput placeholder={'Damam'} style={[FontStyle.ag16Reguler, { marginLeft: 20 }]}></TextInput>
                    </View>

                    <View style={[{ marginLeft: 0, marginRight: 0, marginTop: 15, borderRadius: 15, justifyContent: 'center' }]}>
                        <StreetSuggestions addressOnPress={this.backNavigation} />
                        <StreetSuggestions addressOnPress={this.backNavigation} />
                        <StreetSuggestions addressOnPress={this.backNavigation} />
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