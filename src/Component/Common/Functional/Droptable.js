import React, {useEffect, useState} from "react"

export const Droptable = (props) => {
    const allowDrop = (ev) => {
        ev.stopPropagation();
        console.log("123132")
        ev.preventDefault();
    }

    const drag = (ev) => {

        ev.stopPropagation();
        console.log(ev.target.id)

        console.log(ev.dataTransfer.setData("text", ev.target.id))
        ev.dataTransfer.setData("text", ev.target.id);
    }

    const drop = (ev) => {
        ev.stopPropagation();
        ev.preventDefault();
        let data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }

    const dragEnter = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        console.log("aaaaaa")

    }
    const subdragEnter = (ev) => {
        console.log(ev.target)
        ev.preventDefault();
        ev.stopPropagation();
        ev.target.style.position="absolute";
        ev.target.style.top="20px";

    }
    let a = 123;

    return (
        <div>
            <div id="div1" onDrop={drop} onDragOver={allowDrop} onDragEnter={dragEnter}
                 style={{width: "336px", height: "370px"}}>

            </div>
            <br/>
            <div id="drag1" draggable="true" onDragStart={drag} onDragEnter={subdragEnter}
                 style={{width: "336px", height: "69px"}}>
                <div>sdf1</div>
                <div>sdf11</div>
                <div>sdf111</div>
            </div>
            <div id="drag2" draggable="true" onDragStart={drag} onDragEnter={subdragEnter}
                 style={{width: "336px", height: "69px"}}>
                <div>2</div>
                <div>22</div>
                <div>222</div>
            </div>
        </div>
    )

}



