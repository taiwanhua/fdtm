import React, {useReducer, useEffect, useState, useContext} from "react";
import {Topcontext, Topcontexttype} from "../flowcontext/Topcontext";


export const FetchID = async (times) => {
    const {state, dispatch, state1, dispatch1} = useContext(Topcontext);

    useEffect( function () {
        Getdata();
    }, [])

    async function Getdata() {
        try {
            let profileData = await fetch("./idinfo.json");
            console.log(profileData)
            profileData = await profileData.json();
            // console.log(profileData)
            dispatch1({...state1, type: true, times: times, state: profileData})
        } catch (error) {
            console.log(error);
        }
    }

};

