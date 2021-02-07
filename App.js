import React,{Component} from 'react'
import {Platform} from 'react-native'
import NavigatorScreen from './screen/navigator'

console.log(`Plataforma usada ${Platform.OS}`);

class app extends Component{
  render(){
    return(
      <NavigatorScreen/>
    )
  }
}

export default app
