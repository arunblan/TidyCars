import React, { Component, useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, StyleSheet, Button, ScrollView } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";


export const SCircle = () => {
    return (
        <SkeletonPlaceholder style={{ flex: 1, }}>
            <SkeletonPlaceholder.Item width={160} height={200} borderRadius={50} />
        </SkeletonPlaceholder>
    )
}

export const SBox = () => {
    // const [isLoading, setisLoading] = useState(true);



    // const callMessage = () => {
    //     let hghj = setTimeout(() => {
    //         console.log('dfsdfsduyfiusuydfiouysdiuyfoydsoiufyod')
    //         setisLoading(false)

    //     }, 5000)
    // }

    // useEffect(() => {
    //     callMessage()
    // }, []);

    // if (isLoading) {
    return (
        <SkeletonPlaceholder>
            {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                <View style={{ marginLeft: 20 }}>
                    <View style={{ width: '100%', height: 20, borderRadius: 4 }} />
                    <View
                        style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
                    />
                </View>
            </View> */}
            <View style={{ height: 400, width: '100%', backgroundColor: 'red' }}></View>
        </SkeletonPlaceholder>
    )
    // } else {
    //     return null
    // }
}



export const SaddOns = () => {
    const [isLoading, setisLoading] = useState(true);



    const callMessage = () => {
        let hghj = setTimeout(() => {
            // console.log('dfsdfsduyfiusuydfiouysdiuyfoydsoiufyod')
            setisLoading(false)

        }, 5000)
    }

    useEffect(() => {
        callMessage()
    }, []);

    if (isLoading) {
        return (
            <SkeletonPlaceholder>
                <View style={{ flexDirection: "row", alignItems: "center", flex: 1, backgroundColor: 'red', position: 'absolute' }}>
                    <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                    <View style={{ marginLeft: 20 }}>
                        <View style={{ width: 120, height: 20, borderRadius: 4 }} />
                        <View
                            style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
                        />
                    </View>
                </View>
            </SkeletonPlaceholder>
        )
    } else {
        return null
    }
}

export const SAddsOns = () => {
    return (
        <SkeletonPlaceholder style={{ flex: 1, }}>
            <SkeletonPlaceholder.Item width={400} height={200} borderRadius={50} />
        </SkeletonPlaceholder>
    )
}