import React,{Component} from 'react';
import HomeScreen from './homeScreen';
import Spend from './spend';
import State from './state';
import TabBar from "@mindinventory/react-native-tab-bar-interaction";

class NavigatorScreen extends Component{
    render(){
        return(
            <TabBar bgNavBar="white" bgNavBarSelector="white" stroke="skyblue">
                <TabBar.Item
                    icon={"cash-plus"}
                    selectedIcon={"cash-plus"}
                    iconColor={"#f91157"}
                    iconColorSelected={"#000000"}
                    title="Tab1"
                    screenBackgroundColor={{ backgroundColor: '#008080' }}
                >
                    <Spend/>
                </TabBar.Item>
                <TabBar.Item
                    icon={"cash-register"}
                    selectedIcon={"cash-register"}
                    iconColor={"#f91157"}
                    iconColorSelected={"#000000"}
                    title="Tab2"
                    screenBackgroundColor={{ backgroundColor: '#F08080' }}
                >
                    <State/>
                </TabBar.Item>
                <TabBar.Item
                    icon={"cash-minus"}
                    selectedIcon={"cash-minus"}
                    iconColor={"#f91157"}
                    iconColorSelected={"#000000"}
                    title="Tab3"
                    screenBackgroundColor={{ backgroundColor: '#485d72' }}
                >
                    <HomeScreen/>
                </TabBar.Item>
            </TabBar>
        )
    }
}

export default NavigatorScreen