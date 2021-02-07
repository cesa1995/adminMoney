import React from 'react'
import {StyleSheet, View} from 'react-native'
import Form from '../components/form'

const Spend=()=>{
    return(
        <View style={Style.container}>
            <Form
                iconMoney='cash-minus'
                placeholderMoney='Egreso'
                labelMoney='Egreso Monetario'
                title='Registrar Egreso'
                labelConcept='Concepto de Egreso'
                type='egresos'
            />
        </View>
    )
}

const Style=StyleSheet.create(
    {
        container:{
            flex:1,
        },
    }
)

export default Spend