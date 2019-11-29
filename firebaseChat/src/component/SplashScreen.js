import React, { Component } from 'react'
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native'
import { Button, Thumbnail, Form, Item, Input, Label, Text, Content, } from 'native-base';
import {createStackNavigator} from 'react-navigation'
import Imageone from '../images/originallogo.jpg'
import LinkedinImg from '../images/newlogo.jpg'

export default class SplashScreen extends Component {
    componentWillMount(){
        setTimeout(() => {
            this.props.navigation.navigate("login")
        }, 3000);
    }
    render() {
        return (
            <View style={styles.Container}>
                <Image style={styles.imgStyle} source={Imageone} />
                
                {/* { <View style={styles.logoStyle}>
                    <Image style={styles.logoStyle} source={LinkedinImg} />
                </View> } */}
                {/* <View style={styles.logoContainer}>
                        <Image source={LinkedinImg} style={styles.logo} />
                        { <Text style={styles.logoText}>
                            QR Code Wedding Invitation
                         </Text> }
                    </View> */}
                <ActivityIndicator size="large" color="#DAA520"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    imgStyle: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    logoStyle: {
        // marginTop: 70,
        // marginBottom: 10,
         justifyContent: 'center',
         alignSelf: 'center',
        width: '70%',
        height: '50%'
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 75,
        marginTop: 45
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 45
    },
    logoText: {
        color: '#DAA520',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 20,
        opacity: 1
    },
});
