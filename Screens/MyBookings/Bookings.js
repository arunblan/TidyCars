import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, StyleSheet, Button, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';
// import FontStyle from '../../Compoents/FontStyle';
import { StackActions, NavigationActions } from 'react-navigation';
import FontStyle from '../../Compoents/FontStyle';
import BookedWashView from './BookedWashCell'
export default class BookingSummary extends Component {




    componentDidMount = () => {
    }

    backNavigation = () => {
        // alert('s')
        this.props.navigation.goBack()
    }
    bookingDetailsPage = () => {
        // alert('s')
        this.props.navigation.navigate("bookingDetails")
    }
    // HomePage = () => {
    //     // alert('s')
    //     this.props.navigation.navigate("Home")
    // }



    render() {

        return (
            <View style={styles.container}>
                <Text style={[FontStyle.ag24Bold, { marginTop: 54, marginLeft: 16 }]}>My Bookings</Text>
                <TouchableOpacity style={{ marginLeft: 16, marginRight: 16, marginTop: 24, backgroundColor: '#ffff', borderRadius: 16 }}
                    onPress={this.bookingDetailsPage}
                >
                    <BookedWashView />

                </TouchableOpacity>
            </View >
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAECF4'
    },
});