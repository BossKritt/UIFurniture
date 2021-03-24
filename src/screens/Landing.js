import React from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'

export default class Landing extends React.Component {
    render() {
        return (
            <ImageBackground
                source={require('../images/background.png')}
                style={{
                    flex: 1,
                    resizeMode: "cover",
                    justifyContent: "center"
                }}
            >
                <View style={{
                    paddingHorizontal: 40,
                    marginTop: 600
                }}>

                    <TouchableOpacity
                        //onPress={() => this.props.navigation.navigate('Login')}
                        style={{ width: "100%", backgroundColor: 'white', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 6, marginTop: 40, marginBottom: 20 }}
                    >
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 16 }}>Sign up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Login')}
                        style={{ width: "100%", backgroundColor: 'black', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 6, marginBottom: 30 }}
                    >
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 16 }}>Login</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground >
        )
    }
}