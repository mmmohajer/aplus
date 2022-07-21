(()=>{"use strict";var e,t={3930:(e,t,a)=>{a.r(t);var r=a(9526),n=a(4470),l=a(8446),c=a(6292),s=a(9902),o=(a(1955),a(6057)),i=(0,o.oM)({name:"isAuthenticated",initialState:!1,reducers:{authenticated:function(e,t){return!0},notAuthenticated:function(e,t){return!1}}}),u=i.actions,m=u.authenticated,d=u.notAuthenticated;const f=i.reducer;var p=function(e){e(m())},h=function(e){e(d())},E=a(240);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var v={addNotification:function(e,t){var a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){(0,E.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t.payload);a.isActive=!0,e.push(a)},removeNotification:function(e,t){return e.filter((function(e){return e.key!==t.payload.key}))},deactivateNotification:function(e,t){return e.forEach((function(e){e.key===t.payload.key&&(e.isActive=!1)})),e},clearNotifications:function(e,t){return[]}},x=(0,o.oM)({name:"notifications",initialState:[],reducers:v}),y=x.actions,b=y.addNotification,w=y.removeNotification,S=y.deactivateNotification;y.clearNotifications;const N=x.reducer;var I=function(e,t){e(S({key:t})),setTimeout((function(){e(w({key:t}))}),500)},Z=function(e,t,a){var r=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16,t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?.><,=-)(*&^%$#@!~",r=a.length,n=0;n<e;n++)t+=a.charAt(Math.floor(Math.random()*r));return t}();e(b({key:r,message:t,type:a})),setTimeout((function(){I(e,r)}),1e4)},_=function(e,t){e&&null!=e&&e.data&&Object.keys(e.data).forEach((function(a){e.data[a]&&(Array.isArray(e.data[a])?e.data[a].forEach((function(e){Z(t,e,"error")})):Z(t,e.data[a],"error"))}))},C=function(e,t){localStorage&&localStorage.setItem(e,JSON.stringify(t))},k=function(e){var t;null!==(t=localStorage)&&void 0!==t&&t.getItem(e)&&localStorage.removeItem(e)},A=function(e){var t;return null!==(t=localStorage)&&void 0!==t&&t.getItem(e)?JSON.parse(localStorage.getItem(e)):""},j=function(e,t,a){C("access_token",e),C("refresh_token",t),p(a),Z(a,"You have successfully logged in.","success")},q=(0,o.oM)({name:"profile",initialState:[],reducers:{getProfile:function(e,t){return t.payload},removeProfile:function(e,t){return{}}}}),O=q.actions,R=O.getProfile;O.removeProfile;const M=q.reducer;var P=a(3755),T=a(8047),F=a.n(T),H=a(2868),z=a.n(H),L="".concat("https://accounts.google.com/o/oauth2/v2/auth","?scope=").concat("https://www.googleapis.com/auth/userinfo.profile"," ").concat("https://www.googleapis.com/auth/userinfo.email"," ").concat("openid","&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=").concat("http://localhost/login","&client_id=").concat("GOOGLE_AUTH_CLIENT_ID"),W=("".concat("https://login.microsoftonline.com/common/oauth2/v2.0/authorize","?client_id=").concat("MICROSOFT_AUTH_CLIENT_ID","&scope=openid email profile&response_type=code&redirect_uri=").concat("https://makeclient.ngrok.io/login"),"".concat("https://www.facebook.com/v14.0/dialog/oauth","?client_id=").concat("FACEBOOK_AUTH_CLIENT_ID","&redirect_uri=").concat("https://makeclient.ngrok.io/login","&auth_type=rerequest&scope=email public_profile"),"#ff7b7b"),D=(0,o.oM)({name:"loading",initialState:!1,reducers:{isLoading:function(e,t){return!0},isLoaded:function(e,t){return!1}}}),V=D.actions,B=V.isLoading,U=V.isLoaded;const J=D.reducer,G=function(e){var t=e.sendReq,a=e.setSendReq,n=e.method,s=e.url,o=e.bodyData,i=e.headers,u=e.useDefaultHeaders,m=void 0===u||u,d=e.showLoading,f=void 0!==d&&d,p=e.showErrorMessage,h=void 0===p||p,E=(0,l.I0)(),g=(0,r.useState)(),v=(0,c.Z)(g,2),x=v[0],y=v[1],b=(0,r.useState)(),w=(0,c.Z)(b,2),S=w[0],N=w[1];return(0,r.useEffect)((function(){var e=function(){var e=(0,P.Z)(F().mark((function e(){var t,r,l;return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Boolean(parseInt("0"))&&(s="".concat("MISSING_ENV_VAR".API_BASE_URL_WITHOUT_DOCKER).concat(s)),t=A("access_token"),m&&t&&(i?i.Authorization="".concat("JWT"," ").concat(t):i={Authorization:"".concat("JWT"," ").concat(t)}),e.prev=3,f&&E(B()),"get"!==n.toLowerCase()){e.next=11;break}return e.next=8,z().get(s,i&&{headers:i});case 8:l=e.sent,e.next=33;break;case 11:if("post"!==n.toLowerCase()){e.next=17;break}return e.next=14,z().post(s,o&&o,i&&{headers:i});case 14:l=e.sent,e.next=33;break;case 17:if("put"!==n.toLowerCase()){e.next=23;break}return e.next=20,z().put(s,o&&o,i&&{headers:i});case 20:l=e.sent,e.next=33;break;case 23:if("patch"!==n.toLowerCase()){e.next=29;break}return e.next=26,z().patch(s,o&&o,i&&{headers:i});case 26:l=e.sent,e.next=33;break;case 29:if("delete"!==n.toLowerCase()){e.next=33;break}return e.next=32,z().delete(s,o&&o,i&&{headers:i});case 32:l=e.sent;case 33:null!==(r=l)&&void 0!==r&&r.data&&y(l.data),E(U()),e.next=42;break;case 37:e.prev=37,e.t0=e.catch(3),N(e.t0.response),E(U()),h&&_(e.t0.response,E);case 42:a(!1);case 43:case"end":return e.stop()}}),e,null,[[3,37]])})));return function(){return e.apply(this,arguments)}}();t&&e()}),[t]),{data:x,error:S}};var K=a(1081),Y=a(4403),X=a.n(Y),Q=a(7272);const $=function(){return r.createElement(r.Fragment,null,r.createElement(Q.ZC,{className:X()("A6dLR2mhU7CMyhT4hy4j")},r.createElement(Q.ZC,{className:X()("fHYllNaHpwJAsWuB6OcB")}),r.createElement(Q.xv,{className:"englishFont"},r.createElement("i",null,"✶"))))},ee=function(e){var t=e.children;return r.createElement(r.Fragment,null,t)};var te=a(7692),ae=a(1421),re=a(2652),ne=a.n(re),le=a(4606),ce=a(3640),se=function(e){return r.createElement("svg",e,r.createElement("path",{d:"M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"}))};se.defaultProps={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-columns-gap"};var oe=function(e){return r.createElement("svg",e,r.createElement("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}))};oe.defaultProps={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-instagram"};var ie=function(e){return r.createElement("svg",e,r.createElement("path",{d:"M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"}),r.createElement("path",{d:"M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}))};ie.defaultProps={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-geo-alt"};var ue=function(e){return r.createElement("svg",e,r.createElement("path",{d:"M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"}),r.createElement("path",{d:"M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}))};ue.defaultProps={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-phone"};var me=function(e){return r.createElement("svg",e,r.createElement("path",{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"}))};function de(e){var t=e.type,a=e.color,n=e.width,l=e.scale,c={flag:r.createElement(le.G,{icon:ce.RrC,style:{color:a,width:n}})};return c.dashboard=r.createElement(se,{fill:a,stroke:a,style:{transform:"scale(".concat(l,")")}}),c.instagram=r.createElement(oe,{fill:a,stroke:a,style:{transform:"scale(".concat(l,")")}}),c.location=r.createElement(ie,{fill:a,stroke:a,style:{transform:"scale(".concat(l,")")}}),c.phone=r.createElement(ue,{fill:a,stroke:a,style:{transform:"scale(".concat(l,")")}}),c.mail=r.createElement(me,{fill:a,stroke:a,style:{transform:"scale(".concat(l,")")}}),r.createElement(r.Fragment,null,c[t])}me.defaultProps={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-envelope"},de.propTypes={type:ne().oneOf(["flag","dashboard","instagram","phone","location","mail"]),color:ne().string,width:ne().string},de.defaultProps={type:"dashboard",color:"black",width:"16px"};const fe=de,pe=function(e){var t=e.type,a=e.text,n=e.className;return r.createElement("div",{className:X()("flex flex--jc--start flex--ai--center",n)},r.createElement("div",{className:"flex flex--jc--center flex--ai--center"},r.createElement(fe,{type:t,color:W,scale:1.3})),r.createElement("div",{className:"box-px-50 ml2 flex flex--jc--center flex--ai--center text-ltr"},a))},he=function(e){var t=e.type,a=e.text,n=e.className;return r.createElement("div",{className:X()("flex flex--jc--start flex--ai--center",n)},r.createElement("div",{className:"flex flex--jc--center flex--ai--center"},r.createElement(fe,{type:t,color:"red"})),r.createElement("div",{className:"box-px-50 ml2 flex flex--jc--center flex--ai--center englishFont text-ltr"},a))};var Ee=["type","text"];const ge=function(e){var t=e.type,a=e.text,n=(0,ae.Z)(e,Ee),c=(0,l.v9)((function(e){return e.language}));return r.createElement(r.Fragment,null,"en"===c&&r.createElement(pe,(0,te.Z)({type:t,text:a},n)),"fa"===c&&r.createElement(he,(0,te.Z)({type:t,text:a},n)))},ve=a.p+"de0c316b33b1b6cc19ca7aebac0e06e3.jpg",xe=function(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"row"},r.createElement("div",{className:"row--12 row--sm--12 row--md--6 row--lg--6 p2 flex--jc--around"},r.createElement("div",{className:"flex flex--jc--center flex--ai--center introduction_left"},r.createElement("h2",{className:"text-center mt2"},"Behzad A. Rezai"),r.createElement("div",null,r.createElement(Q.Ee,{src:ve,className:"profilePhoto"})))),r.createElement("div",{className:"flex--jc--around row--12 row--sm--12 row--md--6 row--lg--6 pl2 pr2 flex flex--jc--center flex--dir--col introduction_right"},r.createElement("h1",{className:"f-b secondFont h1 text-center mb3"},"A Plus Canada Immigration Law Office"),r.createElement("div",null,r.createElement("p",{className:"mt2 mb1 f-b"},"Memberships"),r.createElement("ul",{className:"mb2"},r.createElement("li",{className:"pos-rel pl2 mb1 introduction_right_item"},"Law Society of Ontario (LSO)"),r.createElement("li",{className:"pos-rel pl2 mb1 introduction_right_item"},"Immigration Council (ICCRC)"),r.createElement("li",{className:"pos-rel pl2 mb1 introduction_right_item"},"Federal Translation Bureau of Canada (Certified Translation)"))),r.createElement("div",{className:"text-center flex flex--dir--col flex--jc--center flex--ai--start my3"},r.createElement(ge,{type:"mail",text:"barezai@yahoo.com"}),r.createElement(ge,{type:"instagram",text:"barezai@yahoo.com"}),r.createElement(ge,{type:"location",text:"211-190 Somerset Street West, Ottawa, ON, Canada, K2P 0J4"}),r.createElement(ge,{type:"phone",text:"+1(613)291-6167"})))))},ye=function(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"row introduction_farsi"},r.createElement("div",{className:"row--12 row--sm--12 row--md--6 row--lg--6 p2"},r.createElement("div",{className:"flex flex--jc--center flex--ai--center introduction_left"},r.createElement("h2",{className:"text-center mt2"},"بهزاد افخم رضایی"),r.createElement("div",null,r.createElement(Q.Ee,{src:ve,className:"profilePhoto"})))),r.createElement("div",{className:"row--12 row--sm--12 row--md--6 row--lg--6 pl2 pr2 flex flex--dir--col f-right flex--jc--around text-rtl introduction_right"},r.createElement("h1",{className:"f-b h1 ml-auto mr3 mb3 flex flex--ai--center"},r.createElement("div",{className:"mr1"},"APlus"),r.createElement("div",null,"دفتر حقوق مهاجرتی")),r.createElement("div",{className:"text-rtl ml-auto mr3"},r.createElement("p",{className:"mt2 mb1 f-b"},"عضویت رسمی در"),r.createElement("ul",{className:"mb2 mr3"},r.createElement("li",{className:"pos-rel pl2 mb1 introduction_right_item_farsi"},r.createElement("div",{className:"flex flex--jc--end flex--ai--center"},r.createElement("div",null,"(LSO)"),r.createElement("div",null,"انجمن حقوقدانان آنتاریو - کانادا"))),r.createElement("li",{className:"pos-rel pl2 mb1 introduction_right_item_farsi"},r.createElement("div",{className:"flex flex--jc--end flex--ai--center"},r.createElement("div",null,"(ICCRC)"),r.createElement("div",null,"انجمن مشاورین مهاجرتی دولت فدرال - کانادا"))),r.createElement("li",{className:"pos-rel pl2 mb1 introduction_right_item_farsi"},r.createElement("div",{className:"flex flex--jc--end flex--ai--center"},r.createElement("div",null,"(Certified Translation)"),r.createElement("div",null,"ترجمه رسمی توسط دولت فدرال کانادا"))))),r.createElement("div",{className:"text-center flex flex--dir--col flex--jc--center flex--ai--start my3"},r.createElement(ge,{type:"mail",text:"barezai@yahoo.com"}),r.createElement(ge,{type:"instagram",text:"barezai@yahoo.com"}),r.createElement(ge,{type:"location",text:"211-190 Somerset Street West, Ottawa, ON, Canada, K2P 0J4"}),r.createElement(ge,{type:"phone",text:"+1(613)291-6167"})))))},be=function(){var e=(0,l.v9)((function(e){return e.language}));return r.createElement(r.Fragment,null,"en"===e&&r.createElement(xe,null),"fa"===e&&r.createElement(ye,null))};var we=[{Subject:"Family Sponsorship",Index:"1"},{Subject:"VISA (Tourist/Work/Super Visa)",Index:"2"},{Subject:"Startup - Visa",Index:"3"},{Subject:"Investments",Index:"4"},{Subject:"Caregiver",Index:"5"},{Subject:"Self Employed",Index:"6"},{Subject:"Skilled Worker",Index:"7"},{Subject:"Student Visa",Index:"8"},{Subject:"Notary Public",Index:"9"}];const Se=function(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"row--12 row--sm--9 row--md--6 row--lg--6 ml-auto mr-auto br-px-rad-10 flex flex--jc--center flex--ai--center flex--dir--col p2 listItem_container"},r.createElement("h2",{className:"mb2"},"By appointments only"),r.createElement("ul",null,we.map((function(e){return r.createElement("li",{key:e.Index,className:"flex flex--jc--start flex--ai--center mb2 bgRed p2 mouse-hand listItem_item"},r.createElement("span",{className:"flex flex--jc--center flex--ai--center br-per-rad-50 w-px-40 box-px-40 mr2 listItem_item_index"},e.Index),e.Subject)}))),r.createElement("p",null,"For more information, please contact us!")))};var Ne=[{Subject:"ساپورت اعضای خانواده (اقامت دائم)",Index:"1"},{Subject:"ویزاهای توریستی، والدین و تحصیلی",Index:"2"},{Subject:"سرمایه گذاری فدرال و ایالتی (اقامت دائم)",Index:"3"},{Subject:"خود اشتغالی (اقامت دائم)",Index:"4"},{Subject:"مهارت کاری (اقامت دائم)",Index:"5"},{Subject:"پناهندگی",Index:"6"},{Subject:"ترجمه رسمی کامل مدارک (حقوقی)",Index:"7"},{Subject:"دعوتنامه و تنظیم دعوتنامه",Index:"8"},{Subject:"مهر حقوقی",Index:"9"}];const Ie=function(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"row--12 row--sm--9 row--md--6 row--lg--6 ml-auto mr-auto br-px-rad-10 flex flex--jc--center flex--ai--center flex--dir--col p2 listItem_container"},r.createElement("h2",{className:"mb2"},"قبول مکالمه با تعیین وقت قبلی"),r.createElement("ul",null,Ne.map((function(e){return r.createElement("li",{key:e.Index,className:"flex flex--jc--end flex--ai--center mb2 bgRed p2 text-rtl mouse-hand listItem_item"},e.Subject,r.createElement("span",{className:"flex flex--jc--center flex--ai--center br-per-rad-50 w-px-40 box-px-40 ml2 listItem_item_index"},r.createElement("span",{className:"mt1"},e.Index)))}))),r.createElement("p",{className:"text-rtl"},"برای اطلاعات بیشتر، لطفا با ما تماس حاصل فرمایید")))},Ze=function(){var e=(0,l.v9)((function(e){return e.language}));return r.createElement(r.Fragment,null,"en"===e&&r.createElement(Se,null),"fa"===e&&r.createElement(Ie,null))};var _e=["children","className"];const Ce=function(e){var t=e.children,a=e.className,n=(0,ae.Z)(e,_e);return r.createElement(r.Fragment,null,r.createElement(Q.zx,(0,te.Z)({className:X()("w-per-100 bgFaded br-rad-px-5 textWhite","XCzO5jEWbqjbhZKpZHAO",a)},n),t))};var ke=[{type:"required",message:"Name is required"},{type:"minRequired",message:"Name must be at least 3 characters",minRequired:3},{type:"maxRequired",message:"Name must be at less than 60 characters",maxRequired:60}],Ae=[{type:"required",message:"Email is required"},{type:"email",message:"Must be a valid email address"}],je=[{type:"required",message:"Phone number is required"}];const qe=function(){var e=(0,l.v9)((function(e){return e.language})),t=(0,r.useState)(""),a=(0,c.Z)(t,2),n=a[0],s=a[1],o=(0,r.useState)(""),i=(0,c.Z)(o,2),u=i[0],m=i[1],d=(0,r.useState)(!1),f=(0,c.Z)(d,2),p=f[0],h=f[1],E=(0,r.useState)(""),g=(0,c.Z)(E,2),v=g[0],x=g[1],y=(0,r.useState)(""),b=(0,c.Z)(y,2),w=b[0],S=b[1],N=(0,r.useState)(!1),I=(0,c.Z)(N,2),Z=I[0],_=I[1],C=(0,r.useState)(""),k=(0,c.Z)(C,2),A=k[0],j=k[1],q=(0,r.useState)(""),O=(0,c.Z)(q,2),R=O[0],M=O[1],P=(0,r.useState)(!1),T=(0,c.Z)(P,2),F=T[0],H=T[1],z=(0,r.useState)(""),L=(0,c.Z)(z,2),W=L[0],D=L[1],V=[{input_name:"name",validators:ke,errorMessageHandler:m,errorActivateHandler:h},{input_name:"email",validators:Ae,errorMessageHandler:S,errorActivateHandler:_},{input_name:"phone",validators:je,errorMessageHandler:M,errorActivateHandler:H}];return r.createElement(r.Fragment,null,r.createElement(Q.ZC,{type:"flex",direction:"vertical",hAlign:"start",className:"px5 my3"},r.createElement(Q.ZC,{className:X()("text-center h1 mb3")},"en"===e?"Get an Appointment":"تعیین وقت ملاقات"),r.createElement(Q.ZC,null,r.createElement(Q.l0,{onSubmit:function(){return console.log("hello")},toBeValidatedFields:V},r.createElement(Q.ZC,{type:"flex",direction:"vertical"},r.createElement(Q.__,{className:X()("label pl1 required","fa"===e&&"text-rlt flex flex--jc--end pr1 required-before")},"en"===e?"Name":"نام"),r.createElement(Q.II,{className:X()("fa"===e&&"text-rtl"),name:"name",type:"text",value:n,onChange:function(e){s(e.target.value),h(!1),m("")},errorMessage:u,errorIsActive:p})),r.createElement(Q.ZC,{type:"flex",direction:"vertical"},r.createElement(Q.__,{className:X()("label pl1 required","fa"===e&&"text-rlt flex flex--jc--end pr1 required-before")},"en"===e?"Email":"ایمیل"),r.createElement(Q.II,{className:X()("fa"===e&&"text-rtl"),name:"email",type:"text",value:v,onChange:function(e){x(e.target.value),_(!1),S("")},errorMessage:w,errorIsActive:Z})),r.createElement(Q.ZC,{type:"flex",direction:"vertical"},r.createElement(Q.__,{className:X()("label pl1 required","fa"===e&&"text-rlt flex flex--jc--end pr1 required-before")},"en"===e?"Whatsapp Number":"شماره تماس واتساپ"),r.createElement(Q.II,{className:X()("fa"===e&&"text-rtl"),name:"phone",type:"text",value:A,onChange:function(e){H(!1),M(""),j(e.target.value)},errorMessage:R,errorIsActive:F})),r.createElement(Q.ZC,{type:"flex",direction:"vertical"},r.createElement(Q.__,{className:X()("label pl1","fa"===e&&"text-rlt flex flex--jc--end pr1")},"en"===e?"Your Message":"پیام"),r.createElement("textarea",{className:X()("textarea","fa"===e&&"text-rtl"),value:W,onChange:function(e){return D(e.target.value)}})),r.createElement(Q.ZC,{type:"flex",hAlign:"center"},r.createElement(Ce,{className:"max-w-px-200 mt2",type:"submit"},"en"===e?"Submit":"ارسال"))))))},Oe=function(){return r.createElement(ee,null,r.createElement(be,null),r.createElement($,null),r.createElement(Ze,null),r.createElement(Q.ZC,{className:"w-per-100 bgInverse py3"},r.createElement(Q.ZC,{className:"show-block-in-md-lg w-per-50 ml-auto mr-auto"},r.createElement(qe,null)),r.createElement(Q.ZC,{className:"show-block-in-sm-xsm ml-auto mr-auto"},r.createElement(qe,null))))};var Re=[{type:"required",message:"First name is required"},{type:"minRequired",message:"First name must be at least 3 characters",minRequired:3},{type:"maxRequired",message:"First name must be at less than 5 characters",maxRequired:100}],Me=[{type:"required",message:"Last name is required"},{type:"minRequired",message:"Last name must be at least 3 characters",minRequired:3},{type:"maxRequired",message:"Last must be at less than 5 characters",maxRequired:100}],Pe=[{type:"required",message:"Email is required"},{type:"email",message:"Must be a valid email address"}],Te=[{type:"required",message:"Password required"},{type:"minRequired",message:"Password must be at least 3 characters",minRequired:3}];const Fe=function(){var e=(0,l.I0)(),t=(0,r.useState)(""),a=(0,c.Z)(t,2),n=a[0],s=a[1],o=(0,r.useState)(""),i=(0,c.Z)(o,2),u=i[0],m=i[1],d=(0,r.useState)(""),f=(0,c.Z)(d,2),p=f[0],h=f[1],E=(0,r.useState)(""),g=(0,c.Z)(E,2),v=g[0],x=g[1],y=(0,r.useState)(!1),b=(0,c.Z)(y,2),w=b[0],S=b[1],N=(0,r.useState)(""),I=(0,c.Z)(N,2),_=I[0],C=I[1],k=(0,r.useState)(!1),A=(0,c.Z)(k,2),j=A[0],q=A[1],O=(0,r.useState)(""),R=(0,c.Z)(O,2),M=R[0],P=R[1],T=(0,r.useState)(!1),F=(0,c.Z)(T,2),H=F[0],z=F[1],L=(0,r.useState)(""),W=(0,c.Z)(L,2),D=W[0],V=W[1],B=(0,r.useState)(!1),U=(0,c.Z)(B,2),J=U[0],K=U[1],Y=(0,r.useState)(""),X=(0,c.Z)(Y,2),$=X[0],ee=X[1],te=(0,r.useState)(!1),ae=(0,c.Z)(te,2),re=ae[0],ne=ae[1],le=[{input_name:"first_name",validators:Re,errorMessageHandler:C,errorActivateHandler:q},{input_name:"last_name",validators:Me,errorMessageHandler:P,errorActivateHandler:z},{input_name:"email",validators:Pe,errorMessageHandler:V,errorActivateHandler:K},{input_name:"password",validators:Te,errorMessageHandler:ee,errorActivateHandler:ne}],ce=(0,r.useState)(!1),se=(0,c.Z)(ce,2),oe=se[0],ie=se[1],ue=G({sendReq:oe,setSendReq:ie,method:"POST",url:"/api/auth/users/",bodyData:{first_name:n,last_name:u,email:p,password:v}}),me=ue.data;ue.error,(0,r.useEffect)((function(){me&&(S(!0),Z(e,"Please check your inbox to validate your email address.","success"))}),[me]);var de=(0,r.useState)(!1),fe=(0,c.Z)(de,2),pe=fe[0],he=fe[1],Ee=G({sendReq:pe,setSendReq:he,method:"POST",url:"/api/resend-activation-email/",bodyData:{email:p}}),ge=Ee.data;return Ee.error,(0,r.useEffect)((function(){ge&&Z(e,"Please check your inbox to validate your email address.","success")}),[ge]),r.createElement(r.Fragment,null,r.createElement(Q.l0,{className:"textWhite py1",toBeValidatedFields:le,onSubmit:function(){return ie(!0)}},r.createElement(Q.__,{className:"textBlack",htmlFor:"sample"},"First Name"),r.createElement(Q.II,{type:"text",name:"first_name",placeholder:"Type your first name",value:n,onChange:function(e){s(e.target.value),q(!1),C("")},errorMessage:_,errorIsActive:j}),r.createElement(Q.II,{type:"text",name:"last_name",placeholder:"Type your last name",value:u,onChange:function(e){m(e.target.value),z(!1),P("")},errorMessage:M,errorIsActive:H}),r.createElement(Q.II,{type:"text",name:"email",placeholder:"Type your email",value:p,onChange:function(e){h(e.target.value),K(!1),V("")},errorMessage:D,errorIsActive:J}),r.createElement(Q.II,{type:"password",name:"password",placeholder:"Type your password",value:v,onChange:function(e){x(e.target.value),ne(!1),ee("")},errorMessage:$,errorIsActive:re}),r.createElement(Q.II,{type:"submit",value:"Submit"})),w&&r.createElement(Q.ZC,null,r.createElement(Q.zx,{onClick:function(){return he(!0)}},"Resend Email")))},He=function(){return r.createElement(ee,null,r.createElement(Fe,null))};var ze=[{type:"required",message:"Email is required"},{type:"email",message:"Must be a valid email address"}],Le=[{type:"required",message:"Password required"}];const We=function(){var e=(0,l.I0)(),t=(0,r.useState)(""),a=(0,c.Z)(t,2),n=a[0],s=a[1],o=(0,r.useState)(""),i=(0,c.Z)(o,2),u=i[0],m=i[1],d=(0,r.useState)(""),f=(0,c.Z)(d,2),p=f[0],h=f[1],E=(0,r.useState)(!1),g=(0,c.Z)(E,2),v=g[0],x=g[1],y=(0,r.useState)(""),b=(0,c.Z)(y,2),w=b[0],S=b[1],N=(0,r.useState)(!1),I=(0,c.Z)(N,2),Z=I[0],_=I[1],C=[{input_name:"email",validators:ze,errorMessageHandler:h,errorActivateHandler:x},{input_name:"password",validators:Le,errorMessageHandler:S,errorActivateHandler:_}],k=(0,r.useState)(!1),A=(0,c.Z)(k,2),q=A[0],O=A[1],R=G({sendReq:q,setSendReq:O,method:"POST",url:"/api/auth/jwt/create/",bodyData:{email:n,password:u}}),M=R.data;return R.error,(0,r.useEffect)((function(){M&&j(M.access,M.refresh,e)}),[M]),r.createElement(r.Fragment,null,r.createElement(Q.l0,{className:"textWhite py1",toBeValidatedFields:C,onSubmit:function(){return O(!0)}},r.createElement(Q.II,{type:"text",name:"email",placeholder:"Type your email",value:n,onChange:function(e){s(e.target.value),x(!1),h("")},errorMessage:p,errorIsActive:v}),r.createElement(Q.II,{type:"password",name:"password",placeholder:"Type your password",value:u,onChange:function(e){m(e.target.value),_(!1),S("")},errorMessage:w,errorIsActive:Z}),r.createElement(Q.II,{type:"submit",value:"Submit"})))},De=function(e){var t=e.socialAuthTokenApiRoute,a=e.socialAuthHandleTokenApiRoute,n=e.socialAuthUrl,o=e.children,i=(0,l.I0)(),u=(0,s.lr)(),m=(0,c.Z)(u,1)[0],d=(0,r.useState)(""),f=(0,c.Z)(d,2),p=f[0],h=f[1],E=(0,r.useState)(!1),g=(0,c.Z)(E,2),v=g[0],x=g[1],y=(0,r.useState)(!1),b=(0,c.Z)(y,2),w=b[0],S=b[1],N=(0,r.useState)(""),I=(0,c.Z)(N,2),Z=I[0],_=I[1],C=(0,r.useState)(""),k=(0,c.Z)(C,2),A=k[0],q=k[1];(0,r.useEffect)((function(){null!=m&&m.get("code")&&h(m.get("code"))}),[m]);var O=G({sendReq:v,setSendReq:x,method:"POST",url:t,bodyData:{code:p},showLoading:!0}),R=O.data;O.error,(0,r.useEffect)((function(){p&&x(!0)}),[p]),(0,r.useEffect)((function(){R&&(_(R["Authorization Data"].access_token),"id_token"in R["Authorization Data"]?q(R["Authorization Data"].id_token):q("No token id"))}),[R]);var M=G({sendReq:w,setSendReq:S,method:"POST",url:a,bodyData:{access_token:Z,id_token:A},showLoading:!0}),P=M.data;return M.error,(0,r.useEffect)((function(){null!=Z&&Z.length&&null!=A&&A.length&&S(!0)}),[Z,A]),(0,r.useEffect)((function(){P&&j(P.access,P.refresh,i)}),[P]),r.createElement(r.Fragment,null,r.createElement(Q.ZC,null,r.createElement("a",{href:"".concat(n)},o)))},Ve=function(){return r.createElement(r.Fragment,null,r.createElement(Q.ZC,null,r.createElement(De,{socialAuthTokenApiRoute:"/api/auth/google-auth/",socialAuthHandleTokenApiRoute:"/api/auth/google-auth-handle-token/",socialAuthUrl:L},"Continue With Google")))},Be=function(){return r.createElement(ee,null,r.createElement(We,null),r.createElement(Ve,null))};var Ue=a(1778);const Je=function(){var e=(0,l.I0)(),t=(0,s.lr)(),a=(0,c.Z)(t,1)[0],n=(0,r.useState)(""),o=(0,c.Z)(n,2),i=o[0],u=o[1],m=(0,r.useState)(""),d=(0,c.Z)(m,2),f=d[0],p=d[1],h=(0,r.useState)(!1),E=(0,c.Z)(h,2),g=E[0],v=E[1],x=G({sendReq:g,setSendReq:v,method:"POST",url:"/api/activate-user/",bodyData:{userId:f,token:i}}),y=x.data;return x.error,(0,r.useEffect)((function(){if(null!=a&&a.get("token")){var e=a.get("token");u(e)}}),[a]),(0,r.useEffect)((function(){if(i){var t,a,r;try{r=(0,Ue.Z)(i)}catch(e){r=!1}null!==(t=r)&&void 0!==t&&t.exp&&Date.now()<=1e3*r.exp&&null!==(a=r)&&void 0!==a&&a.user_id?p(r.user_id):Z(e,"Sorry, we are unable to activate your registration. That might be because your token has been expired.","error")}}),[i]),(0,r.useEffect)((function(){i&&f&&v(!0)}),[i,f]),(0,r.useEffect)((function(){y&&y.is_activated&&Z(e,"Congrats! you have successfully activated your registration with us! you can now login with your new credentials.","success")}),[y]),r.createElement(r.Fragment,null,r.createElement(Q.ZC,null,"ActivateUser"))},Ge=function(){return r.createElement(ee,null,r.createElement(Je,null))};var Ke=[{type:"required",message:"Email is required"},{type:"email",message:"Must be a valid email address"}],Ye=[{type:"required",message:"Password required"},{type:"minRequired",message:"Password must be at least 3 characters",minRequired:3}];const Xe=function(){var e=(0,l.I0)(),t=(0,s.lr)(),a=(0,c.Z)(t,1)[0],n=(0,r.useState)(""),o=(0,c.Z)(n,2),i=o[0],u=o[1],m=(0,r.useState)(""),d=(0,c.Z)(m,2),f=d[0],p=d[1],h=(0,r.useState)(""),E=(0,c.Z)(h,2),g=E[0],v=E[1],x=(0,r.useState)(""),y=(0,c.Z)(x,2),b=y[0],w=y[1],S=(0,r.useState)(""),N=(0,c.Z)(S,2),I=N[0],_=N[1],C=(0,r.useState)(!1),k=(0,c.Z)(C,2),A=k[0],j=k[1],q=(0,r.useState)(""),O=(0,c.Z)(q,2),R=O[0],M=O[1],P=(0,r.useState)(!1),T=(0,c.Z)(P,2),F=T[0],H=T[1],z=[{input_name:"email",validators:Ke,errorMessageHandler:_,errorActivateHandler:j}],L=[{input_name:"password",validators:Ye,errorMessageHandler:M,errorActivateHandler:H}],W=(0,r.useState)(!1),D=(0,c.Z)(W,2),V=D[0],B=D[1],U=G({sendReq:V,setSendReq:B,method:"POST",url:"/api/send-reset-password-email/",bodyData:{email:i}}),J=U.data;U.error,(0,r.useEffect)((function(){J&&Z(e,"Please check your inbox to validate your email address.","success")}),[J]),(0,r.useEffect)((function(){if(null!=a&&a.get("token")){var e=a.get("token");v(e)}}),[a]),(0,r.useEffect)((function(){if(g){var t,a,r;try{r=(0,Ue.Z)(g)}catch(e){r=!1}null!==(t=r)&&void 0!==t&&t.exp&&Date.now()<=1e3*r.exp&&null!==(a=r)&&void 0!==a&&a.user_id?w(r.user_id):Z(e,"Sorry, we are unable to reset your password. That might be because your token has been expired.","error")}}),[g]);var K=(0,r.useState)(!1),Y=(0,c.Z)(K,2),X=Y[0],$=Y[1],ee=G({sendReq:X,setSendReq:$,method:"POST",url:"/api/reset-password/",bodyData:{userId:b,token:g,password:f}}),te=ee.data;return ee.error,(0,r.useEffect)((function(){te&&Z(e,"Congrats! you have successfully reset your password!","success")}),[te]),r.createElement(r.Fragment,null,g?r.createElement(Q.l0,{className:"textWhite py1",toBeValidatedFields:L,onSubmit:function(){return $(!0)}},r.createElement(Q.II,{type:"password",name:"password",placeholder:"Type your password",value:f,onChange:function(e){p(e.target.value),H(!1),M("")},errorMessage:R,errorIsActive:F}),r.createElement(Q.II,{type:"submit",value:"Submit"})):r.createElement(Q.l0,{className:"textWhite py1",toBeValidatedFields:z,onSubmit:function(){return B(!0)}},r.createElement(Q.II,{type:"text",name:"email",placeholder:"Type your email",value:i,onChange:function(e){u(e.target.value),j(!1),_("")},errorMessage:I,errorIsActive:A}),r.createElement(Q.II,{type:"submit",value:"Submit"})))},Qe=function(){return r.createElement(ee,null,r.createElement(Xe,null))},$e=function(){return r.createElement(ee,null,r.createElement(Q.ZC,null,"Unknown404"))},et=function(){return r.createElement(K.Z5,null,r.createElement(K.AW,{exact:!0,path:"/",element:r.createElement(Oe,null)}),r.createElement(K.AW,{path:"/register",element:r.createElement(He,null)}),r.createElement(K.AW,{path:"/login",element:r.createElement(Be,null)}),r.createElement(K.AW,{path:"/activate-user",element:r.createElement(Ge,null)}),r.createElement(K.AW,{path:"/reset-password",element:r.createElement(Qe,null)}),r.createElement(K.AW,{exact:!0,path:"*",element:r.createElement($e,null)}))},tt=function(){return r.createElement(Q.ZC,{className:"flex flex--jc--center flex--ai--center w-per-100 text-center height-vh-full pos-fix z-10 bgSilver"},r.createElement(Q.ZC,{className:"flex flex--jc--center flex--ai--center w-px-200 height-px-200 br-rad-per-50 bgBlue textRed"},"Loading"))},at=function(){var e=(0,l.I0)(),t=(0,l.v9)((function(e){return e.notifications}));return r.createElement(r.Fragment,null,r.createElement(Q.bZ,null,t.map((function(t){return r.createElement(Q.Cv,{key:t.key,isActive:t.isActive,className:X()("m1 p1","success"===(null==t?void 0:t.type)&&"bgSuccess","error"===(null==t?void 0:t.type)&&"bgWarning","danger"===(null==t?void 0:t.type)&&"bgDanger")},r.createElement(Q.ZC,{className:"w-per-100",type:"flex",direction:"horizontal",distributedBetween:!0},r.createElement(Q.nv,null,t.message),r.createElement(Q.ZC,{className:"textRed bgWhite mouse-hand",onClick:function(){return I(e,t.key)}},"X")))}))))};var rt=(0,o.oM)({name:"language",initialState:"en",reducers:{LangToFarsi:function(e,t){return"fa"},langToEnglish:function(e,t){return"en"}}}),nt=rt.actions,lt=nt.LangToFarsi,ct=nt.langToEnglish;const st=rt.reducer,ot=a.p+"fbfa3fb9859baf64ec7f37906a808957.png",it=function(){var e=(0,l.I0)();return r.createElement(Q.ZC,{type:"flex",distributedBetween:!0,vAlign:"center",className:"w-per-100 p2 header"},r.createElement(Q.ZC,null,r.createElement(Q.Ee,{src:ot,width:"200",height:"80",alt:"APlus Logo"})),r.createElement(Q.ZC,{type:"flex"},r.createElement(Q.ZC,{className:"pr1 mr1 mouse-hand br-right-solid-1",onClick:function(){return e(ct())}},r.createElement(Q.xv,null,"EN")),r.createElement(Q.ZC,{className:"mouse-hand",onClick:function(){return e(lt())}},r.createElement(Q.xv,null,"FA"))))};var ut=[{type:"mail",text:"barezai@yahoo.com"},{type:"instagram",text:"barezai@yahoo.com"},{type:"phone",text:"+1(613)291-6167"},{type:"location",text:"211-190 Somerset Street West, Ottawa, ON, Canada, K2P 0J4"}],mt=[{fa:"خانه",en:"Home",showInFooter:!0,showInHeader:!1},{fa:"درباره ما",en:"About",showInFooter:!0,showInHeader:!0},{fa:"خدمات",en:"Services",showInFooter:!0,showInHeader:!0},{fa:"تماس با ما",en:"Contact",showInFooter:!0,showInHeader:!0}];const dt=function(){var e=(0,l.v9)((function(e){return e.language}));return r.createElement(r.Fragment,null,r.createElement(Q.X2,{className:X()("flex flex--jc--center")},r.createElement(Q.sg,{className:X()("text-center flex flex--dir--col flex--jc--center flex--ai--start my3"),xs:12,sm:12,md:6,lg:6},r.createElement(Q.ZC,{className:"w-per-50 ml-auto mr-auto"},r.createElement(Q.ZC,{className:X()("h1 mb3 flex flex--jc--start")},"en"===e?"Contact":"اطلاعات تماس"),ut.map((function(e,t){return r.createElement(ge,{className:"mb1",key:t,type:e.type,text:e.text})})))),r.createElement(Q.sg,{xs:12,sm:12,md:6,lg:6,className:X()("flex flex--dir--col flex--jc--start flex--ai--start my3")},r.createElement(Q.ZC,{className:"w-per-50 ml-auto mr-auto"},r.createElement(Q.ZC,{className:"h1 mb3 flex flex--jc--start"},"en"===e?"Menu":"منو"),r.createElement(Q.ZC,{type:"flex",direction:"vertical",hAlign:"start"},mt.map((function(t,a){if(t.showInFooter)return r.createElement(Q.ZC,{className:X()("mb1 mouse-hand","slpkqwYB7Y9tBmlPgBJV"),key:a},"en"===e?t.en:t.fa)})))))),r.createElement(Q.X2,{className:X()("flex flex--jc--center mt3 textWhite bgSilver")},"Copyright © 2022 APlus | Powered by",r.createElement("a",{href:"https://www.iswad.tech",className:X()("flex flex--jc--center ml1 textRed")},"ISWAD")))},ft=function(e){var t=e.children,a=(0,l.v9)((function(e){return e.language}));return r.createElement(r.Fragment,null,r.createElement(Q.ZC,{className:X()("flex flex--dir--col min-height-vh-full flex--jc--between","fa"===a&&"farsiFont")},r.createElement(Q.ZC,null,r.createElement(it,null),r.createElement($,null),r.createElement(Q.ZC,null,t)),r.createElement(dt,null)))},pt=function(){var e=(0,l.I0)(),t=(0,l.v9)((function(e){return e.loading})),a=(0,l.v9)((function(e){return e.isAuthenticated})),n=(0,r.useState)(A("access_token")),o=(0,c.Z)(n,2),i=o[0],u=o[1],m=(0,r.useState)(A("refresh_token")),d=(0,c.Z)(m,2),f=d[0],E=d[1],g=(0,r.useState)(!1),v=(0,c.Z)(g,2),x=v[0],y=v[1],b=(0,r.useState)(!1),w=(0,c.Z)(b,2),S=w[0],N=w[1],I=(0,r.useState)(!1),Z=(0,c.Z)(I,2),_=Z[0],j=Z[1],q=G({sendReq:_,setSendReq:j,method:"POST",url:"/api/auth/jwt/refresh/",bodyData:{refresh:f},showLoading:!1,showErrorMessage:!1}),O=q.data,M=(q.error,G({sendReq:S,setSendReq:N,method:"GET",url:"/api/auth/authenticate-user/",showLoading:!1,showErrorMessage:!1})),P=M.data,T=M.error,F=G({sendReq:x,setSendReq:y,method:"GET",url:"/api/profile/me/",showLoading:!1,showErrorMessage:!1}),H=F.data;return F.error,(0,r.useEffect)((function(){i&&N(!0)}),[]),(0,r.useEffect)((function(){P&&(null!=P&&P.Authenticated?p(e):(h(e),k("access_token"),k("refresh_token")))}),[P]),(0,r.useEffect)((function(){null!=T&&T.data&&(h(e),k("access_token"),k("refresh_token"))}),[T]),(0,r.useEffect)((function(){if(a){u(A("access_token")),E(A("refresh_token"));try{y(!0),setInterval((function(){j(!0),j(!1)}),27e4)}catch(e){console.log(e)}}}),[a]),(0,r.useEffect)((function(){H&&function(e,t){e(R(t))}(e,H)}),[H]),(0,r.useEffect)((function(){O&&C("access_token",O.access)}),[O]),r.createElement(s.VK,null,t&&r.createElement(tt,null),r.createElement(at,null),r.createElement(ft,null,r.createElement(et,null)))},ht=(0,a(2669).UY)({loading:J,notifications:N,language:st,isAuthenticated:f,profile:M});var Et=(0,o.xC)({reducer:ht});n.createRoot(document.querySelector("#app")).render(r.createElement(l.zt,{store:Et},r.createElement(pt,null)))}},a={};function r(e){var n=a[e];if(void 0!==n)return n.exports;var l=a[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=(t,a,n,l)=>{if(!a){var c=1/0;for(u=0;u<e.length;u++){for(var[a,n,l]=e[u],s=!0,o=0;o<a.length;o++)(!1&l||c>=l)&&Object.keys(r.O).every((e=>r.O[e](a[o])))?a.splice(o--,1):(s=!1,l<c&&(c=l));if(s){e.splice(u--,1);var i=n();void 0!==i&&(t=i)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[a,n,l]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var n,l,[c,s,o]=a,i=0;if(c.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(o)var u=o(r)}for(t&&t(a);i<c.length;i++)l=c[i],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(u)},a=self.webpackChunkreact_webpack=self.webpackChunkreact_webpack||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=r.O(void 0,[531],(()=>r(3930)));n=r.O(n),module.exports=n})();