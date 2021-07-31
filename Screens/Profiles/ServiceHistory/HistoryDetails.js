import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, StyleSheet, Button, ScrollView, Modal } from 'react-native';
import { color } from 'react-native-reanimated';
// import FontStyle from '../../Compoents/FontStyle';
import { StackActions, NavigationActions } from 'react-navigation';
import FontStyle from '../../../Compoents/FontStyle';
// import CrevedNav from '../../Compoents/CravedNavDesign';
import ChooseCar from '../../ServiceOptions/SelectCar/ChooseCarCell';
// import OrderSummery from '../ServiceOptions/SelectTimeSlot/OrderSummeryView';
import AddressCell from '../../ServiceOptions/AddAddress/AddressStyleCell'
import RecieptView from '../../../Compoents/Reciept'
// import CancellationPopUp from './CancellationPopUp'
// import SearchView from '../../../Compoents/SearchView';
// import OrderSummery from './OrderSummeryView'
import { SSelectCar, SEditAddress, SReciept, SEditTimeSlots } from '../../../Compoents/SkeletonView';

import RateingStars from '../../../Compoents/RateingStars'
export default class HistoryDetails extends Component {


    constructor() {
        super()
        this.state = {
            cancelPopUp: false,
            isLoading: true

        }
    }

    componentDidMount = () => {
        let timer = setTimeout(() => {
            // console.log('dfsdfsduyfiusuydfiouysdiuyfoydsoiufyod')
            this.isLoadingControl(false)

        }, 3000)
    }

    isLoadingControl = () => {
        this.setState({ isLoading: false })
    }

    backNavigation = () => {
        // alert('s')
        this.props.navigation.goBack()
    }
    showCancelPopUp = () => {
        // alert('s')
        this.setState({ cancelPopUp: true })
    }

    hideCancelPopUp = () => {
        // alert('s')
        this.setState({ cancelPopUp: false })
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

    render() {

        return (
            <View style={styles.viewContainer}>
                {/* <Text>Hello</Text> */}
                {/* <CancellationPopUp
                    visible={this.state.cancelPopUp}
                    hideCancelPopUp={this.hideCancelPopUp}
                /> */}
                <View
                    style={{ marginTop: 52, marginLeft: 16, marginRight: 18, height: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                >

                    <TouchableOpacity
                        style={{ height: 17, width: 10, }}
                        onPress={this.backNavigation}
                    >
                        <Image
                            style={{ height: 17, width: 10 }}
                            source={require('../../../Assets/Images/BackBlackButton.png')}
                        />

                    </TouchableOpacity>
                </View>

                <ScrollView style={{ flex: 1, }}>

                    <View style={{ flex: 1, }}>
                        <View style={{ height: 116, marginLeft: 16, marginRight: 16, marginTop: 24, backgroundColor: '#ffff', borderRadius: 16 }}
                        // onPress={this.selectAddressPage}
                        >
                            {this.state.isLoading ? <SSelectCar /> : <ChooseCar />}
                        </View>
                        <View style={{ marginLeft: 16, marginTop: 21, marginRight: 16, marginBottom: 0, flexDirection: 'row', backgroundColor: '#ffff', height: 57, alignItems: 'center', paddingRight: 20, paddingLeft: 20, borderRadius: 16 }}>
                            <View style={[{ height: 32, flex: 0.7, justifyContent: 'center' }]}>
                                <Text style={[FontStyle.ag14Medium, { color: '#552EDF' }]}>Rate our service</Text>
                            </View>
                            <View style={{ height: 32, flex: 0.9, }}>
                                <RateingStars />
                            </View>
                        </View>
                        <Text style={[styles.subTittle, FontStyle.ag16Medium]}>Address</Text>
                        <View style={{ marginTop: 0, marginRight: 16, marginLeft: 16 }}>
                            {this.state.isLoading ? <SEditAddress /> : <AddressCell
                                residenceType={"item.Type"}
                                buildingName={'item.BuildingName'}
                                streetName={'item.StreetName'}
                                phoneNumber={'item.PhoneNumber'}
                                removeHideButton={true}

                                editOnPress={this.selectAddressPage}
                            // addressOnPress={this.summaryPage}
                            />}

                        </View>
                        <Text style={[styles.subTittle, FontStyle.ag16Medium]}>Slot</Text>
                        {this.state.isLoading ? <SEditTimeSlots /> : <View style={{ marginLeft: 16, marginRight: 16, marginTop: 14, height: 50, borderRadius: 16, backgroundColor: '#ffff', flexDirection: 'row', }}>
                            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', borderTopLeftRadius: 16, borderBottomLeftRadius: 16 }}>
                                <Image
                                    style={{ width: 24, height: 24, marginLeft: 8 }}
                                    source={require('../../../Assets/Images/CalendarBlack.png')}
                                />
                                <Text style={[FontStyle.ag16Reguler, { marginLeft: 11 }]}>25-May-2021</Text>
                            </View>
                            <View style={{ width: 1, height: 33, backgroundColor: '#D4D7DE', alignSelf: 'center' }}></View>
                            <View style={{ flex: 1, flexDirection: 'row', borderTopRightRadius: 16, borderBottomRightRadius: 16 }}>
                                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                                    <Image
                                        style={{ width: 24, height: 24, marginLeft: 8, }}
                                        source={require('../../../Assets/Images/BlackClock.png')}
                                    />
                                    <Text style={[FontStyle.ag16Reguler, { marginLeft: 11 }]}>10:30 AM</Text>
                                </View>
                                <View style={{ flex: 0.4, justifyContent: 'center', borderTopRightRadius: 16, borderBottomRightRadius: 16 }}>

                                </View>
                            </View>
                        </View>}

                    </View>
                    <View style={{ flex: 1, }}>
                        {/* <OrderSummery
                            timeView={true}
                        /> */}
                        {this.state.isLoading ? <SReciept /> : <RecieptView />}

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
        marginTop: 26,
        marginLeft: 16
    },

}
)