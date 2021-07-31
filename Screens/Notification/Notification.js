import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, StyleSheet, Button, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';
// import FontStyle from '../../Compoents/FontStyle';
import { StackActions, NavigationActions } from 'react-navigation';
import FontStyle from '../../Compoents/FontStyle';
import CrevedNav from '../../Compoents/CravedNavDesign';
import NotificationCell from './NotificationCell'
export default class Notification extends Component {


    constructor() {
        super()
        this.state = {

            notificationList: [
                { id: 1, type: 'delivered', notiTittle: 'Delivered', notiMessage: 'Lorem ipsumadipiscing evgfssum dolorsitamet,consectetuer', notiTime: '12-8-2021' },
                { id: 2, type: 'approved', notiTittle: 'Approved', notiMessage: 'Lorem ipsumadipiscing evgfssum dolorsitamet,consectetuer', notiTime: '10-8-2021' },
                { id: 3, type: 'canceled', notiTittle: 'Canceled', notiMessage: 'Lorem ipsumadipiscing evgfssum dolorsitamet,consectetuer', notiTime: '16-8-2021' },
                { id: 4, type: 'custom', notiTittle: 'Car has picked', notiMessage: 'Lorem ipsumadipiscing evgfssum dolorsitamet,consectetuer', notiTime: '18-8-2021' },
                { id: 5, type: 'custom', notiTittle: 'Car wash completed', notiMessage: 'Lorem ipsumadipiscing evgfssum dolorsitamet,consectetuer', notiTime: '13-8-2021' },
                { id: 6, type: 'canceled', notiTittle: 'Canceled', notiMessage: 'Lorem ipsumadipiscing evgfssum dolorsitamet,consectetuer', notiTime: '19-8-2021' },
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
                <ScrollView style={{ flex: 1 }}>
                    <CrevedNav
                        navTittle='Notification'
                        navHeight='100'
                        backOnPress={this.backNavigation}
                        small={true}
                    />
                    <View style={{ marginTop: 24, marginLeft: 16, marginRight: 16 }}>
                        {this.state.notificationList.map((item) => {
                            return (
                                <NotificationCell
                                    notificationType={item.type}
                                    notificationTittle={item.notiTittle}
                                    notificationDate={item.notiTime}
                                    notificationDiscription={item.notiMessage}
                                />
                            )

                        })}
                        {/* <NotificationCell
                            notificationType={'delivered'}
                        />
                        <NotificationCell /> */}
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