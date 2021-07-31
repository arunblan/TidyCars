import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, StyleSheet, Button, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';
// import FontStyle from '../../Compoents/FontStyle';
import { StackActions, NavigationActions } from 'react-navigation';
import FontStyle from '../../Compoents/FontStyle';
export default class Profile extends Component {




    componentDidMount = () => {
    }

    backNavigation = () => {
        this.props.navigation.goBack()
    }
    bookingDetailsPage = () => {
        this.props.navigation.navigate("bookingDetails")
    }


    historyPage = () => {
        this.props.navigation.navigate("history")
    }
    couponsListPage = () => {
        this.props.navigation.navigate("couponsList")
    }
    aboutUsPage = () => {
        this.props.navigation.navigate("aboutUs")
    }
    privacyPolicyPage = () => {
        this.props.navigation.navigate("privacyPolicy")
    }
    termsAndConditionsPage = () => {
        this.props.navigation.navigate("termsAndCondition")
    }
    faqPage = () => {
        this.props.navigation.navigate("faq")
    }
    loginPage = () => {
        this.props.navigation.navigate("LoginScreen")
    }



    render() {

        return (
            <View style={styles.container}>
                {/* <Text style={[FontStyle.ag24Bold, { marginTop: 54, marginLeft: 16 }]}>My Bookings</Text> */}
                <View style={{ marginTop: 54, marginLeft: 16, marginRight: 16, height: 179, flexDirection: 'row', borderRadius: 16, backgroundColor: '#552EDF' }}>
                    <View style={{ flex: 1, backgroundColor: '#552EDF', justifyContent: 'center', borderRadius: 16 }}>
                        <View style={{ height: 30, flexDirection: 'row', alignItems: 'center', borderRadius: 16 }}>
                            <Text style={[FontStyle.ag24Bold, { marginLeft: 24, color: '#ffff' }]}>Sara Doe</Text>
                            <TouchableOpacity style={{ height: 14, width: 12, marginTop: 1, marginRight: 10, marginLeft: 8 }}>
                                <Image
                                    style={{ height: 14, width: 12, borderRadius: 16 }}
                                    source={require('../../Assets/Images/EditWhite.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={[FontStyle.ag14Reguler, { marginLeft: 24, color: '#ffff' }]}>{'(+91) 9539820820'}</Text>
                    </View>
                    <View style={{ flex: 0.6, backgroundColor: '#552EDF', borderRadius: 16 }}>
                        <Image
                            style={{ flex: 1, resizeMode: 'cover', width: '100%', height: '100%', borderRadius: 16 }}
                            source={require('../../Assets/Images/ProfileCarWash.png')}
                        />
                    </View>

                </View>

                <View style={{ height: 120, marginLeft: 24, marginRight: 24, marginTop: 32, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={[, { height: '100%', width: 81, justifyContent: 'space-between', alignItems: 'center' }]}>
                        <TouchableOpacity style={{ height: 81, width: 81, }}>
                            <Image
                                style={{ height: 81, width: 81, }}
                                source={require('../../Assets/Images/Callprofile.png')}
                            />
                        </TouchableOpacity>
                        <Text style={[FontStyle.ag14Reguler, { marginBottom: 20 }]}>Call</Text>
                    </View>
                    <View style={{ height: '100%', width: 81, justifyContent: 'space-between', alignItems: 'center' }}>
                        <TouchableOpacity style={{ height: 81, width: 81, }}
                            onPress={this.historyPage}
                        >
                            <Image
                                style={{ height: 81, width: 81, }}
                                source={require('../../Assets/Images/History.png')}
                            />
                        </TouchableOpacity>
                        <Text style={[FontStyle.ag14Reguler, { marginBottom: 20 }]}>History</Text>
                    </View>
                    <View style={{ height: '100%', width: 81, justifyContent: 'space-between', alignItems: 'center' }}>
                        <TouchableOpacity style={{ height: 81, width: 81, }}
                            onPress={this.couponsListPage}
                        >
                            <Image
                                style={{ height: 81, width: 81, }}
                                source={require('../../Assets/Images/CouponsProfile.png')}
                            />
                        </TouchableOpacity>
                        <Text style={[FontStyle.ag14Reguler, { marginBottom: 20 }]}>Coupons</Text>
                    </View>

                </View>
                {/* <View style={{ height: 5, backgroundColor: '#D4D7DE', marginLeft: 24, marginRight: 24, marginTop: 12 }}></View> */}
                <View style={{ marginLeft: 28, marginRight: 24, marginTop: 32 }}>
                    <TouchableOpacity style={{ marginBottom: 10, height: 35, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}
                        onPress={this.faqPage}
                    >
                        <Text style={FontStyle.ag14Medium, []}>FAQ</Text>
                        <Image
                            style={{ width: 8, height: 13 }}
                            source={require('../../Assets/Images/RightBlackArrow.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginBottom: 10, height: 35, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}
                        onPress={this.aboutUsPage}
                    >
                        <Text style={FontStyle.ag14Medium, []}>About Us</Text>
                        <Image
                            style={{ width: 8, height: 13 }}
                            source={require('../../Assets/Images/RightBlackArrow.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginBottom: 10, height: 35, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}
                        onPress={this.privacyPolicyPage}
                    >
                        <Text style={FontStyle.ag14Medium, []}>Privacy Policy</Text>
                        <Image
                            style={{ width: 8, height: 13 }}
                            source={require('../../Assets/Images/RightBlackArrow.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginBottom: 10, height: 35, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}
                        onPress={this.termsAndConditionsPage}
                    >
                        <Text style={FontStyle.ag14Medium, []}>Terms and Conditions</Text>
                        <Image
                            style={{ width: 8, height: 13 }}
                            source={require('../../Assets/Images/RightBlackArrow.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginBottom: 10, height: 35, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}
                        onPress={this.loginPage}
                    >
                        <Text style={FontStyle.ag14Medium, { color: '#D90D00' }}>Logout</Text>
                        <Image
                            style={{ width: 8, height: 13 }}
                            source={require('../../Assets/Images/RightBlackArrow.png')}
                        />
                    </TouchableOpacity>

                </View>
                {/* <TouchableOpacity style={{ marginLeft: 16, marginRight: 16, marginTop: 24, backgroundColor: '#ffff', borderRadius: 16 }}
                    onPress={this.bookingDetailsPage}
                >

                </TouchableOpacity> */}
            </View >
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAECF4'
    },
});