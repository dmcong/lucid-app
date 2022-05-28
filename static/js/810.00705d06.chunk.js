(globalThis.webpackChunklucid=globalThis.webpackChunklucid||[]).push([[810],{65090:(e,t,s)=>{"use strict";s.d(t,{E5:()=>c,T8:()=>l,ZP:()=>d});var a=s(19289),n=s(95418);const r="accounts",l=(0,a.createAsyncThunk)(`${r}/getAccounts`,(async e=>{let{owner:t}=e;if(!n.account.isAddress(t))throw new Error("Invalid owner/wallet address");const{splt:s}=window.sentre,a=n.account.fromAddress(t),{value:r}=await s.connection.getTokenAccountsByOwner(a,{programId:s.spltProgramId});let l={};return r.forEach((e=>{let{pubkey:t,account:{data:a}}=e;const n=t.toBase58(),r=s.parseAccountData(a);return l[n]=r})),l})),i=(0,a.createAsyncThunk)(`${r}/getAccount`,(async(e,t)=>{let{address:s}=e,{getState:a}=t;if(!n.account.isAddress(s))throw new Error("Invalid account address");const{accounts:{[s]:r}}=a();if(r)return{[s]:r};const{splt:l}=window.sentre;return{[s]:await l.getAccountData(s)}})),c=(0,a.createAsyncThunk)(`${r}/upsetAccount`,(async e=>{let{address:t,data:s}=e;if(!n.account.isAddress(t))throw new Error("Invalid address");if(!s)throw new Error("Data is empty");return{[t]:s}})),o=(0,a.createAsyncThunk)(`${r}/deleteAccount`,(async e=>{let{address:t}=e;if(!n.account.isAddress(t))throw new Error("Invalid address");return{address:t}})),d=(0,a.createSlice)({name:r,initialState:{},reducers:{},extraReducers:e=>{e.addCase(l.fulfilled,((e,t)=>{let{payload:s}=t;return s})).addCase(i.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(c.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(o.fulfilled,((e,t)=>{let{payload:s}=t;delete e[s.address]}))}}).reducer},5105:(e,t,s)=>{"use strict";s.d(t,{Xt:()=>o,Z9:()=>c,ZP:()=>d,fL:()=>i});var a=s(19289),n=s(95418),r=s(3007);const l="flags",i=(0,a.createAsyncThunk)("flags/loadVisited",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet");const l=new r.Z(a).createInstance("sentre");return{visited:await l.getItem("visited")||!1}})),c=(0,a.createAsyncThunk)("flags/updateVisited",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet");const l=new r.Z(a).createInstance("sentre");return await l.setItem("visited",e),{visited:e}})),o=(0,a.createAsyncThunk)("flags/updateLoading",(async e=>({loading:e}))),d=(0,a.createSlice)({name:l,initialState:{visited:!0,loading:!0},reducers:{},extraReducers:e=>{e.addCase(i.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(c.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(o.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},87358:(e,t,s)=>{"use strict";s.d(t,{Qy:()=>y,ZP:()=>v,u5:()=>w});var a=s(55754),n=s(19289),r=s(70103),l=s(85912),i=s(87482),c=s(5105),o=s(58851),d=s(21028),u=s(65090),h=s(33015),p=s(92871),f=s(33361),g=s(51865);(0,a.createStoreHook)(r.RootContext);const w=(0,a.createDispatchHook)(r.RootContext),y=(0,a.createSelectorHook)(r.RootContext),m=(0,n.configureStore)({middleware:e=>e(l.h),devTools:(0,l.$)("sentre"),reducer:{ui:i.ZP,flags:c.ZP,page:o.ZP,wallet:d.ZP,accounts:u.ZP,mints:h.ZP,pools:p.ZP,search:f.ZP,walkthrough:g.ZP}}),v=179==s.j?m:null},58851:(e,t,s)=>{"use strict";s.d(t,{T$:()=>y,Xg:()=>f,ZP:()=>b,eI:()=>m,ij:()=>w,mw:()=>g,qS:()=>v});var a=s(19289),n=s(95418),r=s(3007),l=s(55852),i=s(63805);const{register:{senreg:c,extra:o,devAppId:d}}=l.Z,u=(e,t)=>t&&Array.isArray(t)?("development"!==i.OB||t.includes(d)||t.unshift(d),t.filter((t=>e[t]))):[],h="page",p={register:{},appIds:[]},f=(0,a.createAsyncThunk)("page/loadRegister",(async()=>({register:{...await(async()=>{try{const e=await fetch(c);return await e.json()}catch(e){return{}}})(),...o}}))),g=(0,a.createAsyncThunk)("page/installManifest",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a},page:{appIds:r,register:l}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet.");if(r.includes(e.appId))throw new Error("Cannot run sandbox for an installed application.");const i=[...r];i.push(e.appId);const c={...l};return c[e.appId]=e,{appIds:i,register:c}})),w=(0,a.createAsyncThunk)("page/loadPage",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a},page:{register:l}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet.");const i=new r.Z(a).createInstance("sentre");return{appIds:u(l,await i.getItem("appIds")||p.appIds)}})),y=(0,a.createAsyncThunk)("page/updatePage",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a},page:{register:l}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet.");e=u(l,e);const i=new r.Z(a).createInstance("sentre");return await i.setItem("appIds",e),{appIds:e}})),m=(0,a.createAsyncThunk)("page/installApp",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a},page:{appIds:l}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet.");if(l.includes(e))return{};const i=[...l];i.push(e);const c=new r.Z(a).createInstance("sentre");return await c.setItem("appIds",i),{appIds:i}})),v=(0,a.createAsyncThunk)("page/uninstallApp",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a},page:{appIds:l}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet.");if(!l.includes(e))return{};const i=l.filter((t=>t!==e)),c=new r.Z(a),o=c.createInstance("sentre");return await o.setItem("appIds",i),await c.dropInstance(e),{appIds:i}})),b=(0,a.createSlice)({name:h,initialState:p,reducers:{},extraReducers:e=>{e.addCase(f.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(g.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(w.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(y.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(m.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(v.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},92871:(e,t,s)=>{"use strict";s.d(t,{E6:()=>d,ZP:()=>u,d2:()=>c});var a=s(19289),n=s(95418),r=s(55852);const{sol:{taxmanAddress:l}}=r.Z,i="pools",c=(0,a.createAsyncThunk)("pools/getPools",(async()=>{const{swap:e}=window.sentre,t=await e.connection.getProgramAccounts(e.swapProgramId,{filters:[{dataSize:257},{memcmp:{bytes:l,offset:65}}]});let s={};return t.forEach((t=>{let{pubkey:a,account:{data:n}}=t;const r=a.toBase58(),l=e.parsePoolData(n);s[r]=l})),s})),o=(0,a.createAsyncThunk)("pools/getPool",(async(e,t)=>{let{address:s}=e,{getState:a}=t;if(!n.account.isAddress(s))throw new Error("Invalid pool address");const{pools:{[s]:r}}=a();if(r)return{[s]:r};const{swap:l}=window.sentre;return{[s]:await l.getPoolData(s)}})),d=(0,a.createAsyncThunk)("pools/upsetPool",(async e=>{let{address:t,data:s}=e;if(!n.account.isAddress(t))throw new Error("Invalid pool address");if(!s)throw new Error("Data is empty");return{[t]:s}})),u=(0,a.createSlice)({name:i,initialState:{},reducers:{},extraReducers:e=>{e.addCase(c.fulfilled,((e,t)=>{let{payload:s}=t;return s})).addCase(o.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(d.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},33361:(e,t,s)=>{"use strict";s.d(t,{K4:()=>i,ZP:()=>o,sO:()=>l,yx:()=>r});var a=s(19289);const n="search",r=(0,a.createAsyncThunk)("search/setVisible",(async e=>({visible:e}))),l=(0,a.createAsyncThunk)("search/setValue",(async e=>({value:e}))),i=(0,a.createAsyncThunk)("search/setLoading",(async e=>({loading:e}))),c=(0,a.createAsyncThunk)("search/setDisabled",(async e=>({disabled:e}))),o=(0,a.createSlice)({name:n,initialState:{visible:!1,value:"",loading:!1,disabled:!1},reducers:{},extraReducers:e=>{e.addCase(r.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(l.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(i.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(c.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},87482:(e,t,s)=>{"use strict";s.d(t,{AY:()=>u,Dc:()=>i,SI:()=>c,TK:()=>d,ZP:()=>h,zi:()=>o});var a=s(19289);const n=()=>{const e=window.innerWidth;return e<576?"xs":e<768?"sm":e<992?"md":e<1200?"lg":e<1400?"xl":"xxl"},r="ui",l={theme:window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark",width:window.innerWidth,infix:n(),touchable:"ontouchstart"in window||navigator.maxTouchPoints>0,visibleActionCenter:!1,visibleInstaller:!1,background:{light:"",dark:""}},i=(0,a.createAsyncThunk)("ui/setTheme",(async e=>({theme:e}))),c=(0,a.createAsyncThunk)("ui/resize",(async()=>({width:window.innerWidth,infix:n()}))),o=(0,a.createAsyncThunk)("ui/setVisibleActionCenter",(async e=>({visibleActionCenter:e}))),d=(0,a.createAsyncThunk)("ui/setVisibleInstaller",(async e=>({visibleInstaller:e}))),u=(0,a.createAsyncThunk)("ui/setBackground",(async e=>({background:e}))),h=(0,a.createSlice)({name:r,initialState:l,reducers:{},extraReducers:e=>{e.addCase(i.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(c.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(o.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(d.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(u.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},51865:(e,t,s)=>{"use strict";s.d(t,{Gm:()=>n,Rw:()=>i,ZP:()=>c});var a=s(19289);let n;!function(e){e[e.Default=0]="Default",e[e.NewComer=1]="NewComer"}(n||(n={}));const r="walkthrough",l={type:n.Default,run:!1,step:0},i=(0,a.createAsyncThunk)(`${r}/setWalkthrough`,(async e=>({...e}))),c=(0,a.createSlice)({name:r,initialState:l,reducers:{},extraReducers:e=>{e.addCase(i.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},21028:(e,t,s)=>{"use strict";s.d(t,{Dx:()=>u,K8:()=>p,UP:()=>h,Wh:()=>d,ZP:()=>g,co:()=>f});var a=s(19289),n=s(95418),r=s(55852),l=s(90951);const i=async e=>{const{sol:{node:t,spltAddress:s,splataAddress:a,swapAddress:i}}=r.Z;window.sentre={wallet:e||new l.kI,lamports:new n.Lamports(t),splt:new n.SPLT(s,a,t),swap:new n.Swap(i,s,a,t)}},c="wallet",o={visible:!1,address:"",lamports:BigInt(0)},d=(0,a.createAsyncThunk)("wallet/openWallet",(async()=>({visible:!0}))),u=(0,a.createAsyncThunk)("wallet/closeWallet",(async()=>({visible:!1}))),h=(0,a.createAsyncThunk)("wallet/connectWallet",(async e=>{if(!e)throw new Error("Invalid wallet instance");await i(e);const t=await e.getAddress(),s=await window.sentre.lamports.getLamports(t);return{address:t,lamports:BigInt(s),visible:!1}})),p=(0,a.createAsyncThunk)("wallet/updateWallet",(async e=>{let{lamports:t}=e;return{lamports:t}})),f=(0,a.createAsyncThunk)("wallet/disconnectWallet",(async()=>{await(async()=>{var e;null!==(e=window.sentre)&&void 0!==e&&e.wallet&&window.sentre.wallet.disconnect(),await i()})(),window.location.reload()})),g=(0,a.createSlice)({name:c,initialState:o,reducers:{},extraReducers:e=>{e.addCase(d.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(u.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(h.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(p.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(f.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},90951:(e,t,s)=>{"use strict";s.d(t,{fp:()=>g.Z,IW:()=>o.Z,kI:()=>a.Z,X5:()=>c,j1:()=>d.Z,j7:()=>n.Z,nq:()=>h.Z,Lc:()=>f.Z,i_:()=>p.Z,KE:()=>u.Z});var a=s(58181),n=s(99715),r=s(95418),l=s(97429).Buffer;class i extends n.Z{constructor(e,t){super(i.extractSecretKey(e,t),t)}}i.extractSecretKey=(e,t)=>{const s=r.account.fromKeystore(e,t);if(!s)throw new Error("Invalid ketstore or password");return l.from(s.secretKey).toString("hex")};const c=i;var o=s(6051),d=s(37344),u=s(2491),h=s(13974),p=s(31669),f=s(60766),g=s(80781)},85912:(e,t,s)=>{"use strict";s.d(t,{$:()=>i,h:()=>c});var a=s(71256),n=s(48744),r=s.n(n),l=s(97429).Buffer;const i=e=>!1;BigInt.prototype.toJSON=function(){return this.toString()};const c={serializableCheck:{isSerializable:e=>"undefined"===typeof e||null===e||"string"===typeof e||"boolean"===typeof e||"number"===typeof e||Array.isArray(e)||(e=>{if(null===e)return!1;const t=Object.getPrototypeOf(e);return null!==t&&null===Object.getPrototypeOf(t)})(e)||"bigint"===typeof e||e instanceof a.PublicKey||e instanceof r()||e instanceof l}}},63805:(e,t,s)=>{"use strict";s.d(t,{Bv:()=>c,Eu:()=>i,OB:()=>r,Sq:()=>u,ef:()=>l,f4:()=>d});var a=s(71256),n=s(53933);const r="production",l=(()=>{switch(n.Z.get("network")){case"devnet":return"devnet";case"testnet":return"testnet";default:return"mainnet"}})(),i=e=>(n.Z.set("network",e),window.location.reload()),c=(()=>{switch(l){case"devnet":return 103;case"testnet":return 102;default:return 101}})(),o={devnet:["https://api.devnet.solana.com","https://psytrbhymqlkfrhudd.dev.genesysgo.net:8899/"],testnet:["https://api.testnet.solana.com"],mainnet:["https://ssc-dao.genesysgo.net/","https://solana-api.projectserum.com","https://solitary-autumn-water.solana-mainnet.quiknode.pro/dcbac9d444818a20ac583541dec35b44c6840888/"]},d=(()=>{const e=o[l],t=e[Math.floor(Math.random()*e.length)];return console.log("Debug OS RPC:",t),t})(),u=async e=>{const t=new a.Connection(e),s=Date.now();await t.getVersion();return Date.now()-s}},45268:(e,t,s)=>{"use strict";s.d(t,{sA:()=>p,kU:()=>g,l$:()=>m,uR:()=>w,PG:()=>v,p:()=>y,Xn:()=>f});var a=s(95418),n=s(16200),r=s.n(n),l=s(63805);const i={ttl:3e4},c={limit:{calls:10,time:1e3},cache:i};class o{constructor(e){this.key="",this.resolveQueue=[],this.rejectQueue=[],this.key=e}add(e,t){this.resolveQueue.push(e),this.rejectQueue.push(t)}resolves(e){for(;this.resolveQueue.length>0;){this.resolveQueue.shift()(e)}}rejects(e){for(;this.rejectQueue.length>0;){this.rejectQueue.shift()(e)}}}class d{static set(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i;this.mapCache.set(e,t),setTimeout((()=>{this.mapCache.delete(e)}),s.ttl)}static get(e){return this.mapCache.get(e)}}d.mapCache=new Map;class u{static getSingleFlight(e){const t=JSON.stringify(e);if(this.mapInstance.has(t)){const e=this.mapInstance.get(t);if(e)return e}let s=new h(e);return this.mapInstance.set(t,s),s}static async load(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"===typeof e&&(e=JSON.stringify(e));let a=u.getSingleFlight(s);u.mapInstance.set(e,a);const n=new o(e);return a.load(n,t)}}u.mapInstance=new Map;class h{constructor(e){this.config=void 0,this.intervalRequest=void 0,this.timeLogs=[],this.mapRequestCalling=new Map,this.requestQueue=[],this.config=Object.assign(c,e)}async load(e,t){const s=d.get(e.key);if(s)return Promise.resolve(s);let a=!1,n=this.mapRequestCalling.get(e.key);return n||(n=e,a=!0,this.mapRequestCalling.set(n.key,n)),new Promise(((e,s)=>{if(!n)return s("Not found request!");n.add(e,s),a&&this.fetch(n,t)}))}fetch(e,t){if(!this.validateLimit())return this.addRequestQueue(e,t);this.createTimeLogs(),t().then((t=>{d.set(e.key,t,this.config.cache),e.resolves(t)})).catch((t=>{e.rejects(t)})).finally((()=>{this.mapRequestCalling.delete(e.key),this.fetchRequestQueue(t)}))}fetchRequestQueue(e){if(!this.validateLimit())return;const t=this.requestQueue.shift();t&&this.load(t,e),0===this.requestQueue.length&&this.intervalRequest&&clearInterval(this.intervalRequest)}addRequestQueue(e,t){var s;this.requestQueue.push(e),this.intervalRequest=setInterval((()=>{this.fetchRequestQueue(t)}),null===(s=this.config.limit)||void 0===s?void 0:s.time)}validateLimit(){return!0}createTimeLogs(){var e;if(!this.config.limit)return;const t=(new Date).getTime();this.timeLogs.push(t),this.timeLogs.length>(null===(e=this.config.limit)||void 0===e?void 0:e.calls)&&this.timeLogs.shift()}}const p=e=>new Promise((t=>setTimeout(t,e))),f=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...";return e.substring(0,t)+s+e.substring(e.length-t,e.length)},g=e=>a.account.isAddress(e)?`https://explorer.solana.com/address/${e}?cluster=${l.ef}`:`https://explorer.solana.com/tx/${e}?cluster=${l.ef}`,w=e=>e?r()(e):r()("0"),y=(e,t)=>{let s=Math.floor(16777215*Math.random());if(e){s=0;for(let t=0;t<e.length;t++)s=e.charCodeAt(t)+((s<<5)-s)}var a=[0,0,0];for(let r=0;r<3;r++){var n=s>>8*r&255;a[r]=n}return`rgba(${a[0]}, 100, ${a[1]},${t||1})`},m=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return u.load("fetchCGK"+e,(()=>a.utils.parseCGK(e)))},v=e=>e[Math.floor(Math.random()*e.length)]},46601:()=>{},89214:()=>{},85568:()=>{},52361:()=>{},94616:()=>{},55024:()=>{}}]);
//# sourceMappingURL=810.00705d06.chunk.js.map