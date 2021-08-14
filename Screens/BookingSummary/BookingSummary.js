import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, StyleSheet, Button, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';
// import FontStyle from '../../Compoents/FontStyle';
import { StackActions, NavigationActions } from 'react-navigation';
import FontStyle from '../../Compoents/FontStyle';
import CrevedNav from '../../Compoents/CravedNavDesign';
import ChooseCar from '../ServiceOptions/SelectCar/ChooseCarCell';
import OrderSummery from '../ServiceOptions/SelectTimeSlot/OrderSummeryView';
import AddressCell from '../ServiceOptions/AddAddress/AddressStyleCell'
import RecieptView from '../../Compoents/Reciept'
// import SearchView from '../../../Compoents/SearchView';
// import OrderSummery from './OrderSummeryView'
import { SSelectCar, SEditAddress, SReciept, SEditTimeSlots } from '../../Compoents/SkeletonView';

export default class BookingSummary extends Component {

    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }


    componentDidMount = () => {
        let timer = setTimeout(() => {
            // console.log('dfsdfsduyfiusuydfiouysdiuyfoydsoiufyod')
            this.isLoadingControl(false)

        }, 1000)
    }

    backNavigation = () => {
        // alert('s')
        this.props.navigation.goBack()
    }
    couponsPage = () => {
        // alert('s')
        this.props.navigation.navigate("coupons")
    }
    selectAddressPage = () => {
        // alert('s')
        this.props.navigation.navigate("Address")
    }
    orderCompletePage = () => {
        // alert('s')
        this.props.navigation.navigate("orderComplete")
    }

    selectTimeSlot = () => {
        // alert('s')
        this.props.navigation.navigate("selectTimeSlot")
    }

    isLoadingControl = () => {
        this.setState({ isLoading: false })
    }

    render() {

        return (
            <View style={styles.viewContainer}>
                {/* <Text>Hello</Text> */}
                <ScrollView style={{ flex: 1, }} bounces={false}>
                    <CrevedNav
                        navTittle='Booking Summary'
                        navHeight='100'
                        backOnPress={this.backNavigation}
                        small={true}
                    />
                    <View style={{ flex: 1, }}>
                        <View style={{ height: 116, marginLeft: 16, marginRight: 16, marginTop: 24, backgroundColor: '#ffff', borderRadius: 16 }}
                        // onPress={this.selectAddressPage}
                        >
                            {this.state.isLoading ? <SSelectCar /> : <ChooseCar />}

                        </View>
                        <Text style={[styles.subTittle, FontStyle.ag16Medium]}>Address</Text>
                        <View style={{ marginTop: 0, marginRight: 16, marginLeft: 16 }}>

                            {this.state.isLoading ? <SEditAddress /> : <AddressCell
                                residenceType={"Home"}
                                buildingName={'Silver Plaza'}
                                streetName={'Mavoor Road'}
                                phoneNumber={'+919539820823'}
                                editMode={true}
                                editOnPress={this.selectAddressPage}
                            // addressOnPress={this.summaryPage}
                            />}

                        </View>
                        <Text style={[styles.subTittle, FontStyle.ag16Medium]}>Slot</Text>
                        {this.state.isLoading ? <SEditTimeSlots /> : <View style={{ marginLeft: 16, marginRight: 16, marginTop: 14, height: 50, borderRadius: 16, backgroundColor: '#ffff', flexDirection: 'row' }}>
                            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', borderTopLeftRadius: 16, borderBottomLeftRadius: 16 }}>
                                <Image
                                    style={{ width: 24, height: 24, marginLeft: 8 }}
                                    source={require('../../Assets/Images/CalendarBlack.png')}
                                />
                                <Text style={[FontStyle.ag16Reguler, { marginLeft: 11 }]}>25-May-2021</Text>
                            </View>
                            <View style={{ width: 1, height: 33, backgroundColor: '#D4D7DE', alignSelf: 'center' }}></View>
                            <View style={{ flex: 1, flexDirection: 'row', borderTopRightRadius: 16, borderBottomRightRadius: 16 }}>
                                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                                    <Image
                                        style={{ width: 24, height: 24, marginLeft: 8, }}
                                        source={require('../../Assets/Images/BlackClock.png')}
                                    />
                                    <Text style={[FontStyle.ag16Reguler, { marginLeft: 11 }]}>10:30 AM</Text>
                                </View>
                                <View style={{ flex: 0.4, justifyContent: 'center', borderTopRightRadius: 16, borderBottomRightRadius: 16 }}>
                                    <TouchableOpacity style={{ backgroundColor: '#ffff', width: 24, height: 24, position: 'absolute', right: 11 }}
                                        onPress={this.selectTimeSlot}
                                    >
                                        <Image
                                            style={{ width: 24, height: 24, }}
                                            source={require('../../Assets/Images/EditGray.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>}


                        <TouchableOpacity style={{ marginTop: 24, marginLeft: 16, marginRight: 16, height: 56, backgroundColor: '#ffff', borderRadius: 16, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
                            onPress={this.couponsPage}
                        >
                            <Image
                                style={{ height: 24, width: 24, marginRight: 11 }}
                                source={require('../../Assets/Images/Coupon.png')}
                            />
                            <Text style={[FontStyle.ag16Medium, { color: '#552EDf' }]}>+ Apply Coupon</Text>
                        </TouchableOpacity>


                    </View>
                    <View style={{ flex: 1, }}>
                        {/* <OrderSummery
                            timeView={true}
                        /> */}
                        {this.state.isLoading ? <SReciept /> : <RecieptView />}

                    </View>
                    <TouchableOpacity style={{ marginTop: 0, marginBottom: 20, marginLeft: 16, marginRight: 16, height: 56, backgroundColor: '#552EDf', borderRadius: 16, justifyContent: 'center', alignItems: 'center' }}
                        onPress={this.orderCompletePage}
                    >
                        <Text style={[FontStyle.ag14Semibold, { color: '#fff' }]}>Book Now</Text>
                    </TouchableOpacity>

                </ScrollView>

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
        marginTop: 26,
        marginLeft: 16
    },

}
)