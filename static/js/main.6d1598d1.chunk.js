(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{27:function(e,t,n){e.exports=n(43)},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),u=n.n(c),l=n(3),i=n(12),o=n(1),s=n(4),m=n.n(s),p=n(9),d=n(26),f=n(13);n(33),n(35),n(44);f.initializeApp({apiKey:"AIzaSyD_DodcEYMLTQt_W0vHPnn40IP6tMk_Llc",authDomain:"nwitter-e3241.firebaseapp.com",databaseURL:"https://nwitter-e3241.firebaseio.com",projectId:"nwitter-e3241",storageBucket:"nwitter-e3241.appspot.com",messagingSenderId:"372823419028",appId:"1:372823419028:web:af1d09c1d8af1e0ebf6c81"});var b=f,E=f.auth(),h=f.firestore(),w=f.storage(),v=function(e){var t=e.nweetObj,n=e.isOwner,c=Object(a.useState)(!1),u=Object(l.a)(c,2),i=u[0],o=u[1],s=Object(a.useState)(t.text),d=Object(l.a)(s,2),f=d[0],b=d[1],E=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,h.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,w.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){o((function(e){return!e}))};return r.a.createElement("div",null,i?r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),h.doc("nweets/".concat(t.id)).update({text:f}),v()}},r.a.createElement("input",{type:"text",placeholder:"Edit your nweet",value:f,required:!0,onChange:function(e){var t=e.target.value;b(t)}}),r.a.createElement("input",{type:"submit",value:"Edit"})),r.a.createElement("button",{onClick:v},"Cancel")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,t.text),t.attachmentUrl&&r.a.createElement("img",{src:t.attachmentUrl,width:"50px",height:"50px",alt:"nweeted img"}),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:E},"Delete Nweet"),r.a.createElement("button",{onClick:v},"Edit Nweet"))))},g=n(46),O=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(l.a)(n,2),u=c[0],i=c[1],o=Object(a.useState)([]),s=Object(l.a)(o,2),f=s[0],b=s[1],E=Object(a.useState)(""),O=Object(l.a)(E,2),j=O[0],x=O[1];Object(a.useEffect)((function(){h.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(d.a)({id:e.id},e.data())}));b(t)}))}),[]);var k=function(){var e=Object(p.a)(m.a.mark((function e(n){var a,r,c,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a="",""===j){e.next=10;break}return r=w.ref().child("".concat(t.uid,"/").concat(Object(g.a)())),e.next=6,r.putString(j,"data_url");case 6:return c=e.sent,e.next=9,c.ref.getDownloadURL();case 9:a=e.sent;case 10:return l={text:u,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=13,h.collection("nweets").add(l);case 13:i(""),x("");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:k},r.a.createElement("input",{type:"text",placeholder:"What's on your mind?",onChange:function(e){var t=e.target.value;i(t)},value:u}),r.a.createElement("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;x(t)},n.readAsDataURL(t)},id:"upload"}),r.a.createElement("input",{type:"submit",value:"Nweet"}),j&&r.a.createElement("div",null,r.a.createElement("img",{src:j,width:"50px",height:"50px",alt:"thumb"}),r.a.createElement("button",{onClick:function(){x("")}},"Clear"))),r.a.createElement("div",null,f.map((function(e){return r.a.createElement(v,{key:e.id,nweetObj:e,isOwner:e.creatorId===t.uid})}))))},j=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),i=Object(l.a)(u,2),o=i[0],s=i[1],d=Object(a.useState)(!0),f=Object(l.a)(d,2),h=f[0],w=f[1],v=Object(a.useState)(""),g=Object(l.a)(v,2),O=g[0],j=g[1],x=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&s(a)},k=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!h){e.next=7;break}return e.next=5,E.createUserWithEmailAndPassword(n,o);case 5:e.next=9;break;case 7:return e.next=9,E.signInWithEmailAndPassword(n,o);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),j(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new b.auth.GoogleAuthProvider:"github"===n&&(a=new b.auth.GithubAuthProvider),e.next=4,E.signInWithPopup(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:k},r.a.createElement("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:n,onChange:x}),r.a.createElement("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:x}),r.a.createElement("input",{type:"submit",value:h?"Create New Account":"Login"}),r.a.createElement("span",null,O)),r.a.createElement("span",{onClick:function(){w((function(e){return!e}))}},"\ud14c\uc2a4\ud2b8\uc6a9"),r.a.createElement("div",null,r.a.createElement("button",{onClick:y,name:"google"},"Continue with Google"),r.a.createElement("button",{onClick:y,name:"github"},"Continue with Github")))},x=function(e){var t=e.userObj,n=Object(o.f)(),c=function(){var e=Object(p.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("nweets").where("creatorId","==",t.uid).orderBy("createdAt").get();case 2:n=e.sent,console.log(n.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){c()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){E.signOut(),n.push("/")}},"Log Out"))},k=function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/profile"},"Profile"))))},y=function(e){var t=e.isLoggedIn,n=e.userObj;return r.a.createElement(i.a,null,t&&r.a.createElement(k,null),r.a.createElement(o.c,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(O,{userObj:n})),r.a.createElement(o.a,{exact:!0,path:"/profile"},r.a.createElement(x,{userObj:n}))):r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(j,null))))};var S=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(null),i=Object(l.a)(u,2),o=i[0],s=i[1];return Object(a.useEffect)((function(){E.onAuthStateChanged((function(e){s(e||null),c(!0)}))}),[]),r.a.createElement(r.a.Fragment,null,n?r.a.createElement(y,{isLoggedIn:Boolean(o),userObj:o}):"initializing...",r.a.createElement("footer",null,"\xa9 Nwitter ",(new Date).getFullYear()))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.6d1598d1.chunk.js.map