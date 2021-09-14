//8590798705
import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { color } from 'react-native-reanimated';
import FontStyle from '../../Compoents/FontStyle';
import { StackActions, NavigationActions } from 'react-navigation';
import BlueButton from '../../Compoents/BlueButton';
import alertHandler from '../../Compoents/AlertHandler';
import auth from '@react-native-firebase/auth';
import { connect } from 'react-redux';
import { updateToken } from '../../Src/Actions/user';

class OtpScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pin1: "",
            pin2: "",
            pin3: "",
            pin4: "",
            pin5: "",
            pin6: "",
            authCode: null,
            conformCode: null,
            token: null

        }
    }

    componentDidMount = () => {
        this.refs.pin1ref.focus()

        // alert('Otp --------' + this.props.route.params.authConformation)
        this.callAuth()

        if (!this.props.route.params.newUserFlag) {
            // alert(this.props.route.params.token)
            this.props.updateToken(this.props.route.params.token)
        }
        //8590798705
        callAuth = async () => {
            try {
                const conformation = await auth().signInWithPhoneNumber('+91' + thisprops.route.params.mobileNumber)
                alert('sucess--------' + JSON.stringify(conformation))
                this.setState({ authCode: conformation }, () => {
                    // this.props.navigation.navigate("OtpScreen", { mobile: this.state.mobileNumber, authCode: conformation, newUserFlag: this.state.newUserFlag, token: this.state.token })
                })

                // const responce = await confirm.
            } catch (e) {
                alert(JSON.stringify(e) + 'eerror')
            }
        }

        this.setState({ authCode: this.props.route.params.authCode })

        // if (this.props.route.params) {
        //     console.log(this.props.route.params.mobile)
        //     // alert(JSON.stringify(this.props.route.params.authCode))
        //     // if (this.props.route.params.status) {
        //     //     alert('this.props.route.params.status')
        //     // this.navigateToHomeScreen()
        //     // }
        // }

    }

    codeConformation = async () => {
        // alert(this.state.conformCode + this.state.authCode)
        try {
            if (this.state.conformCode == null || this.state.authCode == null) {
                alertHandler({
                    message: 'Firebase token or Auth missing',
                    okTxt: 'Try again !',
                    onPressOk: () => { this.props.navigation.navigate("LoginScreen") }
                })
            } else {
                const authCodes = this.state.authCode
                const responce = await authCodes.confirm(this.state.conformCode);
                // alert(JSON.stringify(responce))
                if (this.props.route.params.newUserFlag) {
                    this.props.navigation.navigate("EnterName", {
                        mobile: this.props.route.params.mobile,
                    })
                } else {
                    this.props.navigation.navigate("Home")
                }
            }
        } catch (e) {
            alert(JSON.stringify(e) + 'eerror')
            alertHandler({
                message: 'Firebase token error',
                okTxt: 'Try again !',
                onPressOk: () => { this.props.navigation.navigate("LoginScreen") }
            })
        }
    }



    // codeConformation = (code) => {
    //     // alert(JSON.stringify(this.props.route.params.authCode))
    //     // alert(this.state.conformCode)
    //     if (this.state.conformCode == null || this.state.authCode == null) {
    //         alertHandler({
    //             message: 'Firebase token error',
    //             okTxt: 'Try again !',
    //             onPressOk: () => { this.props.navigation.navigate("LoginScreen") }
    //         })
    //     } else {
    //         // { mobile: this.state.mobileNumber, authCode: this.state.authConformation }
    //         if (this.props.route.params.newUserFlag) {
    //             this.props.navigation.navigate("EnterName", {
    //                 mobile: this.props.route.params.mobile,
    //                 authCode: this.state.authCode,
    //                 conformCode: this.state.conformCode
    //             })
    //         } else {

    //         }
    //     }
    // }

    navigateToHomeScreen = () => {
        this.props.navigation.navigate("Home")
    }


    handleBackPress = (event, index) => {
        let { key } = event;
        if (key == 'Backspace') {
            // this.feedCardRef[index].t_focus(); 
            this.refs[index].focus();
        }
    }



    render() {
        const { pin1, pin2, pin3, pin4, pin5, pin6 } = this.state
        console.log("sdfdsf")



        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={{ flex: 1, backgroundColor: '#623CEA' }}>

                    <View style={styles.backButtonView}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("LoginScreen")}>
                            {/* <TouchableOpacity onPress={() => navigation.goBack()}> */}
                            <Image
                                source={require('../../Assets/Images/BackArrow.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.enterOtpStyle, FontStyle.ag42Bold]}>Enter OTP</Text>
                    <Text style={[FontStyle.ag16Medium, styles.otpSentToNumber]}> OTP sent top 8129862588</Text>
                    <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', marginTop: 60 }}>
                        <TextInput
                            ref={"pin1ref"}
                            onChangeText={(pin1) => {
                                this.setState({ pin1: pin1 })
                                if (pin1 != "") {
                                    this.refs.pin2ref.focus();
                                }
                            }}
                            value={pin1}
                            maxLength={1}
                            style={[styles.inputStyle, FontStyle.ag24Reguler]}
                            keyboardType="number-pad"
                        />
                        <TextInput
                            ref={"pin2ref"}
                            onChangeText={(pin2) => {
                                this.setState({ pin2: pin2 })
                                if (pin2 != "") {
                                    this.refs.pin3ref.focus();
                                }

                            }}
                            value={pin2}
                            maxLength={1}
                            onKeyPress={(e) => {
                                this.handleBackPress(e.nativeEvent, "pin1ref")
                            }}
                            style={[styles.inputStyle, FontStyle.ag24Reguler]}
                            keyboardType="number-pad"
                        />
                        <TextInput
                            ref={"pin3ref"}
                            onChangeText={(pin3) => {
                                this.setState({ pin3: pin3 })
                                if (pin3 != "") {
                                    this.refs.pin4ref.focus();
                                }

                            }}
                            value={pin3}
                            maxLength={1}
                            onKeyPress={(e) => {
                                this.handleBackPress(e.nativeEvent, "pin2ref")
                            }}
                            style={[styles.inputStyle, FontStyle.ag24Reguler]}
                            keyboardType="number-pad"
                        />
                        <TextInput
                            ref={"pin4ref"}
                            onChangeText={(pin4) => {
                                this.setState({ pin4: pin4 }, () => {

                                    // alert(`${this.state.pin1} ,${this.state.pin2},${this.state.pin3},${this.state.pin4} `)
                                })
                                if (pin4 != "") {
                                    this.refs.pin5ref.focus();
                                }
                            }}
                            value={pin4}
                            maxLength={1}
                            onKeyPress={(e) => {
                                this.handleBackPress(e.nativeEvent, "pin3ref")
                            }}
                            style={[styles.inputStyle, FontStyle.ag24Reguler]}
                            keyboardType="number-pad"
                        />
                        <TextInput
                            ref={"pin5ref"}
                            onChangeText={(pin5) => {
                                this.setState({ pin5: pin5 }, () => {

                                    // alert(`${this.state.pin1} ,${this.state.pin2},${this.state.pin3},${this.state.pin4} `)
                                })
                                if (pin5 != "") {
                                    this.refs.pin6ref.focus();
                                }
                            }}
                            value={pin5}
                            maxLength={1}
                            onKeyPress={(e) => {
                                this.handleBackPress(e.nativeEvent, "pin4ref")
                            }}
                            style={[styles.inputStyle, FontStyle.ag24Reguler]}
                            keyboardType="number-pad"
                        />
                        <TextInput
                            ref={"pin6ref"}
                            onChangeText={(pin6) => {
                                this.setState({ pin6: pin6 }, () => {
                                    // alert(`${this.state.pin1}${this.state.pin2}${this.state.pin3}${this.state.pin4}${this.state.pin6}${this.state.pin6} + '-----dsaas'`)
                                    this.setState({ conformCode: `${this.state.pin1}${this.state.pin2}${this.state.pin3}${this.state.pin4}${this.state.pin6}${this.state.pin6}` }, () => { this.codeConformation() })
                                    // alert(this.state.conformCode)


                                })
                                if (pin6 != "") {
                                }
                            }}
                            value={pin6}
                            maxLength={1}
                            onKeyPress={(e) => {
                                this.handleBackPress(e.nativeEvent, "pin5ref")
                            }}
                            style={[styles.inputStyle, FontStyle.ag24Reguler]}
                            keyboardType="number-pad"
                        />
                    </View>


                    <View style={styles.blueBtnBgView}>
                        <BlueButton onpress={() => alert(JSON.stringify(this.state.authCode))} />
                    </View>

                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, { updateToken })(OtpScreen)

const styles = StyleSheet.create({
    inputStyle: {
        // marginTop: -25,
        backgroundColor: '#623CEA',
        fontWeight: "600",
        alignSelf: 'center',
        padding: 10,
        height: 67,
        width: '10%',
        color: '#ffff',
        // width: "10%",
        borderRadius: 0,
        textAlign: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#ffff'


    },
    enterOtpStyle: {
        marginTop: 40,
        color: '#ffff',
        marginLeft: 20
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
        marginTop: 50,
        marginLeft: 16
    },
    blueBtnBgView: {
        backgroundColor: '#623CEA',
        position: 'absolute',
        bottom: 32,
        width: '100%',
        height: 60
    }

}
)