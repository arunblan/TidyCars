import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput } from 'react-native';
import { color } from 'react-native-reanimated';
import FontStyle from '../../Compoents/FontStyle';

export default function TotalPriceView({ amount, nextOnPress, Active }) {
    return (
        <View style={[styles.bgView]}>
            <View style={styles.ViewWithPrice}>
                <Text
                    style={[FontStyle.ag14Medium, { marginLeft: 26, marginTop: 8, color: '#8D6DFF' }]}
                >
                    Total
                </Text>
                <Text
                    style={[FontStyle.ag18Semibold, { marginLeft: 26, marginTop: -5, color: '#ffff' }]}
                >
                    1200
                </Text>
            </View>
            <View style={styles.ViewWithNext}>
                <TouchableOpacity style={[{
                    flex: 1, backgroundColor: '#552EDF', justifyContent: 'center', borderTopRightRadius: 12,
                    borderBottomRightRadius: 12
                }]}
                    onPress={nextOnPress}

                >

                    <Text style={[FontStyle.ag14Semibold, { textAlign: 'right', marginRight: 56, color: '#ffff' }]}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bgView: {
        // marginTop: 6,
        // marginBottom: 6,
        // height: 80,
        flex: 1,
        backgroundColor: '#552EDF',
        borderRadius: 16,
        flexDirection: 'row'
        // marginRight: 16,
        // marginLeft: 16
        // alignContent: 'center',
        // justifyContent: 'center'
    },
    ViewWithPrice:
    {
        flex: 0.6,
        backgroundColor: '#552EDF',
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12
    },
    ViewWithNext:
    {
        flex: 1,
        backgroundColor: '#552EDF',
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12

    }

})