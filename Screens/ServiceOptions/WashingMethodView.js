import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput } from 'react-native';
import { color } from 'react-native-reanimated';
import FontStyle from '../../Compoents/FontStyle';

export default function WashingMethodView({ Tittle, imageUrl, Active, imageOnPress, viewDetailsOnpress, price }) {
    // const unChcked = '../../Assets/Images/UnCheckedRound.png' 

    return (

        <View style={[styles.cellView]}>
            <View>
                <TouchableOpacity onPress={imageOnPress}>
                    <Image
                        style={styles.clickableImage}
                        source={imageUrl}
                    />
                    <View style={styles.checkBoxBgView}>
                        <Image
                            style={{ flex: 1, height: 24, width: 24 }}
                            source={Active ? require('../../Assets/Images/CheckedRound.png') : require('../../Assets/Images/UnCheckedRound.png')}
                        />

                    </View>
                </TouchableOpacity>
                <Text style={[styles.imageTittle, FontStyle.ag16Semibold]}>{Tittle}</Text>
            </View>



            <View
                style={styles.bottomPriceView}
            >
                <Text

                    style={[FontStyle.ag18Semibold, { marginLeft: 10, color: '#552EDF' }]}> {'₹' + price}</Text>

                <View style={styles.bottomViewStyle}>
                    <TouchableOpacity
                        onPress={viewDetailsOnpress}
                        style={styles.bottomViewTouchStyle}>
                        <Text color='#989EB1' style={[{ marginLeft: 20, color: '#989EB1' }, FontStyle.ag14Reguler]}>View</Text>
                        <Image
                            style={{ width: 7, height: 11 }}
                            source={require('../../Assets/Images/RightGrayArrow.png')}
                        ></Image>
                    </TouchableOpacity>


                </View>

            </View>

        </View>
        // <View style={[styles.cellView]}>
        //     <View>
        //         <TouchableOpacity>
        //             <Image
        //                 style={styles.clickableImage}
        //                 source={require('../../Assets/Images/carWashDummy2.png')}
        //             />
        //         </TouchableOpacity>
        //         <Text style={[styles.imageTittle, FontStyle.ag16Semibold]}>Water Wash</Text>
        //     </View>

        //     <View style={styles.checkBoxBgView}>
        //         <Image
        //             style={{ flex: 1, height: 24, width: 24 }}
        //             source={require('../../Assets/Images/UnCheckedRound.png')}
        //         />

        //     </View>

        //     <View
        //         style={styles.bottomPriceView}
        //     >
        //         <Text

        //             style={[FontStyle.ag18Semibold, { marginLeft: 10, color: '#552EDF' }]}>₹ 300</Text>

        //         <View style={styles.bottomViewStyle}>
        //             <TouchableOpacity style={styles.bottomViewTouchStyle}>
        //                 <Text color='#989EB1' style={[{ marginLeft: 20, color: '#989EB1' }, FontStyle.ag14Reguler]}>View</Text>
        //                 <Image
        //                     style={{ width: 7, height: 11 }}
        //                     source={require('../../Assets/Images/RightGrayArrow.png')}
        //                 ></Image>
        //             </TouchableOpacity>


        //         </View>

        //     </View>

        // </View>


    )
}

const styles = StyleSheet.create({
    cellView: {
        height: '100%',
        width: 166,
        // flex: 0.4 - 16,
        // backgroundColor: 'yellow',
        borderRadius: 12

    },
    touchOpacityStyle: {
        flex: 1,
        justifyContent: 'center'
    }, clickableImage:
    {

        height: 108,
        width: 166,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12
    },
    imageTittle:
    {
        position: 'absolute',
        color: '#ffff',
        bottom: 16,
        alignSelf: 'center'
    },
    checkBoxBgView:
    {
        height: 24,
        width: 24,
        marginTop: 12,
        marginLeft: 12,
        position: 'absolute',
    },
    bottomPriceView:
    {
        flex: 1,
        backgroundColor: 'white',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottomViewStyle:
    {
        height: '100%',
        width: '50%',
        backgroundColor: '#ffff',
        borderBottomRightRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 14
    },
    bottomViewTouchStyle:
    {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})