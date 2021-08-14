import React, { Component } from 'react';
import {
    View, Text, Button, Input, Image, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback, Platform,

    KeyboardAvoidingView, Dimensions
} from 'react-native';
import BlueButton from '../../Compoents/BlueButton';
import FontStyle from '../../Compoents/FontStyle';
const { width } = Dimensions.get("window");

export default class Login extends Component {

    componentDidMount = () => {
        // this.ref.nameref;
        // this.navigation.
        this.props.navigation.setOptions({ tabBarVisible: false })
    }
    render() {
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <KeyboardAvoidingView style={{ flex: 1, }} behavior={Platform.OS === 'ios' ? 'padding' : null} >
                    <View style={Styles.bgView}>

                        <View style={Styles.bgView2}>
                            <Image source={require('../../Assets/Images/carWashLogin.png')}
                                style={Styles.backgroundImage}
                            />
                        </View>

                        <Text style={[Styles.textStyle, FontStyle.ag32Bold]}>Log in</Text>
                        <View style={[Styles.phoneNumberBgStyle]}>
                            <TextInput
                                placeholder={'+91'}
                                style={[Styles.inputStyle91, FontStyle.ag18Reguler]}
                                keyboardType="number-pad"
                                placeholderTextColor={'#8968FF'}
                            />
                            <TextInput
                                placeholder={'Enter Your Mobile Number'}
                                style={[Styles.inputStyle, FontStyle.ag18Reguler]}
                                keyboardType="number-pad"
                                placeholderTextColor={'#8968FF'}
                            />
                        </View>
                        <BlueButton text='Submit' style={[Styles.blueButtonStyle]} onpress={() => this.props.navigation.navigate("OtpScreen")} />

                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        );
    }
}

const Styles = StyleSheet.create({
    bgView: {
        flex: 1,
        backgroundColor: '#623CEA'
    },
    backgroundImage: {
        backgroundColor: '#623CEA',

        width: width,
        height: 806,

        marginLeft: 25,

        resizeMode: 'contain',
        position: 'absolute'
    },
    bgView2: {
        flex: 1,
        backgroundColor: '#623CEA',
    },
    blueButtonStyle: {
        marginBottom: Platform.OS == 'ios' ? 44 : 0
    },
    inputStyle: {

        marginTop: 0,
        paddingLeft: 0,
        paddingRight: 20,
        backgroundColor: '#623CEA',
        marginLeft: 16,
        marginRight: 0,
        marginBottom: 0,
        height: 59,
        flex: 1,
        color: '#ffff',
        borderBottomColor: '#8D6DFF',
        borderBottomWidth: 2
    },
    inputStyle91: {

        marginTop: 0,
        paddingLeft: 0,
        backgroundColor: '#623CEA',
        marginLeft: 0,
        paddingLeft: 10,
        paddingRight: 10,
        height: 59,
        width: 60,
        justifyContent: 'center',
        color: '#ffff',
        borderBottomColor: '#ffff',
        borderBottomWidth: 2
    },
    textStyle: {
        marginBottom: 21,
        marginLeft: 24,
        fontSize: 32,
        color: '#FFFFFF'
    },
    phoneNumberBgStyle: {
        marginRight: 16,
        marginLeft: 16,
        backgroundColor: '#623CEA', //
        flexDirection: 'row',
        marginBottom: 60,
        height: 59
    }


})