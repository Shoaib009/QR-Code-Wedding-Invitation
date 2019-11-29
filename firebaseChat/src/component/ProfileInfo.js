import React, { Component } from 'react';
import { Container, Button, Content, Form, Item, Input, Label, Text, View, Right, Icon, Left, Body, Picker, Header, Thumbnail } from 'native-base';
export default class FloatingLabelExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined
        };
    }
    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }
    render() {
        return (
            <Container style={{ marginTop: 40, marginBottom: 40, marginLeft: 15, marginRight: 15, }}>

                <Content>
                    <Header >
                        
                            <Thumbnail large source={{ uri: 'https://mobiledady.com/wp-content/uploads/2017/08/Beautiful-Pakistani-Flag.jpg' }} />
                           
                    
                    </Header>
                    <Text style={{textAlign:'center', marginTop: 20}}>upload Image</Text>
                    <Form>
                        <Item floatingLabel>
                            <Label>Full Name</Label>
                            <Input />
                        </Item>
                        <Item >
                            <Left >
                                <Label>Date of Birth</Label>
                            </Left>
                            <Body>
                                <Input />
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text style={{ color: "blue" }}>Add more</Text>
                                </Button>
                            </Right>
                        </Item>
                        <Item >
                            <Left >
                                <Label>Phone</Label>
                            </Left>
                            <Body>
                                <Input />
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text style={{ color: "blue" }}>Add more</Text>
                                </Button>
                            </Right>
                        </Item>
                        <Item >
                            <Left >
                                <Label>Land Line</Label>
                            </Left>
                            <Body>
                                <Input />
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text style={{ color: "blue" }}>Add more</Text>
                                </Button>
                            </Right>
                        </Item>


                        <View style={{ marginTop: 15, alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold' }}>
                                Company Info
                            </Text>
                        </View>
                        <Item >
                            <Left >
                                <Label>Company Name</Label>
                            </Left>
                            <Body>
                                <Input />
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text style={{ color: "blue", fontSize: 12 }}>Upload Logo</Text>
                                </Button>
                            </Right>
                        </Item>
                        <Item >
                            <Left >
                                <Label style={{fontSize:15}}>Company Contact</Label>
                            </Left>
                            <Body>
                                <Input />
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text style={{ color: "blue" }}>Add more</Text>
                                </Button>
                            </Right>
                        </Item>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                androidIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="Company Catagory"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.selected2}
                                onValueChange={this.onValueChange2.bind(this)}
                            >
                                <Picker.Item label="Company Catagory" value="key0" />
                                <Picker.Item label="ATM Card" value="key1" />
                                <Picker.Item label="Debit Card" value="key2" />
                                <Picker.Item label="Credit Card" value="key3" />
                                <Picker.Item label="Net Banking" value="key4" />
                            </Picker>
                        </Item>
                        <Item >
                            <Left >
                                <Label>Fax Number</Label>
                            </Left>
                            <Body>
                                <Input />
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text style={{ color: "blue" }}>Add more</Text>
                                </Button>
                            </Right>
                        </Item>
                    </Form>
                    <View style={{ marginTop: 5, alignItems: 'flex-end' }}>
                        <Button transparent>
                            <Text>Move Forward-></Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}