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
import { SCircle, SaddOns } from '../../Compoents/SkeletonView';
import { getApiCall } from '../../Src/service';
import { imageBase_url } from '../../Src/api_config'
import store from '../../Src/Store';
export default class ServiceOptions extends Component {


    constructor() {
        super()
        this.state = {
            serviceType: [],
            washingMethods: [],
            addOnsList: [
                { id: 1, name: 'Engine Room Washing', amount: '250', active: false },
                { id: 2, name: 'Headlight Restoration', amount: '350', active: false },
                { id: 3, name: 'Car saniting', amount: '200', active: false },
            ],
            serviceTypeId: null,
            washingMethodId: null,
            isLoading: true,
            selectedVechileId: null

        }
    }

    componentDidMount = () => {
        // console.log()
        alert(this.props.route.params.vehicleId)
        this.apiCall()
        let timer = setTimeout(() => {
            // console.log('dfsdfsduyfiusuydfiouysdiuyfoydsoiufyod')
            this.isLoadingControl(false)

        }, 1000)
    }

    apiCall = () => {
        getApiCall({ apiUrl: '/ServiceOptions?branchid=1&vehicle_categoryid=1' }, (responceJson) => {
            console.log(responceJson)
            this.setState({ serviceTypeId: responceJson.data.serviceTypes[0].id })
            this.setState({ serviceType: responceJson.data.serviceTypes })
            this.setState({ washingMethods: responceJson.data.WashingMethods })
            this.setState({ washingMethodId: responceJson.data.WashingMethods[0].washig_id })
            this.setState({ addOnsList: responceJson.data.Addons })

            // alert(responceJson.data.user[0].name)
            // this.setState({ userName: responceJson.data.user[0].name })
            // this.setState({ branch: responceJson.data.branches })
            // this.setState({ vehicle_category: responceJson.data.vehicle_category })
        })
    }

    getWashingPrice = (id, item) => {
        for (let i = 0; i < item.prices.length; i++) {
            const element = item.prices[i];
            if (element.fk_service_type_id == id) {
                return element.price ?? '200'
            }
        }
    }

    getWashingPriceObject = (id, item) => {
        for (let i = 0; i < item.prices.length; i++) {
            const element = item.prices[i];
            if (element.fk_service_type_id == id) {
                return element.price ?? '200'
            }
        }
    }

    getAddOnPrice = (id, item) => {
        for (let i = 0; i < item.prices.length; i++) {
            const element = item.prices[i];
            if (element.fk_service_type_id == id) {
                return element.price ?? '200'
            }
        }
    }

    printData = () => {
        console.log(store.getState().user.token)
    }

    serviceTypeButton = (id) => {
        this.setState({ serviceTypeId: id })
    }

    isLoadingControl = () => {
        this.setState({ isLoading: false })
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
    washMethodDetailsNavigation = (items) => {
        // alert(items.imageUrl)
        this.props.navigation.navigate("WashMethodDetails", {
            washingName: items.washingName,
            washingId: items.washingId,
            washingPrice: items.price,
            washingImage: items.imageUrl,
            washingDescription: items.description
        })
    }
    selectTimeSlot = () => {
        // alert('s')
        // this.printData()

        // this.props.navigation.navigate("selectTimeSlot")
    }
    render() {

        return (
            <View style={{ flex: 1, backgroundColor: '#EAECF4' }}>
                <ScrollView style={{ flex: 1, }} bounces={false}>
                    <View style={styles.viewContainer}>
                        <CrevedNav
                            navTittle='Service'
                            navHeight='120'
                            backOnPress={this.backNavigation}
                        />
                        <SearchView />
                        {this.state.serviceType && this.state.serviceType.length > 0 ? <>
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
                        </> : null}

                        {this.state.washingMethods && this.state.washingMethods.length > 0 ? <>

                            <Text style={[styles.natigationBarTittle, FontStyle.ag16Medium]}>Washing Method</Text>
                            <View style={[styles.washBgView]}>

                                {this.state.washingMethods.map((items, id) => {
                                    return (
                                        <WashingMethodViews Active={this.state.washingMethodId == items.id} Tittle={items.washing_method_name} imageUrl={{ uri: imageBase_url + items.img_url }} price={this.getWashingPrice(this.state.serviceTypeId, items)} imageOnPress={() => { this.washMethodButton(items.id) }} viewDetailsOnpress={() => { this.washMethodDetailsNavigation({ price: this.getWashingPriceObject(this.state.serviceTypeId, items), washingId: items.id, imageUrl: items.img_url, description: items.description, washingName: items.washing_method_name }) }} />
                                    )
                                })}

                            </View>

                        </> : null}
                        {this.state.serviceType && this.state.serviceType.length > 0 ? <>
                            <Text style={[styles.natigationBarTittle, FontStyle.ag16Medium]}>Add Ons</Text>
                            <View style={styles.addOnsBgview}>
                                {this.state.addOnsList.map((item) => {
                                    if (this.state.isLoading) {
                                        return (
                                            <SaddOns />
                                        )
                                    } else {
                                        return (
                                            <AddOnsView
                                                Tittle={item.add_on_name}
                                                amount={this.getAddOnPrice(this.state.washingMethodId, item)}
                                                Active={item.active}
                                                addOnPress={() => this.addonsButton(item.id)}
                                            />
                                        )
                                    }

                                })}
                            </View>
                        </> : null}
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
        // height: 400,
        // backgroundColor: 'red'
        // marginBottom:12
    }


}
)

//sudo killall usbd
//sudo killall -STOP -c usbd