import React,{useState}from 'react'
import SQLite from 'react-native-sqlite-storage'
import moment from 'moment'

const dataBase=(nameTable, namesColums)=>{

    const db = SQLite.openDatabase({ name: 'UserDatabase.db' });
    const [concept, setConcept]=useState('');
    const [amount, setAmount]=useState(0);
    const [date, setDate]=useState(new Date);

    const checkAndCreateTable=()=>{
        db.transaction((txn)=>{
            txn.executeSql(
                `SELECT name FROM sqlite_master WHERE type='table' AND name='${nameTable}'`,
                [],
                (tx,res)=>{
                    if(res.rows.length==0){
                        console.log(res.rows.length);
                        txn.executeSql(
                            `DROP TABLE IF EXISTS ${nameTable}`,
                            [],
                            (tx,res)=>{
                                for(let i=0;i<res.rows.length;i++){
                                    console.log(res.rows.item(0));
                                }
                        });
                        txn.executeSql(
                            `CREATE TABLE IF NOT EXISTS ${nameTable}(id INTEGER PRIMARY KEY AUTOINCREMENT, concept VARCHAR(200),
                            amount INTEGER, date DATE, type INTEGER);`,
                            [],
                            (tx, res)=>{
                                for(let i=0;i<res.rows.length;i++){
                                    console.log(res.rows.item(i));
                                }
                        });
                    }else{
                        console.log('Ya existe la tabla')
                    }
                });
        });
        db.close
        listDataBaseTables();
    }

    const listDataBaseTables=()=>{
        db.transaction((txn)=>{
            txn.executeSql(
                `SELECT name FROM sqlite_master WHERE type ='table' AND name NOT LIKE 'sqlite_%';`,
                [],
                (tx,res)=>{
                    for(let i=0; i<res.rows.length; i++){
                        console.log(res.rows.item(i));
                    }
                }
            );
        });
        db.close;
    }

    const dropTable=()=>{
        db.transaction((txn)=>{
            txn.executeSql(
                `DROP TABLE IF EXISTS ${nameTable}`,
                [],
                (tx,res)=>{
                    console.log("Table Deleted")
                }
            );
        });
        db.close;
    }

    const listTable=()=>{
        db.transaction((txn)=>{
            txn.executeSql(
                `SELECT * FROM ${nameTable}`
            ,
            [],
            (tx,res)=>{
                for(let i=0;i<res.rows.length;i++){
                    console.log(res.rows.item(i));
                }
            });
        });
        db.close;
    }

    const appendTable=()=>{
        db.transaction((txn)=>{
            txn.executeSql(
                `INSERT INTO ${nameTable} (concept, amount, date) VALUES (?,?,?)`,
            [concept,amount,moment(date).format("YYYY-MM-DD")],
            (tx,res)=>{
                res.rowsAffected > 0?console.log('Saved!'):console.log('not Saved!');
            });
        });
        db.close;
    }
    
    return{
        setConcept,
        setAmount,
        setDate,
        concept,                
        amount,
        date,
        appendTable,
        listTable,
        checkAndCreateTable,
        dropTable
    }
}

export default dataBase