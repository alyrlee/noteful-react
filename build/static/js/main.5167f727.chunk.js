(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t){e.exports={PORT:Object({NODE_ENV:"production",PUBLIC_URL:""}).PORT||8e3,NODE_ENV:"production",API_TOKEN:Object({NODE_ENV:"production",PUBLIC_URL:""}).API_TOKEN||"82ec702e-81ae-4bd3-bb15-a26cff58bd43",API_ENDPOINT:Object({NODE_ENV:"production",PUBLIC_URL:""}).API_ENDPOINT||"https://fierce-taiga-41664.herokuapp.com/"}},203:function(e,t,a){},205:function(e,t,a){},207:function(e,t,a){},209:function(e,t,a){},211:function(e,t,a){},213:function(e,t,a){},215:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(79),c=a.n(r),l=a(19),s=a(21),i=a(218),d=(a(87),a(89),a(40)),m=a(41),u=a(10),f=a(11),N=a(13),E=a(12),h=a(14),p=a(216),v=a(98),b=a(5),_=a(217),O=a(28),g=a(29);a(93);function P(e){e.tag,e.className,e.childrenm;var t=Object(g.a)(e,["tag","className","childrenm"]);return o.a.createElement(e.tag,Object(O.a)({className:["NavCircleButton",e.className].join(" ")},t),e.children)}P.defaultProps={tag:"a"};var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.filter(function(e){return e.folderId===t}).length};a(95);function y(e){return o.a.createElement("div",{className:"NoteListNav"},o.a.createElement("ul",{className:"NoteListNav__list"},e.folders.map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement(_.a,{className:"NoteListNav__folder-link",to:"/folder/".concat(t.id)},o.a.createElement("span",{className:"NoteListNav__num-notes"},j(e.notes,t.id)),t.name))})),o.a.createElement("div",{className:"NoteListNav__button-wrapper"},o.a.createElement(P,{tag:v.a,to:"/add-folder",type:"button",className:"NoteListNav__add-folder-button"},o.a.createElement(b.a,{icon:"plus"}),o.a.createElement("br",null),"Folder")))}y.defaultProps={folders:[]};a(99);function k(e){return o.a.createElement("div",{className:"NotePageNav"},o.a.createElement(P,{tag:"button",role:"link",onClick:function(){return e.history.goBack()},className:"NotePageNav__back-button"},o.a.createElement(b.a,{icon:"chevron-left"}),o.a.createElement("br",null),"Back"),e.folder&&o.a.createElement("h3",{className:"NotePageNav__folder-name"},e.folder.name))}k.defaultProps={history:{goBack:function(){}}};var A=a(81);a(203);function F(e){return o.a.createElement("div",{className:"Note"},o.a.createElement("h2",{className:"Note__title"},o.a.createElement(v.a,{to:"/note/".concat(e.id)},e.name)),o.a.createElement("button",{className:"Note__delete",type:"button"},o.a.createElement(b.a,{icon:"trash-alt"})," ","remove"),o.a.createElement("div",{className:"Note__dates"},o.a.createElement("div",{className:"Note__dates-modified"},"Modified"," ",o.a.createElement("span",{className:"Date"},Object(A.format)(e.modified,"Do MMM YYYY")))))}a(205);function I(e){return o.a.createElement("section",{className:"NoteListMain"},o.a.createElement("ul",null,e.notes.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(F,{id:e.id,name:e.name,modified:e.modified}))})),o.a.createElement("div",{className:"NoteListMain__button-container"},o.a.createElement(P,{tag:v.a,to:"/add-note",type:"button",className:"NoteListMain__add-note-button"},o.a.createElement(b.a,{icon:"plus"}),o.a.createElement("br",null),"Note")))}I.defaultProps={notes:[]};a(207);function D(e){return o.a.createElement("section",{className:"NotePageMain"},o.a.createElement(F,{id:e.note.id,name:e.note.name,modified:e.note.modified}),o.a.createElement("div",{className:"NotePageMain__content"},e.note.content.split(/\n \r|\n/).map(function(e,t){return o.a.createElement("p",{key:t},e)})))}D.defaultProps={note:{content:""}};a(209);function L(e){var t=e.className,a=Object(g.a)(e,["className"]);return o.a.createElement("form",Object.assign({className:["Noteful-form",t].join(" "),action:"#"},a))}var M=o.a.createContext({notes:[],folders:[],addFolder:function(){},addNote:function(){},deleteNote:function(){}}),C=a(20),S=a.n(C);function T(e){return e.message?o.a.createElement("div",{className:"error"},e.message):o.a.createElement(o.a.Fragment,null)}a(211);var R=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(N.a)(this,Object(E.a)(t).call(this,e))).updateFolderName=function(e){a.setState({name:e},function(){a.validateName(e)})},a.validateName=function(e){var t=Object(O.a)({},a.state.validationMessages),n=!1;0===(e=e.trim()).length?(t.name="Please enter a name for the folder.",n=!0):e.length<3?(t.name="Please enter a name that is at least 3 characters long.",n=!0):(t.name="",n=!1),a.setState({validationMessages:t,validName:!n},a.validateForm)},a.validateForm=function(){a.setState({validForm:a.state.validName})},a.handleSubmit=function(e){e.preventDefault();var t={folder_name:e.target["folder-name-input"].value};fetch("".concat(S.a.API_ENDPOINT,"/folders"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})}).then(function(e){a.context.addFolder(e),a.props.history.push("/folders/".concat(e.id))}).catch(function(e){return alert(e)})},a.state={name:"",validName:!1,validForm:!1,validationMessages:{name:""}},a}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("section",{className:"AddFolder"},o.a.createElement("h2",null,"Create a New Folder:"),o.a.createElement(L,{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"folder-name-input"},"Name"),o.a.createElement("input",{type:"text",id:"folder-name-input",onChange:function(t){return e.updateFolderName(t.target.value)}}),o.a.createElement(T,{hasError:!this.state.validName,message:this.state.validationMessages.name})),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{type:"submit",disabled:!this.state.validForm},"Add Folder"))))}}]),t}(n.Component);R.defaultProps={history:{push:function(){}}},R.contextType=M;var w=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(N.a)(this,Object(E.a)(t).call(this,e))).state={hasError:!1},a}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return this.state.hasError?o.a.createElement("main",{className:"error-page"},o.a.createElement("h1",null,"We're sorry! An error occurred. Please try again later.")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(n.Component);a(213);console.log(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_API_KEY);var B=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(N.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(o)))).state={notes:[],folders:[]},a.handleDeleteNote=function(e){a.setState({notes:a.state.notes.filter(function(t){return t.id!==e})})},a.handleAddNote=function(e){a.setState({notes:Object(m.a)(a.state.notes).concat([e])})},a.handleAddFolder=function(e){a.setState({folders:Object(m.a)(a.state.folders).concat([e])})},a}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;Promise.all([fetch("".concat(S.a.API_ENDPOINT,"/notes")),fetch("".concat(S.a.API_ENDPOINT,"/folders"))]).then(function(e){var t=Object(d.a)(e,2),a=t[0],n=t[1];return a.ok?n.ok?Promise.all([a.json(),n.json()]):n.json().then(function(e){return Promise.reject(e)}):a.json().then(function(e){return Promise.reject(e)})}).then(function(t){var a=Object(d.a)(t,2),n=a[0],o=a[1];e.setState({notes:n,folders:o})}).catch(function(e){console.error({error:e})})}},{key:"renderNavRoutes",value:function(){return o.a.createElement(o.a.Fragment,null,["/","/folders/:folder_id"].map(function(e){return o.a.createElement(p.a,{exact:!0,key:e,path:e,component:y})}),o.a.createElement(p.a,{path:"/notes/:id",component:k}),o.a.createElement(p.a,{path:"/add-folder",component:k}),o.a.createElement(p.a,{path:"/add-note",component:k}))}},{key:"renderMainRoutes",value:function(){return o.a.createElement(o.a.Fragment,null,["/","/folders/:folder_id"].map(function(e){return o.a.createElement(p.a,{exact:!0,key:e,path:e,component:I})}),o.a.createElement(p.a,{path:"/notes/:id",component:D}),o.a.createElement(p.a,{path:"/add-folder",component:R}),o.a.createElement(p.a,{path:"/add-note",component:R}))}},{key:"render",value:function(){var e={notes:this.state.notes,folders:this.state.folders,deleteNote:this.handleDeleteNote,addFolder:this.handleAddFolder,addNote:this.handleAddNote};return o.a.createElement(w,null,o.a.createElement(M.Provider,{value:e},o.a.createElement("div",{className:"App"},o.a.createElement("nav",{className:"App__nav"},this.renderNavRoutes()),o.a.createElement("header",{className:"App__header"},o.a.createElement("h1",null,o.a.createElement(v.a,{to:"/"},"Noteful")," ",o.a.createElement(b.a,{icon:"check-double"}))),o.a.createElement("main",{className:"App__main"},this.renderMainRoutes()))))}}]),t}(n.Component);l.b.add(s.c,s.b,s.d,s.a),c.a.render(o.a.createElement(i.a,null,o.a.createElement(B,null)),document.getElementById("root"))},82:function(e,t,a){e.exports=a(215)},89:function(e,t,a){},93:function(e,t,a){},95:function(e,t,a){},99:function(e,t,a){}},[[82,2,1]]]);
//# sourceMappingURL=main.5167f727.chunk.js.map