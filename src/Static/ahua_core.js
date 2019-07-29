// //變更Jquery命名式(需在引用此文件前先引入Jquery)
// // var jq=jQuery.noConflict();  //$=>jq
//
// //==========Object類擴展==============
// //因為$ByClassName等某些方法返回object物件，所以增加對Obect類做擴展以使用
//
// //*** 透過ID獲取元素，回傳陣列或單一元素
// Object.prototype.$ByID = function (object_or_string) {
//     //因為使用ID不需要透過此函數，可直接調用；亦提供方法
//     // document.getElementById()
//     // document.getElementsByClassName()
//     // document.getElementsByTagName()
//     // document.getElementsByName()
//     // document.getElementsByTagNameNS()
//     // document.getSelection()
//     if (typeof object_or_string === "string") {
//         // console.log("true");
//         return document.getElementById(object_or_string);
//     }
//     if (typeof object_or_string === "object") {
//         return object_or_string;
//     }
// }
//
// //*** 透過ClassName獲取元素，回傳陣列或單一元素
// Object.prototype.$ByClassName = function (Classname_String, index) {
//     //因為使用ID不需要透過此函數，可直接調用；亦提供方法
//     // document.getElementById()
//     // document.getElementsByClassName()
//     // document.getElementsByTagName()
//     // document.getElementsByName()
//     // document.getElementsByTagNameNS()
//     // document.getSelection()
//     if (typeof index === "undefined") {
//         // console.log(typeof index);
//         // document.getElementsByTagName(TagName_String)
//         var list = [];
//         for (var i = 0; i < document.getElementsByClassName(Classname_String).length; i++) {
//             list[i] = document.getElementsByClassName(Classname_String)[i];
//         }
//         return list;
//     }
//     if (typeof index === "object") {
//         //指定為陣列
//         var list = [];
//         index.forEach(function (e, index) {
//             //若傳入亂序[5,2,1,3,4]
//             //則list內的元件會照傳入的array重新排序
//             //document.getElementsByClassName第5個排到第0個去
//             list[index] = document.getElementsByClassName(Classname_String)[e];
//         })
//         return list;//回傳陣列
//     }
//     if (typeof index === "number") {
//         return document.getElementsByClassName(Classname_String)[parseInt(index)]//無條件捨去取整
//     }
//     if (typeof index === "string") {
//         return document.getElementsByClassName(Classname_String)[parseInt(index)]//無條件捨去取整
//     }
// }
//
// //*** 透過TagName獲取元素，回傳陣列或單一元素
// Object.prototype.$ByTagName = function (TagName_String, index) {
//     //因為使用ID不需要透過此函數，可直接調用；亦提供方法
//     // document.getElementById()
//     // document.getElementsByClassName()
//     // document.getElementsByTagName()
//     // document.getElementsByName()
//     // document.getElementsByTagNameNS()
//     // document.getSelection()
//     if (typeof index === "undefined") {
//         // console.log(typeof index);
//         // document.getElementsByTagName(TagName_String)
//         var list = [];
//         for (var i = 0; i < document.getElementsByTagName(TagName_String).length; i++) {
//             list[i] = document.getElementsByTagName(TagName_String)[i];
//         }
//         return list;
//     }
//     if (typeof index === "object") {
//         //指定為陣列
//         var list = [];
//         index.forEach(function (e, index) {
//             //若傳入亂序[5,2,1,3,4]
//             //則list內的元件會照傳入的array重新排序
//             //document.getElementsByClassName第5個排到第0個去
//             list[index] = document.getElementsByTagName(TagName_String)[e];
//         })
//         return list;//回傳陣列
//     }
//     if (typeof index === "number") {
//         return document.getElementsByTagName(TagName_String)[parseInt(index)]//無條件捨去取整
//     }
//     if (typeof index === "string") {
//         return document.getElementsByTagName(TagName_String)[parseInt(index)]//無條件捨去取整
//     }
// }
//
// //*** 透過Name獲取元素，回傳陣列或單一元素
// Object.prototype.$ByName = function (Name_String, index) {
//     //因為使用ID不需要透過此函數，可直接調用；亦提供方法
//     // document.getElementById()
//     // document.getElementsByClassName()
//     // document.getElementsByTagName()
//     // document.getElementsByName()
//     // document.getElementsByTagNameNS()
//     // document.getSelection()
//     if (typeof index === "undefined") {
//         // console.log(typeof index);
//         // document.getElementsByTagName(TagName_String)
//         var list = [];
//         for (var i = 0; i < document.getElementsByName(Name_String).length; i++) {
//             list[i] = document.getElementsByName(Name_String)[i];
//         }
//         return list;
//     }
//     if (typeof index === "object") {
//         //指定為陣列
//         var list = [];
//         index.forEach(function (e, index) {
//             //若傳入亂序[5,2,1,3,4]
//             //則list內的元件會照傳入的array重新排序
//             //document.getElementsByClassName第5個排到第0個去
//             list[index] = document.getElementsByName(Name_String)[e];
//         })
//         return list;//回傳陣列
//     }
//     if (typeof index === "number") {
//         return document.getElementsByName(Name_String)[parseInt(index)]//無條件捨去取整
//     }
//     if (typeof index === "string") {
//         return document.getElementsByName(Name_String)[parseInt(index)]//無條件捨去取整
//     }
// }
//
// //*** 接在$getby什麼什麼後面，傳入CSS屬性、屬性值，設定CSS style
// Object.prototype.setcssbyobject = function (set_style, setstr, is_Array_true_or_false) {
// //set CSS style
// //     console.log(str);
// //     console.log(setstyle);
// //     console.log(setstr);
//     if (is_Array_true_or_false) {
//         this.forEach(function (e) {
//             eval("e.style." + set_style + "=\"" + setstr + "\"");
//         })
//     } else {
//         if (typeof set_style != "number") {
//             eval("object.style." + set_style + "=\"" + setstr + "\"");
//         }
//     }
// }
//
// //*** 接在$getby什麼什麼後面，傳入CSS屬性，取得物件的CSS Style
// Object.prototype.getcssbyobject = function (Cssstyle, is_Array_true_or_false) {
// //get CSS Style by tag object
//     //接在$getby什麼什麼後面
//     var list1 = [];
//     if (window.getComputedStyle) {
//         //這樣就可以獲取"內聯(行內)樣式"以外的樣式
//         //not IE
//         //console.log(str);
//         //console.log(typeof str);
//         if (is_Array_true_or_false) {
//             // console.log(this);
//             this.forEach(function (e, i) {
//                 list1[i] = getComputedStyle(e)[Cssstyle];
//             })
//             return list1;
//         } else {
//             return getComputedStyle(this)[Cssstyle];
//         }
//     } else {
//         //IE
//         if (is_Array_true_or_false) {
//             this.forEach(function (e, i) {
//                 list1[i] = e.currentStyle[Cssstyle];
//             })
//             return list1;
//         } else {
//             return this.currentStyle[Cssstyle];
//         }
//     }
// }
//
// //console.log簡寫
// Object.prototype.p = function () {
//     console.log(this);
// }
//
// //*** 對指定節點的同輩節點在指定位置添加元素(未完成，決定棄用改用JQUERY)
// // 指定可以是陣列
// // Object.prototype.$InsertBrotherElement = function (insert_index, insert_NodeElement, insert_index_isArray_true_or_false) {
// //     var thisclone = null;
// //     console.log(this.length)
// //     if (0 == this.length) {
// //         "Error : 找不到元素!"
// //     }
// //     if (0 < this.length) {
// //         document.body.insertBefore(insert_NodeElement, this)
// //     }
// //     if (undefined === this.length) {
// //         document.body.insertBefore(insert_NodeElement, this)
// //     }
//
//
// // clonethis=this[0].cloneNode(true);
// // clonethis.parentNode.p();
// //  var clonelist=[];
// //  for (var i = 0; i <clonethis.childNodes.length ; i++) {
// //      clonelist[i]=clonethis.childNodes[i];
// //  }
// //  clonelist.p();
// // }
//
// //Onclick事件封裝
// Object.prototype.$OnClick = function (onclick_function, isArray_true_or_false) {
//     //若傳入陣列，需設定參數為true or false
//     if (isArray_true_or_false) {
//         this.forEach(function (e) {
//             e.onclick = onclick_function;
//         })
//     } else {
//         this.onclick = onclick_function;
//     }
// }
//
// //onmouseover事件封裝
// Object.prototype.$onmouseover = function (onclick_function, isArray_true_or_false) {
//     //若傳入陣列，需設定參數為true or false
//     if (isArray_true_or_false) {
//         this.forEach(function (e) {
//             e.onmouseover = onclick_function;
//         })
//     } else {
//         this.onmouseover = onclick_function;
//     }
// }
//
// //onmouseleave事件封裝
// Object.prototype.$onmouseleave = function (onclick_function, isArray_true_or_false) {
//     //若傳入陣列，需設定參數為true or false
//     if (isArray_true_or_false) {
//         this.forEach(function (e) {
//             e.onmouseleave = onclick_function;
//         })
//     } else {
//         this.onmouseleave = onclick_function;
//     }
// }
//
// //==========自訂義function擴展==============
//
// //函數使用window.onload方法
// function wo(onload_function) {
//     //==轉換相同型別後比較，===不轉型別，型別不同直接false
//     if (typeof onload_function === "function") {
//         window.onload = onload_function;
//     } else {
//         console.log("$(onload_function)type error. exception:需要傳入function型態調用window.onload=")
//     }
// }
//
// //創建數列陣列，從何開始，到哪結束，中間間隔
// function to(start, end, sep) {
//     // console.log(start)
//     // console.log(end)
//     // console.log(sep)
//     //sep預設為1
//     var arr = [];
//     if (parseInt(sep) > 0) {
//         var index = 0;
//         for (var i = start; i < end + 1; i = i + sep) {
//             arr[index] = i;
//             index = index + 1;
//         }
//         return arr;
//     }
//     if (typeof sep === "undefined") {
//         var index = 0;
//         for (var i = start; i < end + 1; i = i + 1) {
//             arr[index] = i;
//             index = index + 1;
//         }
//         return arr;
//     }
//     return arr;
// }
//
// //創建數列陣列，從何開始，項數，中間間隔
// function toNumberofitem(start, Numberofitem, sep) {
//     // console.log(start)
//     // console.log(end)
//     // console.log(sep)
//     //sep預設為1
//     var arr = [];
//     if (parseInt(sep) > 0) {
//         var index = 0;
//         for (var i = 0; i < Numberofitem; i = i + 1) {
//             if (index == 0) {
//                 arr[index] = start;
//             } else {
//                 arr[index] = arr[0] + index * sep;
//             }
//             index = index + 1;
//         }
//         return arr;
//     }
//     if (typeof sep === "undefined") {
//         var index = 0;
//         for (var i = 0; i < Numberofitem; i = i + 1) {
//             if (index == 0) {
//                 arr[index] = start;
//             } else {
//                 arr[index] = arr[0] + index * 1;
//             }
//             index = index + 1;
//         }
//         return arr;
//     }
// }
//
// //