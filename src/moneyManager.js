import {useState} from 'react'

const MoneyManager=(type)=>{
    const [textDate, setTextDate]=useState('');


    
    //TODO: cambiar el comportamiento de onBottonPress
    const onBottonPress=()=>{
        if(validNumber(amount)){
            console.log(selectedItemValue);
            checkAndCreateTable();
            appendTable();
            listTable();
        }else{
            alert('Monto no aceptado!')
            console.log("algo pasa")
        }
    }
    const validNumberStartWithoutZero=(number)=>{
        return /^0/.test(number)?false:true
    }
    const validNumber=(number)=>{
        return validNumberStartWithoutZero(number) && /^[0-9]+$/.test(number)?true:false
    }
    return {
        setConcept,
        setAmount,
        setDate,
        concept, 
        amount,
        date,
        textDate,
        setTextDate,
        onBottonPress,
    }
}
export default MoneyManager