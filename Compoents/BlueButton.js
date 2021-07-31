import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import FontStyle from './FontStyle';

export default function flatButton({ text, onpress, marginBottomValue }) {

    return (
        <TouchableOpacity onPress={onpress}>
            <View style={styles.button}>
                <Text style={[styles.buttonText, FontStyle.ag14Semibold]}>{text ?? 'Submit'}</Text>
            </View>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    button: {
        borderRadius: 15,
        // paddingVertical: 14,
        // paddingHorizontal: 10,
        backgroundColor: '#0CD3FF',
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 40,
        height: 48,
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
})