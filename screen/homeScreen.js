import React from 'react'
import {StyleSheet, View} from 'react-native'
import Form from '../components/form'

const HomeScreen=()=>{
    return(
    <View style={Style.container}>
        <Form
            iconMoney='cash-plus'
            placeholderMoney='Ingreso'
            labelMoney='Ingreso Monetario'
            title='Registrar Ingreso'
            labelConcept='Concepto de Igreso'
            type='ingresos'
        />
    </View>
    )
}

const Style=StyleSheet.create(
    {
        container:{
            flex:1
        }
    }
)

export default HomeScreen