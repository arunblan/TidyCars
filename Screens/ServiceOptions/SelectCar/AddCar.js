import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, StyleSheet, Button, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';
// import FontStyle from '../../Compoents/FontStyle';
import { StackActions, NavigationActions } from 'react-navigation';
import FontStyle from '../../../Compoents/FontStyle';
import CrevedNav from '../../../Compoents/CravedNavDesign';
import ChooseCar from './ChooseCarCell';
import OrderSummery from '../SelectTimeSlot/OrderSummeryView';
// import SearchView from '../../../Compoents/SearchView';
// import OrderSummery from './OrderSummeryView'
export default class AddCar extends Component {

    constructor() {
        super()
        this.state = {
            showCarList: false,
        }
    }
    checkNavigation = () => {
        // alert(this.state.showCarList)
        if (this.state.showCarList) {
            // alert('sd')
            this.props.navigation.navigate("selectCar")
        } else {
            this.backNavigation()
        }
    }


    componentDidMount = () => {
        // alert(this.props.route.data)
        console.log(this.props.route.params.data)
        this.setState({ showCarList: this.props.route.params.data })
        // alert(this.props.route.params.data)
    }

    backNavigation = () => {
        // alert('s')
        this.props.navigation.goBack()
    }



    render() {

        return (
            <View style={styles.viewContainer}>
                <ScrollView style={{ flex: 1, }} bounces={false}>
                    <CrevedNav
                        navTittle='Select Car'
                        navHeight='100'
                        backOnPress={this.backNavigation}
                        small={true}
                    />
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <TouchableOpacity style={{ backgroundColor: '#ffff', marginTop: 32, height: 154, width: 154, borderRadius: 16, borderStyle: 'dashed', borderWidth: 1, borderColor: '#D4D7DE', justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                style={{ width: 54, height: 48 }}
                                source={require('../../../Assets/Images/CameraDummy.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'green' }}></View>
                    <Text style={[styles.subTittle, FontStyle.ag16Medium]}>Choose Your Car</Text>
                    <View style={[{ height: 56, marginLeft: 16, marginRight: 16, marginTop: 16, backgroundColor: '#ffff', borderRadius: 15, justifyContent: 'center' }]}>
                        <Text style={[FontStyle.ag16Reguler, { marginLeft: 20 }]}>Sedan</Text>
                        <Image
                            style={{ height: 7, width: 11, position: 'absolute', right: 22, }}
                            source={require('../../../Assets/Images/downBlackArrow.png')}
                        />
                    </View>

                    <Text style={[styles.subTittle, FontStyle.ag16Medium]}>Brand</Text>
                    <View style={[{ height: 56, marginLeft: 16, marginRight: 16, marginTop: 16, backgroundColor: '#ffff', borderRadius: 15, justifyContent: 'center' }]}>
                        <Text style={[FontStyle.ag16Reguler, { marginLeft: 20 }]}>Honda</Text>
                        <Image
                            style={{ height: 7, width: 11, position: 'absolute', right: 22, }}
                            source={require('../../../Assets/Images/downBlackArrow.png')}
                        />
                    </View>

                    <Text style={[styles.subTittle, FontStyle.ag16Medium]}>Model</Text>
                    <View style={[{ height: 56, marginLeft: 16, marginRight: 16, marginTop: 16, backgroundColor: '#ffff', borderRadius: 15, justifyContent: 'center' }]}>
                        <Text style={[FontStyle.ag16Reguler, { marginLeft: 20 }]}>Civic</Text>
                        <Image
                            style={{ height: 7, width: 11, position: 'absolute', right: 22, }}
                            source={require('../../../Assets/Images/downBlackArrow.png')}
                        />
                    </View>

                    <Text style={[styles.subTittle, FontStyle.ag16Medium]}>Registration Number</Text>
                    <View style={[{ height: 56, marginLeft: 16, marginRight: 16, marginTop: 16, backgroundColor: '#ffff', borderRadius: 15, justifyContent: 'center' }]}>
                        <TextInput placeholder={'Eg: KL 11 AS 1992'} style={[FontStyle.ag16Reguler, { marginLeft: 20 }]}></TextInput>
                    </View>

                    <Text style={[styles.subTittle, FontStyle.ag16Medium]}>Color</Text>
                    <View style={[{ height: 56, marginLeft: 16, marginRight: 16, marginTop: 16, backgroundColor: '#ffff', borderRadius: 15, justifyContent: 'center' }]}>
                        <Text style={[FontStyle.ag16Reguler, { marginLeft: 20 }]}>Red</Text>
                        <Image
                            style={{ height: 7, width: 11, position: 'absolute', right: 22, }}
                            source={require('../../../Assets/Images/downBlackArrow.png')}
                        />
                    </View>

                    <TouchableOpacity style={[{ height: 56, marginLeft: 16, marginRight: 16, marginTop: 32, marginBottom: 24, backgroundColor: '#552EDF', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }]}
                        onPress={this.checkNavigation}
                    >
                        <Text style={[FontStyle.ag14Semibold, { color: '#ffff' }]}>Save</Text>
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
        marginTop: 30,
        marginLeft: 16
    },

}
)