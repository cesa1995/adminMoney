import React from 'react'
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native'

const Button=(props)=>{
    return(
        <TouchableOpacity style={Style.button} onPress={props.onPress}>
            <View>
                <Text style={Style.text}>Guardar</Text>
            </View>
        </TouchableOpacity>
    )
}

const Style=StyleSheet.create(
    {
        button:{
            backgroundColor:"#fde4c8",
            paddingRight:20,
            paddingLeft:20,
            paddingTop:10,
            paddingBottom:10,
            marginTop:30,
            borderRadius:10,
            elevation:10,
            borderWidth:4,
            borderColor:"#204745"
        },
        text:{
            color:'#204745',
            fontFamily:'sans-serif-light',
        },
    }
)
export default Button