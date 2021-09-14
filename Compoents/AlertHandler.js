import React, { Component } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";


export default function alertHandler({ tittle = 'Alert', message, onPressOk, onPressCancel, cancelTxt = 'cancel', okTxt = 'ok', withCancel = false }) {


    if (withCancel) {
        console.log('one printerdddd')
        return (

            Alert.alert(
                tittle,
                message,
                [
                    {
                        text: cancelTxt,
                        onPress: onPressCancel,
                        style: "cancel"
                    },
                    {
                        text: okTxt,
                        onPress: onPressOk,

                    }
                ]
            )
        )
    } else {
        console.log('else printerdddd')
        return (
            Alert.alert(
                tittle,
                message,
                [
                    {
                        text: okTxt,
                        onPress: onPressOk,
                    }
                ]
            )
        )
    }

}

