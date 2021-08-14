import React, { Component, useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, StyleSheet, Button, ScrollView } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import ContentWithGreenTick from './ContentWithGreenTick'

export const SCircle = () => {
    return (
        <SkeletonPlaceholder style={{ flex: 1, }}>
            <SkeletonPlaceholder.Item width={160} height={200} borderRadius={50} />
        </SkeletonPlaceholder>
    )
}


export const SCoupons = () => {
    return (
        <SkeletonPlaceholder style={{ flex: 1, }}>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 1 }}></View>
        </SkeletonPlaceholder>
    )
}

export const SaddOns = () => {

    return (
        <SkeletonPlaceholder>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                <View style={{ marginLeft: 16, width: 60, height: 60, borderRadius: 50 }} />
                <View style={{ marginLeft: 20 }}>
                    <View style={{ width: '100%', height: 20, borderRadius: 4 }} />
                    <View
                        style={{ marginTop: 6, width: 330, height: 20, borderRadius: 4 }}
                    />
                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                <View style={{ marginLeft: 16, width: 60, height: 60, borderRadius: 50 }} />
                <View style={{ marginLeft: 20 }}>
                    <View style={{ width: '100%', height: 20, borderRadius: 4 }} />
                    <View
                        style={{ marginTop: 6, width: 330, height: 20, borderRadius: 4 }}
                    />
                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                <View style={{ marginLeft: 16, width: 60, height: 60, borderRadius: 50 }} />
                <View style={{ marginLeft: 20 }}>
                    <View style={{ width: '100%', height: 20, borderRadius: 4 }} />
                    <View
                        style={{ marginTop: 6, width: 330, height: 20, borderRadius: 4 }}
                    />
                </View>
            </View>
        </SkeletonPlaceholder>
    )
}


export const SEditTimeSlots = () => {

    return (
        <SkeletonPlaceholder>
            <View style={{ height: 42, borderRadius: 15, marginLeft: 16, marginRight: 16, marginBottom: 12, backgroundColor: '#ffff', }}
            >
            </View>
        </SkeletonPlaceholder>
    )
}
export const STimeSlots = () => {

    return (
        <SkeletonPlaceholder>
            <View style={{ width: 108, height: 42, borderRadius: 15, marginLeft: 12, marginBottom: 12, backgroundColor: '#ffff', }}
            >
            </View>
        </SkeletonPlaceholder>
    )
}
export const SBookings = () => {

    return (
        <SkeletonPlaceholder>
            <View style={{ borderRadius: 16, width: '100%', }}>
                <View style={{ flexDirection: 'row', }}>

                    <View style={{ flex: 0.3, marginTop: 9, marginLeft: 9, borderTopLeftRadius: 16, borderBottomLeftRadius: 16 }}>
                        <Image
                            style={{ height: 79, width: 79, borderRadius: 12 }}
                        // source={require('../../Assets/Images/Civic.png')}

                        />
                    </View>
                    <View style={{ flex: 1, borderTopRightRadius: 16, borderBottomRightRadius: 16, marginTop: 9, }}>
                        <View style={{ height: 10, width: 100, marginTop: 16, marginLeft: 10 }}></View>
                        <View style={{ height: 10, width: 100, marginTop: 16, marginLeft: 10 }}></View>
                        {/* <Text style={[FontStyle.ag18Semibold, { marginTop: 1, marginLeft: 16 }]}>Honda</Text>
                        <Text style={[FontStyle.ag18Semibold, { marginTop: -5, marginLeft: 16 }]}>Civic</Text> */}
                        <View style={{ marginLeft: 16, marginTop: 12, height: 20, marginRight: 16, flexDirection: 'row', alignItems: 'center' }}>
                            {/* <Text style={[FontStyle.ag14Reguler, {}]}>KL 14 AB 5985</Text> */}
                            <View style={{ height: 10, width: 100, marginTop: 16, marginLeft: 10 }}></View>
                            <View style={{ marginLeft: 9, backgroundColor: 'red', height: 12, width: 12, borderRadius: 24 / 2 }}></View>

                        </View>

                        <TouchableOpacity style={{ height: 39, width: 39, position: 'absolute', top: 12, right: 12, backgroundColor: '#552EDF', borderRadius: 39 / 2, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                style={{ height: 17, width: 17, resizeMode: 'contain' }}
                            // source={require('../../Assets/Images/Phone.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginLeft: 16, marginRight: 16, marginTop: 16, height: 68, backgroundColor: '#EAECF4', borderRadius: 16, }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 16, }}>
                        {/* <Text style={[FontStyle.ag14Medium, { color: '#552EDF' }]}>At Home</Text> */}
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>


                        {/* <View style={{ marginLeft: 16, marginRight: 16, marginTop: 14, height: 50, borderRadius: 16, backgroundColor: '#ffff', flexDirection: 'row' }}> */}
                        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', borderTopLeftRadius: 16, borderBottomLeftRadius: 16, }}>
                            <Image
                                style={{ width: 12, height: 14, marginLeft: 8, marginLeft: 24 }}
                            // source={require('../../Assets/Images/CalendarBlack.png')}
                            />
                            {/* <Text style={[FontStyle.ag16Reguler, { marginLeft: 11 }]}>25-May-2021</Text> */}
                        </View>
                        <View style={{ width: 1, height: 18, backgroundColor: '#D4D7DE', alignSelf: 'center' }}></View>
                        <View style={{ flex: 1, flexDirection: 'row', borderTopRightRadius: 16, borderBottomRightRadius: 16 }}>
                            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                                <Image
                                    style={{ width: 12, height: 14, marginLeft: 8, }}
                                // source={require('../../Assets/Images/BlackClock.png')}
                                />
                                {/* <Text style={[FontStyle.ag16Reguler, { marginLeft: 11 }]}>10:30 AM</Text> */}
                            </View>
                            <View style={{ flex: 0.4, justifyContent: 'center', borderTopRightRadius: 16, borderBottomRightRadius: 16 }}>

                            </View>
                        </View>

                    </View>


                </View>
                <View style={{ marginLeft: -8, marginTop: 21, marginRight: 0, marginBottom: 12 }}>
                    <View style={{ height: 10, width: 100, marginTop: 16, marginLeft: 40 }}></View>
                    <View style={{ height: 10, width: 100, marginTop: 16, marginLeft: 40 }}></View>
                    <View style={{ height: 10, width: 100, marginTop: 16, marginLeft: 40 }}></View>
                </View>
            </View >

        </SkeletonPlaceholder>
    )
}

export const SSelectCar = () => {

    return (
        <SkeletonPlaceholder>
            <View style={{ borderRadius: 16, width: '100%', height: 116, flexDirection: 'row' }}>
                <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 16, borderBottomLeftRadius: 16 }}>
                    <Image
                        style={{ height: 100, width: 100, borderRadius: 12 }}
                    // source={require('../../../Assets/Images/Civic.png')}

                    />
                </View>
                <View style={{ flex: 1, borderTopRightRadius: 16, borderBottomRightRadius: 16 }}>
                    <View style={{ height: 10, width: 100, marginTop: 16 }}></View>
                    <View style={{ height: 10, width: 100, marginTop: 16 }}></View>
                    <View style={{ height: 10, width: 100, marginTop: 30 }}></View>
                    <View style={{ position: 'absolute', backgroundColor: 'red', bottom: 21, left: 110, height: 12, width: 12, borderRadius: 12 / 2 }}></View>

                </View>
            </View >
        </SkeletonPlaceholder>
    )
}


