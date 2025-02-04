(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{7:function(e,a,r){Promise.resolve().then(r.bind(r,5761))},5761:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return L}});var t=r(7437),n=r(2265),s=r(9820),i=r(3966),l=r(6840),c="Progress",[o,d]=(0,i.b)(c),[u,f]=o(c),m=n.forwardRef((e,a)=>{var r,n,s,i;let{__scopeProgress:c,value:o=null,max:d,getValueLabel:f=h,...m}=e;(d||0===d)&&!g(d)&&console.error((r="".concat(d),n="Progress","Invalid prop `max` of value `".concat(r,"` supplied to `").concat(n,"`. Only numbers greater than 0 are valid max values. Defaulting to `").concat(100,"`.")));let x=g(d)?d:100;null===o||j(o,x)||console.error((s="".concat(o),i="Progress","Invalid prop `value` of value `".concat(s,"` supplied to `").concat(i,"`. The `value` prop must be:\n  - a positive number\n  - less than the value passed to `max` (or ").concat(100," if no `max` prop is set)\n  - `null` or `undefined` if the progress is indeterminate.\n\nDefaulting to `null`.")));let p=j(o,x)?o:null,b=y(p)?f(p,x):void 0;return(0,t.jsx)(u,{scope:c,value:p,max:x,children:(0,t.jsx)(l.WV.div,{"aria-valuemax":x,"aria-valuemin":0,"aria-valuenow":y(p)?p:void 0,"aria-valuetext":b,role:"progressbar","data-state":v(p,x),"data-value":null!=p?p:void 0,"data-max":x,...m,ref:a})})});m.displayName=c;var x="ProgressIndicator",p=n.forwardRef((e,a)=>{var r;let{__scopeProgress:n,...s}=e,i=f(x,n);return(0,t.jsx)(l.WV.div,{"data-state":v(i.value,i.max),"data-value":null!==(r=i.value)&&void 0!==r?r:void 0,"data-max":i.max,...s,ref:a})});function h(e,a){return"".concat(Math.round(e/a*100),"%")}function v(e,a){return null==e?"indeterminate":e===a?"complete":"loading"}function y(e){return"number"==typeof e}function g(e){return y(e)&&!isNaN(e)&&e>0}function j(e,a){return y(e)&&!isNaN(e)&&e<=a&&e>=0}p.displayName=x;var b=r(3448);let N=n.forwardRef((e,a)=>{let{className:r,value:n,...s}=e;return(0,t.jsx)(m,{ref:a,className:(0,b.cn)("relative h-2 w-full overflow-hidden rounded-full bg-primary/20",r),...s,children:(0,t.jsx)(p,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:"translateX(-".concat(100-(n||0),"%)")}})})});N.displayName=m.displayName;var w=r(6471);let k=(0,w.Z)("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),M=(0,w.Z)("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]),_=(0,w.Z)("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);function Z(){return(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[(0,t.jsx)(s.Zb,{children:(0,t.jsx)(s.aY,{className:"pt-6",children:(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[(0,t.jsx)(k,{className:"h-8 w-8 text-primary"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"font-semibold",children:"Company Knowledge Base"}),(0,t.jsx)("p",{className:"text-sm text-muted-foreground",children:"Knowledge Base Name"})]})]})})}),(0,t.jsx)(s.Zb,{children:(0,t.jsxs)(s.aY,{className:"pt-6",children:[(0,t.jsxs)("div",{className:"flex items-center gap-4 mb-4",children:[(0,t.jsx)(M,{className:"h-8 w-8 text-primary"}),(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsx)("h3",{className:"font-semibold",children:"Storage Usage"}),(0,t.jsxs)("p",{className:"text-sm text-muted-foreground",children:[45,"GB of ",100,"GB"]})]})]}),(0,t.jsx)(N,{value:45,className:"h-2"})]})}),(0,t.jsx)(s.Zb,{children:(0,t.jsx)(s.aY,{className:"pt-6",children:(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[(0,t.jsx)(_,{className:"h-8 w-8 text-primary"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"font-semibold",children:"AWS S3"}),(0,t.jsx)("p",{className:"text-sm text-muted-foreground",children:"Cloud Service"})]})]})})})]})}var z=r(2381);let C=(0,r(535).j)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function H(e){let{className:a,variant:r,...n}=e;return(0,t.jsx)("div",{className:(0,b.cn)(C({variant:r}),a),...n})}var V=r(6086);let R=(0,w.Z)("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]),S=(0,w.Z)("EllipsisVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);function D(){return(0,t.jsxs)(s.Zb,{children:[(0,t.jsxs)(s.Ol,{className:"flex flex-row items-center justify-between",children:[(0,t.jsx)(s.ll,{children:"Documents"}),(0,t.jsxs)(z.z,{variant:"outline",children:[(0,t.jsx)(V.Z,{className:"mr-2 h-4 w-4"}),"Add Access Policy"]})]}),(0,t.jsx)(s.aY,{children:(0,t.jsx)("div",{className:"space-y-4",children:[{name:"Company Overview 2024.pdf",type:"PDF",size:"2.5 MB",lastModified:"2024-01-20"},{name:"Employee Handbook.docx",type:"DOCX",size:"1.8 MB",lastModified:"2024-01-19"},{name:"Q4 Financial Report.xlsx",type:"XLSX",size:"3.2 MB",lastModified:"2024-01-18"}].map((e,a)=>(0,t.jsxs)("div",{className:"flex items-center justify-between p-4 rounded-lg border",id:"34fdwc_".concat(a),children:[(0,t.jsxs)("div",{className:"flex items-center gap-4",id:"mi9bfg_".concat(a),children:[(0,t.jsx)(R,{className:"h-8 w-8 text-primary",id:"varpig_".concat(a)}),(0,t.jsxs)("div",{id:"q66g5v_".concat(a),children:[(0,t.jsx)("h4",{className:"font-medium",id:"pef4e9_".concat(a),children:e.name}),(0,t.jsxs)("div",{className:"flex items-center gap-2 text-sm text-muted-foreground",id:"5y0cni_".concat(a),children:[(0,t.jsx)(H,{variant:"secondary",id:"gbfdfx_".concat(a),children:e.type}),(0,t.jsx)("span",{id:"tsc4kq_".concat(a),children:e.size}),(0,t.jsx)("span",{id:"pes7s3_".concat(a),children:"•"}),(0,t.jsxs)("span",{id:"htgmv3_".concat(a),children:["Modified ",e.lastModified]})]})]})]}),(0,t.jsx)(z.z,{variant:"ghost",size:"icon",id:"zktjnk_".concat(a),children:(0,t.jsx)(S,{className:"h-4 w-4",id:"1k3j3u_".concat(a)})})]},a))})})]})}let P=(0,w.Z)("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]),A=(0,w.Z)("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);var O=r(6994);let B=(0,w.Z)("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),E=(0,w.Z)("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),q=(0,w.Z)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);var $=r(3145);function F(){let e=[{icon:P,label:"Dashboard"},{icon:A,label:"Documents"},{icon:O.Z,label:"Team"},{icon:B,label:"Settings"},{icon:E,label:"Help"}];return(0,t.jsxs)("div",{className:"w-64 border-r bg-card p-4",children:[(0,t.jsx)("div",{className:"flex items-center gap-2 mb-8",children:(0,t.jsx)($.default,{src:"/assets/sondra-image.png",alt:"Logo",width:180,height:30,className:"-mt-20"})}),(0,t.jsx)("nav",{className:"space-y-2 -mt-10",children:e.map((e,a)=>(0,t.jsxs)(z.z,{variant:"ghost",className:"w-full justify-start",id:"xp950i_".concat(a),children:[(0,t.jsx)(e.icon,{className:"mr-2 h-4 w-4",id:"po2msm_".concat(a)}),e.label]},a))}),(0,t.jsx)("div",{className:"absolute bottom-4 w-56",children:(0,t.jsxs)(z.z,{variant:"ghost",className:"w-full justify-start text-muted-foreground",children:[(0,t.jsx)(q,{className:"mr-2 h-4 w-4"}),"Logout"]})})]})}function L(){return(0,t.jsxs)("div",{className:"flex h-screen bg-background",children:[(0,t.jsx)(F,{}),(0,t.jsx)("main",{className:"flex-1 overflow-y-auto p-8",children:(0,t.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,t.jsx)(Z,{}),(0,t.jsx)(D,{})]})})]})}},2381:function(e,a,r){"use strict";r.d(a,{z:function(){return o}});var t=r(7437),n=r(2265),s=r(7053),i=r(535),l=r(3448);let c=(0,i.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),o=n.forwardRef((e,a)=>{let{className:r,variant:n,size:i,asChild:o=!1,...d}=e,u=o?s.g7:"button";return(0,t.jsx)(u,{className:(0,l.cn)(c({variant:n,size:i,className:r})),ref:a,...d})});o.displayName="Button"},9820:function(e,a,r){"use strict";r.d(a,{Ol:function(){return l},Zb:function(){return i},aY:function(){return o},ll:function(){return c}});var t=r(7437),n=r(2265),s=r(3448);let i=n.forwardRef((e,a)=>{let{className:r,...n}=e;return(0,t.jsx)("div",{ref:a,className:(0,s.cn)("rounded-xl border bg-card text-card-foreground shadow",r),...n})});i.displayName="Card";let l=n.forwardRef((e,a)=>{let{className:r,...n}=e;return(0,t.jsx)("div",{ref:a,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",r),...n})});l.displayName="CardHeader";let c=n.forwardRef((e,a)=>{let{className:r,...n}=e;return(0,t.jsx)("div",{ref:a,className:(0,s.cn)("font-semibold leading-none tracking-tight",r),...n})});c.displayName="CardTitle",n.forwardRef((e,a)=>{let{className:r,...n}=e;return(0,t.jsx)("div",{ref:a,className:(0,s.cn)("text-sm text-muted-foreground",r),...n})}).displayName="CardDescription";let o=n.forwardRef((e,a)=>{let{className:r,...n}=e;return(0,t.jsx)("div",{ref:a,className:(0,s.cn)("p-6 pt-0",r),...n})});o.displayName="CardContent",n.forwardRef((e,a)=>{let{className:r,...n}=e;return(0,t.jsx)("div",{ref:a,className:(0,s.cn)("flex items-center p-6 pt-0",r),...n})}).displayName="CardFooter"},3448:function(e,a,r){"use strict";r.d(a,{cn:function(){return s}});var t=r(1994),n=r(3335);function s(){for(var e=arguments.length,a=Array(e),r=0;r<e;r++)a[r]=arguments[r];return(0,n.m6)((0,t.W)(a))}},3966:function(e,a,r){"use strict";r.d(a,{b:function(){return s}});var t=r(2265),n=r(7437);function s(e,a=[]){let r=[],s=()=>{let a=r.map(e=>t.createContext(e));return function(r){let n=r?.[e]||a;return t.useMemo(()=>({[`__scope${e}`]:{...r,[e]:n}}),[r,n])}};return s.scopeName=e,[function(a,s){let i=t.createContext(s),l=r.length;r=[...r,s];let c=a=>{let{scope:r,children:s,...c}=a,o=r?.[e]?.[l]||i,d=t.useMemo(()=>c,Object.values(c));return(0,n.jsx)(o.Provider,{value:d,children:s})};return c.displayName=a+"Provider",[c,function(r,n){let c=n?.[e]?.[l]||i,o=t.useContext(c);if(o)return o;if(void 0!==s)return s;throw Error(`\`${r}\` must be used within \`${a}\``)}]},function(...e){let a=e[0];if(1===e.length)return a;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=r.reduce((a,{useScope:r,scopeName:t})=>{let n=r(e)[`__scope${t}`];return{...a,...n}},{});return t.useMemo(()=>({[`__scope${a.scopeName}`]:n}),[n])}};return r.scopeName=a.scopeName,r}(s,...a)]}},6840:function(e,a,r){"use strict";r.d(a,{WV:function(){return l},jH:function(){return c}});var t=r(2265),n=r(4887),s=r(7053),i=r(7437),l=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,a)=>{let r=t.forwardRef((e,r)=>{let{asChild:t,...n}=e,l=t?s.g7:a;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(l,{...n,ref:r})});return r.displayName=`Primitive.${a}`,{...e,[a]:r}},{});function c(e,a){e&&n.flushSync(()=>e.dispatchEvent(a))}},6086:function(e,a,r){"use strict";r.d(a,{Z:function(){return t}});let t=(0,r(6471).Z)("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]])},6994:function(e,a,r){"use strict";r.d(a,{Z:function(){return t}});let t=(0,r(6471).Z)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]])}},function(e){e.O(0,[878,43,971,117,744],function(){return e(e.s=7)}),_N_E=e.O()}]);