import{r as m,_ as f}from"./CourseList.fc63266f.js";import{o as l,c as r,a as o,w as n,b as s,u as e,r as i,d as a,t as c,e as x,F as p,i as g,j as b}from"./app.93a04b0f.js";const y=["src","alt"],k={class:"font-semibold truncate my-3"},v={class:"flex items-center text-sm"},w=["src","alt"],L=["textContent"],$=s("span",{class:"mx-2"},"\xB7",-1),B={class:"text-gray-400"},C={__name:"PostItem",props:{post:Object},setup(t){return(u,d)=>(l(),r("div",null,[o(e(a.Link),{href:e(i)("blog.show",{slug:t.post.slug})},{default:n(()=>[s("img",{src:t.post.thumbnail_url,alt:t.post.title,class:"w-full rounded-[16px]"},null,8,y)]),_:1},8,["href"]),s("h3",k,[o(e(a.Link),{href:e(i)("blog.show",{slug:t.post.slug}),textContent:c(t.post.title)},null,8,["href","textContent"])]),s("div",v,[o(e(a.Link),null,{default:n(()=>[s("img",{src:t.post.author.avatar_url,alt:t.post.author.name,class:"rounded-full w-5 h-5 mr-2"},null,8,w)]),_:1}),o(e(a.Link),{class:"text-xs"},{default:n(()=>[s("strong",{class:"text-gray-600",textContent:c(t.post.author.name)},null,8,L),$,s("span",B,c(t.post.read_duration)+" ph\xFAt \u0111\u1ECDc",1)]),_:1})])]))}},j={class:"flex justify-between py-4"},A=s("h2",{class:"font-bold text-2xl"},"B\xE0i vi\u1EBFt n\u1ED5i b\u1EADt",-1),N={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"},V={__name:"PostList",props:{posts:Array},setup(t){return(u,d)=>(l(),r("div",null,[s("div",j,[A,o(e(a.Link),{href:e(i)("blog.index"),class:"flex items-center text-blue-500 font-semibold hover:underline"},{default:n(()=>[x(" Xem t\u1EA5t c\u1EA3 "),o(e(m),{class:"w-4 h-4"})]),_:1},8,["href"])]),s("div",N,[(l(!0),r(p,null,g(t.posts,(h,_)=>(l(),b(C,{key:_,post:h},null,8,["post"]))),128))])]))}},F={class:"space-y-7"},E={__name:"Home",props:{courses:Array,posts:Array},setup(t){return(u,d)=>(l(),r("div",F,[o(f,{courses:t.courses},null,8,["courses"]),o(V,{posts:t.posts},null,8,["posts"])]))}};export{E as default};
