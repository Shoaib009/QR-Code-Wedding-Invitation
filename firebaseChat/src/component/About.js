import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

const About = () => {
   const goToHome = () => {
      Actions.home()
   }
   return (
      <TouchableOpacity style = {{ margin: 128, padding: 10 }} onPress = {goToHome}>
         <Text>This is ABOUT</Text>
      </TouchableOpacity>
   )
}
export default About;