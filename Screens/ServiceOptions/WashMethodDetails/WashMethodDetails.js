import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, StyleSheet, Button, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';
// import FontStyle from '../../Compoents/FontStyle';
import { StackActions, NavigationActions } from 'react-navigation';
import FontStyle from '../../../Compoents/FontStyle';

export default class WashMethodDetails extends Component {


    constructor() {
        super()
        this.state = {
            washingMethodId: null
        }
    }

    componentDidMount = () => {
    }

    backNavigation = () => {
        this.props.navigation.goBack()
    }


    render() {

        return (
            <View style={{ flex: 1, backgroundColor: '#EAECF4' }}>
                <ScrollView style={{ flex: 1, }} bounces={false}>
                    <View style={styles.viewContainer}>
                        <View style={styles.mainImageBgView}>
                            <Image
                                style={styles.mainImageStyle}
                                source={require('../../../Assets/Images/carWashDummy1.png')}

                            />
                            <View
                                style={styles.backBgView}
                            >
                                <TouchableOpacity
                                    style={{ justifyContent: 'center', alignItems: 'center', width: 80, height: 80 }}
                                    onPress={this.backNavigation}
                                >
                                    <Image
                                        style={{
                                            height: 16, width: 9, opacity: 1, opacity: 1,
                                        }}
                                        source={require('../../../Assets/Images/BackArrow.png')}
                                    />

                                </TouchableOpacity>


                            </View>
                            <Text numberOfLines={2} style={[FontStyle.ag42Bold, styles.mainTittle]}>Steam Wash</Text>
                            <TouchableOpacity
                                style={styles.addTouch}
                            >
                                <Text style={[FontStyle.ag14Semibold, { color: '#ffff' }]}>Add</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.priceBgView}>
                            <Text style={[FontStyle.ag32Semibold, { color: '#552EDF', marginLeft: 24 }]}>$ 400</Text>
                        </View>
                        <View
                            style={styles.discriptionView}
                        >
                            <Text style={FontStyle.ag14Reguler}>
                                Steam car wash is the process of using steam vapor to clean a car’s exterior and interior. For decades steam has been a critical component of the cleaning industry due to its effectiveness and sanitizing power. Steam car wash is the process of using steam vapor to clean a car’s exterior
                                Steam car wash is the process of using steam vapor to clean a car’s exterior and interior. For decades steam has been a critical component of the cleaning industry due to its effectiveness and sanitizing power. Steam car wash is the process of using steam vapor to clean a car’s exterior
                                Steam car wash is the process of using steam vapor to clean a car’s exterior and interior. For decades steam has been a critical component of the cleaning industry due to its effectiveness and sanitizing power. Steam car wash is the process of using steam vapor to clean a car’s exterior
                                Steam car wash is the process of using steam vapor to clean a car’s exterior and interior. For decades steam has been a critical component of the cleaning industry due to its effectiveness and sanitizing power. Steam car wash is the process of using steam vapor to clean a car’s exterior
                            </Text>
                        </View>
                    </View >
                </ScrollView>
            </View >
        )
    }
}

const styles = StyleSheet.create({

    viewContainer: {
        flex: 1,
        backgroundColor: '#EAECF4',
        width: '100%',
        // height: 1077
    },
    mainImageBgView:
    {
        backgroundColor: 'green',
        flex: 0.35,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },
    mainImageStyle:
    {
        flex: 1,
        backgroundColor: '#ffff',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        width: '100%',
        resizeMode: 'cover'
    },
    backBgView:
    {
        height: 40,
        width: 40,
        marginTop: 35,
        position: 'absolute',
        marginLeft: 16,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.3)'
    },
    mainTittle:
    {
        position: 'absolute',
        bottom: 35,
        left: 16,
        width: '60%',
        lineHeight: 40,
        paddingTop: 15,
        color: '#ffff'
    },
    addTouch:
    {
        position: 'absolute',
        bottom: 45,
        right: 16,
        width: 87,
        height: 40,
        borderRadius: 15,
        backgroundColor: '#552EDF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    priceBgView:
    {
        height: 80,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 24,
        borderRadius: 12,
        backgroundColor: '#ffff',
        justifyContent: 'center',
    },
    discriptionView:
    {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 27,
        justifyContent: 'center',
        marginBottom: 40
    }
}
)