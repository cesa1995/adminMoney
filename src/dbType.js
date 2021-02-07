import {useState} from 'react'
import SQLite from 'react-native-sqlite-storage'

const DbType=(nameTable)=>{
    const [type, setType]=useState("");
    const [items, setItems]=useState(null);
    const [selectedItemValue, setSelectedItemValue]=useState(null);

    const db=SQLite.openDatabase({ name: 'UserDatabase.db' })

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
                            `CREATE TABLE IF NOT EXISTS ${nameTable}(id INTEGER PRIMARY KEY AUTOINCREMENT, type VARCHAR(200));`,
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
                    setItems(
                        [{
                            id:res.rows.item(i)[id],
                            type:res.rows.item(i)[type]
                        }]
                    )
                }
            });
        });
        db.close;
    }

    const appendTable=()=>{
        db.transaction((txn)=>{
            txn.executeSql(
                `INSERT INTO ${nameTable} (type) VALUES (?)`,
            [type],
            (tx,res)=>{
                res.rowsAffected > 0?console.log('Saved!'):console.log('not Saved!');
            });
        });
        db.close;
    }

    return{
        checkAndCreateTable,
        listDataBaseTables,
        dropTable,
        listTable,
        appendTable,
        setType,
        type,
        items,
    }
}

export default DbType