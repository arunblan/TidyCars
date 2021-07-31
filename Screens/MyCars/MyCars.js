import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, StyleSheet, Button, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';
// import FontStyle from '../../Compoents/FontStyle';
import { StackActions, NavigationActions } from 'react-navigation';
import FontStyle from '../../Compoents/FontStyle';
// import BookedWashView from './BookedWashCell'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { SCircle, SBox } from '../../Compoents/SkeletonView';

export default class MyCars extends Component {

    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }


    componentDidMount() {
        // alert("one")
        console.log("gfhgfhgfhfghfghf")
        let hghj = setTimeout(() => {

            { this.isLoadingControl() }
        }, 5000)
    }

    backNavigation = () => {
        // alert('s')
        this.props.navigation.goBack()
    }
    addCarPage = () => {
        // alert('s')
        this.props.navigation.navigate("addCar", { data: true })
    }
    // HomePage = () => {
    //     // alert('s')
    //     this.props.navigation.navigate("Home")
    // }
    isLoadingControl = () => {
        this.setState({ isLoading: false })
    }


    render() {

        return (
            <View style={styles.container}>

                <Text style={[FontStyle.ag24Bold, { marginTop: 54, marginLeft: 16 }]}>My Cars</Text>
                {/* <SBox /> */}

                {/* <BookedWashView /> */}
                <View style={{ flex: 1, }}>

                    <View style={{ marginRight: '20%', marginLeft: '20%', marginTop: 81, marginBottom: 134, flex: 1, alignItems: 'center' }}>


                        <Image
                            style={{ height: 220, width: 191, }}
                            source={require('../../Assets/Images/MyCarEmptyTemp.png')}
                        >


                        </Image>
                        <Text
                            style={[FontStyle.ag16Reguler, { marginTop: 74, color: '#989EB1', textAlign: 'center' }]}
                        >
                            Mark favorite the car to save time on your next booking
                            </Text>
                        <TouchableOpacity style={{ marginTop: 31, backgroundColor: '#552EDF', borderRadius: 21, justifyContent: 'center', alignSelf: 'center' }}
                            onPress={this.addCarPage}
                        >
                            <View
                                style={{ height: 59, width: 59, borderRadius: 21, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 45, textAlign: 'center', marginBottom: 10, color: '#fff' }}>+</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    {/* <View style={{ height: 100, width: 100, backgroundColor: 'red' }}>

                        </View> */}
                </View>


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