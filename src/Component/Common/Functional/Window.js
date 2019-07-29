import React, {useContext, useState, useEffect, useRef} from "react"
import styled from 'styled-components';
import {Topcontext} from "../Context/Topcontext";

//暫時棄用

const IWindow = styled.div.attrs(  ({ iwindowposition })=>({ style: {
        top:iwindowposition?`${iwindowposition.top}px`:"0px",left:iwindowposition?`${iwindowposition.left}px`:"0px"
    }})
)`
 resize : none;
    position: absolute;
    height:300px;
    width:300px;
    background: papayawhip;
    `;


const CloseBtn = styled.button.attrs(({closebtnposition})=>({style:{
    top:closebtnposition?`${closebtnposition.top}px`:"0px",left:closebtnposition?`${closebtnposition.left}px`:"0px"
    }})

)
    `
    // top: ${props => props ? `${props.closebtnposition.top}px` : 0};
    background:#ff8080
    // position: absolute;
    // height:10px;
    // width:10px; 
    `
// top: ${props => props ? `${props.closebtnposition.top}px` : 0};
//     left: ${props => props ? `${props.closebtnposition.left}px` : 0};

const mousemove = (e) => {
    console.log(e)
}
const c = () => {
    console.log("點了input1一下");
}


const Window = props => {
    const iwindowref = useRef();
    const closebtnref = useRef();
    const currentmouseref = useRef({top: 0, left: 0});
    const {Globalcontext, Globalcontextdispatch, state1, dispatch1} = useContext(Topcontext);
    const [closebtnposition, setclosebtnPosition] = useState({top: 0, left: 92});
    const [iwindowposition, setiwindowPosition] = useState({top: 10, left:10});

    const startmove = (e) => {

        console.log(e)
        e.setCapture && e.setCapture();
        currentmouseref.current = {top: e.clientY, left: e.clientX};
        document.getElementById("iwindow").addEventListener("mousemove", movewindow);

        return false;
    }
    const mouseleaveorup = (e) => {
        document.getElementById("iwindow").removeEventListener("mousemove", movewindow);
        document.getElementById("iwindow").removeEventListener("mouseup", mouseleaveorup);
        e.releaseCapture && e.releaseCapture()
    }

    const movewindow = (e) => {
        document.getElementById("iwindow").addEventListener("mouseup", mouseleaveorup);
        // document.getElementById("iwindow").addEventListener("mouseleave", mouseleaveorup);
        setiwindowPosition(c => ({
            ...c,
            top: iwindowposition.top + (e.clientY - currentmouseref.current.top),
            left: iwindowposition.left + (e.clientX - currentmouseref.current.left)
        }))
        return false;
    }

    useEffect(() => {
        document.getElementById("iwindow").addEventListener("click", c);//當你第一次渲染之後就給document.getElementsByName("input1")[0] DOM添加一事件
        document.getElementById("iwindow").addEventListener("mousedown", startmove);

        return () => {
            document.getElementById("iwindow").removeEventListener("click", c);//當元素載卸時，要清除事件
            document.getElementById("iwindow").removeEventListener("mousedown", startmove);
            // document.getElementById("iwindow").removeEventListener("mouseleave", mouseleaveorup);
        }

    }, [closebtnposition, iwindowposition])


    return (


        <div>

            {Globalcontext.componentinfo.window001.isnotclose &&
            <IWindow id="iwindow" ref={iwindowref} iwindowposition={iwindowposition}>
                <div/>
                <CloseBtn id="closebtn" ref={closebtnref} closebtnposition={closebtnposition} onClick={() => {
                    Globalcontextdispatch({
                        ...Globalcontext,
                        type: true,
                        componentinfo: {window001: {isnotclose: false}, time: 1}
                    })
                }}></CloseBtn></IWindow>}

        </div>
    )

}

export default Window;

