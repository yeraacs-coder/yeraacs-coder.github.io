import{c as i,j as r,i as o}from"./index-B3SBjB87.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=i("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=i("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=i("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]),h=({className:e,...t})=>r.jsx("div",{className:"w-full overflow-x-auto",children:r.jsx("table",{className:o("w-full caption-bottom text-sm",e),...t})}),f=e=>r.jsx("thead",{className:"border-b bg-muted/50",...e}),w=e=>r.jsx("tbody",{className:"[&_tr:last-child]:border-0",...e}),y=({className:e,...t})=>r.jsx("tr",{className:o("border-b transition-colors hover:bg-muted/40",e),...t}),p=({className:e,...t})=>r.jsx("th",{className:o("h-10 whitespace-nowrap px-3 text-left align-middle text-xs font-medium uppercase tracking-wide text-muted-foreground",e),...t}),b=({className:e,...t})=>r.jsx("td",{className:o("px-3 py-2.5 align-middle",e),...t});function j({k:e,sort:t,setSort:n,children:c,className:l}){const s=t.key===e,a=s?t.dir===1?m:d:u;return r.jsx(p,{className:l,children:r.jsxs("button",{className:"inline-flex items-center gap-1 uppercase hover:text-foreground",onClick:()=>n({key:e,dir:s&&t.dir===1?-1:1}),children:[c,r.jsx(a,{className:o("h-3 w-3",!s&&"opacity-40")})]})})}function g(e,t,n){return[...e].sort((c,l)=>{const s=t(c),a=t(l);return s==null&&a==null?0:s==null?1:a==null?-1:typeof s=="number"&&typeof a=="number"?(s-a)*n:String(s).localeCompare(String(a),"ru")*n})}export{j as S,h as T,f as a,y as b,w as c,b as d,p as e,g as s};
