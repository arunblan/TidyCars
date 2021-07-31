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
export default class SelectCar extends Component {




    componentDidMount = () => {
    }

    backNavigation = () => {
        // alert('s')
        this.props.navigation.goBack()
    }
    addCarPage = () => {
        // alert('s')
        this.props.navigation.navigate("addCar", { data: true })
    }
    selectAddressPage = () => {
        // alert('s')
        this.props.navigation.navigate("Address")
    }



    render() {

        return (
            <View style={styles.viewContainer}>
                {/* <Text>Hello</Text> */}
                <ScrollView style={{ flex: 1, }} bounces={false}>
                    <CrevedNav
                        navTittle='Select Car'
                        navHeight='100'
                        backOnPress={this.backNavigation}
                        small={true}
                    />
                    <View style={{ flex: 1, }}>
                        <Text style={[styles.subTittle, FontStyle.ag16Medium]}>Choose Your Car</Text>
                        <TouchableOpacity style={{ height: 116, marginLeft: 16, marginRight: 16, marginTop: 24, backgroundColor: '#ffff', borderRadius: 16 }}
                            onPress={this.selectAddressPage}
                        >
                            <ChooseCar
                                showRightArrow={true}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: 24, marginLeft: 16, marginRight: 16, height: 56, backgroundColor: '#ffff', borderRadius: 16, justifyContent: 'center', alignItems: 'center' }}
                            onPress={this.addCarPage}
                        >
                            <Text style={[FontStyle.ag14Semibold, { color: '#552EDf' }]}>+ Add a Car</Text>
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
        // backgroundColor: 'pink',
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