import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, Image, Dimensions
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { imageBase_url } from "../Src/api_config";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
class SwiperScreen extends Component {
    constructor() {
        super();
        this.state = {
            activeSlide: 0
        }
    }
    onPressBanner = (item) => {
    }
    _renderItem = ({ item, index }) => {
        let it = item
        return (
            <TouchableOpacity
                aco={1}
                onPress={() => {
                    this.onPressBanner(it)
                }}>
                <Image source={{ uri: imageBase_url + it.img_url }} style={{ height: 130, width: windowWidth - 32, borderRadius: 13 }} />
            </TouchableOpacity>
        );
    }
    get pagination() {
        const { entries, activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={this.props.list.length}
                activeDotIndex={activeSlide}
                containerStyle={{ marginTop: -46, margin: 0, padding: 0 }}
                dotElement={<View style={{ width: 8, height: 8, borderColor: '#8D6DFF', borderWidth: 1, borderRadius: 10, marginHorizontal: 4, backgroundColor: '#8D6DFF' }} />}
                dotContainerStyle={{ margin: 0, padding: 0 }}
                inactiveDotElement={<View style={{ width: 8, height: 8, borderColor: '#EAECF4', borderRadius: 10, marginHorizontal: 4, backgroundColor: 'rgba(0,0,0,0.5)' }} />}
                inactiveDotOpacity={1}
                inactiveDotScale={1}
                delayPressInDot={1000}
                animatedDuration={2500}
                animatedFriction={10}
                animatedTension={100}
            />
        );
    }
    render() {

        const s = this.state;
        const p = this.props;
        return (
            <View style={{ marginTop: 16, marginBottom: 12, marginBottom: p.list.length > 1 ? 0 : 32 }}>

                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={p.list}
                    renderItem={this._renderItem}
                    sliderWidth={windowWidth}
                    itemWidth={windowWidth}
                    autoplay
                    loop
                    onSnapToItem={(index) => this.setState({ activeSlide: index })}

                />
                { this.pagination}
            </View>

        );
    }
}
export default SwiperScreen;

