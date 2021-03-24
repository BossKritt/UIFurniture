import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { TextInput, ScrollView } from 'react-native-gesture-handler'
import { FontAwesome5 } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';

export default class Login extends React.Component {
    render() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    backgroundColor: "#fff",
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
                    paddingHorizontal: 20
                }}>
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
                            }}>Login</Text>
                        </View>
                    </View>

                    <TextInput
                        style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20 }}
                        placeholder="Email"
                        //placeholderTextColor="#000"
                        onChangeText={(text) => {
                            this.setState({ errMsg: '' }),
                                this.setState({ email: text })
                        }
                        }
                    />
                    <TextInput
                        style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20 }}
                        placeholder="Password"
                        //placeholderTextColor="#000"
                        onChangeText={(text) => {
                            this.setState({ errMsg: '' }),
                                this.setState({ password: text })
                        }
                        }
                    />
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Home')}
                        style={{ width: "100%", backgroundColor: 'black', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 6, marginTop: 40, marginBottom: 30 }}
                    >
                        <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 16 }}>Login</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                        <View>
                            <Text style={{ width: 50, textAlign: 'center' }}>OR</Text>
                        </View>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    </View>
                    <TouchableOpacity
                        //onPress={() => this.props.navigation.navigate('Login')}
                        style={{ flexDirection: 'row', width: "100%", backgroundColor: '#4267B2', padding: 10, borderRadius: 6, marginTop: 40, marginBottom: 20, alignItems: 'center' }}
                    >
                        <FontAwesome5
                            name="facebook" size={24} color="white"
                            style={{
                                marginLeft: 100
                            }} />
                        <Text style={{ marginLeft: 20, textAlign: 'center', color: '#FFF', fontSize: 16 }}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        //onPress={() => this.props.navigation.navigate('Login')}
                        style={{ flexDirection: 'row', width: "100%", backgroundColor: '#DB4437', padding: 10, borderRadius: 6, marginBottom: 20, alignItems: 'center' }}
                    >
                        <FontAwesome5
                            name="google" size={24} color="white"
                            style={{
                                marginLeft: 100
                            }} />
                        <Text style={{ marginLeft: 20, textAlign: 'center', color: '#FFF', fontSize: 16 }}>Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        //onPress={() => this.props.navigation.navigate('Login')}
                        style={{ flexDirection: 'row', width: "100%", backgroundColor: '#000000', padding: 10, borderRadius: 6, marginBottom: 20, alignItems: 'center' }}
                    >
                        <AntDesign
                            name="apple1" size={24} color="white"
                            style={{
                                marginLeft: 100
                            }} />
                        <Text style={{ marginLeft: 20, textAlign: 'center', color: 'white', fontSize: 16 }}>Apple</Text>
                    </TouchableOpacity>

                </View>



            </ScrollView>
        );
    }
}
