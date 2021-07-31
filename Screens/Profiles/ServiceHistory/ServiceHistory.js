import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, StyleSheet, Button, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';
// import FontStyle from '../../Compoents/FontStyle';
import { StackActions, NavigationActions } from 'react-navigation';
import FontStyle from '../../../Compoents/FontStyle';
import CrevedNav from '../../../Compoents/CravedNavDesign';
// import ChooseCar from './ChooseCarCell';
// import OrderSummery from '../SelectTimeSlot/OrderSummeryView';
// import SearchView from '../../../Compoents/SearchView';
// import OrderSummery from './OrderSummeryView'
import { SBookings } from '../../../Compoents/SkeletonView';

import ServiceHistoryCells from './ServiceHistoryCell'
export default class ServiceHistory extends Component {

    constructor() {
        super()
        this.state = {

            isLoading: true

        }
    }

    isLoadingControl = () => {
        this.setState({ isLoading: false })
    }

    componentDidMount = () => {
        let timer = setTimeout(() => {
            // console.log('dfsdfsduyfiusuydfiouysdiuyfoydsoiufyod')
            this.isLoadingControl(false)

        }, 3000)
    }

    backNavigation = () => {
        // alert('s')
        this.props.navigation.goBack()
    }
    addCarPage = () => {
        // alert('s')
        this.props.navigation.navigate("addCar")
    }
    historyDetailsPage = () => {
        // alert('s')
        this.props.navigation.navigate("historyDetails")
    }



    render() {

        return (
            <View style={styles.viewContainer}>
                {/* <Text>Hello</Text> */}
                <ScrollView style={{ flex: 1, }}>
                    <CrevedNav
                        navTittle='History'
                        navHeight='100'
                        backOnPress={this.backNavigation}
                        small={true}
                    />
                    <View style={{ marginTop: 24, marginLeft: 16, marginRight: 16, }}>
                        {this.state.isLoading ? <SBookings /> : <ServiceHistoryCells
                            withRateing={false}
                            cellOnPress={this.historyDetailsPage}
                        />}

                        {this.state.isLoading ? <SBookings /> : <ServiceHistoryCells
                            withRateing={true}
                            cellOnPress={this.historyDetailsPage}
                        />}


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