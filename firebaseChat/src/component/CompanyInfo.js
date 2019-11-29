import React, { Component } from 'react';
import { Container, Button, Content, Form, Item, Input, Label, Text, View, Textarea, Left, Right, Body, Card, CardItem, Icon } from 'native-base';
export default class FloatingLabelExample extends Component {
  render() {
    return (
      <Container style={{ marginTop: 40, marginBottom: 40, marginLeft: 15, marginRight: 15, }}>

        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email ID</Label>
              <Input />
            </Item>
            <Item >
              <Left >
                <Label>Website</Label>
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
            <Item floatingLabel last>
              <Label>Office Address</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Barunch Address</Label>
              <Input />
            </Item>
            <Item >
              <Left >
                <Label>Country</Label>
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
            <Form style={{ marginTop: 15 }}>
              <Textarea rowSpan={5} bordered placeholder="Services" />
            </Form>
            <Card>
              <CardItem>
                <Text  style={{ fontSize: 14 }}>Upload Catalog (max 20 images)</Text>
                <Right>
                  <Button transparent>
                    <Text style={{ color: "blue", fontSize: 12, paddingLeft: 10 }}>Upload img</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Text style={{ fontSize: 14 }}>Upload Catalog (pdf or word)</Text>
                <Right>
                  <Button transparent>
                    <Text style={{ color: "blue", fontSize: 12 }}>Upload file</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Text>Upload Business Card</Text>
                <Right>
                  <Button transparent>
                    <Text style={{ color: "blue", fontSize: 12 }}>Upload img</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
          </Form>
          <View style={{ marginTop: 5, alignItems: 'flex-end' }}>
            <Button transparent>
              <Text>Move Forward-></Text>
              <Icon active name='arrow-forward' />
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}