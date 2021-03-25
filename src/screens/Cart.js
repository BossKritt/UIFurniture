import React from "react";
import { View, Text, Image, ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default class Cart extends React.Component {
    render() {
        return (
            <SafeAreaView
                style={[styles.container]}
            >
                <View style={{
                    paddingHorizontal: 20
                }}>
                    <Ionicons
                        onPress={() => this.props.navigation.goBack()}
                        name="ios-close" size={40} color="black" />
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
                    <View style={{ height: 1, marginTop: 20, marginBottom: 20, backgroundColor: '#ddd' }} />
                    <ScrollView>
                        <Text style={{ fontSize: 20 }}>3 item</Text>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: 20
                        }}>
                            <View style={[styles.frame]}>
                                <Image
                                    source={require('../images/13.png')}
                                    style={{ height: 90, width: 80 }}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontFamily: "Bold", fontSize: 20 }}>Cream Chair</Text>
                                <Text style={{ fontFamily: "Regular", marginTop: 10 }}>$24.00</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{
                                        height: 12,
                                        width: 12,
                                        borderRadius: 10,
                                        marginTop: 12,
                                        backgroundColor: '#fff1d0'
                                    }}></View>
                                    <Text style={{ marginTop: 10, marginLeft: 10 }}>Cream</Text>
                                </View>
                            </View>
                            <MaterialCommunityIcons name="delete-outline" size={24} color="black" />
                        </View>
                        <View style={{ flex: 1, height: 1, marginTop: 20, backgroundColor: '#ddd' }} />
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
                                    <View style={{
                                        height: 12,
                                        width: 12,
                                        borderRadius: 10,
                                        marginTop: 12,
                                        backgroundColor: '#86945e'
                                    }}></View>
                                    <Text style={{ marginTop: 10, marginLeft: 10 }}>Green</Text>
                                </View>
                            </View>
                            <MaterialCommunityIcons name="delete-outline" size={24} color="black" />
                        </View>
                        <View style={{ flex: 1, height: 1, marginTop: 20, backgroundColor: '#ddd' }} />
                        <View style={{
                            flexDirection: 'row',
                            marginTop: 20
                        }}>
                            <View style={[styles.frame]}>
                                <Image
                                    source={require('../images/15.png')}
                                    style={{ height: 90, width: 80 }}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontFamily: "Bold", fontSize: 20 }}>Grey Chair</Text>
                                <Text style={{ fontFamily: "Regular", marginTop: 10 }}>$24.00</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{
                                        height: 12,
                                        width: 12,
                                        borderRadius: 10,
                                        marginTop: 12,
                                        backgroundColor: 'grey'
                                    }}></View>
                                    <Text style={{ marginTop: 10, marginLeft: 10 }}>Grey</Text>
                                </View>
                            </View>
                            <MaterialCommunityIcons name="delete-outline" size={24} color="black" />
                        </View>
                        <View style={{ flex: 1, height: 1, marginTop: 20, marginBottom: 20, backgroundColor: '#ddd' }} />
                    </ScrollView>
                    <View>
                        <View style={{flexDirection: 'row',marginBottom: 5,marginTop: 20}}>
                                    <Text style={{flex: 1}}>Shipping fee</Text>
                                    <Text>$6.99</Text>
                        </View>
                        <View style={{flexDirection: 'row',marginBottom: 5}}>
                                    <Text style={{flex: 1}}>Sub total</Text>
                                    <Text>$72.00</Text>
                        </View>
                        <View style={{flexDirection: 'row',marginBottom: 5}}>
                                    <Text style={{flex: 1,fontFamily: "Bold"}}>Total</Text>
                                    <Text style={{fontFamily: "Bold"}}>$78.99</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Payment")}>
                        <View style={[styles.btnpayment]}>
                            <MaterialIcons name="payment" size={24} color="white" />
                            <Text style={{ fontSize: 16, color: "#FFF", fontFamily: "Bold", marginHorizontal: 15 }}>Payment</Text>
                        </View>
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
    frame: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f6fb",
        height: 80,
        width: 80,
        borderRadius: 10,
        marginRight: 20
    },
    btnpayment: {
        backgroundColor: "#000",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        padding: 12,
        marginTop: 50
    }
})