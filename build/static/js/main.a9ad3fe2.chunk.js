(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{16:function(e,t,n){e.exports={enter:"slideTransition_enter__3nsYF",enterActive:"slideTransition_enterActive__2gMI8",exit:"slideTransition_exit__3I3Qt",exitActive:"slideTransition_exitActive__3NEmP"}},19:function(e,t,n){e.exports={container:"App_container__1K_KN",sectionTitle:"App_sectionTitle__2FkGr"}},24:function(e,t,n){e.exports={contactList:"ContactsList_contactList__1-sz4",contactItem:"ContactsList_contactItem__1jlo1"}},25:function(e,t,n){e.exports={contactInfo:"ContactItem_contactInfo__1FuqD",deleteBtn:"ContactItem_deleteBtn__1VJcZ"}},37:function(e,t,n){e.exports={filterInput:"Filter_filterInput__H-jH8"}},38:function(e,t,n){e.exports={appear:"slideTitle_appear__1yIMV",appearActive:"slideTitle_appearActive__3TuxU"}},41:function(e,t,n){e.exports=n(74)},5:function(e,t,n){e.exports={form:"ContactForm_form__-XJ2k",labelItem:"ContactForm_labelItem__3K-Zc",textName:"ContactForm_textName__fU-z7",submitBtn:"ContactForm_submitBtn__1164r"}},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),i=n(4),u=n(8),l=n(39),s={ADD_CONTACT:"ADD_CONTACT",DELETE_CONTACT:"DELETE_CONTACT",FILTER_CONTACTS:"FILTER_CONTACTS",GET_CONTACTS_FROM_LS:"GET_CONTACTS_FROM_LS"},m=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case s.ADD_CONTACT:return[].concat(Object(l.a)(e),[a]);case s.DELETE_CONTACT:return e.filter((function(e){return e.id!==a.id}));case s.GET_CONTACTS_FROM_LS:return a.savedContacts;default:return e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case s.FILTER_CONTACTS:return a.filter;default:return e}},d=n(35),_=Object(u.combineReducers)({contacts:p,filter:f}),C=Object(u.createStore)(_,Object(d.devToolsEnhancer)()),b=n(13),T=n(14),h=n(17),E=n(18),N=n(75),v=n(11),O=n.n(v),I=function(e){return e.contacts},g=function(e){return e.filter},y=n(1),A=n.n(y),S=n(36),F=n(15),L=n(5),x=n.n(L),D=n(10),j=(n(73),function(e){Object(E.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.nameInputId=O.a.generate(),e.numberInputId=O.a.generate(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(F.a)({},a,r))},e.checkIsInputCorrect=function(t,n){var a=Boolean(Number(n)),r=e.props.onAddContact;a&&""!==t?r(Object(S.a)({},e.state)):a||""!==t?a?""===t&&D.NotificationManager.error("Please, enter a name","Name is empty",5e3):D.NotificationManager.error("Please, enter a correct number","Number is not valid",5e3):D.NotificationManager.error("Please, enter name or number","Some registration point are empty",5e3)},e.handleSubmit=function(t){t.preventDefault();var n=e.props.contacts,a=e.state,r=a.name,o=a.number;n.find((function(e){return e.name.toLowerCase()===r.toLowerCase()}))?D.NotificationManager.error("Please, enter another name","".concat(r," is already in contacts"),5e3):e.checkIsInputCorrect(r,o),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(T.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.NotificationContainer,null),r.a.createElement("form",{className:x.a.form,onSubmit:this.handleSubmit},r.a.createElement("label",{className:x.a.labelItem,htmlFor:this.nameInputId},r.a.createElement("p",{className:x.a.textName},"Name"),r.a.createElement("input",{className:x.a.inputName,type:"text",name:"name",value:t,onChange:this.handleChange,id:this.nameInputId})),r.a.createElement("label",{className:x.a.labelItem,htmlFor:this.numberInputId},r.a.createElement("p",{className:x.a.textName},"Number"),r.a.createElement("input",{type:"phone",name:"number",value:n,onChange:this.handleChange,id:this.numberInputId})),r.a.createElement("button",{className:x.a.submitBtn,type:"submit"},"Add Contact")))}}]),n}(a.Component)),k=Object(i.b)((function(e){return{contacts:I(e)}}),(function(e){return{onAddContact:function(t){var n=t.name,a=t.number;return e(function(e){var t=e.name,n=e.number;return{type:s.ADD_CONTACT,payload:{id:O.a.generate(),name:t,number:n}}}({name:n,number:a}))}}}))(j),R=n(37),w=n.n(R),M=n(16),G=n.n(M),B=Object(i.b)((function(e){return{contacts:I(e),filterValue:g(e)}}),(function(e){return{onChangeFilter:function(t){return e(function(e){return{type:s.FILTER_CONTACTS,payload:{filter:e}}}(t))}}}))((function(e){var t=e.contacts,n=e.filterValue,a=void 0===n?"":n,o=e.onChangeFilter;return t.length>1&&r.a.createElement(N.a,{in:t.length>1,timeout:250,classNames:G.a,unmountOnExit:!0},r.a.createElement("input",{type:"text",value:a,onChange:function(e){var t=e.target.value;o(t)},className:w.a.filterInput,placeholder:"Type name to filter contacts..."}))})),J=n(76),P=n(24),q=n.n(P),K=n(25),V=n.n(K),H=function(e){var t=e.contact,n=e.onDeleteContact,a=t.name,o=t.number;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:V.a.contactInfo},a," : ",o),r.a.createElement("button",{onClick:function(){return n(t.id)},className:V.a.deleteBtn,type:"button"},"Delete"))},U=function(e){var t=e.contacts,n=e.onDeleteContact;return r.a.createElement(J.a,{component:"ul",className:q.a.contactList},t.map((function(e){return r.a.createElement(N.a,{key:e.id,timeout:250,classNames:G.a,unmountOnExit:!0},r.a.createElement("li",{className:q.a.contactItem},r.a.createElement(H,{contact:e,onDeleteContact:n})))})))},z=Object(i.b)((function(e){return{contacts:I(e).filter((function(t){return t.name.toLowerCase().includes(g(e).toLowerCase())})),filter:g(e)}}),(function(e){return{onDeleteContact:function(t){return e(function(e){return{type:s.DELETE_CONTACT,payload:{id:e}}}(t))}}}))(U),Z=n(19),Q=n.n(Z),X=n(38),Y=n.n(X),W=function(e){Object(E.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(T.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.onGetFromLS,t=localStorage.getItem("contacts");t&&e(JSON.parse(t))}},{key:"componentDidUpdate",value:function(e){var t=this.props.contacts;e.contacts!==t&&localStorage.setItem("contacts",JSON.stringify(t))}},{key:"render",value:function(){return r.a.createElement("div",{className:Q.a.container},r.a.createElement(N.a,{in:!0,timeout:500,classNames:Y.a,appear:!0},r.a.createElement("h2",{className:Q.a.sectionTitle},"Phonebook")),r.a.createElement(k,null),r.a.createElement("h2",{className:Q.a.sectionTitle},"Contacts"),r.a.createElement(B,null),r.a.createElement(z,null))}}]),n}(a.Component),$=Object(i.b)((function(e){return{contacts:I(e)}}),(function(e){return{onGetFromLS:function(t){e(function(e){return{type:s.GET_CONTACTS_FROM_LS,payload:{savedContacts:e}}}(t))}}}))(W);k.propTypes={contacts:A.a.arrayOf(A.a.shape({name:A.a.string.isRequired,number:A.a.string.isRequired,id:A.a.string.isRequired})),onGetFromLS:A.a.func},c.a.render(r.a.createElement(i.a,{store:C},r.a.createElement($,null)),document.querySelector("#root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.a9ad3fe2.chunk.js.map