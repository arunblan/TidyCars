import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, StyleSheet, Button, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';
import FontStyle from '../../Compoents/FontStyle';
import { StackActions, NavigationActions } from 'react-navigation';
import BlueButton from '../../Compoents/BlueButton';
import CrevedNav from '../../Compoents/CravedNavDesign';
import SearchView from '../../Compoents/SearchView'
import ServiceTypeViews from './ServiceTypeView'
import WashingMethodViews from './WashingMethodView'
import AddOnsView from './AddOns'
import TotalPriceView from './TotalPriceView'
import { SCircle, SBox } from '../../Compoents/SkeletonView';

export default class ServiceOptions extends Component {


    constructor() {
        super()
        this.state = {
            serviceType: [
                { id: 1, name: 'At Home', active: false },
                { id: 2, name: 'From Store', active: false },
                { id: 3, name: 'Self-Service', active: false },
            ],
            washingMethods: [
                { id: 1, name: 'Water Wash', image: require('../../Assets/Images/carWashDummy2.png'), active: false },
                { id: 2, name: 'Steam Wash', image: require('../../Assets/Images/carWashDummy1.png'), active: false }
            ],
            addOnsList: [
                { id: 1, name: 'Engine Room Washing', amount: '250', active: false },
                { id: 2, name: 'Headlight Restoration', amount: '350', active: false },
                { id: 3, name: 'Car saniting', amount: '200', active: false },
            ],
            serviceTypeId: null,
            washingMethodId: null,
            isLoading: false

        }
    }

    componentDidMount = () => {
        // let hghj = setTimeout(() => {
        //     // console.log('dfsdfsduyfiusuydfiouysdiuyfoydsoiufyod')
        //     setisLoading(false)

        // }, 5000)
    }


    serviceTypeButton = (id) => {
        // for multiple select 
        // alert(id)
        // let clicked = this.state.serviceType.filter(element => {
        //     if (element.id == id) {
        //         element.active = true
        //     }
        //     return element

        // });
        // this.setState({ serviceType: clicked })
        // console.log(clicked)

        this.setState({ serviceTypeId: id })
    }

    washMethodButton = (id) => {
        this.setState({ washingMethodId: id })
    }

    backNavigation = () => {
        // alert('s')
        this.props.navigation.goBack()
    }
    addonsButton = (id) => {
        // for multiple select 
        // alert(item)
        let clicked = this.state.addOnsList.filter(element => {
            if (element.id == id) {

                if (element.active == true) {
                    element.active = false
                } else {
                    element.active = true
                }
            }
            console.log(element)
            return element

        });
        this.setState({ addOnsList: clicked })
        console.log(clicked)
    }
    washMethodDetailsNavigation = () => {
        // alert('s')
        this.props.navigation.navigate("WashMethodDetails")
    }
    selectTimeSlot = () => {
        // alert('s')
        this.props.navigation.navigate("selectTimeSlot")
    }
    render() {

        return (
            <View style={{ flex: 1, backgroundColor: '#EAECF4' }}>
                <ScrollView style={{ flex: 1, }} bounces={false}>
                    <View style={styles.viewContainer}>
                        <CrevedNav
                            navTittle='Truck'
                            navHeight='120'
                            backOnPress={this.backNavigation}
                        />
                        <SearchView />
                        <Text style={[styles.natigationBarTittle, FontStyle.ag16Medium]}>Service Type</Text>
                        <View style={[styles.serviceTypeBgView]}>
                            {this.state.serviceType.map((item, i) => {
                                console.log()
                                return (

                                    <ServiceTypeViews Active={this.state.serviceTypeId == item.id} Tittle={item.name} onPress={() => { this.serviceTypeButton(item.id) }} />
                                    // <ServiceTypeViews Active={item.active} Tittle={item.name} onPress={() => { this.serviceTypeButton(item.id) }} /> for multiple select 1
                                )
                            })}
                        </View>
                        <Text style={[styles.natigationBarTittle, FontStyle.ag16Medium]}>Washing Method</Text>
                        <View style={[styles.washBgView]}>

                            {this.state.washingMethods.map((items, id) => {
                                return (
                                    <WashingMethodViews Active={this.state.washingMethodId == items.id} Tittle={items.name} imageUrl={items.image} imageOnPress={() => { this.washMethodButton(items.id) }} viewDetailsOnpress={() => { this.washMethodDetailsNavigation() }} />
                                )
                            })}

                        </View>
                        <Text style={[styles.natigationBarTittle, FontStyle.ag16Medium]}>Add Ons</Text>
                        <View style={styles.addOnsBgview}>
                            {this.state.addOnsList.map((item) => {
                                if (this.state.isLoading) {
                                    return (
                                        <AddOnsView
                                            Tittle={item.name}
                                            amount={item.amount}
                                            Active={item.active}
                                            addOnPress={() => this.addonsButton(item.id)}
                                        />
                                    )
                                } else {
                                    <SBox />
                                }

                            })}
                        </View>
                        <View style={{ marginLeft: 16, marginRight: 16, marginTop: 33, marginBottom: 24, height: 56, }}>
                            <TotalPriceView
                                nextOnPress={() => { this.selectTimeSlot() }}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    viewContainer: {
        flex: 1,
        backgroundColor: '#EAECF4',
        width: '100%',
        // height: 1077
    },
    natigationBarTittle: {
        marginTop: 30,
        marginLeft: 16
    },
    serviceTypeBgView: {
        marginTop: 24,
        height: 42,
        marginRight: 16,
        marginLeft: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    washBgView: {
        // flex: 0.3,
        flexDirection: 'row',
        height: 151,
        // backgroundColor: 'red',
        // borderRadius: 12,
        // alignContent: 'center',
        justifyContent: 'space-between',
        marginTop: 24,
        marginLeft: 16,
        marginRight: 16
    },
    addOnsBgview:
    {
        marginTop: 13,
        marginLeft: 16,
        marginRight: 16,
        // marginBottom:12
    }


}
)