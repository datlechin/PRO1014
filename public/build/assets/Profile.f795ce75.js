import{o,c as a,a as c,u as d,b as s,t as l,F as n,n as m,d as i,w as u,e as h,l as _}from"./app.93fba8a4.js";const b={class:"w-full"},f={class:"mb-28 pt-60 -m-3 rounded-b-2xl relative bg-cover bg-center bg-no-repeat bg-[url('https://assets.laracasts.com/images/wallpapers/thumbnails/inspire-me.png')]"},g={class:"absolute flex flex-col top-44 left-28 md:-bottom-20 md:left-12 md:flex-row"},x=["src","alt"],p={class:"mt-2 -ml-6 text-2xl font-bold md:mt-20 md:ml-4"},v={class:"grid grid-cols-1 md:grid-cols-5 md:gap-6"},w={class:"col-span-2 mb-6 md:mb-0"},k={class:"w-full p-4 rounded-lg shadow"},y=s("h3",{class:"text-lg font-bold"},"Gi\u1EDBi thi\u1EC7u",-1),B={class:"mt-3 text-sm text-center"},N=s("div",null,null,-1),V={class:"col-span-3"},F={class:"p-5 rounded-lg shadow"},L=s("h3",{class:"text-lg font-bold"},"Kho\xE1 h\u1ECDc \u0111\xE3 tham gia",-1),j={class:"mt-3 space-y-5"},C=["src","alt"],D={class:"ml-3"},E={class:"mb-1 font-bold"},G={class:"text-sm"},P={__name:"Profile",props:{user:Object},setup(t){return(H,K)=>(o(),a(n,null,[c(d(i.Head),{title:t.user.name},null,8,["title"]),s("div",b,[s("div",f,[s("div",g,[s("img",{src:t.user.avatar_url,alt:t.user.name,class:"border-2 border-white rounded-full w-28 md:w-36"},null,8,x),s("h2",p,l(t.user.name),1)])]),s("div",v,[s("div",w,[s("div",k,[y,s("div",B,l(t.user.bio),1)]),N]),s("div",V,[s("div",F,[L,s("ul",j,[(o(!0),a(n,null,m(t.user.courses,(e,r)=>(o(),a("li",{key:r,class:"flex pb-5 border-b last:border-b-0 last:pb-0"},[s("img",{src:e.thumbnail_url,alt:e.name,class:"w-1/3 rounded-xl"},null,8,C),s("div",D,[s("h2",E,[c(d(i.Link),{href:d(_)("courses.show",{slug:e.slug})},{default:u(()=>[h(l(e.name),1)]),_:2},1032,["href"])]),s("p",G,l(e.subtitle),1)])]))),128))])])])])])],64))}};export{P as default};