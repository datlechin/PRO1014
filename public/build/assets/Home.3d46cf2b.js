import{r as h,_ as m}from"./CourseList.2df277ea.js";import{o as l,c as r,a as e,w as n,d as s,b as o,L as a,t as c,e as f,F as x,r as p,j as g}from"./app.9f4ba25c.js";const b=["src","alt"],y={class:"font-semibold truncate my-3"},v={class:"flex items-center text-sm"},$=["src","alt"],w=["textContent"],k=s("span",{class:"mx-2"},"\xB7",-1),B={class:"text-gray-400"},C={__name:"PostItem",props:{post:Object},setup(t){return(u,i)=>(l(),r("div",null,[e(o(a),{href:`/blog/${t.post.slug}`},{default:n(()=>[s("img",{src:t.post.thumbnail_url,alt:t.post.title,class:"w-full rounded-[16px]"},null,8,b)]),_:1},8,["href"]),s("h3",y,[e(o(a),{href:`/blog/${t.post.slug}`,textContent:c(t.post.title)},null,8,["href","textContent"])]),s("div",v,[e(o(a),null,{default:n(()=>[s("img",{src:t.post.author.avatar_url,alt:t.post.author.name,class:"rounded-full w-5 h-5 mr-2"},null,8,$)]),_:1}),e(o(a),{class:"text-xs"},{default:n(()=>[s("strong",{class:"text-gray-600",textContent:c(t.post.author.name)},null,8,w),k,s("span",B,c(t.post.read_duration)+" ph\xFAt \u0111\u1ECDc",1)]),_:1})])]))}},L={class:"flex justify-between py-4"},j=s("h2",{class:"font-bold text-2xl"},"B\xE0i vi\u1EBFt n\u1ED5i b\u1EADt",-1),A={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"},N={__name:"PostList",props:{posts:Array},setup(t){return(u,i)=>(l(),r("div",null,[s("div",L,[j,e(o(a),{href:"",class:"flex items-center text-blue-500 font-semibold hover:underline"},{default:n(()=>[f(" Xem t\u1EA5t c\u1EA3 "),e(o(h),{class:"w-4 h-4"})]),_:1})]),s("div",A,[(l(!0),r(x,null,p(t.posts,(d,_)=>(l(),g(C,{key:_,post:d},null,8,["post"]))),128))])]))}},V={class:"space-y-7"},D={__name:"Home",props:{courses:Array,posts:Array},setup(t){return(u,i)=>(l(),r("div",V,[e(m,{courses:t.courses},null,8,["courses"]),e(N,{posts:t.posts},null,8,["posts"])]))}};export{D as default};
