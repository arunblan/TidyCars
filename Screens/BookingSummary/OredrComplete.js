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
export default class BookingSummary extends Component {




    componentDidMount = () => {
    }

    backNavigation = () => {
        // alert('s')
        this.props.navigation.goBack()
    }
    couponsPage = () => {
        // alert('s')
        this.props.navigation.navigate("coupons")
    }
    HomePage = () => {
        // alert('s')
        this.props.navigation.navigate("Home")
    }



    render() {

        return (
            <TouchableOpacity style={styles.viewContainer}
                onPress={this.HomePage}
            >
                <View style={{ height: 200, width: 200, backgroundColor: '#fff' }}>
                    <Image
                        style={{ width: 200, height: 200 }}
                        source={require('../../Assets/Images/OrderCompleteTick.png')}
                    />
                </View>

            </TouchableOpacity >
        )
    }
}

const styles = StyleSheet.create({

    viewContainer: {
        flex: 1,
        backgroundColor: '#552EDF',
        // width: '100%',
        // height: 2077
        justifyContent: 'center',
        alignItems: 'center'
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