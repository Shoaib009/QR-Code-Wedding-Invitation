import React, { Component } from 'react';
import { Container, Button, Content, Form, Item, Input, Label, Text, View,Textarea} from 'native-base';
export default class FloatingLabelExample extends Component {
  render() {
    return (
      <Container style={{marginTop: 40, marginBottom: 40, marginLeft: 15, marginRight: 15,}}>
        
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Title</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Job Type</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Year of Experience</Label>
              <Input />
            </Item>
            <Form style={{marginTop: 15}}>
            <Textarea rowSpan={5} bordered placeholder="Description" />
          </Form>           
          </Form>
          <View style={{ marginTop: 40, alignItems: 'flex-start'}}>
          <Button large rounded>
            <Text>Submit</Text>
          </Button>
          </View>
         </Content>
      </Container>
    );
  }
}