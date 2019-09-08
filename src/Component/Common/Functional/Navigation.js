import React, {useContext, useEffect} from "react";
import {Topcontext} from "../Context/Topcontext";
import {FetchID} from "../../../DBCommunicator/FetchID"
import styled from "styled-components"
import {ThemeProvider} from 'styled-components';

// import {ThemeProvider} from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from "@material-ui/core";




//spacing為[0,10]之區間的數，控制元素間間格距離(padding)每一單位為8px
//斷點有五種:xs，sm，md，lg 和 xl。Grid的基底為12，例sx={6}就是占一半空間


const Navigation = props => {
    const {Globalcontext, Globalcontextdispatch, state1, dispatch1} = useContext(Topcontext);
    // console.log("state",state)
    // console.log("state1",state1)
    // console.log(window)
    // FetchID(3);
    // FetchID(2);
    // FetchID(99);
    // #343a40

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

    const GGrid = styled( ({theme,...other})=>(<Grid {...other}/>)   )`

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
                <GGrid  theme={theme} p={props} container spacing={0}>
                    <GGrid theme={theme} item  xs={12}>
                        1
                    </GGrid>
                    <GGrid theme={theme}  item xs={4}>
                        2
                    </GGrid>
                    <GGrid theme={theme}  item xs={4}>
                        3
                    </GGrid>
                    <GGrid id="a1" theme={theme}item xs={4}>
                        3
                    </GGrid>
                </GGrid>



            <Buttonself>yes</Buttonself>

            <button
                onClick={() => {
                    Globalcontextdispatch({
                        type: "dragclose",
                        payload: {
                            test: {isclose: false}
                        }
                    });
                }
                }>
                test
                </button>
                <button onClick={() => {
                    Globalcontextdispatch({
                        type: "dragclose",
                        payload: {
                            test13: {isclose: false}
                        }
                    });
                }}>test13
                </button>

                </React.Fragment>
                )
                ;
                };

                export default Navigation;
