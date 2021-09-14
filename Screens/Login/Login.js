import React, { Component } from 'react';
import {
    View, Text, Button, Input, Image, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback, Platform,

    KeyboardAvoidingView, Dimensions
} from 'react-native';
import BlueButton from '../../Compoents/BlueButton';
import FontStyle from '../../Compoents/FontStyle';
import { mobileNumberCheck } from '../../Compoents/Validation';
import ContryPicker from '../../Compoents/ContryPicker/ContryPicker'
import { TouchableOpacity } from 'react-native-gesture-handler';
const { width } = Dimensions.get("window");
import { connect } from 'react-redux';
import { login } from '../../Src/Actions/user'
import auth from '@react-native-firebase/auth';
import { postApiCall } from '../../Src/service';
class Login extends Component {


    constructor() {
        super()
        this.state = {
            mobileNumber: '',
            isLoading: true,
            ContryPick: false,
            selectedCountryCode: '+91',
            authConformation: null,
            newUserFlag: false,
            token: null
        }
    }



    showContryPickerPopUp = () => {
        // alert('s')
        this.setState({ ContryPick: true })
    }

    hideContryPickerPopUp = () => {
        // alert('s')
        this.setState({ ContryPick: false })


    }

    setSelectedCountry = (code) => {
        this.setState({ selectedCountryCode: code })
    }
    printValue = (txt) => {
        // console.log(txt.length)
        // var hh = txt.toString()
        // console.log(hh.legth)
        this.setState({ mobileNumber: txt })
        console.log(this.state.mobileNumber)
    }
    callAuth = () => {
        // try {
        // const conformation = await auth().signInWithPhoneNumber('+91' + this.state.mobileNumber)
        // alert('sucess--------' + JSON.stringify(conformation))
        // this.setState({ authConformation: conformation }, () => {
        this.props.navigation.navigate("OtpScreen", { mobile: this.state.mobileNumber, newUserFlag: this.state.newUserFlag, token: this.state.token })
        // })

        // const responce = await confirm.
        // } catch (e) {
        //     alert(JSON.stringify(e) + 'eerror')
        // }
    }


    navigateToEnterName = () => {
        // alert(this.state.authConformation)
        // mobileNumberCheck(this.state.mobileNumber) ? this.props.navigation.navigate("OtpScreen", { mobile: this.state.mobileNumber }) : console.log('mor---------')


        // if (mobileNumberCheck(this.state.mobileNumber)) {
        //     this.props.login({ mobile: this.state.mobileNumber }, (responce) => {
        //         console.log(`---------------${responce.message}------`)
        //         // alert(responce.status)

        //         if (responce.status == 'fail') {
        //             this.setState({ newUserFlag: true })
        //             this.callAuth()
        //         } else {
        //             this.setState({token: responce.data.token})
        //             this.setState({ newUserFlag: false })
        //             this.callAuth()
        //         }
        //         // alert(this.state.newUserFlag)
        //         //8714474835

        //     })
        // }
        if (mobileNumberCheck(this.state.mobileNumber)) {
            postApiCall({ apiUrl: `/login?mobile=${this.state.mobileNumbe}` }, (responceJson) => {
                // alert(JSON.stringify(responceJson))
                // console.log(responceJson.status)
                if (responceJson.status == 'fail') {
                    this.setState({ newUserFlag: true })
                    this.callAuth()
                    // alert(responceJson.status, "------al")
                } else {
                    this.setState({ token: responce.data.token })
                    this.setState({ newUserFlag: false })
                    this.callAuth()
                    // alert(responceJson.status)
                }
            })
        }


    }
    componentDidMount = () => {
        // this.ref.nameref;
        // this.navigation.
        this.props.navigation.setOptions({ tabBarVisible: false })

        // postApiCall({ apiUrl: '/register?name=' + this.state.enterdName + '&mobile=' + this.props.route.params.mobile + '&company_id=1' }, (responceJson) => {
        //     console.log(responceJson.status)

        // })
    }
    render() {
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <KeyboardAvoidingView style={{ flex: 1, }} behavior={Platform.OS === 'ios' ? 'padding' : null} >
                    <View style={Styles.bgView}>
                        <ContryPicker
                            visible={this.state.ContryPick}
                            hideContryPickerPopUp={this.hideContryPickerPopUp}
                            setSelectedCountry={this.setSelectedCountry}
                        />

                        <View style={Styles.bgView2}>
                            <Image source={require('../../Assets/Images/carWashLogin.png')}
                                style={Styles.backgroundImage}
                            />
                        </View>

                        <Text style={[Styles.textStyle, FontStyle.ag32Bold]}>Log in</Text>
                        <View style={[Styles.phoneNumberBgStyle]}

                        >
                            {/* <View style={{ height: '90%', width: '90%', backgroundColor: 'red', position: 'absolute' }}> */}
                            <TouchableOpacity
                                style={[Styles.inputStyle91]}
                                onPress={() => this.setState({ ContryPick: true })}
                            >
                                <Text style={[FontStyle.ag18Reguler, { color: '#FFFFFF' }]}>{this.state.selectedCountryCode}</Text>
                            </TouchableOpacity>
                            {/* <TextInput
                                onFocus={() => this.setState({ ContryPick: true })}
                                placeholder={'+91'}

                                style={[Styles.inputStyle91, FontStyle.ag18Reguler]}
                                // keyboardType="number-pad"
                                placeholderTextColor={'#8968FF'}
                            /> */}
                            {/* </View> */}

                            <TextInput
                                placeholder={'Enter Your Mobile Number'}
                                style={[Styles.inputStyle, FontStyle.ag18Reguler]}
                                keyboardType="number-pad"
                                // onChangeText={(txt) => this.printValue(txt)}
                                // onChangeText={mobileNumberCheck}
                                onChangeText={(txt) => this.setState({ mobileNumber: txt })}
                                placeholderTextColor={'#8968FF'}
                                maxLength={10}
                            // minl
                            />
                        </View>
                        <BlueButton text='Submit' style={[Styles.blueButtonStyle]} onpress={this.navigateToEnterName} />

                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {}
};
const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, { login })(Login)

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
        // width: 60,
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
        backgroundColor: '#623CEA', //623CEA
        flexDirection: 'row',
        marginBottom: 60,
        height: 59
    }


})