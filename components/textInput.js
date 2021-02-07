import React, {useState, useRef}from 'react'
import{StyleSheet} from 'react-native'
import {TextInput} from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const MyTextInput=(props)=>{
    return(
        <TextInput
            left={<TextInput.Icon 
                name={()=> <MaterialCommunityIcons name={props.Icon} color={'#f91157'} size={25}/>}
                onPress={props.onPress}/>}
            style={Style.textInput} 
            placeholder={props.placeholder}
            mode='outlined'
            label={props.label}
            theme={{ colors: { primary: '#204745'}}}
            keyboardType={props.keyboardType}
            onChangeText={props.onChangeText}
        />
    )
}

const Style=StyleSheet.create(
    {
        textInput:{
            height:40,
            width:250,
            margin:5,
            backgroundColor:'#ffffff'
        }
    }
)
export default MyTextInput