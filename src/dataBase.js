import {Component}from 'react'
import SQLite from 'react-native-sqlite-storage'

class DataBase extends Component{
    constructor(props){
        super(props);
        this.state={
            tablet:props.tablet,
            amount:props.amount,
            concept:props.concept,
            date:props.date
        };
    }



    checkDataBase(){

    }

    createDataBase(){

    }

    listDataBase(){

    }

    dropDataBase(){

    }

    listDataBaseRows(){

    }

    appendDataBaseRows(){

    }

    dropDataBaseRows(){

    }
    
}

export default DataBase