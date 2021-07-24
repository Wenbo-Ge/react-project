(this["webpackJsonpvirtual-microbit"]=this["webpackJsonpvirtual-microbit"]||[]).push([[0],{88:function(e,t,a){},91:function(e,t,a){},97:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(12),r=a.n(i),s=a(60),o=(a(88),a(61)),l=a.n(o),u=a(70),d=a(50),h=a(51),b=a(73),f=a(72),v=a(138),j=a(144),m=a(56);a(101);m.a.initializeApp({apiKey:"AIzaSyCGkvmcE2WSGe3VKN_N96P3b5eApj9O08g",authDomain:"pattern-coordinates.firebaseapp.com",projectId:"pattern-coordinates",storageBucket:"pattern-coordinates.appspot.com",messagingSenderId:"293694421535",appId:"1:293694421535:web:9831f778960d8f1316b32a"});var g=m.a.firestore(),p=(m.a,a(91),a(64)),O=a.n(p),y=a(143),x=a(65),k=a.n(x),S=a(63),C=a.n(S),N=function(){function e(){Object(d.a)(this,e),this.accelerometer={x:0,y:0,z:0},this.magnetometer_raw={x:0,y:0,z:0},this.magnetometer_bearing=0,this.temperature=0,this.buttonA=0,this.buttonACallBack=function(){},this.buttonB=0,this.buttonBCallBack=function(){},this.connected=!1,this.onConnectCallback=function(){},this.onDisconnectCallback=function(){},this.onBLENotifyCallback=function(){},this.characteristic={IO_PIN_DATA:{},IO_AD_CONFIG:{},IO_PIN_CONFIG:{},IO_PIN_PWM:{},LED_STATE:{},LED_TEXT:{},LED_SCROLL:{}}}return Object(h.a)(e,[{key:"getTemperature",value:function(){return this.temperature}},{key:"getAccelerometer",value:function(){return this.accelerometer}},{key:"getBearing",value:function(){return this.magnetometer_bearing}},{key:"getButtonA",value:function(){return this.buttonA}},{key:"setButtonACallback",value:function(e){this.buttonACallBack=e}},{key:"getButtonB",value:function(){return this.buttonB}},{key:"setButtonBCallback",value:function(e){this.buttonBCallBack=e}},{key:"onConnect",value:function(e){this.onConnectCallback=e}},{key:"onDisconnect",value:function(e){this.onDisconnectCallback=e}},{key:"onBleNotify",value:function(e){this.onBLENotifyCallback=e}},{key:"writePin",value:function(e){}},{key:"readPin",value:function(e){}},{key:"writeMatrixIcon",value:function(e){for(var t=new Int8Array(5),a=[["0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0"]],n=0;n<5;n++)for(var c=0;c<5;c++)a[n][7-c]=e[n][4-c];for(n=0;n<5;n++){var i=a[n].join("");t[n]=parseInt(i,2)}this.connected&&this.characteristic.LED_STATE.writeValue(t).then((function(e){})).catch((function(e){console.log(e)}))}},{key:"writeMatrixTextSpeed",value:function(e){var t=new Uint8Array(e);this.connected&&this.characteristic.LED_TEXT.writeValue(t).then((function(e){})).catch((function(e){console.log(e)}))}},{key:"writeMatrixText",value:function(e){var t=new Uint8Array(function(e){for(var t=[],a=0;a<e.length;a++){var n=e.charCodeAt(a);n<128?t.push(n):n<2048?t.push(192|n>>6,128|63&n):n<55296||n>=57344?t.push(224|n>>12,128|n>>6&63,128|63&n):(a++,n=65536+((1023&n)<<10|1023&e.charCodeAt(a)),t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return t}(e));this.connected&&this.characteristic.LED_TEXT.writeValue(t).then((function(e){})).catch((function(e){console.log(e)}))}},{key:"onButtonA",value:function(){this.buttonACallBack()}},{key:"onButtonB",value:function(){this.buttonBCallBack()}},{key:"characteristic_updated",value:function(e){this.onBLENotifyCallback(),"e95dda90-251d-470a-a062-fa1922dfa9a8"==e.target.uuid&&(this.buttonA=e.target.value.getInt8(),this.buttonA&&this.onButtonA()),"e95dda91-251d-470a-a062-fa1922dfa9a8"==e.target.uuid&&(this.buttonB=e.target.value.getInt8(),this.buttonB&&this.onButtonB()),"e95dca4b-251d-470a-a062-fa1922dfa9a8"==e.target.uuid&&(this.accelerometer.x=e.target.value.getInt16(0,!0),this.accelerometer.y=e.target.value.getInt16(2,!0),this.accelerometer.z=e.target.value.getInt16(4,!0)),"e95dfb11-251d-470a-a062-fa1922dfa9a8"==e.target.uuid&&(this.magnetometer_raw.x=e.target.value.getInt16(0,!0),this.magnetometer_raw.y=e.target.value.getInt16(2,!0),this.magnetometer_raw.z=e.target.value.getInt16(4,!0)),"e95d9715-251d-470a-a062-fa1922dfa9a8"==e.target.uuid&&(this.magnetometer_bearing=e.target.value.getInt16(0,!0)),"e95d9250-251d-470a-a062-fa1922dfa9a8"==e.target.uuid&&(this.temperature=e.target.value.getInt8())}},{key:"searchDevice",value:function(){var e=this,t={acceptAllDevices:!0,optionalServices:["e95d0753-251d-470a-a062-fa1922dfa9a8","e95df2d8-251d-470a-a062-fa1922dfa9a8","e95d9882-251d-470a-a062-fa1922dfa9a8","e95d127b-251d-470a-a062-fa1922dfa9a8","e95dd91d-251d-470a-a062-fa1922dfa9a8","e95d6100-251d-470a-a062-fa1922dfa9a8"]};console.log("Requesting Bluetooth Device..."),console.log("with "+JSON.stringify(t)),navigator.bluetooth.requestDevice(t).then((function(t){return console.log("> Name:             "+t.name),console.log("> Id:               "+t.id),t.addEventListener("gattserverdisconnected",e.onDisconnectCallback),t.gatt.connect()})).then((function(t){return e.onConnectCallback(),console.log("Getting Services..."),t.getPrimaryServices()})).then((function(t){console.log("Getting Characteristics...");var a=Promise.resolve();return t.forEach((function(t){a=a.then((function(a){return t.getCharacteristics().then((function(a){console.log("> Service: "+t.uuid),a.forEach((function(t){switch(console.log(">> Characteristic: "+t.uuid+" "+I(t)),t.uuid){case"e95d8d00-251d-470a-a062-fa1922dfa9a8":e.characteristic.IO_PIN_DATA=t;break;case"e95d5899-251d-470a-a062-fa1922dfa9a8":e.characteristic.IO_AD_CONFIG=t;break;case"e95db9fe-251d-470a-a062-fa1922dfa9a8":e.characteristic.IO_PIN_CONFIG=t;break;case"e95dd822-251d-470a-a062-fa1922dfa9a8":e.characteristic.IO_PIN_PWM=t;break;case"e95d7b77-251d-470a-a062-fa1922dfa9a8":e.characteristic.LED_STATE=t,e.connected=!0;break;case"e95d93ee-251d-470a-a062-fa1922dfa9a8":e.characteristic.LED_TEXT=t;break;case"e95d0d2d-251d-470a-a062-fa1922dfa9a8":e.characteristic.LED_SCROLL=t}I(t).includes("NOTIFY")&&(t.startNotifications().catch((function(e){return console.log("startNotifications",e)})),t.addEventListener("characteristicvaluechanged",e.characteristic_updated.bind(e)))}))}))}))})),a})).catch((function(e){console.log("Argh! "+e)}))}}]),e}();function I(e){var t=[];for(var a in e.properties)!0===e.properties[a]&&t.push(a.toUpperCase());return"["+t.join(", ")+"]"}var A=a(139),B=a(140),q=a(141),w=a(145),E=a(137),_=a(142),D=a(71),T=a.n(D),P=a(4),L=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={squares:Array(25).fill(null),name:"",buttonName:Array(25).fill("square"),iconFetch:{},search:null,displayControll:!1,submitControll:!1,microBit:new N,connectionStatus:!1,selectValue:"",iconFetchAll:["Names"],selectOptions:"allNamesListOff"},n}return Object(h.a)(a,[{key:"validatePair",value:function(){this.setState({connectionStatus:this.state.microBit.connected})}},{key:"handleClick",value:function(e){var t=this.state.squares.slice();null==t[e]?t[e]="X":t[e]=null,this.setState({squares:t});var a=this.state.buttonName.slice();"square"===a[e]?a[e]="on":a[e]="square",this.setState({buttonName:a})}},{key:"displayIcon",value:function(){var e=this,t=this.state.iconFetch,a=this.state.buttonName.slice();console.log("Icon should be displayed: "+t),t.keyValue.forEach((function(t,n){console.log("Current button class name: "+a[n]+", will be set to: "+t.className+" according to coordinates from database."),a[n]!==t.className?a[n]="on":a[n]="square",e.setState({buttonName:a,displayControll:!1})}))}},{key:"setName",value:function(e){this.setState({name:e.target.value})}},{key:"setSearch",value:function(e){this.setState({search:e.target.value})}},{key:"renderSquare",value:function(e){var t=this;return Object(P.jsx)("button",{className:this.state.buttonName[e],onClick:function(){return t.handleClick(e)}})}},{key:"fetchIcon",value:function(e){var t=this;e.preventDefault(),g.collection("coordinates").doc(this.state.search).get().then((function(e){e.exists?(t.setState({iconFetch:e.data(),displayControll:!0}),console.log("Icon Coordinates: ",t.state.iconFetch),t.clear(),alert("Icon is fetched, click DISPLAY button!")):(alert("No such icon!"),t.setState({displayControll:!1}))})).catch((function(e){console.log("Error getting document:",e)}))}},{key:"fetchIconAll",value:function(e){var t=this;e.preventDefault();var a=[];g.collection("coordinates").get().then((function(e){e.docs.map((function(e){return a.push(e.id)})),t.setState({iconFetchAll:a,selectOptions:"allNamesListOn"})})).catch((function(e){console.log("Error getting document:",e)}))}},{key:"checkIcon",value:function(){var e=this;g.collection("coordinates").doc(this.state.name).get().then((function(t){t.exists?(e.setState({submitControll:!1}),alert("Icon name is existed, choose another name!")):(e.setState({submitControll:!0}),alert("Name is okay"))})).catch((function(e){console.log("Error getting document:",e)}))}},{key:"saveIcon",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=this.state.squares.slice(),n=[],c={},a.forEach((function(e,t){n.push({Position:t,className:e?"on":"square"})})),c.keyValue=n,console.log(JSON.stringify(c)),g.collection("coordinates").doc(this.state.name).set(c).catch((function(e){console.log(e)})),this.setState({submitControll:!1}),t.preventDefault(),alert("Your icon is saved!");case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"clear",value:function(){this.setState({squares:Array(25).fill(null),buttonName:Array(25).fill("square")}),console.log("clear procesing")}},{key:"lightIcon",value:function(){var e,t=this.state.squares.slice(),a=[],n=[],c=[],i=[],r=[];t.forEach((function(e,t){t<=4?a.push(e?"1":"0"):t<=9?n.push(e?"1":"0"):t<=14?c.push(e?"1":"0"):t<=19?i.push(e?"1":"0"):r.push(e?"1":"0")})),e=[a,n,c,i,r],console.log(JSON.stringify(e)),this.state.connectionStatus?this.state.microBit.writeMatrixIcon(e):alert("Your micro:bit device is not paired!")}},{key:"setSelectValue",value:function(e){this.setState({selectValue:e.target.value,search:e.target.value})}},{key:"render",value:function(){var e=this;return Object(P.jsxs)("div",{children:[Object(P.jsx)("h1",{className:"status",children:"micro:bit Icons"}),Object(P.jsxs)("div",{className:"ledBackground",children:[Object(P.jsxs)("div",{className:"ledTitle",children:[Object(P.jsx)("div",{className:"leftCornor"}),Object(P.jsx)("div",{className:"midIcon"})]}),Object(P.jsxs)("div",{className:"ledPane",children:[Object(P.jsx)("div",{className:"leftPane",children:Object(P.jsx)("div",{className:"leftButton"})}),Object(P.jsxs)("div",{className:"midPane",children:[Object(P.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2),this.renderSquare(3),this.renderSquare(4)]}),Object(P.jsxs)("div",{className:"board-row",children:[this.renderSquare(5),this.renderSquare(6),this.renderSquare(7),this.renderSquare(8),this.renderSquare(9)]}),Object(P.jsxs)("div",{className:"board-row",children:[this.renderSquare(10),this.renderSquare(11),this.renderSquare(12),this.renderSquare(13),this.renderSquare(14)]}),Object(P.jsxs)("div",{className:"board-row",children:[this.renderSquare(15),this.renderSquare(16),this.renderSquare(17),this.renderSquare(18),this.renderSquare(19)]}),Object(P.jsxs)("div",{className:"board-row",children:[this.renderSquare(20),this.renderSquare(21),this.renderSquare(22),this.renderSquare(23),this.renderSquare(24)]})]}),Object(P.jsx)("div",{className:"rightPane",children:Object(P.jsx)("div",{className:"rightButton"})})]}),Object(P.jsx)("div",{className:"ledFooter"})]}),Object(P.jsxs)("div",{className:"clearButton",style:{textAlign:"center"},children:[Object(P.jsx)("span",{children:"Reset:"}),Object(P.jsx)(y.a,{color:"secondary","aria-label":"add an alarm",onClick:function(){return e.clear()},children:Object(P.jsx)(C.a,{})}),Object(P.jsx)("span",{children:"Pair:"}),Object(P.jsx)(y.a,{color:"secondary","aria-label":"add an alarm",onClick:function(t){return e.state.microBit.searchDevice()},children:Object(P.jsx)(O.a,{})}),Object(P.jsx)("span",{children:"Sync:"}),Object(P.jsx)(y.a,{color:"secondary","aria-label":"add an alarm",onMouseEnter:function(){return e.validatePair()},onClick:function(){return e.lightIcon()},children:Object(P.jsx)(k.a,{})})]}),Object(P.jsxs)("form",{validate:"true",autoComplete:"off",onSubmit:function(t){return e.saveIcon(t)},children:[Object(P.jsx)("div",{className:"nameField",children:Object(P.jsx)(j.a,{id:"standard-basic",label:"Give it a name",required:!0,onChange:function(t){return e.setName(t)},style:{margin:"0 auto",width:"125px"}})}),Object(P.jsxs)("div",{className:"ledControll",children:[Object(P.jsx)("input",{type:"submit",value:"SAVE",disabled:!this.state.submitControll}),Object(P.jsx)("input",{type:"button",value:"VALIDATE",onClick:function(){return e.checkIcon()},disabled:""===this.state.name})]})]}),Object(P.jsxs)("form",{validate:"true",autoComplete:"off",onSubmit:function(t){return e.fetchIcon(t)},children:[Object(P.jsx)(j.a,{id:"standard-basic-search",label:"Search",required:!0,onChange:function(t){return e.setSearch(t)},style:{margin:"15px auto",display:"inline-flex",width:"145px"},value:this.state.selectValue}),Object(P.jsxs)("div",{className:"searchControll",children:[Object(P.jsx)("input",{type:"submit",value:"FETCH"}),Object(P.jsx)("input",{type:"button",value:"DISPLAY",disabled:!this.state.displayControll,onClick:function(){return e.displayIcon()}})]})]}),Object(P.jsxs)("div",{className:"getAllIcons",children:[Object(P.jsxs)("p",{children:["Click ",Object(P.jsx)(y.a,{color:"secondary","aria-label":"add an alarm",onClick:function(t){return e.fetchIconAll(t)},children:Object(P.jsx)(T.a,{})}),"  to see all icons in database"]}),Object(P.jsxs)(E.a,{className:this.state.selectOptions,style:{width:"87%"},children:[Object(P.jsx)(w.a,{shrink:!0,htmlFor:"select-multiple-native",children:"Icon List"}),Object(P.jsx)(_.a,{multiple:!0,native:!0,onChange:function(t){return e.setSelectValue(t)},inputProps:{id:"select-multiple-native"},children:this.state.iconFetchAll.map((function(e,t){return Object(P.jsx)("option",{value:e,children:e},t)}))})]})]})]})}}]),a}(c.a.Component),F=function(){return Object(P.jsx)(v.a,{className:"IconPage",justify:"center",children:Object(P.jsxs)("div",{className:"game",children:[Object(P.jsx)("div",{className:"game-board",children:Object(P.jsx)(L,{})}),Object(P.jsx)("div",{className:"game-info",children:Object(P.jsx)(A.a,{children:Object(P.jsxs)(B.a,{children:[Object(P.jsx)(q.a,{variant:"h5",component:"h2",gutterBottom:!0,children:"Tutorial of This Web Page"}),Object(P.jsxs)(q.a,{variant:"body2",component:"p",children:["Option 1: Click these squares to draw any icons you like. You can reset virtual pane by clicking ",Object(P.jsx)(C.a,{})," icon"]}),Object(P.jsx)("br",{}),Object(P.jsx)(q.a,{variant:"body2",component:"p",children:"Option 2: If you are satisfied with the icon you drew, you can save your icon to database. Before saving your icon, give a name and click VALIDATE button (name must be unique in database), then you can click SAVE button."}),Object(P.jsx)("br",{}),Object(P.jsx)(q.a,{variant:"body2",component:"p",children:"Option 3: You can search icon in the database by names. Type a name and click SEARCH button. If icon you want to search exists, then click DISPLAY button. Icon will be rendered to virtual pane."}),Object(P.jsx)("br",{}),Object(P.jsxs)(q.a,{variant:"body2",component:"p",children:["Option 4: You can also download icon showed in virtual pane to real micro:bit device. To do so, first need to pair your micro:bit device by clicking ",Object(P.jsx)(O.a,{})," icon. Once device is paired, click ",Object(P.jsx)(k.a,{})," icon to light up icon from virtual pane to your real micro:bit device."]}),Object(P.jsx)("br",{}),Object(P.jsxs)(q.a,{variant:"body2",component:"p",children:[Object(P.jsx)("b",{children:"Important Note:"})," Before pairing the device, download and upload this ",Object(P.jsx)("a",{href:"https://drive.google.com/uc?id=0B2Ud_NaMFsQSdm1BMVMtN3F4a3c&export=download",children:"firmware"})," on your BBC micro:bit board."]})]})})})]})})},V=(a(97),function(){return Object(P.jsx)("div",{className:"App",children:Object(P.jsx)(F,{})})}),M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,147)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};r.a.render(Object(P.jsx)(s.a,{children:Object(P.jsx)(V,{})}),document.getElementById("root")),M()}},[[99,1,2]]]);
//# sourceMappingURL=main.a4904e10.chunk.js.map