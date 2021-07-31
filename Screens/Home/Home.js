import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, StyleSheet, Button, ScrollView, Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';
import FontStyle from '../../Compoents/FontStyle';
import LottieView from 'lottie-react-native'

export default class AllowYourLocation extends Component {

    constructor() {
        super()
        this.state = {
            vehicleList: [
                { id: 1, name: 'Luxury', image: require('../../Assets/Images/DummyCars/1.png') },
                { id: 2, name: 'Hatch Back', image: require('../../Assets/Images/DummyCars/2.png') },
                { id: 3, name: 'Sedan', image: require('../../Assets/Images/DummyCars/3.png') },
                { id: 4, name: 'SUV', image: require('../../Assets/Images/DummyCars/4.png') },
                { id: 5, name: 'Truck', image: require('../../Assets/Images/DummyCars/5.png') },
                { id: 6, name: 'Bike', image: require('../../Assets/Images/DummyCars/6.png') },
            ]
        }
    }

    chooseVehicleNavigation() {
        this.props.navigation.navigate("ServiceOptions")
    }

    componentDidMount = () => {
    }
    notificationPage = () => {
        this.props.navigation.navigate("notification")
    }
    render() {



        return (
            <View style={{ flex: 1, backgroundColor: '#EAECF4' }}>
                <ScrollView style={{ flex: 1, }}>
                    <View style={styles.viewContainer}>
                        <Text style={[styles.nameText, FontStyle.ag24Bold]}>Hi Sara</Text>

                        <View style={styles.locationBgView}>
                            <Text style={[FontStyle.ag14Reguler]}>Westhills, Calicut</Text>
                            <Image
                                source={require('../../Assets/Images/downBlackArrow.png')}
                                style={{ justifyContent: 'center', width: 11, height: 7, marginLeft: 7 }}
                            ></Image>
                        </View>

                        <TouchableOpacity style={styles.notificationBgView}
                            onPress={this.notificationPage}
                        >
                            <Image
                                source={require('../../Assets/Images/NotificationBell.png')}
                                style={styles.notficationImageView}
                            />
                        </TouchableOpacity>

                        <View style={styles.bannerBgView}>
                            <Image
                                source={require('../../Assets/Images/HomeBanner.png')}
                                style={styles.bannerImageView}
                            />
                        </View>
                        <Text style={[styles.sectionTittle, FontStyle.ag16Medium]}> Choose Vehicle</Text>
                        <View style={styles.chooseVehicleBgView}>
                            {this.state.vehicleList.map((it, i) => {
                                return (
                                    // <TouchableOpacity onPress={() => { alert(it.name) }}>
                                    <TouchableOpacity onPress={() => { this.chooseVehicleNavigation() }}>
                                        <View style={[styles.chooseVehicleCard, { marginBottom: i > 2 ? 0 : 16 }]}>
                                            <Image style={styles.chooseVehicleCardImage}
                                                source={it.image}
                                            />
                                            <Text style={[FontStyle.ag14Semibold, styles.chooseVehicleCardText]}>{it.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        <Text style={[styles.sectionTittle, FontStyle.ag16Medium]}> Recent Wash</Text>
                        <View style={styles.recentWashBgView}>
                            <View style={styles.recentWashHeader}>
                                <Text style={[FontStyle.ag16Semibold, { color: '#ffff' }]}>KL 15 AB 5985</Text>
                            </View>
                            <View style={{ flexDirection: 'row', backgroundColor: '#ffff', padding: 12, }}>

                                <View style={{}}>
                                    <Image style={{ height: 54, width: 101 }}
                                        source={require('../../Assets/Images/DummyCars/3.png')}
                                    />
                                </View>

                                <View style={{}}>

                                    <View style={styles.recentWashText}>
                                        <Image style={styles.recentWashImg}
                                            source={require('../../Assets/Images/GreenCheck.png')}
                                        />
                                        <Text style={[FontStyle.ag14Reguler]}> Steam Wash</Text>

                                    </View>

                                    <View style={styles.recentWashText}>
                                        <Image style={styles.recentWashImg}
                                            source={require('../../Assets/Images/GreenCheck.png')}
                                        />
                                        <Text style={[FontStyle.ag14Reguler]}> Engine Room Washing</Text>

                                    </View>


                                </View>

                            </View>
                            <View style={styles.bookAgainBtnBgView}>
                                <TouchableOpacity>
                                    <Text
                                        style={[FontStyle.ag14Semibold, { color: '#552EDF' }]}>Book Again</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={[styles.sectionTittle, FontStyle.ag16Medium]}>Free Wash</Text>
                        <View style={styles.freeWashBgView}>
                            <View style={styles.freeWashProgess}>
                                <LottieView source={require('../../Assets/Animation/Bubble.json')} autoPlay loop style={{ flex: 1, resizeMode: 'stretch', borderRadius: !6 }}

                                />

                                <Text style={[styles.freeWashProgressText, FontStyle.ag14Semibold, { color: '#ffff' }]}>12/20</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    nameText: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 16,
        marginTop: 51
    },
    viewContainer: {
        flex: 1,
        backgroundColor: '#EAECF4',
        width: '100%',
        // height: 1077
    },
    locationBgView: {
        marginLeft: 16,
        marginTop: 7,
        backgroundColor: '#EAECF4',
        width: '70%',
        height: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    notificationBgView: {
        right: 16,
        top: 57,
        backgroundColor: '#ffff',
        width: 48,
        height: 48,
        position: 'absolute',
        borderRadius: 16,

    },
    notficationImageView: {
        width: 24,
        height: 24,
        alignSelf: 'center',
        marginTop: 13,
        // backgroundColor: 'blue',

    }, bannerBgView: {
        backgroundColor: '#EAECF4',
        height: 142,
        marginTop: 23,
        marginLeft: 16,
        marginRight: 16
    },
    bannerImageView: {
        borderRadius: 20,
        flex: 1,
        resizeMode: 'contain',
        height: '100%',
        width: '100%'
    },
    sectionTittle: {
        marginLeft: 16,
        marginTop: 32
    },
    chooseVehicleBgView: {
        backgroundColor: '#EAECF4',
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: 'space-between',
        // height: 230,
        marginTop: 23,
        marginLeft: 16,
        marginRight: 16
    },

    chooseVehicleCard: {
        width: 107,
        height: 107,
        backgroundColor: "#ffff",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15


    },
    chooseVehicleCardImage: {
        // marginTop: 22,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#ffff',
        height: 50,
        width: '80%'
    },
    chooseVehicleCardText: {
        marginTop: 10
    },
    recentWashBgView: {
        backgroundColor: '#ffff',
        // flexDirection: 'row',
        // flexWrap: "wrap",
        // justifyContent: 'space-between',
        height: 192,
        marginTop: 23,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 16,
    },
    recentWashHeader: {
        marginTop: 0,
        marginRight: 0,
        marginLeft: 0,
        height: 48,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        backgroundColor: '#623CEA',
        justifyContent: 'center',
        alignItems: 'center'
    },
    recentWashImgView: {
        height: 54,
        width: 101,
        marginTop: 15,
        marginLeft: 122,
        marginRight: 0,
        marginBottom: 0,
        backgroundColor: 'green'
    },
    recentWashText: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        marginLeft: 16,
        padding: 2
    },
    recentWashImg: {
        height: 18,
        width: 18
    },
    bookAgainBtnBgView: {
        height: 47,
        backgroundColor: '#EAECF4',
        margin: 9,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    freeWashBgView: {
        height: 60,
        borderRadius: 16,
        marginTop: 23,
        marginRight: 16,
        marginLeft: 16,
        marginBottom: 25,
        backgroundColor: 'white',
        padding: 6,
    },
    freeWashProgess: {
        backgroundColor: '#0CD3FF',
        borderRadius: 14,
        width: '60%',
        height: 49,
        justifyContent: 'center',
        paddingRight: 20
    },
    freeWashProgressText: {
        textAlign: 'right'
    }



})