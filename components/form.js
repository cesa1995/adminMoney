import React, {useEffect} from 'react'
import {View, Text, StyleSheet}from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MyTextInput from './textInput'
import Button from './button'
import MoneyManager from '../src/moneyManager'
import DatePicker from '../components/datePicker'
import KindSelector from '../components/kindSelector'

const Form=(props)=>{

    return(
        <View style={Style.container}>
            <View style={Style.input}>
                <MaterialCommunityIcons name={'cash'} color={'#f91157'} size={80}/>
                <Text style={[Style.title]}>{props.title}</Text>                
                <MyTextInput
                    Icon={props.iconMoney}
                    placeholder={props.placeholderMoney}
                    label={props.labelMoney}
                    keyboardType="numeric"
                    onChangeText={()=>{}}
                />
                <MyTextInput
                    Icon={"note-plus"}
                    placeholder="Concepto"
                    label={props.labelConcept}
                    onChangeText={()=>{}}
                />
                <DatePicker
                    date={new Date}
                    dateText={""}
                    setTextDate={()=>{}}
                    setDate={()=>{}}
                />
                <KindSelector 
                    selectedValue={()=>{}}
                    onValueChange={()=>{}}
                    itemsList={[]}
                />
                <Button onPress={()=>{}}/>
            </View>
            
        </View>
    )
}

const Style=StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'rgba(255,255,255,.6)',
            alignItems:'center',
            justifyContent:'center'
        },
        input:{
            flex:.7,
            justifyContent:'center',
            alignItems:'center',
            width:300,
            backgroundColor:'rgb(253,228,200)',
            borderRadius:20,
            elevation: 20,
        },
        title:{
            color:'#204745',
            fontFamily:'sans-serif-light',
            fontSize:25,
            marginBottom:20,
        },
        datePickerBox:{
            marginTop: 9,
            borderColor: '#ABABAB',
            borderWidth: 0.5,
            padding: 0,
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            height: 38,
            justifyContent:'center'
        },
        datePickerText: {
            fontSize: 14,
            marginLeft: 5,
            borderWidth: 0,
            color: '#121212',
        },
    }
)

export default Form