import React from 'react'
import {Text,View,StyleSheet} from 'react-native'

const State =()=>{
    return(
        <View style={Style.container}>
            <Text>State</Text>
        </View>
    )
}

const Style=StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        }    
    }
)

export default State