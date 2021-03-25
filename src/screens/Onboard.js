import React from "react";
import { Image } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';

export default class Onboard extends React.Component {
    render() {
        return (
            <Onboarding
                onSkip={() => this.props.navigation.navigate("Landing")}
                onDone={() => this.props.navigation.navigate("Landing")}
                pages={[
                    {
                        backgroundColor: '#fff1d0',
                        image: <Image style={{ width: 250, height: 220 }} source={require('../images/onboard1.png')} />,
                        title: 'Discover',
                        subtitle: 'A new furniture for youself',
                    },
                    {
                        backgroundColor: 'lightblue',
                        image: <Image style={{ width: 250, height: 150 }} source={require('../images/onboard2.png')} />,
                        title: 'New Arrivals',
                        subtitle: 'New item, New Price',
                    },
                    {
                        backgroundColor: 'lightgrey',
                        image: <Image style={{ width: 250, height: 320 }} source={require('../images/onboard3.png')} />,
                        title: 'Favorite',
                        subtitle: 'Our favorite looks for you style',
                    }
                ]}
            />
        )
    }
}