import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, StyleSheet, Button, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';
// import FontStyle from '../../Compoents/FontStyle';
import { StackActions, NavigationActions } from 'react-navigation';
import FontStyle from '../../../Compoents/FontStyle';
import CrevedNav from '../../../Compoents/CravedNavDesign';
import CouponsCell from '../../Coupons/CouponsCell'
import FaqCell from './FaqCell'
// import CouponsSearch from './CouponsSearchCell'
export default class Faq extends Component {


    constructor() {
        super()
        this.state = {

            faqListContent: [
                { id: 1, faqTittle: 'Where does it come from?', faqDiscription: 'Lorem Ipsum is simply dummy text of th printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
                { id: 3, faqTittle: 'Where does it come from Lorem Ipsum is simply dummy text ?', faqDiscription: 'Lorem Ipsum is simply dummy text of th printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
                { id: 2, faqTittle: 'Where does it come from?', faqDiscription: 'Lorem Ipsum is simply dummy text of th printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
                { id: 4, faqTittle: 'Where does it come from Lorem Ipsum is simply dummy text ?', faqDiscription: 'Lorem Ipsum is simply dummy text of th printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
            ],
            // selectTimeSlotId: null
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
                <ScrollView style={{ flex: 1 }}>
                    <CrevedNav
                        navTittle='FAQ'
                        navHeight='100'
                        backOnPress={this.backNavigation}
                        small={true}
                    />
                    <View style={{ marginTop: 35, marginLeft: 16, marginRight: 16, }}>

                        {this.state.faqListContent.map((item) => {
                            return (
                                <FaqCell
                                    faqTittle={item.faqTittle}
                                    faqDiscription={item.faqDiscription}
                                />
                            )
                        })}

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