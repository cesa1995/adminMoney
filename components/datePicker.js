import React, {useEffect, useState}from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import moment from 'moment'

const DatePicker=(props)=>{
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleConfirm = (dat) => {
        console.log("A date has been picked: ", dat);
        props.setDate(dat);
        props.setTextDate(moment(dat).format('DD-MM-YYYY'))
        hideDatePicker();
    };

    useEffect(()=>{
        props.setTextDate(moment(props.date).format('DD-MM-YYYY'))
    },[])

    return(
        <View>
            <TouchableOpacity style={Style.touch} onPress={showDatePicker}> 
                <View style={Style.container}>
                    <MaterialCommunityIcons 
                    name={'calendar-range'}
                    color={'#f91157'}
                    size={25}/>
                    <Text
                        style={Style.text}>
                           {props.dateText}
                    </Text>
                </View>
            </TouchableOpacity>
            
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                date={props.date}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    )
}

const Style=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        width:250,
        height:40,
        paddingStart:15,
    },
    text:{
        marginStart:5
    },
    touch:{
        borderWidth:.8,
        borderColor:'#204745',
        backgroundColor:'#ffffff',
        margin:10,
        borderRadius:5
    }
})
export default DatePicker 