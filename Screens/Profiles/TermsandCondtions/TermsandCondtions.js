import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, StyleSheet, Button, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';
// import FontStyle from '../../Compoents/FontStyle';
import { StackActions, NavigationActions } from 'react-navigation';
import FontStyle from '../../../Compoents/FontStyle';
import CrevedNav from '../../../Compoents/CravedNavDesign';
import CouponsCell from '../../Coupons/CouponsCell'
// import CouponsSearch from './CouponsSearchCell'
export default class TermsandCondtions extends Component {


    // constructor() {
    //     super()
    //     this.state = {

    //         availabletimeSlots: [
    //             { id: 1, time: '10:00 AM', Active: false },
    //             { id: 2, time: '10:30 AM', Active: false },
    //             { id: 3, time: '11:00 AM', Active: false },
    //             { id: 4, time: '11:20 AM', Active: false },
    //             { id: 5, time: '12:00 AM', Active: false },
    //             { id: 6, time: '12:20 AM', Active: false },
    //         ],
    //         selectTimeSlotId: null
    //     }
    // }

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
                <ScrollView style={{ flex: 1 }}>
                    <CrevedNav
                        navTittle='Terms and Condtions'
                        navHeight='100'
                        backOnPress={this.backNavigation}
                        small={true}
                    />
                    <View style={{ marginTop: 15, height: 136, width: 116, alignSelf: 'center' }}>
                        <Image
                            style={{ height: 136, width: 116, resizeMode: 'contain' }}
                            source={require('../../../Assets/Images/TidyCarLogWithName.png')}
                        />
                    </View>

                    <View style={{ marginTop: 15, marginLeft: 16, marginRight: 16, marginBottom: 20 }}>
                        <Text style={FontStyle.ag14Reguler}>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and  What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum  typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum </Text>
                    </View>

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

}
)