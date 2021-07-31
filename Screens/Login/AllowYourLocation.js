import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, StyleSheet, Button } from 'react-native';
import { color } from 'react-native-reanimated';
import FontStyle from '../../Compoents/FontStyle';
import { StackActions, NavigationActions } from 'react-navigation';
import BlueButton from '../../Compoents/BlueButton';
import LottieView from 'lottie-react-native'
export default class AllowYourLocation extends Component {


    componentDidMount = () => {
    }






    render() {

        return (
            <View style={{ flex: 1, backgroundColor: '#623CEA' }}>
                <View style={styles.backButtonView}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("EnterName")}>
                        {/* <TouchableOpacity onPress={() => navigation.goBack()}> */}
                        <Image
                            source={require('../../Assets/Images/BackArrow.png')}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={[styles.enterNameStyle, FontStyle.ag32Semibold]}>Allow Your</Text>
                <Text style={[styles.NameStyle, FontStyle.ag32Semibold]}>Location</Text>
                <Text style={[styles.subNameStyle, FontStyle.ag16Medium]}>Please allow the location to find nearby store</Text>

                <View style={styles.imageBgView}>
                    <LottieView source={require('../../Assets/Animation/Location.json')} autoPlay loop style={{ flex: 1, }} />
                </View>

                <View style={styles.blueBtnBgView}>
                    <BlueButton text='Allow' />

                    {/* <Text style={{ justifyContent: 'center', fontSize: 20,  }}>Skip</Text> */}
                </View>


                <View style={{ backgroundColor: '#623CEA', height: 50, width: '100%', bottom: 17, position: 'absolute', justifyContent: 'center', alignSelf: 'center' }}>
                    <Button
                        title='Skip'
                        style={{ padding: 20, FontStyle: 16 }}
                        color='#ffff'
                        onPress={() => this.props.navigation.navigate("Home")}
                    />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    enterNameStyle: {
        marginTop: 40,
        color: '#ffff',
        marginLeft: 16,
    },
    NameStyle: {
        marginTop: -16,
        color: '#ffff',
        marginLeft: 20,
    },
    subNameStyle: {
        marginTop: 16,
        color: '#ffff',
        marginLeft: 20,
    },
    otpSentToNumber: {
        marginLeft: 16,
        marginTop: 16,
        color: '#ffff'
    },
    backButtonView: {
        height: 18,
        width: 18,
        backgroundColor: '#623CEA',
        marginTop: 54,
        marginLeft: 16
    },
    blueBtnBgView: {
        backgroundColor: '#623CEA', //623CEA
        position: 'absolute',
        bottom: 70,
        width: '100%',
        height: 48,
    },
    imageBgView: {
        marginTop: 40,
        marginBottom: 10,
        height: 350,
        width: '100%',
        backgroundColor: '#623CEA'
    }


}
)