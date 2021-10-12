(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}},19:function(t,e,n){},2:function(t,e,n){t.exports={form:"Form_form__2TM1N",title:"Form_title__lNS_Y",label:"Form_label__15SAE",input:"Form_input__2ESfd",btn:"Form_btn__aasqa"}},29:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),s=n.n(r),i=(n(19),n(14)),o=n(5),l=n(6),u=n(8),m=n(7),b=n(12),d=n.n(b),h=n(3),p=n.n(h),j=n(0);var f=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:p.a.title,children:"Contacts"}),Object(j.jsx)("ul",{className:p.a.list,children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(j.jsxs)("li",{className:p.a.item,children:["".concat(e,": ").concat(a),Object(j.jsx)("button",{className:p.a.btn,type:"button",onClick:function(){return n(c)},children:"Delete"})]},c)}))})]})},_=n(13),O=n(2),C=n.n(O),g=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(_.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:C.a.title,children:"Phonebook"}),Object(j.jsxs)("form",{className:C.a.form,onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{className:C.a.label,children:["Name",Object(j.jsx)("input",{className:C.a.input,type:"text",name:"name",placeholder:"Rosie Simpson",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleInputChange})]}),Object(j.jsxs)("label",{className:C.a.label,children:["Number",Object(j.jsx)("input",{className:C.a.input,type:"tel",name:"number",placeholder:"+38(0XX)-XXX-XX-XX",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleInputChange})]}),Object(j.jsx)("button",{className:C.a.btn,type:"submit",children:"Add contact"})]})]})}}]),n}(a.Component),v=g,x=n(10),S=n.n(x);var N=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:S.a.label,children:["Find contacts by name",Object(j.jsx)("input",{className:S.a.input,type:"text",name:"name",placeholder:"Type name for search",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:e,onChange:n})]})},y=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContactHandler=function(e){var n=e.name,a=e.number;if(t.state.contacts.find((function(t){return t.name===n})))alert("".concat(n," is already in contacts"));else{var c={name:n,number:a,id:d.a.generate()};t.setState((function(t){return{contacts:[c].concat(Object(i.a)(t.contacts))}}))}},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}})),t.resetFilter()},t.resetFilter=function(){t.setState({filter:""})},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);console.log(e),e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t){this.state.contacts!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(v,{onSubmit:this.addContactHandler}),Object(j.jsx)(N,{onChange:this.changeFilter,value:t}),Object(j.jsx)(f,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component),F=y;s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={title:"ContactList_title__ATLM_",list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK",btn:"ContactList_btn__1Xk4q"}}},[[29,1,2]]]);
//# sourceMappingURL=main.f8e2380f.chunk.js.map