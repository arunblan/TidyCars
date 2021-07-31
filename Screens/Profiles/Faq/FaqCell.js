import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput, Animated, LayoutAnimation } from 'react-native';
import FontStyle from '../../../Compoents/FontStyle';


export default function FaqCell({ faqTittle, faqDiscription, faqOnpress }) {
    const [expanded, setExpanded] = useState(false);
    return (

        <View style={{ borderRadius: 16, backgroundColor: '#fff', marginBottom: 16 }}>
            <TouchableOpacity
                onPress={() => {
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                    setExpanded(!expanded);
                }}
                style={[{ paddingTop: 12, paddingBottom: 12, paddingLeft: 16, paddingRight: 16, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', borderRadius: 16, backgroundColor: '#fff' }]} >
                <Text style={{}}>{faqTittle ?? 'Where dose it come from?'}</Text>
                <Image style={{ height: 9, width: 17 }}
                    source={expanded ? require('../../../Assets/Images/ArrowUpBlue.png') : require('../../../Assets/Images/downBlackArrow.png')}
                />
            </TouchableOpacity >
            {expanded &&
                <View style={{ paddingBottom: 12, paddingLeft: 16, paddingRight: 16, paddingTop: 5, borderRadius: 16 }}>
                    <Text>{faqDiscription ?? 'Lorem Ipsum is simply dummy text of th printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} </Text>
                </View>}
        </View>
    )
}

const styles = StyleSheet.create({

})