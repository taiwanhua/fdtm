import React, {useReducer, useEffect, useState, useContext} from "react";
import {Topcontext} from "../Component/Common/Context/Topcontext";


export const FetchID = async (times) => {
    const {Globalcontext, Globalcontextdispatch,state1, dispatch1} = useContext(Topcontext);

    useEffect( function () {
        Getdata();
    }, [])

    async function Getdata() {
        try {
            let profileData = await fetch("./idinfo.json");
            console.log(profileData)
            profileData = await profileData.json();
            // console.log(profileData)
            Globalcontextdispatch({...Globalcontext, type: true, times: times, state: profileData})
        } catch (error) {
            console.log(error);
        }
    }

};

