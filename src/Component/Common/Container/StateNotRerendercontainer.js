import React, {useContext, useState, useEffect} from "react"
import {Topcontext} from "../Context/Topcontext";
import {SimpleSelect, FunctionSelect} from "../Functional/Selects"
import {LineButton} from "../Functional/Buttons";


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
            }} selectSetting={{muiSelectWidth: "300px", labelname: "one1"}} keep={["a", "b", "c"]} kill={[]}/>
        </div>
    )

}

export const StateNotRerendercontainer_FunctionSelect1 = ({props, ...other}) => {

    const {Globalcontext, Globalcontextdispatch, state1, dispatch1} = useContext(Topcontext);
    return (
        <div>
            <FunctionSelect props={{a: 11, b: 22, c: 33}} showvalue={false} handleChange={{
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
            }} selectSetting={{muiSelectWidth: "300px", labelname: "one1"}} defaultSelectItemValue={{分流選擇: 5412}}
                            keep={["a", "b", "c"]} kill={[]}/>
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

//----------------------------------------------------------------------------------------------------------------------
/**
 * 分流選擇組件
 *<br>
 * <br>
 * Description:<br>
 * 套用 SimpleSelect 而成的分流選擇組件，
 * 分流設定三種 : 現實、異世界、加速 (現只開放異世界)
 * 現實 : 每秒自動更新數據並提供下單
 * 異世界 : 手動更新數據並提供下單
 * 加速 : 每秒自動更新一段時間區間數據並提供下單 (例如每秒跳5分K)
 * ( 待更新其刷新的dispatch )
 *
 * @file: StateNotRerendercontainer.js
 * @module React-export_分流選擇組件: StateNotRerendercontainer_reRoute
 * @see   url   or  {FunctionName#var}
 * @param {props, ...other} props - 外部傳進來的一些初始參數 other - 外部傳進來除了props外的一些初始參數
 * @author: Arhua Ho
 * @date: 2019/10/1
 */
export const StateNotRerendercontainer_reRoute = ({props, ...other}) => {

    const {Globalcontext, Globalcontextdispatch, state1, dispatch1} = useContext(Topcontext);
    return (
        <div>
            <SimpleSelect props={{現實: "real", 異世界: "unreal", 加速: "speed"}} showvalue={false} handleChange={{
                // 現實: () => {
                //     Globalcontextdispatch({
                //         type: "dragclose",
                //         payload: {
                //             test: {isclose: false}
                //         }
                //     });
                // }, 異世界: () => {
                //     Globalcontextdispatch({
                //         type: "dragclose",
                //         payload: {
                //             test13: {isclose: false}
                //         }
                //     });
                // }
            }} selectSetting={{muiSelectWidth: "80px", labelname: "選擇分流"}}
                          defaultSelectItemValue={{itemvalue: "unreal"}} keep={["異世界"]}/>
        </div>
    )

}

/**
 * 帳戶總覽組件
 *<br>
 * <br>
 * Description:<br>
 * 套用 FunctionSelect 而成的帳戶總覽組件，
 * 帳戶總覽目前設定三種 : 活儲金戶、期貨保證金戶
 * 活儲金戶 : 活儲金戶明細
 * 期貨保證金戶 :  期貨保證金戶明細
 * ( 待更新其刷新的dispatch )
 *
 * @file: StateNotRerendercontainer.js
 * @module React-export_帳戶總覽組件: StateNotRerendercontainer_AccountList
 * @see   url   or  {FunctionName#var}
 * @param {props, ...other} props - 外部傳進來的一些初始參數 other - 外部傳進來除了props外的一些初始參數
 * @author: Arhua Ho
 * @date: 2019/10/1
 */
export const StateNotRerendercontainer_AccountList = ({props, ...other}) => {


    const {Globalcontext, Globalcontextdispatch, state1, dispatch1} = useContext(Topcontext);
    return (
        <div>
            <FunctionSelect props={{活儲金戶: "SavingsAccount", 期貨保證金戶: "MarginAccount", c: 33}} showvalue={false}
                            handleChange={{
                                活儲金戶: () => {
                                    Globalcontextdispatch({
                                        type: "dragclose",
                                        payload: {
                                            SavingsAccount: {isclose: false}
                                        }
                                    });
                                }, 期貨保證金戶: () => {
                                    Globalcontextdispatch({
                                        type: "dragclose",
                                        payload: {
                                            MarginAccount: {isclose: false}
                                        }
                                    });
                                }
                            }} selectSetting={{muiSelectWidth: "100px",}} defaultSelectItemValue={{帳戶總覽: 99999}}
                            keep={["活儲金戶", "期貨保證金戶"]} kill={[]}/>
        </div>
    )

}

/**
 * 帳務總覽組件
 *<br>
 * <br>
 * Description:<br>
 * 套用 FunctionSelect 而成的帳務總覽組件，
 * 帳務總覽目前設定三種 : 期貨交易歷史明細、期貨庫存、期貨權益數
 * 期貨交易歷史明細 : 期貨交易歷史明細、供區間查詢
 * 期貨庫存 :  查詢期貨庫存
 * 期貨權益數 :  查詢期貨權益數
 * ( 待更新其刷新的dispatch )
 *
 * @file: StateNotRerendercontainer.js
 * @module React-export_帳戶總覽組件: StateNotRerendercontainer_AccountList
 * @see   url   or  {FunctionName#var}
 * @param {props, ...other} props - 外部傳進來的一些初始參數 other - 外部傳進來除了props外的一些初始參數
 * @author: Arhua Ho
 * @date: 2019/10/1
 */
export const StateNotRerendercontainer_AccountingList = ({props, ...other}) => {


    const {Globalcontext, Globalcontextdispatch, state1, dispatch1} = useContext(Topcontext);
    return (
        <div>
            <FunctionSelect props={{
                期貨交易歷史明細: "FuturesTransactHistory",
                期貨庫存: "FuturesTransactStock",
                期貨權益數: "FuturesTransactEquity"
            }} showvalue={false} handleChange={{
                期貨交易歷史明細: () => {
                    Globalcontextdispatch({
                        type: "dragclose",
                        payload: {
                            FuturesTransactHistory: {isclose: false}
                        }
                    });
                }, 期貨庫存: () => {
                    Globalcontextdispatch({
                        type: "dragclose",
                        payload: {
                            FuturesTransactStock: {isclose: false}
                        }
                    });
                }, 期貨權益數: () => {
                    Globalcontextdispatch({
                        type: "dragclose",
                        payload: {
                            FuturesTransactEquity: {isclose: false}
                        }
                    });
                }
            }} selectSetting={{muiSelectWidth: "100px",}} defaultSelectItemValue={{帳務總覽: 99999}}
                            keep={["期貨交易歷史明細", "期貨庫存", "期貨權益數"]} kill={[]}/>
        </div>
    )

}

/**
 * 網路銀行組件
 *<br>
 * <br>
 * Description:<br>
 * 套用 FunctionSelect 而成的網路銀行組件，
 * 帳務總覽目前設定三種 : 轉帳/入金、貸款、還款
 * 轉帳/入金 : 轉帳/入金業務
 * 貸款 :  貸款業務
 * 還款 :  還款業務
 * ( 待更新其刷新的dispatch )
 *
 * @file: StateNotRerendercontainer.js
 * @module React-export_網路銀行組件: StateNotRerendercontainer_InternetBanking
 * @see   url   or  {FunctionName#var}
 * @param {props, ...other} props - 外部傳進來的一些初始參數 other - 外部傳進來除了props外的一些初始參數
 * @author: Arhua Ho
 * @date: 2019/10/1
 */
export const StateNotRerendercontainer_InternetBanking = ({props, ...other}) => {


    const {Globalcontext, Globalcontextdispatch, state1, dispatch1} = useContext(Topcontext);
    return (
        <div>
            <FunctionSelect props={{"轉帳/入金": "Transfer", 貸款: "Loan", 還款: "Repayment"}} showvalue={false} handleChange={{
                "轉帳/入金": () => {
                    Globalcontextdispatch({
                        type: "dragclose",
                        payload: {
                            Transfer: {isclose: false}
                        }
                    });
                }, 貸款: () => {
                    Globalcontextdispatch({
                        type: "dragclose",
                        payload: {
                            Loan: {isclose: false}
                        }
                    });
                }, 還款: () => {
                    Globalcontextdispatch({
                        type: "dragclose",
                        payload: {
                            Repayment: {isclose: false}
                        }
                    });
                }
            }} selectSetting={{muiSelectWidth: "100px",}} defaultSelectItemValue={{網路銀行: 99999}}
                            keep={["轉帳/入金", "貸款", "還款"]} kill={[]}/>
        </div>
    )

}

/**
 * 交易組件
 *<br>
 * <br>
 * Description:<br>
 * 套用 FunctionSelect 而成的網路銀行組件，
 * 帳務總覽目前設定一種 : 期貨交易
 * 期貨交易 : 期貨交易
 * ( 待更新其刷新的dispatch )
 *
 * @file: StateNotRerendercontainer.js
 * @module React-export_交易組件: StateNotRerendercontainer_Trade
 * @see   url   or  {FunctionName#var}
 * @param {props, ...other} props - 外部傳進來的一些初始參數 other - 外部傳進來除了props外的一些初始參數
 * @author: Arhua Ho
 * @date: 2019/10/1
 */
export const StateNotRerendercontainer_Trade = ({props, ...other}) => {


    const {Globalcontext, Globalcontextdispatch, state1, dispatch1} = useContext(Topcontext);
    return (
        <div>
            <FunctionSelect props={{期貨交易: "FuturesTrade", 股票交易: "StockTrade", 房產交易: "EstateTrade"}} showvalue={false}
                            handleChange={{
                                期貨交易: () => {
                                    Globalcontextdispatch({
                                        type: "dragclose",
                                        payload: {
                                            FuturesTrade: {isclose: false}
                                        }
                                    });
                                }, 股票交易: () => {
                                    Globalcontextdispatch({
                                        type: "dragclose",
                                        payload: {
                                            StockTrade: {isclose: false}
                                        }
                                    });
                                }, 房產交易: () => {
                                    Globalcontextdispatch({
                                        type: "dragclose",
                                        payload: {
                                            EstateTrade: {isclose: false}
                                        }
                                    });
                                }
                            }} selectSetting={{muiSelectWidth: "70px",}} defaultSelectItemValue={{交易: 99999}}
                            keep={["期貨交易"]} kill={[]}/>
        </div>
    )

}

/**
 * 許願池組件
 *<br>
 * <br>
 * Description:<br>
 * 套用 LineButton 而成的許願池組件，
 * 許願池 : 開啟許願池留言板
 * ( 待更新其刷新的dispatch )
 *
 * @file: StateNotRerendercontainer.js
 * @module React-export_許願池組件: StateNotRerendercontainer_WishingPool
 * @see   url   or  {FunctionName#var}
 * @param {props, ...other} props - 外部傳進來的一些初始參數 other - 外部傳進來除了props外的一些初始參數
 * @author: Arhua Ho
 * @date: 2019/10/1
 */
export const StateNotRerendercontainer_WishingPool = ({props, ...other}) => {


    const {Globalcontext, Globalcontextdispatch, state1, dispatch1} = useContext(Topcontext);
    const [state, setState] = useState({
        id: "WishingPool",
        spacing: 0,
        xsspacing : 0,
        smspacing : 0,
        mdspacing : 0,
        lgspacing : 0,
        xlspacing : 0,
        //mdspacing: 8,
        border: "black 0px solid",
        fullWidth: true,
        textleft: "許願池",
        disabled: false,
        color: "#d9eeec",
        background: "#5c94bd",
        width: "80px",
        height: "calc(100% - 20px)",
        hoverbackground: "#3c9d9b"
    });
    return (
        <div>
            <div style={{height: "8px"}}></div>
            <LineButton onClick={() => {
                Globalcontextdispatch({
                    type: "dragclose",
                    payload: {
                        WishingPool: {isclose: false}
                    }
                });
            }}
                        props={state}>
            </LineButton>
            {/*<LineButton onClick={(e) => setState({...state, background: "red"})} i="123"*/}
            {/*href="https://tw.yahoo.com/" props={state}>*/}
            {/*<DeleteIcon className={classes.leftIcon}/>*/}
            {/*</LineButton>*/}
        </div>
    )

}

/**
 * 使用者資訊組件
 *<br>
 * <br>
 * Description:<br>
 * 套用 LineButton 而成的使用者資訊組件，
 * 許願池 : 開啟使用者資訊
 * ( 待更新其刷新的dispatch )
 *
 * @file: StateNotRerendercontainer.js
 * @module React-export_使用者資訊組件: StateNotRerendercontainer_UserInfo
 * @see   url   or  {FunctionName#var}
 * @param {props, ...other} props - 外部傳進來的一些初始參數 other - 外部傳進來除了props外的一些初始參數
 * @author: Arhua Ho
 * @date: 2019/10/1
 */
export const StateNotRerendercontainer_UserInfo = ({props, ...other}) => {


    const {Globalcontext, Globalcontextdispatch, state1, dispatch1} = useContext(Topcontext);
    const [state, setState] = useState({
        id: "UserInfo",
        spacing: 0,
        xsspacing : 0,
        smspacing : 0,
        mdspacing : 0,
        lgspacing : 0,
        xlspacing : 0,
        //mdspacing: 8,
        border: "black 0px solid",
        fullWidth: true,
        textleft: "個人資訊",
        disabled: false,
        color: "#d9eeec",
        background: "#5c94bd",
        width: "95px",
        height: "calc(100% - 20px)",
        hoverbackground: "#3c9d9b",

    });
    return (
        <div>
            <div style={{height: "8px"}}></div>
            <LineButton onClick={() => {
                Globalcontextdispatch({
                    type: "dragclose",
                    payload: {
                        UserInfo: {isclose: false}
                    }
                });
            }}
                        props={state}>
            </LineButton>
            {/*<LineButton onClick={(e) => setState({...state, background: "red"})} i="123"*/}
            {/*href="https://tw.yahoo.com/" props={state}>*/}
            {/*<DeleteIcon className={classes.leftIcon}/>*/}
            {/*</LineButton>*/}
        </div>
    )

}
