import React, {useContext, useEffect} from "react";
import {Topcontext} from "../Context/Topcontext";
import {FetchID} from "../../../DBCommunicator/FetchID"
import {Menu, Dropdown, Button, Icon, message} from 'antd';
import styled from "styled-components"
import 'antd/dist/antd.css';

function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
}

const Mymenu = styled(Menu)`
  background-color:red;
  color: #000000;

`


const Mbutton=styled(Button).attrs({ className: `ant-btn  `
    })`
background: #440044;
width: 500px;
.ant-btn:hover, .ant-btn:focus{
background-color: #f5871f;
 color: #fff;
}

ant-btn::selection {
    color: #fff;
    background: #f5871f;
`

const Dr=styled(Dropdown)`



`


const menu = (
    <Mymenu onClick={handleMenuClick}>
        <Mymenu.Item key="1">
            <Icon type="user"/>
            1st menu item
        </Mymenu.Item>
        <Mymenu.Item key="2">
            <Icon type="user"/>
            2nd menu item
        </Mymenu.Item>
        <Menu.Item key="3">
            <Icon type="user"/>
            3rd item
        </Menu.Item>
    </Mymenu>
);


const Navigation = props => {
    const {Globalcontext, Globalcontextdispatch, state1, dispatch1} = useContext(Topcontext);
    // console.log("state",state)
    // console.log("state1",state1)
    // console.log(window)
    // FetchID(3);
    // FetchID(2);
    // FetchID(99);

    return (
        <React.Fragment>
            {/*<div id="components-dropdown-demo-dropdown-button">*/}
            <Dropdown overlay={menu}>
                <Mbutton>
                    Button <Icon type="down"/>
                </Mbutton>
            </Dropdown>
            {/*</div>*/}
            <button onClick={() => {
                Globalcontextdispatch({
                    type: "dragclose",
                    payload: {
                        test: {isclose: false}
                    }
                });
            }}>test
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
    );
};

export default Navigation;
