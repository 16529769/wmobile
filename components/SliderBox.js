import React, { Component } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                require('../components/image/noel1.png'),
                require('../components/image/noel1.png'),
                require('../components/image/noel1.png'),
                require('../components/image/noel1.png')

            ]
        };

    }
    render() {
        return (
            <SliderBox
                images={this.state.images}
                sliderBoxHeight={200}
                onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                dotColor="#FFEE58"
                inactiveDotColor="#90A4AE"
                paginationBoxVerticalPadding={20}
                autoplay
                circleLoop
            />
        );
    }
}

