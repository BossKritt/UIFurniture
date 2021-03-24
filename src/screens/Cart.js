import React from "react";
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import { TextInput, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default class Cart extends React.Component {
    render() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    backgroundColor: '#fff',
                    paddingHorizontal: 20
                }}
            >
                <View style={{
                    marginTop: 50
                }}>
                    <Ionicons
                        onPress={() => this.props.navigation.goBack()}
                        name="ios-close" size={40} color="black" />
                </View>
                <View style={{
                    flexDirection: "row",
                    width: "100%",
                    marginTop: 20,
                    alignItems: "center"
                }}>
                    <View>
                        <Text style={{
                            fontFamily: "Bold",
                            fontSize: 30
                        }}>Shopping cart</Text>
                    </View>
                </View>
                <View style={{ flex: 1, height: 1, marginTop: 20, marginBottom: 20, backgroundColor: '#ddd' }} />
                <View style={{

                }}>
                    <Text style={{
                        fontSize: 20
                    }}>
                        3 item
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 20
                }}>
                    <View style={[styles.frame]}>
                        <Image
                            source={require('../images/14.png')}
                            style={{ height: 90, width: 80 }}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontFamily: "Bold", fontSize: 20 }}>Green Chair</Text>
                        <Text style={{ fontFamily: "Regular", marginTop: 10 }}>$24.00</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={[styles.color]}></View>
                            <Text style={{ marginTop: 10, marginLeft: 10 }}>Green</Text>
                        </View>
                    </View>
                    <MaterialCommunityIcons name="delete-outline" size={24} color="black" />
                </View>
                <View style={{ flex: 1, height: 1, marginTop: 20, marginBottom: 20, backgroundColor: '#ddd' }} />
                <View style={{
                    flexDirection: 'row',
                    marginTop: 20
                }}>
                    <View style={[styles.frame]}>
                        <Image
                            source={require('../images/14.png')}
                            style={{ height: 90, width: 80 }}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontFamily: "Bold", fontSize: 20 }}>Green Chair</Text>
                        <Text style={{ fontFamily: "Regular", marginTop: 10 }}>$24.00</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={[styles.color]}></View>
                            <Text style={{ marginTop: 10, marginLeft: 10 }}>Green</Text>
                        </View>
                    </View>
                    <MaterialCommunityIcons name="delete-outline" size={24} color="black" />
                </View>
                <View style={{ flex: 1, height: 1, marginTop: 20, marginBottom: 20, backgroundColor: '#ddd' }} />
                <View style={{
                    flexDirection: 'row',
                    marginTop: 20
                }}>
                    <View style={[styles.frame]}>
                        <Image
                            source={require('../images/14.png')}
                            style={{ height: 90, width: 80 }}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontFamily: "Bold", fontSize: 20 }}>Green Chair</Text>
                        <Text style={{ fontFamily: "Regular", marginTop: 10 }}>$24.00</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={[styles.color]}></View>
                            <Text style={{ marginTop: 10, marginLeft: 10 }}>Green</Text>
                        </View>
                    </View>
                    <MaterialCommunityIcons name="delete-outline" size={24} color="black" />
                </View>
                <View style={{ flex: 1, height: 1, marginTop: 20, marginBottom: 20, backgroundColor: '#ddd' }} />
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Cart")}>
                    <View style={[styles.btnpayment]}>
                        <MaterialIcons name="payment" size={24} color="white" />
                        <Text style={{ fontSize: 20, color: "#FFF", fontFamily: "Bold", marginHorizontal: 15 }}>Payment</Text>
                    </View>
                </TouchableOpacity>

            </ScrollView>
        );

    }
}

const styles = StyleSheet.create({
    frame: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f6fb",
        height: 100,
        width: 100,
        borderRadius: 10,
        marginRight: 20
    },
    color: {
        height: 12,
        width: 12,
        backgroundColor: "green",
        borderRadius: 10,
        marginTop: 12
    }, btnpayment: {
        backgroundColor: "#000",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        padding: 12,
        marginTop: 100
    }
})