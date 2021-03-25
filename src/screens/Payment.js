import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class Payment extends React.Component {
    render() {
        return (
            <SafeAreaView style={[styles.container]}>
                <View style={{
                    paddingHorizontal: 20
                }}>
                    <Ionicons
                        onPress={() => this.props.navigation.goBack()}
                        name="ios-close" size={40} color="black" />
                </View>
                <View style={{
                    paddingHorizontal: 20,
                    alignItems: 'center',
                    marginTop: 50
                }}>
                    <Ionicons name="ios-checkmark-circle-outline" size={200} color="black" />
                    <Text style={{ fontFamily: "Bold", fontSize: 30, marginBottom: 30 }}>Thank you!</Text>
                    <Text>You order #1234 is completed.</Text>
                    <Text>Have a good day with you.</Text>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Home')}
                        style={[styles.btn]}
                    >
                        <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 16,fontFamily: "Bold" }}>Continue Shopping</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    btn: {
        width: '100%',
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        padding: 12,
        marginTop: 50
    }
})