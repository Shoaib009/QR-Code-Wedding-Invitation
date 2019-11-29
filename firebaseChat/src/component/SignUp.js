import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Platform,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Button, Thumbnail, Form, Item, Input, Content, Text,Icon, Label } from 'native-base';
import Imageone from '../images/double.jpg'
import LinkedinImg from '../images/ldone.png'
export default class FloatingLabelExample extends Component {
    render() {
        return (
            
            <View style={styles.Container}>
                
                <Image style={styles.imgStyle} source={Imageone} />
                <View style={styles.logoStyle}>
                    <Thumbnail large source={LinkedinImg} />
                </View>
                
                <Form style={styles.registerStyle}>
                    <Item floatingLabel style={styles.itemStyle} >
                    <Icon name="person" style={{color:"#ffffff", marginTop: 10}} />
                    <Label style={{color:"#ffffff"}}>User Name</Label>
                        <Input style={styles.inputStyle}
                         placeholderTextColor="#ffffff"
                         keyboardType="default"
                         returnKeyType="next"
                         autoCorrect={false}
                         autoFocus={true}
                         />
                    </Item>

                    <Item floatingLabel style={styles.itemStyle} >
                    <Icon name="mail" style={{color:"#ffffff", marginTop: 10}} />
                    <Label style={{color:"#ffffff"}}>Email</Label>
                        <Input style={styles.inputStyle}
                         placeholderTextColor="#ffffff"
                         keyboardType="email-address"
                         returnKeyType="next"
                         autoCorrect={false}
                         autoFocus={true}
                         />
                    </Item>

                    <Item floatingLabel style={styles.itemStyle} >
                        <Icon name="lock" style={{color:"#ffffff", marginTop: 10}}/>
                        <Label style={{color:"#ffffff"}}>Password</Label>
                        <Input style={styles.inputStyle} 
                         placeholderTextColor="#ffffff"
                          secureTextEntry={true}
                          returnKeyType="go"
                          autoCorrect={false}
                          autoFocus={true}
                           />
                    </Item>

                    <Item floatingLabel style={styles.itemStyle} >
                        <Icon name="lock" style={{color:"#ffffff", marginTop: 10}}/>
                        <Label style={{color:"#ffffff"}}>Confirm Password</Label>
                        <Input style={styles.inputStyle} 
                         placeholderTextColor="#ffffff"
                          secureTextEntry={true}
                          returnKeyType="go"
                          autoCorrect={false}
                          autoFocus={true}
                           />
                    </Item>
                </Form>
            
                <Button rounded bordered style={styles.btnStyle} onPress={()=> this.props.navigation.navigate("login")}>
                    <Text style={styles.loginStyle}> SignUp</Text>
                </Button>
                <View style={styles.signbtn}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("login")}>
                        <Text style={styles.txtStyle}>Already have an account? Sign in here</Text>
                    </TouchableOpacity>
                </View>
            </View>
           
        );
    }
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'column'
    },
    loginStyle: {
        color: '#ffffff',
        fontSize: 22,
        fontWeight: 'bold'
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
        marginTop: 70,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgText: {
        fontSize: 25,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    registerStyle: {
        marginTop: -30,
        paddingLeft: 10,
        paddingRight: 30
    },
    itemStyle: {
        marginTop: 5
    },
    inputStyle: {
        color: '#ffffff',
        marginTop: 15,
        marginBottom: 1,
        marginLeft: 5,
        fontSize: 14
    },
    btnStyle: {
        marginTop: 35,
        paddingTop: 10,
        marginLeft: 16,
        marginRight: 16,
        justifyContent: 'center',
        borderColor: '#ffffff'

    },
    signbtn: {
        marginTop: 25,
        alignItems: 'center'
    },
    txtStyle: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        
    }
});