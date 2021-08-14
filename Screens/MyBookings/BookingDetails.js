import React, { Component } from 'react';
import { View, Text, Platform, TextInput, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, StyleSheet, Button, ScrollView, Modal } from 'react-native';
import { color } from 'react-native-reanimated';
// import FontStyle from '../../Compoents/FontStyle';
import { StackActions, NavigationActions } from 'react-navigation';
import FontStyle from '../../Compoents/FontStyle';
import CrevedNav from '../../Compoents/CravedNavDesign';
import ChooseCar from '../ServiceOptions/SelectCar/ChooseCarCell';
import OrderSummery from '../ServiceOptions/SelectTimeSlot/OrderSummeryView';
import AddressCell from '../ServiceOptions/AddAddress/AddressStyleCell'
import RecieptView from '../../Compoents/Reciept'
import CancellationPopUp from './CancellationPopUp'
import { SSelectCar, SEditAddress, SReciept, SEditTimeSlots } from '../../Compoents/SkeletonView';

// import SearchView from '../../../Compoents/SearchView';
// import OrderSummery from './OrderSummeryView'
export default class BookingSummary extends Component {


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

        }, 1000)
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
                <CancellationPopUp
                    visible={this.state.cancelPopUp}
                    hideCancelPopUp={this.hideCancelPopUp}
                />
                <View
                    style={{ marginTop: Platform.OS == 'ios' ? 52 : 20, marginLeft: 16, marginRight: 18, height: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                >

                    <TouchableOpacity
                        style={{ height: 17, width: 40, }}
                        onPress={this.backNavigation}
                    >
                        <Image
                            style={{ height: 17, width: 10 }}
                            source={require('../../Assets/Images/BackBlackButton.png')}
                        />

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => this.setState({ cancelPopUp: true })}
                    >
                        <Text style={[FontStyle.ag16Reguler, { color: '#E94A4A' }]}>Cancel</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={{ flex: 1, }}>

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
                                streetName={'MG Road'}
                                phoneNumber={'+919539820823'}
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
                    <View style={{ marginTop: 0, marginBottom: 25, marginLeft: 16, marginRight: 16, borderRadius: 16, padding: 16, borderStyle: 'dashed', borderColor: '#D4D7DE', borderWidth: 1 }}
                    // onPress={this.orderCompletePage}
                    >
                        <Text style={[FontStyle.ag14Medium, {}]}>Cancellation Policy</Text>
                        <Text style={[FontStyle.ag12Reguler, { marginTop: 8, marginLeft: 0, marginRight: 0, marginBottom: 16 }]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</Text>
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