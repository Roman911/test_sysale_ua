(this.webpackJsonptest_sysale_ua=this.webpackJsonptest_sysale_ua||[]).push([[0],{14:function(e,t,c){"use strict";c.r(t);var a=c(12);t.default=Object(a.combineReducers)(["cart","compare"].reduce((function(e,t){return e[t]=c(47)("./".concat(t)).default,e}),{}))},22:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var a=c(9),n={cart:[]};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CART:ADD_TO_CART":return Object(a.a)(Object(a.a)({},e),{},{cart:e.cart.concat(t.payload)});case"CART:REMOVE_TO_CART":return Object(a.a)(Object(a.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload}))});default:return e}}},24:function(e,t,c){"use strict";c.r(t);var a=c(9),n={compare:[]};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COMPARE:ADD_TO_COMPARISON":return Object(a.a)(Object(a.a)({},e),{},{compare:e.compare.concat(t.payload)});default:return e}}},37:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){var a={"./":14,"./cart":23,"./cart.js":23,"./compare":24,"./compare.js":24,"./index":14,"./index.js":14};function n(e){var t=r(e);return c(t)}function r(e){if(!c.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id=47},48:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(16),i=c.n(r),s=c(7),o=(c(37),c(10)),l=c(3),u=c(13),d=c(19),m=c.n(d),j=(c(38),c.p+"static/media/compare.4299a7ee.svg"),v=c.p+"static/media/vector.a1a7fcc0.svg",b=c.p+"static/media/arrow.d22a1eb8.svg",O=(c(22),c(0)),p=function(e){var t=e.handleClick,c=e.btnName,a=e.disable;return Object(O.jsx)("button",{onClick:function(){return t()},className:"btn",disabled:a,children:c})},f=function(e){var t=e.quantity,c=e.addQuantity,a=e.removeQuantity;return Object(O.jsxs)("span",{className:"btns row",children:[Object(O.jsx)("button",{onClick:function(){return a()},className:"btns__select",disabled:1===t,children:"-"}),t,Object(O.jsx)("button",{onClick:function(){return c()},className:"btns__select",children:"+"})]})},x=[{id:1,state:"new",img:"shampoo1.png",title:"\u0428\u0430\u043c\u043f\u0443\u043d\u044c",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",colors:["\u0416\u0435\u043b\u0442\u044b\u0439","\u041a\u0440\u0430\u0441\u043d\u044b\u0439","\u0417\u0435\u043b\u0435\u043d\u043d\u044b\u0439","\u0421\u0438\u043d\u0438\u0439","\u0424\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u044b\u0439"],structure:"1 \u0406\u043d\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442, 2 \u0406\u043d\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442, 3 \u0406\u043d\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442, 4 \u0406\u043d\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442",value:[{volume:"100 \u043c\u043b",price:200},{volume:"200 \u043c\u043b",price:400},{volume:"500 \u043c\u043b",price:800}]},{id:2,state:"new",img:"shampoo2.png",title:"\u0428\u0430\u043c\u043f\u0443\u043d\u044c",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",colors:["\u0416\u0435\u043b\u0442\u044b\u0439","\u041a\u0440\u0430\u0441\u043d\u044b\u0439","\u0417\u0435\u043b\u0435\u043d\u043d\u044b\u0439","\u0421\u0438\u043d\u0438\u0439","\u0424\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u044b\u0439"],structure:"1 \u0406\u043d\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442, 2 \u0406\u043d\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442, 3 \u0406\u043d\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442, 4 \u0406\u043d\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442",value:[{volume:"100 \u043c\u043b",price:200},{volume:"200 \u043c\u043b",price:400},{volume:"500 \u043c\u043b",price:800}]},{id:3,state:"new",img:"shampoo3.jpg",title:"\u0428\u0430\u043c\u043f\u0443\u043d\u044c",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",colors:["\u0416\u0435\u043b\u0442\u044b\u0439","\u041a\u0440\u0430\u0441\u043d\u044b\u0439","\u0417\u0435\u043b\u0435\u043d\u043d\u044b\u0439","\u0421\u0438\u043d\u0438\u0439","\u0424\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u044b\u0439"],structure:"1 \u0406\u043d\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442, 2 \u0406\u043d\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442, 3 \u0406\u043d\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442, 4 \u0406\u043d\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442",value:[{volume:"100 \u043c\u043b",price:200},{volume:"200 \u043c\u043b",price:400},{volume:"500 \u043c\u043b",price:800}]}],A=function(){return Object(O.jsx)(h,{children:x.map((function(e){return Object(O.jsx)(w,{item:e},e.id)}))})},h=function(e){var t=e.children;return Object(O.jsx)("div",{className:"wrapper row",children:t})},g=(c(40),function(){var e=Object(s.c)((function(e){return e})),t=e.cart,c=e.compare;return Object(O.jsx)("nav",{className:"nav",children:Object(O.jsxs)("div",{className:"wrapper row",children:[Object(O.jsx)(o.b,{to:"/",children:Object(O.jsx)("span",{className:"nav__logo",children:"test"})}),Object(O.jsxs)("div",{children:[0!==c.compare.length&&Object(O.jsx)(o.b,{to:"/compare",children:Object(O.jsxs)("span",{className:"nav__block",children:[Object(O.jsx)("img",{className:"nav__img",src:j,alt:"Compare"}),Object(O.jsx)("span",{className:"nav__counter",children:c.compare.length})]})}),Object(O.jsx)(o.b,{to:"/cart",children:Object(O.jsxs)("span",{className:"nav__block",children:[Object(O.jsx)("img",{className:"nav__img",src:"data:image/png;base64,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",alt:"Cart"}),0!==t.cart.length&&Object(O.jsx)("span",{className:"nav__counter",children:t.cart.length})]})})]})]})})}),N=function(e){var t=e.item,c=e.colorsActive,a=e.handleClick,n=e.changeColor,r=e.changeVolume,i=e.data,s=e.price,o=e.quantity,l=e.addQuantity,u=e.removeQuantity,d=e.addToComparison,x=e.compareInc,A=e.addToCart,h=e.cartInc,g=t.state,N=t.img,C=t.title,q=t.text,w=t.value,V=t.colors,P=m()("info__select",{active:c}),D=m()("info__arrow",{active:c});return Object(O.jsxs)("div",{className:"card",children:[Object(O.jsxs)("div",{className:"card__header",children:[g&&Object(O.jsx)("span",{className:"header__state",children:g}),Object(O.jsx)("div",{className:"header__block",children:Object(O.jsx)("img",{className:"header__img",src:"/static/images/".concat(N),alt:C})}),Object(O.jsx)("img",{onClick:function(){return d()},className:"header__compare",src:x?v:j,alt:"Compare"})]}),Object(O.jsx)("h3",{className:"header__title",children:C}),Object(O.jsx)("p",{className:"header__text",children:q}),Object(O.jsxs)("div",{className:"info",children:[Object(O.jsxs)("div",{className:"row info__colors",children:[Object(O.jsxs)("div",{className:"info__header",onClick:function(){return a()},children:[Object(O.jsx)("div",{className:"info__title",children:"\u0426\u0432\u0435\u0442"}),Object(O.jsx)("img",{className:D,src:b,alt:"Arrow"})]}),Object(O.jsx)("div",{className:P,children:V.map((function(e){return Object(O.jsx)("div",{onClick:function(){return n(e)},className:"info__title info__option",children:e},e)}))})]}),Object(O.jsxs)("h5",{children:[s," \u0433\u0440\u043d"]})]}),Object(O.jsx)("div",{className:"form",children:w.map((function(e,t){return Object(O.jsxs)("label",{className:"container",children:[Object(O.jsx)("input",{type:"radio",value:e.volume,onChange:function(){return r({volume:e.volume,price:e.price})},checked:i.volume===e.volume}),e.volume,Object(O.jsx)("span",{className:"checkmark"})]},t)}))}),Object(O.jsxs)("div",{className:"card__buttons",children:[Object(O.jsx)(f,{quantity:o,addQuantity:l,removeQuantity:u}),Object(O.jsx)(p,{handleClick:A,btnName:"\u041a\u0443\u043f\u0438\u0442\u044c",disable:h})]})]})},C={addToCart:function(e){return{type:"CART:ADD_TO_CART",payload:e}},removeToCart:function(e){return{type:"CART:REMOVE_TO_CART",payload:e}}},q={addToComparison:function(e){return{type:"COMPARE:ADD_TO_COMPARISON",payload:e}}},w=function(e){var t=e.item,c=Object(l.f)(),n=Object(s.b)(),r=Object(s.c)((function(e){return e})),i=r.cart,o=r.compare,d=Object(a.useState)(!1),m=Object(u.a)(d,2),j=m[0],v=m[1],b=Object(a.useState)("\u0416\u0435\u043b\u0442\u044b\u0439"),p=Object(u.a)(b,2),f=p[0],x=p[1],A=Object(a.useState)({volume:"100 \u043c\u043b",price:200}),h=Object(u.a)(A,2),g=h[0],w=h[1],V=Object(a.useState)(1),P=Object(u.a)(V,2),D=P[0],X=P[1],y=Object(a.useState)(200),L=Object(u.a)(y,2),T=L[0],R=L[1],U=o.compare.map((function(e){return e.id})).includes(t.id),G=i.cart.map((function(e){return e.id})).includes(t.id),H=function(){v((function(e){return!e}))};return Object(O.jsx)(N,{item:t,colorsActive:j,handleClick:H,changeColor:function(e){x(e),H()},changeVolume:function(e){w(e),R(e.price*D)},data:g,price:T,quantity:D,addQuantity:function(){X((function(e){return e+1})),R(g.price*(D+1))},removeQuantity:function(){D>1&&(X((function(e){return e-1})),R(g.price*(D-1)))},addToComparison:function(){U?c.push("/compare"):n(q.addToComparison({id:t.id,img:t.img,title:t.title,color:f,structure:t.structure,volume:g.volume,price:g.price}))},compareInc:U,addToCart:function(){G||n(C.addToCart({id:t.id,img:t.img,title:t.title,color:f,volume:g.volume,price:g.price,quantity:D}))},cartInc:G})},V=(c(45),c.p+"static/media/delete.143df935.svg"),P=function(e){var t=e.cart,c=e.removeProducts;return Object(O.jsxs)("div",{className:"cart",children:[Object(O.jsx)("h1",{children:"\u041a\u043e\u0448\u0438\u043a"}),0===t.length&&Object(O.jsx)("h3",{children:"\u0412\u0430\u0448 \u043a\u043e\u0448\u0438\u043a \u043f\u0443\u0441\u0442\u0438\u0439"}),t.map((function(e){return Object(O.jsxs)("div",{className:"cart__product row",children:[Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"cart__block",children:Object(O.jsx)("img",{className:"cart__img",src:"/static/images/".concat(e.img),alt:e.title})}),Object(O.jsx)("h3",{className:"cart__title",children:e.title})]}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("h3",{className:"cart__item",children:["\u041a\u043e\u043b\u0456\u0440: ",e.color]}),Object(O.jsxs)("h3",{className:"cart__item",children:["\u0420\u043e\u0437\u043c\u0456\u0440: ",e.volume]}),Object(O.jsx)("div",{className:"cart__btn",children:Object(O.jsx)(f,{quantity:e.quantity})}),Object(O.jsx)("h5",{className:"cart__item",children:e.price}),Object(O.jsx)("img",{onClick:function(){return c(e.id)},className:"cart__icon",src:V,alt:""})]})]},e.id)}))]})},D=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.cart})).cart;return Object(O.jsx)(h,{children:Object(O.jsx)(P,{cart:t,removeProducts:function(t){e(C.removeToCart(t))}})})},X=(c(46),function(e){var t=e.compare;return Object(O.jsxs)("div",{className:"compare",children:[Object(O.jsx)("h1",{children:"\u041f\u043e\u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f"}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"compare__product",children:[Object(O.jsx)("div",{className:"compare__left"}),Object(O.jsx)("div",{className:"row",children:t.map((function(e){return Object(O.jsx)("div",{className:"compare__block",children:Object(O.jsx)("img",{className:"compare__img",src:"/static/images/".concat(e.img),alt:e.title})},e.id)}))})]}),Object(O.jsxs)("div",{className:"compare__product",children:[Object(O.jsx)("div",{className:"compare__left"}),Object(O.jsx)("div",{className:"row",children:t.map((function(e){return Object(O.jsx)("div",{className:"compare__text",children:Object(O.jsx)("h3",{children:e.title})},e.id)}))})]})]})]})}),y=function(){var e=Object(s.c)((function(e){return e.compare})).compare;return Object(O.jsx)(h,{children:Object(O.jsx)(X,{compare:e})})};var L=function(){return Object(O.jsx)(o.a,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)(g,{}),Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{exact:!0,path:"/",children:Object(O.jsx)(A,{})}),Object(O.jsx)(l.a,{path:"/cart",children:Object(O.jsx)(D,{})}),Object(O.jsx)(l.a,{path:"/compare",children:Object(O.jsx)(y,{})})]})]})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,49)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),r(e),i(e)}))},R=c(12),U=c(26),G=c(27),H=c(14),E=Object(R.createStore)(H.default,Object(U.composeWithDevTools)(Object(R.applyMiddleware)(G.a)));i.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(s.a,{store:E,children:Object(O.jsx)(L,{})})}),document.getElementById("root")),T()}},[[48,1,2]]]);
//# sourceMappingURL=main.279a6faf.chunk.js.map