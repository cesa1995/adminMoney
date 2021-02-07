import React, {useState, useEffect} from 'react'
import {View, StyleSheet, TouchableOpacity, Modal, Text} from 'react-native'
import {Picker} from '@react-native-community/picker'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MyTextInput from './textInput'

const KindSelector=(props)=>{


    const [visibleModal, setVisibleModal]=useState(false);
    const [type, setType]=useState("");

    const setViewItems=props.itemsList.map((e,i)=>{
        return(
            <Picker.Item
                label={e} value={i} key={i}
            />
        )
    });

    return(
    <View style={Style.mainContainer}>
        <View style={Style.icon}>
            <Modal
                visible={visibleModal}
                transparent={true}
                animationType={"fade"}
            >
                <View style={Style.modelContainer}>
                    <View style={Style.modal}>
                        <MyTextInput
                            Icon={"note-plus"}
                            placeholder="Tipo"
                            label={props.labelConcept}
                            onChangeText={setType}
                        />
                        <View
                            style={Style.buttons}
                        >
                            <TouchableOpacity
                                onPress={()=>{setVisibleModal(!visibleModal)}}
                                style={Style.button}
                                >
                                <Text style={Style.text}>Cerrar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>{
                                    
                                }}
                                style={Style.button}>
                                <Text style={Style.text}>Guardar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                onPress={()=>{
                    setVisibleModal(!visibleModal)
                }}
                >
                <View style={Style.cicle}>
                    <MaterialCommunityIcons 
                            name={'plus-box'}
                            color={'#f91157'}
                            size={25}/>
                </View>
            </TouchableOpacity>
        </View>
        <View style={Style.container}>
            <Text style={Style.typeTittle}>Tipo</Text>
            <Picker
                onValueChange={(value)=>{props.onValueChange(value)}}
                selectedValue={props.selectedValue}
                style={Style.picker}>
                {setViewItems}
            </Picker>
        </View>
    </View>
    )
}

const Style=StyleSheet.create(
    {
        typeTittle:{
            marginTop:-55,
            marginLeft:20,
            color:"#204745"
        },
        icon:{
            position:"relative",
            zIndex:2000,
        },
        mainContainer:{
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center"
        },
        cicle:{
            marginRight:-10,
            width:35,
            backgroundColor:"rgba(255,255,255,.9)",
            padding:5,
            borderRadius:100,
            elevation:5,
        },
        container:{
            marginTop:10,
            flexDirection:'row',
            borderWidth:.8,
            borderTopWidth:0,
            backgroundColor:'#ffffff',
            borderRadius:5,
            width:220,
            justifyContent:'center',
            alignItems:'center',
            zIndex:1000
        },
        picker:{
            width:170,
        },
        modal:{
            justifyContent:"center",
            alignItems:"center",
            width:300,
            height:200,
            backgroundColor:"rgba(249,17,67,.9)",
            borderRadius:10,
            borderWidth:.4,
            elevation:20,
        },
        modelContainer:{
            flex:1,
            backgroundColor:"rgba(0,0,0,.5)",
            justifyContent:"center",
            alignItems:"center"
        },
        buttons:{
            width:200,
            margin:20,
            flexDirection:"row",
            justifyContent:"space-around",
            alignItems:"flex-end"
        },
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
        }
    }
)

export default KindSelector