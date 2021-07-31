import React, { Component } from 'react';
import {
    View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, StyleSheet, Keyboard, TouchableWithoutFeedback,
} from 'react-native';
import { color } from 'react-native-reanimated';
import FontStyle from '../../Compoents/FontStyle';
import { StackActions, NavigationActions } from 'react-navigation';
import BlueButton from '../../Compoents/BlueButton';
export default class EnterName extends Component {


    componentDidMount = () => {
    }






    render() {

        return (
            <View style={{ flex: 1, backgroundColor: '#623CEA' }}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <KeyboardAvoidingView style={{ flex: 1, }} behavior='padding'>
                        <View style={styles.backButtonView}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("OtpScreen")}>
                                {/* <TouchableOpacity onPress={() => navigation.goBack()}> */}
                                <Image
                                    source={require('../../Assets/Images/BackArrow.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={[styles.enterNameStyle, FontStyle.ag42Bold]}>Enter Your</Text>
                        <Text style={[styles.NameStyle, FontStyle.ag42Bold]}>Name</Text>
                        {/* <View style={{ marginTop: 60, marginRight: 16, marginLeft: 16, left: 16, right: 16 }}> */}
                        <TextInput
                            placeholder={'Enter Your Name'}
                            style={[styles.inputStyle, FontStyle.ag24Reguler]}

                            placeholderTextColor={'#8968FF'}
                        />
                        {/* </View> */}


                        <View style={styles.blueBtnBgView}>
                            <BlueButton onpress={() => this.props.navigation.navigate("AllowLocation")} />
                        </View>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    enterNameStyle: {
        marginTop: 40,
        color: '#ffff',
        marginLeft: 20,
    },
    NameStyle: {
        marginTop: -15,
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
        marginTop: 50,
        marginLeft: 16
    },
    blueBtnBgView: {
        backgroundColor: '#623CEA',
        position: 'absolute',
        bottom: 32,
        width: '100%',
        height: 60
    }, inputStyle: {
        // borderRadius: 15,
        marginTop: 54,
        paddingLeft: 0,
        // backgroundColor: '#552EDF',
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 17,
        height: 59,
        justifyContent: 'center',
        color: '#ffff',
        borderBottomColor: '#8D6DFF',
        borderBottomWidth: 2

    },

}
)