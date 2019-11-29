import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Platform,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
} from 'react-native';
import { Button, Form, Item, Input, Text,Icon, Label } from 'native-base';
import Imageone from '../images/ddd.jpg'
import LinkedinImg from '../images/newlogo.jpg'
export default class FloatingLabelExample extends Component {
    constructor(props){
        super(props);
        this.state = {
            cnic :'',
            password: '',
        }
    }

    myfunction = async () => {
        const {cnic,password} = this.state;
        alert("your cnic is "+cnic+" "+"and your password is "+password);
        //alert(password);
       
       await this.setState({
            cnic : '',
            password : ''
        })
        
        this.props.navigation.navigate("profile");
    }
    render() {
        return (
            
            <View style={styles.Container}>
                
                <Image style={styles.imgStyle} source={Imageone} />
                <KeyboardAvoidingView behavior="padding">
                  <View style={styles.logoContainer}>
                        <Image source={LinkedinImg} style={styles.logo} />                       
                    </View>
                <Form style={styles.registerStyle}>
                    <Item floatingLabel style={styles.itemStyle} >
                    <Icon name="person" style={{color:"#DAA520", marginBottom: 9}} />
                    <Label style={{color:"#DAA520"}}>USER CNIC</Label>
                        <Input style={styles.inputStyle}
                       //  placeholderTextColor="#DAA520"
                         keyboardType="numeric"
                         maxLength={13}
                         returnKeyType="next"
                         autoCorrect={false}
                         autoFocus={true}
                         value={this.state.cnic}
                         onChangeText={
                             cnic => this.setState({cnic})
                         }
                         />
                    </Item>
                    <Item floatingLabel style={styles.itemStyle} >
                        <Icon name="lock" style={{color:"#DAA520", marginBottom: 9}}/>
                        <Label style={{color:"#DAA520"}}>PASSWORD</Label>
                        <Input style={styles.inputStyle} 
                        // placeholderTextColor="#DAA520"
                          secureTextEntry={true}
                          returnKeyType="go"
                          autoCorrect={false}
                          autoFocus={true}
                          value={this.state.password}
                          onChangeText={
                              password => this.setState({password})
                          }
                           />
                    </Item>
                </Form>
            
                <Button rounded bordered style={styles.btnStyle} onPress={() =>{this.myfunction()}}>
                    <Text style={styles.loginStyle}> Login</Text>
                </Button>
                <View style={styles.signbtn}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("signUp")}>
                        <Text style={styles.txtStyle}>Don't have an account? Sign up here</Text>
                    </TouchableOpacity>
                </View>
                </KeyboardAvoidingView>
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
        color: '#DAA520',
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
        marginTop: 5,
        borderColor: '#DAA520'
    },
    inputStyle: {
        color: '#DAA520',
        marginTop: 15,
        marginBottom: 1,
        marginLeft: 5,
        fontSize: 14,
        borderColor: '#DAA520'
    },
    btnStyle: {
        marginTop: 70,
        paddingTop: 10,
        marginLeft: 16,
        marginRight: 16,
        justifyContent: 'center',
        borderColor: '#DAA520'

    },
    signbtn: {
        marginTop: 45,
        alignItems: 'center'
    },
    txtStyle: {
        color: '#DAA520',
        fontSize: 18,
        fontWeight: 'bold',
        
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 45,
        marginTop: 28
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 25
    },
});