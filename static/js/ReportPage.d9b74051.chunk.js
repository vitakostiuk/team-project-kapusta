"use strict";(self.webpackChunkteam_project_kapusta=self.webpackChunkteam_project_kapusta||[]).push([[370],{9567:function(e,n,t){t.d(n,{r:function(){return u}});var a,r=t(2791),i=["title","titleId"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},s.apply(this,arguments)}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function o(e,n){var t=e.title,o=e.titleId,u=c(e,i);return r.createElement("svg",s({width:18,height:12,viewBox:"0 0 18 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":o},u),t?r.createElement("title",{id:o},t):null,a||(a=r.createElement("path",{d:"M18 5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7H18V5Z",fill:"#FF751D"})))}var u=r.forwardRef(o);n.Z=t.p+"static/media/arrow-left.420a10fd9c9a52c9b30cbb0be1b001bf.svg"},2087:function(e,n,t){t.d(n,{Z:function(){return N}});var a=t(4165),r=t(5861),i=t(885),s=t(2791),c=t(8687),o="PopUp_popUpContainer__6yIi2",u="PopUp_popUpText__p1dK8",l="PopUp_popUpTextBottom__Mk8bs PopUp_popUpText__p1dK8",d=t(184),p=function(){return(0,d.jsxs)("div",{className:o,children:[(0,d.jsx)("p",{className:u,children:"Hello! To get started, enter the current balance of your account!"}),(0,d.jsx)("p",{className:l,children:"You can't spend money until you have it :)"})]})},f="BtnConfirm_buttonDisabled__08sG7",h="BtnConfirm_button__nmndo BtnConfirm_buttonDisabled__08sG7",m=function(e){var n=e.isDisabledBtn;return(0,d.jsx)("button",{type:"submit",className:n?f:h,disabled:n,children:"Confirm"})},x=t(3855).u.injectEndpoints({endpoints:function(e){return{getBalance:e.query({query:function(){return"/api/users/balance"},providesTags:["transactions"]}),changeBalance:e.mutation({query:function(e){return{url:"/api/users/balance",method:"PATCH",body:e}}})}}}),_=x.useGetBalanceQuery,v=x.useChangeBalanceMutation,y=t(7906),g=t(6158),j="BalanceComp_form__VjdYG",b="BalanceComp_label__TVdDx",C="BalanceComp_btnsContainer__8Y1eX",E="BalanceComp_input__2dWo4",N=function(){var e=_({},{refetchOnMountOrArgChange:!0}),n=e.data,t=e.isSuccess,o=(0,s.useState)(""),u=(0,i.Z)(o,2),l=u[0],f=u[1],h=(0,s.useState)(!0),x=(0,i.Z)(h,2),N=x[0],B=x[1],T=(0,s.useState)(!0),w=(0,i.Z)(T,2),S=w[0],k=w[1],Z=(0,c.useDispatch)(),F=v(),I=(0,i.Z)(F,1)[0];(0,s.useEffect)((function(){t&&(Z((0,y.L)((0,g.R)(n))),f((0,g.R)(n)))}),[n,Z,t]);var P=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(n){var t,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),f((0,g.R)(l)),k(!1),e.prev=3,e.next=6,I({balance:Number(l)});case 6:t=e.sent,r=t.data,Z((0,y.L)((0,g.R)(r.balance))),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0);case 14:B(!0);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(n){return e.apply(this,arguments)}}();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("form",{className:j,onSubmit:P,children:[(0,d.jsx)("label",{htmlFor:"balance",className:b,children:"Balance:"}),(0,d.jsxs)("div",{className:C,children:[(0,d.jsx)("input",{id:"#balance",className:E,type:"text",name:"balance",value:l,onChange:function(e){f(e.target.value),B(!1)},minLength:"1",pattern:"^[0-9]+$",title:"Field may contain only numbers from 0 to 9",required:!0,onFocus:function(){0===n&&f("")},readOnly:0!==n}),(0,d.jsx)(m,{isDisabledBtn:N})]})]}),0===n&&S&&(0,d.jsx)(p,{})]})}},6158:function(e,n,t){t.d(n,{R:function(){return a}});var a=function(e){return Number(e).toLocaleString("cs-CZ",{style:"currency",currency:"UAH"}).replace(",",".")}},5519:function(e,n,t){t.r(n),t.d(n,{default:function(){return de}});var a,r=t(2791),i=t(3504),s="ButtonGoMain_link__mIDYP",c="ButtonGoMain_container__3KBRk",o="ButtonGoMain_text__jccAa",u=t(9567),l=t(184),d=function(){return(0,l.jsx)("div",{className:c,children:(0,l.jsxs)(i.rU,{to:"../",className:s,children:[(0,l.jsx)("img",{src:u.Z,alt:"big arrow"}),(0,l.jsx)("p",{className:o,children:"Main page"})]})})},p=t(2087),f=t(885),h={container:"Period_container__CCvRw",period:"Period_period__km5ew",periodWrapper:"Period_periodWrapper__NnTt9",date:"Period_date__Be2q0",year:"Period_year__fuREC",btn:"Period_btn__ELVTg"},m=t(168),x=t(7691),_=x.ZP.img(a||(a=(0,m.Z)(["\n  transform: rotate(",");\n  width: 6px;\n  align-self: center;\n  display: block;\n"])),(function(e){return e.rotate?"180deg":"0"}));var v=t.p+"static/media/arrow-small-left.ed65ae738f78a2df12fa63ecf435fb95.svg",y=function(e){var n=e.rotate;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(_,{rotate:n,src:v})})},g=t(8687),j=t(571),b=function(){var e=(0,r.useState)(0),n=(0,f.Z)(e,2),t=n[0],a=n[1],i=(0,r.useState)(""),s=(0,f.Z)(i,2),c=s[0],o=s[1],u=(0,g.useDispatch)();(0,r.useEffect)((function(){u((0,j.a)({month:t,year:c}))}),[u,t,c]),(0,r.useEffect)((function(){var e=(new Date).getMonth();a(e);var n=(new Date).getFullYear();o(n)}),[]);return(0,l.jsxs)("div",{className:h.container,children:[(0,l.jsx)("p",{className:h.period,children:"Current period:"}),(0,l.jsxs)("div",{className:h.periodWrapper,children:[(0,l.jsx)("button",{className:h.btn,onClick:function(){if(0===t)return o(c-1),void a(11);a(t-1)},children:(0,l.jsx)(y,{})}),(0,l.jsxs)("div",{className:h.date,children:[(0,l.jsx)("p",{className:h.month,children:["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"][t]}),(0,l.jsx)("p",{className:h.year,children:c})]}),(0,l.jsx)("button",{className:h.btn,onClick:function(){if(11===t)return o(c+1),void a(0);a(t+1)},children:(0,l.jsx)(y,{rotate:"true"})})]})]})},C="BalanceContainer_balance__YdBLZ",E="BalanceContainer_container__auTW-",N=function(){return(0,l.jsxs)("div",{className:E,children:[(0,l.jsx)(d,{}),(0,l.jsxs)("div",{className:C,children:[(0,l.jsx)(b,{}),(0,l.jsx)(p.Z,{})]})]})},B="BalanceChange_container__F3km-",T="BalanceChange_sumWrapper__mfoXd",w="BalanceChange_incrementWrapper__-hCpJ",S="BalanceChange_decrementWrapper__kXyfL",k="BalanceChange_increment__bjycF",Z="BalanceChange_decrement__po5-8",F="BalanceChange_subtitle__BMxFr",I=function(){var e=(0,g.useSelector)((function(e){return e.expenses}));return(0,l.jsx)("div",{className:B,children:(0,l.jsxs)("div",{className:T,children:[(0,l.jsxs)("div",{className:S,children:[(0,l.jsx)("p",{className:F,children:"Expenses:"}),(0,l.jsx)("p",{className:Z,children:"- ".concat(e.expenses," uah.")})]}),(0,l.jsxs)("div",{className:w,children:[(0,l.jsx)("p",{className:F,children:"Income:"}),(0,l.jsx)("p",{className:k,children:"+ ".concat(e.income," uah.")})]})]})})},P="ExpIncContainer_container__9EEY8",L="ExpIncContainer_noData__iZH-t",O="IncomeExpensesChange_btn__1VHFc",M="IncomeExpensesChange_title__5VZ7U",R="IncomeExpensesChange_text__XfQ1m",D=function(e){var n=e.onChange,t=e.incExp;return(0,l.jsxs)("div",{className:M,children:[(0,l.jsx)("button",{className:O,onClick:n,children:(0,l.jsx)(y,{})}),(0,l.jsx)("p",{className:R,children:t}),(0,l.jsx)("button",{className:O,onClick:n,children:(0,l.jsx)(y,{rotate:"true"})})]})},q=t(2982),U="Expenses_categories__PCo8i",A="Category_category__bl5yk",G="Category_btn__lRW8+",K="Category_btn_active__h5UK5",W="Category_sum__bzr9-",Y="Category_nameOfCategory__acXvF",H="Category_picture__xqerT";var Q,X=t.p+"static/media/sprite-icons.f211b3d267a1875dff4651062c262fc2.svg",V=function(e){var n=e.details,t=e.categories,a=e.onChange,r=e.active;return(0,l.jsxs)("li",{className:A,children:[(0,l.jsx)("p",{className:W,children:n}),(0,l.jsx)("button",{className:r?K:G,onClick:function(){a(t)},children:(0,l.jsx)("svg",{className:H,children:(0,l.jsx)("use",{xlinkHref:"".concat(X,"#icon-").concat(t)})})}),(0,l.jsx)("p",{className:Y,children:t})]})},J=function(e){var n=e.data,t=e.onChange,a=(0,r.useState)(""),i=(0,f.Z)(a,2),s=i[0],c=i[1],o=(0,r.useState)([]),u=(0,f.Z)(o,2),d=u[0],p=u[1],h=(0,r.useState)([]),m=(0,f.Z)(h,2),x=m[0],_=m[1];return(0,r.useEffect)((function(){if(null!==n&&void 0!==n&&n.length){var e=(0,q.Z)(n).sort((function(e,n){return n.summary-e.summary}));e.length&&(c(e[0]._id),p(e))}}),[n,x]),(0,r.useEffect)((function(){var e,a=null===(e=(0,q.Z)(n))||void 0===e?void 0:e.find((function(e){return e.categories===s}));_((null===a||void 0===a?void 0:a.data)||[]),t(x)}),[s]),(0,l.jsx)(l.Fragment,{children:n&&(0,l.jsx)("ul",{className:U,children:d.map((function(e,n){return(0,l.jsx)(V,{active:e.categories===s,details:e.summary,categories:e.categories,onChange:c},n)}))})})},z=t(7941),$=t(601),ee=t(1380),ne=t(466),te=t(2891),ae=t(5400),re=x.ZP.div(Q||(Q=(0,m.Z)(["\n  margin: 20px auto 0 -60px;\n"]))),ie=function(e){var n=e.list,t=(0,r.useState)([]),a=(0,f.Z)(t,2),i=a[0],s=a[1];(0,r.useEffect)((function(){var e=n.reduce((function(e,n){var t=n.description.split(" ")[0];return t.length>8&&(t=t.slice(0,8)),[{label:t,value:n.value}].concat((0,q.Z)(e))}),[]);s(e)}),[n]);var c=i.reduce((function(e,n){return n.value>e?n.value:e}),0);return window.innerWidth<768?(0,l.jsx)(re,{children:(0,l.jsx)($.h,{width:"100%",height:440,children:(0,l.jsxs)(ee.v,{data:i.sort((function(e,n){return n.value-e.value})),layout:"vertical",barSize:15,barCategoryGap:200,margin:{bottom:0,left:0,top:0},children:[(0,l.jsx)(ne.K,{type:"number",hide:!0}),(0,l.jsx)(te.B,{yAxisId:0,type:"category",width:50,dataKey:"label",axisLine:!1,tickLine:!1,textAnchor:"start",tick:{transform:"translate(8, -18)"},scaleToFit:!0}),(0,l.jsx)(te.B,{yAxisId:1,type:"category",width:50,dataKey:"value",axisLine:!1,tickLine:!1,orientation:"right",tick:function(e){var n=e.x,t=e.y,a=e.width,r=e.height,i=e.type,s=e.fill,o=(e.index,e.payload),u=n/c,d=n-(c-o.value)*u-50;return(0,l.jsx)(z.x,{type:i,fill:s,width:a,height:r,x:d>=n?n:d<.3*n?.3*n:d,y:t-12,children:o.value})}}),(0,l.jsx)(ae.$,{dataKey:"value",fill:"#FF751D"})]})})}):window.innerWidth>767?(0,l.jsx)(re,{children:(0,l.jsx)($.h,{width:"100%",height:422,children:(0,l.jsxs)(ee.v,{data:i.sort((function(e,n){return n.value-e.value})),barSize:38,barCategoryGap:100,barGap:25,margin:{bottom:0,left:70,top:0},children:[(0,l.jsx)(te.B,{type:"number",hide:!0}),(0,l.jsx)(ne.K,{xAxisId:0,type:"category",height:30,dataKey:"label",axisLine:!1,tickLine:!1,scaleToFit:!0}),(0,l.jsx)(ne.K,{xAxisId:1,type:"category",height:50,dataKey:"value",axisLine:!1,tickLine:!1,orientation:"top",tick:function(e){var n=e.x,t=e.y,a=e.width,r=e.height,i=e.type,s=e.fill,o=e.payload,u=t/c,d=t+(c-o.value)*u*7;return(0,l.jsx)(z.x,{type:i,fill:s,width:a,height:r,x:n-16,y:d<=t?t:d,children:o.value})}}),(0,l.jsx)(ae.$,{dataKey:"value",fill:"#FF751D"})]})})}):void 0},se=t(9136),ce=t(5707),oe=function(){var e=(0,r.useState)("EXPENSES"),n=(0,f.Z)(e,2),t=n[0],a=n[1],i=(0,r.useState)([]),s=(0,f.Z)(i,2),c=s[0],o=s[1],u=(0,r.useState)([]),d=(0,f.Z)(u,2),p=d[0],h=d[1],m=(0,g.useDispatch)(),x=(0,g.useSelector)((function(e){return e.dateReport})),_=(0,se._T)(x).data;(0,r.useEffect)((function(){var e,n,a,r,i,s;if(_){var c=null===_||void 0===_||null===(e=_.transactions)||void 0===e?void 0:e.findIndex((function(e){return e.income})),u=null===_||void 0===_||null===(n=_.transactions)||void 0===n?void 0:n.findIndex((function(e){return!e.income}));m((0,ce.T5)((null===(a=_.transactions[c])||void 0===a?void 0:a.total)||0)),m((0,ce.bF)((null===(r=_.transactions[u])||void 0===r?void 0:r.total)||0)),o("INCOME"===t?null===(i=_.transactions[c])||void 0===i?void 0:i.reports:null===(s=_.transactions[u])||void 0===s?void 0:s.reports)}}),[_,m,t]);return console.log(p),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:P,children:[(0,l.jsx)(D,{onChange:function(){switch(t){case"EXPENSES":a("INCOME");break;case"INCOME":a("EXPENSES");break;default:return}},incExp:t}),_&&(0,l.jsx)(J,{data:c,onChange:function(e){h(e)}})]}),(null===p||void 0===p?void 0:p.length)>0?(0,l.jsx)(ie,{list:p}):(0,l.jsx)("div",{className:L,children:"There are no transactions for selected period."})]})},ue={},le=function(){return(0,l.jsxs)("section",{className:ue.section,children:[(0,l.jsx)(N,{}),(0,l.jsx)(I,{}),(0,l.jsx)(oe,{})]})},de=function(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(le,{})})}},9136:function(e,n,t){t.d(n,{C4:function(){return o},Fp:function(){return d},_T:function(){return i},_x:function(){return s},cm:function(){return c},xR:function(){return u},yC:function(){return l},ym:function(){return r}});var a=t(3855).u.injectEndpoints({endpoints:function(e){return{getTransactions:e.query({query:function(){return"/api/categories/"}}),fullTransactions:e.query({query:function(e){return"/api/transactions/?month=".concat(e.month,"&year=").concat(e.year)}}),getTransactionsByExpense:e.query({query:function(e){return"/api/transactions/expense/?day=".concat(e.day,"month=").concat(e.month,"&year=").concat(e.year)}}),getTransactionsByIncome:e.query({query:function(e){return"/api/transactions/income/?day=".concat(e.day,"month=").concat(e.month,"&year=").concat(e.year)}}),getSummaryTransactions:e.query({query:function(e){return"/api/transactions/reports/".concat(e)},providesTags:["transactions"]}),setTransactionExpense:e.mutation({query:function(e){return{url:"/api/transactions/expense",method:"POST",body:e}},invalidatesTags:["transactions"]}),setTransactionIncome:e.mutation({query:function(e){return{url:"/api/transactions/income",method:"POST",body:e}},invalidatesTags:["transactions"]}),deleteTransaction:e.mutation({query:function(e){return{url:"/api/transactions/".concat(e),method:"DELETE"}},invalidatesTags:["transactions"]})}}}),r=a.useGetTransactionsQuery,i=a.useFullTransactionsQuery,s=a.useGetTransactionsByExpenseQuery,c=a.useGetTransactionsByIncomeQuery,o=a.useSetTransactionExpenseMutation,u=a.useSetTransactionIncomeMutation,l=a.useDeleteTransactionMutation,d=a.useGetSummaryTransactionsQuery;a.useGetTransactionsByExpenseAndDataQuery}}]);
//# sourceMappingURL=ReportPage.d9b74051.chunk.js.map