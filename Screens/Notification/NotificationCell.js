import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput } from 'react-native';
import FontStyle from '../../Compoents/FontStyle';


const notificationStyle = (type) => {
    switch (type) {
        case 'delivered':
            return {
                color: '#2CF896', icon: require('../../Assets/Images/Notification/Delivered.png')
            }
            break;
        case 'approved':
            return {
                color: '#0CD3FF', icon: require('../../Assets/Images/Notification/Approved.png')
            }
            break;
        case 'canceled':
            return {
                color: '#E94A4A', icon: require('../../Assets/Images/Notification/Canceled.png')
            }
            break;
        case 'custom':
            return {
                color: '#E94A4A', icon: require('../../Assets/Images/Notification/Canceled.png')
            }
            break;
        default:
            return {
                color: '#BBACF2', icon: require('../../Assets/Images/Notification/CustomNotification.png')
            }
            break;
    }
}
export default function NotificationCell({ notificationTittle, notificationDate, notificationDiscription, notificationOnpress, notificationType }) {


    return (
        <View style={[styles.viewD]} >
            <View style={{ width: 10, backgroundColor: notificationStyle(notificationType).color, borderTopLeftRadius: 7, borderBottomLeftRadius: 7 }}></View>
            <View style={{ flex: 0.22, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    style={{ width: 36, height: 36, borderRadius: 7 }}
                    source={notificationStyle(notificationType).icon}
                />
            </View>
            <View style={{ flex: 1, borderRadius: 7 }}>
                <View style={{ flex: 0.5, paddingTop: 7, justifyContent: 'space-between', flexDirection: 'row', borderRadius: 7 }}>
                    <Text style={FontStyle.ag14Bold}>{notificationTittle ?? 'Delivered'}</Text>
                    <Text style={[FontStyle.ag14Reguler, { marginRight: 16, color: '#989EB1' }]}>{notificationDate ?? 'Delivered'}</Text>
                </View>
                <View style={{ flex: 1, borderRadius: 7 }}>
                    <Text style={[FontStyle.ag14Reguler, { marginTop: 0 }]}>{notificationDiscription ?? 'Delivered'}</Text>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    viewD: {
        backgroundColor: '#ffff',
        borderRadius: 7,
        height: 91,
        flexDirection: 'row',
        flex: 1,
        marginBottom: 16

    }
})