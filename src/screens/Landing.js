import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'

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
                        style={[styles.btnsignup]}
                    >
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 16 }}>Sign up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Login')}
                        style={[styles.btnlogin]}
                    >
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 16 }}>Login</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground >
        )
    }
}

const styles = StyleSheet.create({
    btnsignup: {
        width: "100%",
        backgroundColor: 'white',
        padding: 10, alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginTop: 40,
        marginBottom: 20
    },
    btnlogin: {
        width: "100%",
        backgroundColor: 'black',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginBottom: 30
    }
})