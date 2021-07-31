import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput } from 'react-native';
import { color } from 'react-native-reanimated';
import FontStyle from '../../Compoents/FontStyle';
import { SAddsOns } from '../../Compoents/SkeletonView'
import { SaddOns } from '../../Compoents/SkeletonView'
export default function AddOns({ Tittle, amount, addOnPress, Active, viewDetailsPress }) {
    return (
        <View style={[styles.bgView]}>

            <TouchableOpacity
                onPress={addOnPress}
                style={[styles.bgView]}>
                {/* <SAddsOns /> */}
                {/* <SaddOns /> */}
                <View style={[styles.topView]}>

                    <Image
                        style={[styles.topViewImage]}
                        source={Active ? require('../../Assets/Images/CheckedRound.png') : require('../../Assets/Images/UnCheckedRound.png')}
                    />
                    <Text style={[FontStyle.ag14Medium, styles.addOnsTittle]}>{Tittle ?? 'Add ons'}</Text>
                </View>
                <View style={[styles.bottomView]}>
                    <Text style={[styles.addOnsPriceText, FontStyle.ag18Semibold]}>$ {amount ?? '250'}</Text>
                    <TouchableOpacity
                        onPress={viewDetailsPress}
                        style={styles.viewAllTouch}>
                        <Text style={[FontStyle.ag14Reguler, styles.viewAllText]}>View details</Text>
                        <Image
                            style={{ backgroundColor: '#ffff', height: 12, width: 7 }}
                            source={require('../../Assets/Images/RightGrayArrow.png')}
                        />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>

        </View>

    )
}

const styles = StyleSheet.create({
    bgView: {
        marginTop: 6,
        marginBottom: 6,
        height: 80,
        // backgroundColor: 'red',
        borderRadius: 12,
        // marginRight: 16,
        // marginLeft: 16
        // alignContent: 'center',
        // justifyContent: 'center'
    },
    textStyle: {
        alignSelf: 'center',
        justifyContent: 'center'
    },
    touchOpacityStyle: {
        flex: 1,
        justifyContent: 'center'
    },
    addOnsTittle: {
        marginLeft: 16,
        marginTop: 12
    },
    addOnsPriceText: {
        marginLeft: 52,
        color: '#623CEA',
        marginBottom: 5
    },
    viewAllText: {
        color: '#989EB1',
    }, topView:
    {
        backgroundColor: '#ffff',
        flex: 1,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        alignItems: 'center',
        flexDirection: 'row',
    }, topViewImage:
    {
        height: 24,
        width: 24,
        backgroundColor: '#ffff',
        marginLeft: 12,
        marginTop: 12
    },
    bottomView:
    {
        backgroundColor: '#ffff',
        flex: 1,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewAllTouch:
    {
        backgroundColor: '#ffff',
        width: 100,
        height: 20,
        marginRight: 12,
        marginBottom: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    }

})