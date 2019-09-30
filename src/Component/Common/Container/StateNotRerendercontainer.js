import React, {useContext, useEffect} from "react"
import {Topcontext} from "../Context/Topcontext";
import {SimpleSelect} from "../Functional/Selects"


//存在此層容器是因為當Globalcontext的State被更新時，會重新render其子組件，
//所以在要使用的組件上再包一層容器去使用State，就能解決組件不該被渲染時被渲染的問題，
//且被StateNotRerendercontainer(此層容器)包裹住的不同組件即使更新的是同一個State，也不會互相影響錯誤的被渲染

export const StateNotRerendercontainer_SimpleSelect1 = ({props, ...other}) => {

    const {Globalcontext, Globalcontextdispatch, state1, dispatch1} = useContext(Topcontext);
    return (
        <div>
            <SimpleSelect props={{a: 11, b: 22, c: 33}} showvalue={true} handleChange={{
                a: () => {
                    Globalcontextdispatch({
                        type: "dragclose",
                        payload: {
                            test: {isclose: false}
                        }
                    });
                }, b: () => {
                    Globalcontextdispatch({
                        type: "dragclose",
                        payload: {
                            test13: {isclose: false}
                        }
                    });
                }
            }} selectSetting={{muiSelectWidth: "300px", labelname: "one1"}} keep={["a","b","c"]} kill={[]}/>
        </div>
    )

}


export const StateNotRerendercontainer_SimpleSelect2 = ({props, ...other}) => {

    const {Globalcontext, Globalcontextdispatch, state1, dispatch1} = useContext(Topcontext);
    return (
        <div>
            <SimpleSelect props={{a: 11, b: 22, c: 33}} showvalue={true} handleChange={() => {
                Globalcontextdispatch({
                    type: "dragclose",
                    payload: {
                        test13: {isclose: false}
                    }
                });
            }} selectSetting={{muiSelectWidth: "300px", labelname: "one1"}} keep={["a"]} kill={["b"]}/>
        </div>
    )

}



