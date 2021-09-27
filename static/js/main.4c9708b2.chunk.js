(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{101:function(e,t,n){},125:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(23),o=n.n(c),i=n(133),s=(n(100),n(101),n(75)),u=n(37),b=n(47),l=n(28),j=n(81),d=n.n(j),O=n(32);var m=Object(O.a)("section",{target:"e1x1475t1"})({name:"1aio9b8",styles:"padding:24px 0"}),h=Object(O.a)("h2",{target:"e1x1475t0"})({name:"1kp84ju",styles:"margin-bottom:24px;font-size:36px;font-weight:bold"}),x=n(7);function f(e){var t=e.title,n=e.children;return Object(x.jsxs)(m,{children:[t&&Object(x.jsx)(h,{children:t}),n]})}var p=n(83),g=n.n(p),v=n(131),y=n(132),w=n(134),C=n(68),k=Object(O.a)("input",{target:"eua69x00"})("display:block;width:100%;border:1px solid ",(function(e){return e.theme.colors.grey}),";padding:4px;border-radius:",(function(e){return e.theme.borderRadius}),";");function S(e){return Object(x.jsx)(k,Object(C.a)({},e))}var A=Object(O.a)("div",{target:"e1s9wv1k0"})({name:"18uqayh",styles:"margin-bottom:16px"});function N(e){var t=e.onSubmit,n=Object(r.useState)(""),a=Object(u.a)(n,2),c=a[0],o=a[1],i=Object(r.useState)(""),s=Object(u.a)(i,2),b=s[0],l=s[1],j=function(e){var t=e.currentTarget,n=t.value;switch(t.name){case"number":o(n);break;case"name":l(n);break;default:return}},d=function(){o(""),l("")};return Object(x.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(b,c),d()},children:Object(x.jsxs)(v.a,{children:[Object(x.jsx)(A,{children:Object(x.jsxs)("label",{children:["Name",Object(x.jsx)(S,{value:b,onChange:j,type:"text",name:"name",autoComplete:"off",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})}),Object(x.jsx)(A,{children:Object(x.jsxs)("label",{children:["Phone Number",Object(x.jsx)(S,{value:c,onChange:j,type:"text",name:"number",autoComplete:"off",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]})}),Object(x.jsx)(y.a,{htmlType:"submit",type:"primary",icon:Object(x.jsx)(w.a,{}),children:"Add contact"})]})})}N.prototypes={onSubmit:g.a.func};var T=n(130),z=n(135);function E(e){var t=e.contacts,n=e.onDeleteUser;return Object(x.jsx)(T.b,{bordered:!0,children:t.map((function(e){var t=e.id,r=e.name,a=e.number;return Object(x.jsxs)(T.b.Item,{children:[Object(x.jsx)(T.b.Item.Meta,{title:r,description:a}),Object(x.jsx)(y.a,{onClick:function(){return n(t)},danger:!0,type:"text",icon:Object(x.jsx)(z.a,{})})]},t)}))})}E.defaultProps={contacts:[],onDeleteUser:function(){}};var I=n(93),J=["value","onChange"];function D(e){var t=e.value,n=e.onChange,r=Object(I.a)(e,J);return Object(x.jsxs)("label",{children:[Object(x.jsx)("h3",{children:"Find contacts by name"}),Object(x.jsx)(S,Object(C.a)({name:"filter",value:t,onChange:n},r))]})}var L=Object(O.a)("div",{target:"e7lova40"})({name:"14heejm",styles:"max-width:1140px;padding:0 20px;margin:0 auto"});function P(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=Object(r.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(e)))&&void 0!==n?n:t})),a=Object(u.a)(n,2),c=a[0],o=a[1];return Object(r.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(c))}),[c,e]),[c,o]}("LOCAL_STORAGE_CONTACTS"),o=Object(u.a)(c,2),i=o[0],j=o[1];return Object(x.jsx)(L,{children:Object(x.jsxs)(b.a,{gutter:16,children:[Object(x.jsx)(l.a,{className:"gutter-row",md:18,lg:10,children:Object(x.jsx)(f,{title:"Phonebook",children:Object(x.jsx)(N,{onSubmit:function(e,t){var n=d.a.generate();i.find((function(t){return t.name.includes(e)}))?alert("".concat(e," is already in contacts")):j((function(r){return[].concat(Object(s.a)(r),[{id:n,name:e,number:t}])}))}})})}),Object(x.jsx)(l.a,{className:"gutter-row",md:18,lg:20,children:Object(x.jsxs)(f,{title:"Contacts",children:[Object(x.jsx)(D,{onChange:function(e){var t=e.currentTarget.value;a(t)},value:n,style:{marginBottom:24},placeholder:"Enter name"}),i.length?Object(x.jsx)(E,{contacts:function(){var e=n.toLowerCase();return i.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),onDeleteUser:function(e){j((function(t){return Object(s.a)(t.filter((function(t){return t.id!==e})))})),a("")}}):"Phonebook is Empty "]})})]})})}o.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(i.b,{theme:{colors:{black:"#000000",grey:"#d6d6d6"},borderRadius:"4px"},children:Object(x.jsx)(P,{})})}),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.4c9708b2.chunk.js.map