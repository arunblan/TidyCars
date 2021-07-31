import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, StyleSheet, Button, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';
// import FontStyle from '../../Compoents/FontStyle';
import { StackActions, NavigationActions } from 'react-navigation';
import FontStyle from '../../../Compoents/FontStyle';
import CrevedNav from '../../../Compoents/CravedNavDesign';
import SearchView from '../../../Compoents/SearchView';
import TimeSlotView from './TimeSlotViewCell'
import { bounce } from 'react-native/Libraries/Animated/Easing';
export default class SelectTimeSlot extends Component {


    constructor() {
        super()
        this.state = {

            availabletimeSlots: [
                { id: 1, time: '10:00 AM', Active: false },
                { id: 2, time: '10:30 AM', Active: false },
                { id: 3, time: '11:00 AM', Active: false },
                { id: 4, time: '11:20 AM', Active: false },
                { id: 5, time: '12:00 AM', Active: false },
                { id: 6, time: '12:20 AM', Active: false },
            ],
            selectTimeSlotId: null
        }
    }

    componentDidMount = () => {
    }

    backNavigation = () => {
        // alert('s')
        this.props.navigation.goBack()
    }
    selectCarPage = () => {
        // alert('s')
        this.props.navigation.navigate("selectCar")
    }
    onTimePress = (id) => {
        // alert(id)
        console.log(this.state.availabletimeSlots)
        this.setState({ selectTimeSlotId: id })
    }



    render() {

        return (
            <View style={styles.viewContainer}>
                {/* <Text>Hello</Text> */}
                <ScrollView style={{ flex: 1 }} bounces={false}>
                    <CrevedNav
                        navTittle='Select Slot'
                        navHeight='120'
                        backOnPress={this.backNavigation}
                    />
                    <SearchView />
                    <Text style={[styles.dateSubTittle, FontStyle.ag16Medium]}>Select Date</Text>

                    <View style={{ backgroundColor: '#ffff', marginLeft: 16, marginRight: 16, marginTop: 16, borderRadius: 15, height: 56, flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ height: 19, width: 19, marginLeft: 21 }}
                            source={require('../../../Assets/Images/BlackCalander.png')}
                        />
                        <Text style={[FontStyle.ag16Reguler, { left: 19 }]}>25-May-2033</Text>
                        <Image style={{ height: 7, width: 11, position: 'absolute', right: 22 }}
                            source={require('../../../Assets/Images/downBlackArrow.png')}
                        />
                    </View>

                    <Text style={[styles.timeSubTittle, FontStyle.ag16Medium]}>Available Time Slots</Text>
                    <View style={{ marginLeft: 0, marginRight: 0, flexDirection: 'row', flexWrap: 'wrap' }}>
                        {/* <TimeSlotView />
                        <TimeSlotView />
                        <TimeSlotView />
                        <TimeSlotView />
                        <TimeSlotView /> */}
                        {this.state.availabletimeSlots.map((item) => {
                            return (
                                <TimeSlotView time={item.time} Active={this.state.selectTimeSlotId == item.id} timeOnPress={() => this.onTimePress(item.id)} />
                            )

                        })}
                    </View>
                    {/* <View style={{ backgroundColor: '#ffff', marginLeft: 16, marginRight: 16, marginTop: 16, borderRadius: 15, height: 56, flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ height: 19, width: 19, marginLeft: 21 }}
                            source={require('../../../Assets/Images/BlackClock.png')}
                        />
                        <Text style={[FontStyle.ag16Reguler, { left: 19 }]}>10:30 AM</Text>
                        <Image style={{ height: 7, width: 11, position: 'absolute', right: 22 }}
                            source={require('../../../Assets/Images/downBlackArrow.png')}
                        />
                    </View> */}

                    {/* <OrderSummery
                        list={this.state.vehicleList}
                    /> */}





                    {/* <View > */}

                    {/* </View> */}
                </ScrollView>
                <TouchableOpacity
                    style={{ backgroundColor: '#552EDF', left: 16, right: 16, borderRadius: 15, height: 56, bottom: 15, justifyContent: 'center', alignItems: 'center', position: "absolute" }}
                    onPress={this.selectCarPage}
                >
                    <Text style={[FontStyle.ag14Semibold, { color: '#ffff' }]}>Next</Text>

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
        marginLeft: 16,
        marginBottom: 16
    },

}
)