export const SSelectAddress = () => {

    return (
        <SkeletonPlaceholder>
            {/* <View style={{ borderRadius: 16, width: '100%', height: 116, flexDirection: 'row' }}>
                <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 16, borderBottomLeftRadius: 16 }}>
                    <Image
                        style={{ height: 100, width: 100, borderRadius: 12 }}
                    // source={require('../../../Assets/Images/Civic.png')}

                    />
                </View> */}
            <View style={{ borderTopRightRadius: 16, borderBottomRightRadius: 16, height: 100 }}>
                <View style={{ height: 20, width: '90%', marginTop: 5, margin: 0 }}></View>
                <View style={{ height: 20, width: '80%', marginTop: 5, margin: 0 }}></View>
                <View style={{ height: 20, width: '60%', marginTop: 5, margin: 0, }}></View>
            </View>
            {/* </View > */}
        </SkeletonPlaceholder>
    )
}


export const SReciept = () => {

    return (
        <SkeletonPlaceholder>
            {/* <View style={{ borderRadius: 16, width: '100%', height: 116, flexDirection: 'row' }}>
                <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 16, borderBottomLeftRadius: 16 }}>
                    <Image
                        style={{ height: 100, width: 100, borderRadius: 12 }}
                    // source={require('../../../Assets/Images/Civic.png')}

                    />
                </View> */}
            <View style={{ borderTopRightRadius: 16, borderBottomRightRadius: 16, height: 200, marginLeft: 20, marginTop: 30 }}>
                <View style={{ height: 20, width: '90%', marginTop: 5, margin: 0 }}></View>
                <View style={{ height: 20, width: '80%', marginTop: 5, margin: 0 }}></View>
                <View style={{ height: 20, width: '60%', marginTop: 5, margin: 0 }}></View>
                <View style={{ height: 20, width: '60%', marginTop: 5, margin: 0 }}></View>
                <View style={{ height: 20, width: '60%', marginTop: 5, margin: 0 }}></View>
                <View style={{ height: 20, width: '60%', marginTop: 5, margin: 0 }}></View>
            </View>
            {/* </View > */}
        </SkeletonPlaceholder>
    )
}

export const SEditAddress = () => {

    return (
        <SkeletonPlaceholder>
            {/* <View style={{ borderRadius: 16, width: '100%', height: 116, flexDirection: 'row' }}>
                <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 16, borderBottomLeftRadius: 16 }}>
                    <Image
                        style={{ height: 100, width: 100, borderRadius: 12 }}
                    // source={require('../../../Assets/Images/Civic.png')}

                    />
                </View> */}
            <View style={{ borderTopRightRadius: 16, borderBottomRightRadius: 16, height: 100 }}>
                <View style={{ height: 20, width: '90%', marginTop: 5, margin: 0 }}></View>
                <View style={{ height: 20, width: '80%', marginTop: 5, margin: 0 }}></View>
                <View style={{ height: 20, width: '60%', marginTop: 5, margin: 0 }}></View>
            </View>
            {/* </View > */}
        </SkeletonPlaceholder>
    )
}


export const SaddOn = () => {
    const [isLoading, setisLoading] = useState(true);



    const callMessage = () => {
        let hghj = setTimeout(() => {
            // console.log('dfsdfsduyfiusuydfiouysdiuyfoydsoiufyod')
            setisLoading(false)

        }, 1000)
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