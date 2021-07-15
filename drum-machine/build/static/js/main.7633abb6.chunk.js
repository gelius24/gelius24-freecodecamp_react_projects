(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{10:function(e,r,c){},12:function(e,r,c){"use strict";c.r(r);var t=c(1),a=c.n(t),s=c(4),n=c.n(s),d=(c(9),c(2)),o=(c(10),[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}]),i=[{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}],m=c(0),u=Object(t.createContext)(),l=function(e){var r=Object(t.useState)(""),c=Object(d.a)(r,2),a=c[0],s=c[1];return Object(m.jsx)(u.Provider,{value:[a,s],children:e.children})};var j=function(e){var r=e.note,c=e.on,a=e.id,s=e.volume,n=Object(t.useState)(!1),o=Object(d.a)(n,2),i=o[0],l=o[1],j=Object(t.useContext)(u),p=Object(d.a)(j,2),h=(p[0],p[1]),k=function(){if(c){var e=document.getElementById(r.keyTrigger);l(!0),h(a),setTimeout((function(){return l(!1)}),200),e.currentTime=0,e.volume=s,e.play()}else alert("Allumer la machine !")},b=function(e){e.keyCode===r.keyCode&&k()};return Object(t.useEffect)((function(){return document.addEventListener("keydown",b),function(){document.removeEventListener("keydown",b)}}),[]),Object(m.jsx)("div",{children:Object(m.jsxs)("p",{onClick:k,id:a,className:"".concat(i&&"active"," drum-pad"),children:[r.keyTrigger,Object(m.jsx)("audio",{src:r.url,className:"clip",id:r.keyTrigger})]})})};var p=function(e){var r=e.on,c=e.bankNumber,t=e.volume,a=null;return a=1==c?o:i,Object(m.jsx)("div",{className:"display",children:a.map((function(e){return Object(m.jsx)(j,{note:e,on:r,id:e.id,volume:t},e.keyTrigger)}))})};var h=function(){var e=Object(t.useState)(!0),r=Object(d.a)(e,2),c=r[0],a=r[1],s=Object(t.useState)(!1),n=Object(d.a)(s,2),o=n[0],i=n[1],l=Object(t.useState)(1),j=Object(d.a)(l,2),h=j[0],k=j[1],b=Object(t.useContext)(u),g=Object(d.a)(b,2),y=g[0],O=(g[1],Object(t.useState)(.5)),C=Object(d.a)(O,2),f=C[0],v=C[1];return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)("h1",{children:"Drum-Machine"}),Object(m.jsxs)("div",{id:"drum-machine",children:[Object(m.jsx)("div",{id:"drummachine"}),Object(m.jsx)(p,{bankNumber:h,on:c,volume:f}),Object(m.jsxs)("div",{className:"right-side",children:[Object(m.jsxs)("div",{className:"box",children:[Object(m.jsx)("h2",{children:"Power"}),Object(m.jsx)("div",{className:"btn",onClick:function(){return a(!c)},children:Object(m.jsx)("div",{className:"".concat(c?"on":"off")})})]}),Object(m.jsx)("div",{className:"indicator",children:y}),Object(m.jsxs)("div",{className:"box",children:[Object(m.jsx)("h2",{children:"Volume"}),Object(m.jsx)("input",{type:"range",step:"0.01",value:f,max:"1",min:"0",className:"w-50",onChange:function(e){return v(e.target.value)}})]}),Object(m.jsxs)("div",{className:"box",children:[Object(m.jsx)("h2",{children:"Bank"}),Object(m.jsx)("div",{className:"btn",onClick:function(){return o?(i(!1),k(1)):(i(!0),k(2))},children:Object(m.jsx)("div",{className:"".concat(o?"bank2":"bank1")})}),o?Object(m.jsx)("h3",{children:"2"}):Object(m.jsx)("h3",{children:"1"})]})]})]}),Object(m.jsx)("footer",{children:"Coded By Woody Gelius - 2021"})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(r){var c=r.getCLS,t=r.getFID,a=r.getFCP,s=r.getLCP,n=r.getTTFB;c(e),t(e),a(e),s(e),n(e)}))};n.a.render(Object(m.jsx)(l,{children:Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(h,{})})}),document.getElementById("root")),k()},9:function(e,r,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.7633abb6.chunk.js.map