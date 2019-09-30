import React, {useContext, useEffect} from "react";
import {Topcontext} from "../Context/Topcontext";
import {FetchID} from "../../../DBCommunicator/FetchID"
import styled from "styled-components"
import {ThemeProvider} from 'styled-components';

// import {ThemeProvider} from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import {createMuiTheme} from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {FunctionSelect, SimpleSelect} from "./Selects";
import {StateNotRerendercontainer_reRoute,StateNotRerendercontainer_AccountList,StateNotRerendercontainer_AccountingList,StateNotRerendercontainer_InternetBanking,StateNotRerendercontainer_Trade,StateNotRerendercontainer_WishingPool,StateNotRerendercontainer_UserInfo,StateNotRerendercontainer_SimpleSelect1,StateNotRerendercontainer_SimpleSelect2,StateNotRerendercontainer_FunctionSelect1} from "../Container/StateNotRerendercontainer";


//spacing為[0,10]之區間的數，控制元素間間格距離(padding)每一單位為8px
//斷點有五種:xs，sm，md，lg 和 xl。Grid的基底為12，例sx={6}就是占一半空間


const Navigation = props => {
    // const {Globalcontext, Globalcontextdispatch, state1, dispatch1} = useContext(Topcontext);
    // console.log("state",state)
    // console.log("state1",state1)
    // console.log(window)
    // FetchID(3);
    // FetchID(2);
    // FetchID(99);
    // #343a40

    const Navbar = styled(AppBar)`
      /*css*/
      && {
      background-color: #1a3e59;
      position: fixed;
      top: 0px;
      z-index: 0;
      height: 50px;
      flex-direction: row;
      color: ${(props) => ((props.p.color) ? "left" : "none")}
        
        & #FDTMLogo {
            background: url("./img/FDTMLogo.png") no-repeat;
            background-size: contain;
            height: 50px;
            width: 180px;
        }
      }
    `;


    const Buttonself = styled(Button)`
      && {
        //color: darkgreen;
        }
        &.btn-primary:hover , .btn-primary.hover {
         //color: red;
        }
`;

    const theme = {
        color: "red"
    }

    const GGrid = styled(({theme, ...other}) => (<Grid {...other}/>))`

      &{
       //flexGrow: 1;
      color: ${props => console.log(props)};
      //color: darkgreen;
      #a1{
      color: darkgreen;
      }
      
      }
      
      .MuiGrid-item{
       color: red;
      }
`
    console.log(props)
    return (
        <React.Fragment>
            <Navbar position="static" p={{color: "trueiko"}}>

                <div id="FDTMLogo">

                </div>
                {/*<SimpleSelect props={{a: 11, b: 22, c: 33}} showvalue={true} handleChange={() => {*/}
                    {/*Globalcontextdispatch({*/}
                        {/*type: "dragclose",*/}
                        {/*payload: {*/}
                            {/*test: {isclose: false}*/}
                        {/*}*/}
                    {/*});*/}
                {/*}} selectSetting={{muiSelectWidth: "300px", labelname: "one1"}} keep={["a"]} kill={["b"]}/>*/}
                <StateNotRerendercontainer_reRoute/>
                <StateNotRerendercontainer_AccountList/>
                <StateNotRerendercontainer_AccountingList/>
                <StateNotRerendercontainer_InternetBanking/>
                <StateNotRerendercontainer_Trade/>
                <StateNotRerendercontainer_WishingPool/>
                <StateNotRerendercontainer_UserInfo/>
                {/*<StateNotRerendercontainer_SimpleSelect1/>*/}
                {/*<StateNotRerendercontainer_SimpleSelect2/>*/}
                {/*<SimpleSelect props={{a:11,b:22,c:33,d:34,e:21,f:32,g:51}} defaultSelectItemValue={{itemvalue:51}}  selectSetting={{muiSelectWidth:"300px"}}/>*/}
                {/*<FunctionSelect  props={{a:11,b:22,c:33,d:34,e:21,f:32,g:51}} defaultSelectItemValue={{Ah:5412}} showvalue={false} selectSetting={{muiSelectWidth:"300px"}}/>*/}
                {/*<StateNotRerendercontainer_FunctionSelect1/>*/}

            </Navbar>
            {/*<GGrid theme={theme} p={props} container spacing={0}>*/}
                {/*<GGrid theme={theme} item xs={12}>*/}
                    {/*1*/}
                {/*</GGrid>*/}
                {/*<GGrid theme={theme} item xs={4}>*/}
                    {/*2*/}
                {/*</GGrid>*/}
                {/*<GGrid theme={theme} item xs={4}>*/}
                    {/*3*/}
                {/*</GGrid>*/}
                {/*<GGrid id="a1" theme={theme} item xs={4}>*/}
                    {/*3*/}
                {/*</GGrid>*/}
            {/*</GGrid>*/}


            {/*<Buttonself>yes</Buttonself>*/}

            {/*<button*/}
                {/*onClick={() => {*/}
                    {/*Globalcontextdispatch({*/}
                        {/*type: "dragclose",*/}
                        {/*payload: {*/}
                            {/*test: {isclose: false}*/}
                        {/*}*/}
                    {/*});*/}
                {/*}*/}
                {/*}>*/}
                {/*test*/}
            {/*</button>*/}
            {/*<button onClick={() => {*/}
                {/*Globalcontextdispatch({*/}
                    {/*type: "dragclose",*/}
                    {/*payload: {*/}
                        {/*test13: {isclose: false}*/}
                    {/*}*/}
                {/*});*/}
            {/*}}>test13*/}
            {/*</button>*/}

        </React.Fragment>
    )
        ;
};

export default Navigation;
