const s=(t,e="vi-VN")=>{const r=new Date(t);return new Intl.DateTimeFormat(e).format(r)},a=(t,e="vi-VN",r={})=>new Intl.NumberFormat(e,r).format(t),c=(t,e="VND")=>a(t,"vi-VN",{style:"currency",currency:"VND"}),m=t=>{let e=Math.floor(t/3600),r=Math.floor(t%3600/60),o=e>0?e+" gi\u1EDD ":"",n=r>0?r+" ph\xFAt ":"";return o+n};export{s as d,c as p,m as s};
