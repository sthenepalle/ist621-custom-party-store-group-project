(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){e.exports=a.p+"static/media/party.2bfbcd4e.gif"},118:function(e,t,a){e.exports=a(294)},123:function(e,t,a){},251:function(e,t,a){e.exports=a.p+"static/media/redvelvetcake.397b24bd.jpeg"},252:function(e,t,a){e.exports=a.p+"static/media/vanillacake.0a790d03.jpg"},253:function(e,t,a){e.exports=a.p+"static/media/angelfoodcake.61de5fc7.jpg"},254:function(e,t,a){e.exports=a.p+"static/media/coffeechocolatecake.a5c0b589.jpg"},255:function(e,t,a){e.exports=a.p+"static/media/buttercake.3fab4c55.jpg"},256:function(e,t,a){e.exports=a.p+"static/media/doublechocolatecake.00e5ecf4.jpeg"},257:function(e,t,a){e.exports=a.p+"static/media/redshirt.73ef44ed.jpg"},258:function(e,t,a){e.exports=a.p+"static/media/whiteshirt.a549acd8.jpg"},259:function(e,t,a){e.exports=a.p+"static/media/greenshirt.90fcc116.jpg"},260:function(e,t,a){e.exports=a.p+"static/media/blackshirt.1f3f9efe.jpg"},261:function(e,t,a){e.exports=a.p+"static/media/skyblueshirt.22d95f69.png"},262:function(e,t,a){e.exports=a.p+"static/media/yellowshirt.ea87a25d.jpg"},28:function(e,t,a){e.exports=a.p+"static/media/Party.016986f9.jpg"},294:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(26),r=a.n(c),i=(a(123),a(12)),s=a(13),o=a(15),m=a(14),u=a(16),h=a(8),d=(a(54),a(100)),p=a.n(d),E=a(103),g=a.n(E),f=a(104),b=a.n(f),y=a(102),C=a.n(y),v=a(65),O=a.n(v),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={formData:{state:"Select State"},stateCountryMapping:{},open:!1},a.onStateChange=a.onStateChange.bind(Object(h.a)(Object(h.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(Object(h.a)(a))),a.handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a.handleClose=a.handleClose.bind(Object(h.a)(Object(h.a)(a))),a.onFormElementChnage=a.onFormElementChnage.bind(Object(h.a)(Object(h.a)(a))),a.changeDialogState=a.changeDialogState.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getStateCityMappig()}},{key:"getStateCityMappig",value:function(){var e=this;fetch("http://127.0.0.1:9090/geo-list",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.setState({stateCountryMapping:t})})}},{key:"onFormElementChnage",value:function(e,t){var a=this.state.formData;a[e]=t,this.setState({formData:a})}},{key:"changeDialogState",value:function(e){this.setState({open:e})}},{key:"handleChange",value:function(e){this.onFormElementChnage(e.target.name,e.target.value)}},{key:"onStateChange",value:function(e){var t=e.target.value;this.setState({selectedState:t})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),console.log(this.state.formData),fetch("http://127.0.0.1:9090/register-user",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.state.formData)}).then(function(e){return e.json()}).then(function(e){console.log(e.response),"USER_ID_EXISTS"===e.response&&t.handleClickOpen(),"SUCCESS"===e.response&&t.props.history.push("/home")})}},{key:"handleClickOpen",value:function(){this.changeDialogState(!0)}},{key:"handleClose",value:function(){this.changeDialogState(!1)}},{key:"render",value:function(){var e=Object.keys(this.state.stateCountryMapping).map(function(e){return l.a.createElement("option",{value:e},e)}),t=this.state.stateCountryMapping[this.state.formData.state],a=[];return"Select State"!==this.state.formData.state&&(a=t.map(function(e){return l.a.createElement("option",{value:e},e)})),l.a.createElement("div",{class:"Register-app"},l.a.createElement("div",{class:"Register-app-header"},l.a.createElement("h1",null,"Sign Up Form"),l.a.createElement("form",{onSubmit:this.handleSubmit,method:"post"},l.a.createElement("label",{htmlFor:"firstName"},"Details",l.a.createElement("br",null),l.a.createElement("input",{onChange:this.handleChange,id:"firstname",name:"firstname",type:"text",placeholder:"First Name",required:!0}),l.a.createElement("input",{onChange:this.handleChange,id:"lastname",name:"lastname",type:"text",placeholder:"Last Name",required:!0}),l.a.createElement("br",null),l.a.createElement("input",{onChange:this.handleChange,id:"email",name:"email",type:"email",placeholder:"E-mail Address",required:!0}),l.a.createElement("br",null),l.a.createElement("input",{onChange:this.handleChange,id:"password",name:"password",type:"password",placeholder:"Password",required:!0})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"Address",l.a.createElement("br",null),l.a.createElement("input",{onChange:this.handleChange,id:"address1",name:"address1",type:"text",placeholder:"Address Line 1",required:!0}),l.a.createElement("input",{onChange:this.handleChange,id:"address2",name:"address2",type:"text",placeholder:"Address Line 2"}),l.a.createElement("br",null),l.a.createElement("select",{onChange:this.handleChange,id:"state",name:"state"},l.a.createElement("option",{value:"Select State"},"Select State"),e),l.a.createElement("select",{onChange:this.handleChange,id:"city",name:"city"},l.a.createElement("option",{value:"Select City",selected:!0},"Select City"),a),l.a.createElement("input",{onChange:this.handleChange,id:"zipcode",name:"zipcode",type:"number",placeholder:"Zip Code",required:!0})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",null,"REGISTER")),l.a.createElement(p.a,{open:this.state.open,TransitionComponent:j,keepMounted:!0,onClose:this.handleClose,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},l.a.createElement(C.a,{id:"alert-dialog-slide-title"},"Email ID Exists"),l.a.createElement(g.a,null,l.a.createElement(b.a,{id:"alert-dialog-slide-description"},"Please choose another email ID to register. Entered Email ID is already in use")))))}}]),t}(l.a.Component);function j(e){return l.a.createElement(O.a,Object.assign({direction:"up"},e))}var S=a(105),T=a(27),I=a(114),w=a.n(I),N=a(112),R=a.n(N),x=a(111),A=a.n(x),D=a(113),L=a.n(D),K=a(53),B=a.n(K),H=a(29),U=a.n(H),F=a(67),_=a.n(F),P=a(23),$=a.n(P),M=a(24),W=a.n(M),G=a(25),q=a.n(G),z=(a(93),a(106)),Y=a.n(z),J=a(107),V=a.n(J),X=a(108),Z=a.n(X),Q=a(40),ee=a.n(Q),te=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"This is how Tab 1 content routes...."))}}]),t}(l.a.Component);l.a.Component,l.a.Component;var ae=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleNext=function(e){a.setState(function(e){return{activeStep:e.activeStep+1}})},a.handleBack=function(e){a.setState(function(e){return{activeStep:e.activeStep-1}})},a.handleReset=function(e){a.setState({activeStep:0})},a.state={activeStep:0},a.handleNext=a.handleNext.bind(Object(h.a)(Object(h.a)(a))),a.handleBack=a.handleBack.bind(Object(h.a)(Object(h.a)(a))),a.handleReset=a.handleReset.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=Object.keys(this.props.stepperInfo),a=this.state.activeStep;return l.a.createElement("div",{className:e.root},l.a.createElement(Y.a,{activeStep:a,alternativeLabel:!0},t.map(function(e){return l.a.createElement(V.a,{key:e},l.a.createElement(Z.a,null,e))})),l.a.createElement("div",null,this.state.activeStep===t.length?l.a.createElement("div",null,l.a.createElement(U.a,{className:e.instructions},"All steps completed"),l.a.createElement(ee.a,{onClick:this.handleReset},"Reset")):l.a.createElement("div",null,this.props.stepperInfo[t[a]],l.a.createElement("div",null,l.a.createElement(ee.a,{disabled:0===a,onClick:this.handleBack,className:e.backButton},"Back"),l.a.createElement(ee.a,{variant:"contained",color:"primary",onClick:this.handleNext},a===t.length-1?"Finish":"Next")))))}}]),t}(l.a.Component),ne=Object(T.withStyles)(function(e){return{root:{width:"90%",paddingTop:"10px"},backButton:{marginRight:e.spacing.unit},instructions:{marginTop:e.spacing.unit,marginBottom:e.spacing.unit}}})(ae),le=a(35),ce=a.n(le),re=a(109),ie=a.n(re),se=a(66),oe=a.n(se),me=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"content"},l.a.createElement("img",{src:a(251),alt:"cakes",style:{width:"100%"}}),l.a.createElement("h4",null,"RED VELVET CAKE"),l.a.createElement("center",null,l.a.createElement("h4",null,"$8.99"))),l.a.createElement("div",{class:"content"},l.a.createElement("img",{src:a(252),alt:"cakes",style:{width:"100%"}}),l.a.createElement("h4",null,"VANILLA CAKE"),l.a.createElement("center",null,l.a.createElement("h4",null,"$5.99"))),l.a.createElement("div",{class:"content"},l.a.createElement("img",{src:a(253),alt:"cakes",style:{width:"100%"}}),l.a.createElement("h4",null,"ANGEL FOOD CAKE"),l.a.createElement("center",null,l.a.createElement("h4",null,"$9.99"))),l.a.createElement("div",{class:"content"},l.a.createElement("img",{src:a(254),alt:"cakes",style:{width:"100%"}}),l.a.createElement("h4",null,"COFFEE CHOCOLATE CAKE"),l.a.createElement("center",null,l.a.createElement("h4",null,"$8.99"))),l.a.createElement("div",{class:"content"},l.a.createElement("img",{src:a(255),alt:"cakes",style:{width:"100%"}}),l.a.createElement("h4",null,"BUTTER CAKE"),l.a.createElement("center",null,l.a.createElement("h4",null,"$5.99"))),l.a.createElement("div",{class:"content"},l.a.createElement("img",{src:a(256),alt:"cakes",style:{width:"100%"}}),l.a.createElement("h4",null,"DOUBLE CHOCOLATE CAKE"),l.a.createElement("center",null,l.a.createElement("h4",null,"$8.99")))),l.a.createElement("center",null,l.a.createElement("button",{type:"submit",class:"nextBtn"},"ADD TO CART")))}}]),t}(l.a.Component),ue=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"content"},l.a.createElement("img",{src:a(257),alt:"cakes",style:{width:"100%"}}),l.a.createElement("h4",null,"RED T-SHIRT"),l.a.createElement("center",null,l.a.createElement("h4",null,"$7.99"))),l.a.createElement("div",{class:"content"},l.a.createElement("img",{src:a(258),alt:"cakes",style:{width:"100%"}}),l.a.createElement("h4",null,"WHITE T-SHIRT"),l.a.createElement("center",null,l.a.createElement("h4",null,"$7.99"))),l.a.createElement("div",{class:"content"},l.a.createElement("img",{src:a(259),alt:"cakes",style:{width:"100%"}}),l.a.createElement("h4",null,"GREEN T-SHIRT"),l.a.createElement("center",null,l.a.createElement("h4",null,"$7.99"))),l.a.createElement("div",{class:"content"},l.a.createElement("img",{src:a(260),alt:"cakes",style:{width:"100%"}}),l.a.createElement("h4",null,"BLACK T-SHIRT"),l.a.createElement("center",null,l.a.createElement("h4",null,"$7.99"))),l.a.createElement("div",{class:"content"},l.a.createElement("img",{src:a(261),alt:"cakes",style:{width:"100%"}}),l.a.createElement("h4",null,"BLUE T-SHIRT"),l.a.createElement("center",null,l.a.createElement("h4",null,"$8.99"))),l.a.createElement("div",{class:"content"},l.a.createElement("img",{src:a(262),alt:"cakes",style:{width:"100%"}}),l.a.createElement("h4",null,"YELLOW T-SHIRT"),l.a.createElement("center",null,l.a.createElement("h4",null,"6.99")))),l.a.createElement("center",null,l.a.createElement("button",{type:"submit",class:"nextBtn"},"ADD TO CART")))}}]),t}(l.a.Component),he=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e,t){a.setState({value:t})},a.state={value:0,stepperInfo:{CAKE:{"Select Bread of Cake":l.a.createElement(te,null),"Select Type of Toppings":l.a.createElement(te,null),"Select Decoration Text":l.a.createElement(te,null)},T_SHIRT:{"Select T-shirt Material":l.a.createElement(te,null),"Write Color, Text & Font":l.a.createElement(te,null),"Select Images/Upload":l.a.createElement(te,null)}}},a.handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement("div",null,l.a.createElement(ce.a,{square:!0,className:e.root},l.a.createElement(ie.a,{value:this.state.value,onChange:this.handleChange,fullWidth:!0,indicatorColor:"secondary",textColor:"secondary"},l.a.createElement(oe.a,{icon:l.a.createElement("i",{class:"fa fa-eye fa-lg"}),label:"Default"}),l.a.createElement(oe.a,{icon:l.a.createElement("i",{class:"fa fa-wrench fa-lg"}),label:"Customize"}))),0===this.state.value&&"CAKE"===this.props.selectedKey?l.a.createElement(me,null):void 0,0===this.state.value&&"T_SHIRT"===this.props.selectedKey?l.a.createElement(ue,null):void 0,1===this.state.value?l.a.createElement(ne,{stepperInfo:this.state.stepperInfo[this.props.selectedKey]}):void 0)}}]),t}(l.a.Component),de=Object(T.withStyles)({root:{flexGrow:1,maxWidth:500}})(he),pe=a(110),Ee=a.n(pe),ge=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={selectedKey:"CAKE"},a.handleListItemClick=a.handleListItemClick.bind(Object(h.a)(Object(h.a)(a))),a.handleLogout=a.handleLogout.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleListItemClick",value:function(e,t){console.log(t),this.setState({selectedKey:t})}},{key:"handleLogout",value:function(e){this.props.history.push("/logout")}},{key:"render",value:function(){var e=this,t=this.props.classes;return l.a.createElement("div",{className:t.root},l.a.createElement(A.a,null),l.a.createElement(R.a,{position:"fixed",className:t.appBar},l.a.createElement(L.a,{style:{opacity:1,backgroundImage:"url(".concat(Ee.a,")")}},l.a.createElement(U.a,{variant:"h6",color:"inherit",noWrap:!0},"Party Store"),l.a.createElement("div",{className:t.grow}),l.a.createElement("div",{style:{paddingRight:"4%"},className:t.sectionDesktop},l.a.createElement("a",null,l.a.createElement("i",{color:"inherit",style:{align:"center"},className:"fa fa-user fa-lg"})),l.a.createElement("a",null,"\xa0 ",this.props.userName)),l.a.createElement("div",{style:{paddingRight:"7%"},className:t.sectionDesktop},l.a.createElement("a",{href:"/logout",style:{color:"white",textDecoration:"none"}},l.a.createElement("i",{type:"submit",style:{align:"center"},className:"fa fa-power-off fa-lg"}),"\xa0 Logout")))),l.a.createElement(w.a,{className:t.drawer,variant:"permanent",classes:{paper:t.drawerPaper}},l.a.createElement("div",{className:t.toolbar}),l.a.createElement(B.a,null,l.a.createElement($.a,{selected:"CAKE"===this.state.selectedKey,onClick:function(t){return e.handleListItemClick(t,"CAKE")},button:!0,key:"CAKE"},l.a.createElement(W.a,null,l.a.createElement("i",{className:"fa fa-birthday-cake fa-lg"})),l.a.createElement(q.a,{primary:"Cake"})),l.a.createElement($.a,{selected:"T_SHIRT"===this.state.selectedKey,onClick:function(t){return e.handleListItemClick(t,"T_SHIRT")},button:!0,key:"T_SHIRT"},l.a.createElement(W.a,null,l.a.createElement("i",{className:"fa fa-snowflake-o fa-lg"})),l.a.createElement(q.a,{primary:"T Shirt"})),l.a.createElement($.a,{button:!0,key:"DRINK",selected:"DRINK"===this.state.selectedKey,onClick:function(t){return e.handleListItemClick(t,"DRINK")}},l.a.createElement(W.a,null,l.a.createElement("i",{className:"fa fa-glass fa-lg"})),l.a.createElement(q.a,{primary:"Drinks"})),l.a.createElement($.a,{button:!0,key:"OTHER_STUFF",selected:"OTHER_STUFF"===this.state.selectedKey,onClick:function(t){return e.handleListItemClick(t,"OTHER_STUFF")}},l.a.createElement(W.a,null,l.a.createElement("i",{className:"fa fa-cube fa-lg"})),l.a.createElement(q.a,{primary:"Other Stuff"}))),l.a.createElement(_.a,null),l.a.createElement(B.a,null,l.a.createElement($.a,{button:!0,key:"CART",selected:"CART"===this.state.selectedKey,onClick:function(t){return e.handleListItemClick(t,"CART")}},l.a.createElement(W.a,null,l.a.createElement("i",{className:"fa fa-shopping-cart fa-lg"})),l.a.createElement(q.a,{primary:"CART"})),l.a.createElement($.a,{button:!0,key:"ORDER_HISTORY",selected:"ORDER_HISTORY"===this.state.selectedKey,onClick:function(t){return e.handleListItemClick(t,"ORDER_HISTORY")}},l.a.createElement(W.a,null,l.a.createElement("i",{className:"fa fa-shopping-bag fa-lg"})),l.a.createElement(q.a,{primary:"Order History"})),l.a.createElement($.a,{button:!0,key:"PROFILE",selected:"PROFILE"===this.state.selectedKey,onClick:function(t){return e.handleListItemClick(t,"PROFILE")}},l.a.createElement(W.a,null,l.a.createElement("i",{className:"fa fa-user-o fa-lg"})),l.a.createElement(q.a,{primary:"Profile"}))),l.a.createElement(_.a,null),l.a.createElement(B.a,null,l.a.createElement($.a,{button:!0,key:"ABOUT_US",selected:"ABOUT_US"===this.state.selectedKey,onClick:function(t){return e.handleListItemClick(t,"ABOUT_US")}},l.a.createElement(W.a,null,l.a.createElement("i",{className:"fa fa-info fa-lg"})),l.a.createElement(q.a,{primary:"About Us"})),l.a.createElement($.a,{button:!0,key:"CONTACT_US",selected:"CONTACT_US"===this.state.selectedKey,onClick:function(t){return e.handleListItemClick(t,"CONTACT_US")}},l.a.createElement(W.a,null,l.a.createElement("i",{className:"fa fa-phone fa-lg"})),l.a.createElement(q.a,{primary:"Contact Us"})))),l.a.createElement("main",{className:t.content},l.a.createElement("div",{className:t.toolbar}),["CAKE","T_SHIRT"].includes(this.state.selectedKey)?l.a.createElement(de,{selectedKey:this.state.selectedKey}):void 0))}}]),t}(l.a.Component),fe=Object(T.withStyles)(function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},drawer:{width:260,flexShrink:0},drawerPaper:{width:260},content:{flexGrow:1,padding:3*e.spacing.unit},toolbar:e.mixins.toolbar,sectionDesktop:Object(S.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}}})(ge),be=a(115),ye=a.n(be),Ce=a(68),ve=a.n(Ce),Oe=a(69),ke=a.n(Oe),je=a(116),Se=a.n(je),Te=a(52),Ie=a.n(Te),we=a(70),Ne=a.n(we),Re=a(28),xe=a.n(Re),Ae=[{img:xe.a,title:"Image",author:"author"},{img:xe.a,title:"Image",author:"author"},{img:xe.a,title:"Image",author:"author"},{img:xe.a,title:"Image",author:"author"},{img:xe.a,title:"Image",author:"author"},{img:xe.a,title:"Image",author:"author"},{img:xe.a,title:"Image",author:"author"},{img:xe.a,title:"Image",author:"author"}],De=function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement("div",{className:e.root},l.a.createElement(ye.a,{cellHeight:180,className:e.gridList},l.a.createElement(ve.a,{key:"Subheader",cols:2,style:{height:"auto"}},l.a.createElement(Se.a,{component:"div"},"December")),Ae.map(function(t){return l.a.createElement(ve.a,{key:t.img},l.a.createElement("img",{src:t.img,alt:t.title}),l.a.createElement(ke.a,{title:t.title,subtitle:l.a.createElement("span",null,"by: ",t.author),actionIcon:l.a.createElement(Ie.a,{className:e.icon},l.a.createElement(Ne.a,null))}),l.a.createElement(ke.a,{title:t.title,titlePosition:"top",subtitle:l.a.createElement("span",null,"by: ",t.author),actionIcon:l.a.createElement(Ie.a,{className:e.icon},l.a.createElement(Ne.a,null))}))})))}}]),t}(l.a.Component),Le=Object(T.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:"40%",height:"70%"},icon:{color:"rgba(255, 255, 255, 0.54)"}}})(De),Ke=a(302),Be=a(303),He=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={userName:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getLoggedUserName()}},{key:"getLoggedUserName",value:function(){var e=this;fetch("http://127.0.0.1:9090/logged-username",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){console.log(t.userName),e.setState({userName:t.userName})})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement(Ke.a,null,l.a.createElement("div",null,l.a.createElement(Be.a,{exact:!0,path:"/home",render:function(t){return l.a.createElement(fe,Object.assign({},t,{userName:e.state.userName}))}}),l.a.createElement(Be.a,{exact:!0,path:"/stepper",component:ne}),l.a.createElement(Be.a,{exact:!0,path:"/grid-view",component:Le}),l.a.createElement(Be.a,{exact:!0,path:"/register",render:function(e){return l.a.createElement(k,Object.assign({},e,{isAuthed:!0}))}}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(He,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},54:function(e,t,a){}},[[118,2,1]]]);
//# sourceMappingURL=main.2942619a.chunk.js.map