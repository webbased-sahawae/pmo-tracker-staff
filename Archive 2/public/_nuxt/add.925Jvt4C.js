import{t as a,v as i,x as e,y as I,L as F,F as t,K as L,r as w,q as B,I as p,J as _,O as x,P as A,B as z,_ as J,z as Q}from"./entry.uj4Zasle.js";import{u as k,B as f}from"./fetch.BMj3AH3V.js";import{u as X}from"./array.ojn7SLgw.js";const G={class:"buttonAdd"},N={class:"px-2 font-bold"},O={class:"px-2 italic"},M={__name:"button-to-add",props:["title","description"],setup(m){return(c,d)=>(a(),i("div",G,[e("div",N,I(m.title),1),e("div",O,I(m.description),1)]))}},j=M,R={class:"buttonAdded md:w-[25vw] flex flex-col justify-center"},U={class:"flex px-2 font-bold w-full whitespace-pre-wrap text-center"},Y={__name:"button-added",props:["FieldId","field"],async setup(m){let c,d;const{FieldId:u,field:h}=m,{data:b,status:D}=([c,d]=F(()=>k(`${f}/${h}/${u}`,"$zCJgbBvxvB")),c=await c,d(),c);return console.log(`${f}/${h}/${u}`),(o,y)=>(a(),i("div",R,[e("div",U,I(t(b).name),1)]))}},H=Y,W={class:"flex gap-2 flex-col"},Z={class:"text-center uppercase"},ee={class:"flex flex-col"},te=e("h2",null,"Program",-1),oe=["value"],se={class:"flex flex-col"},le=e("div",null,[e("h2",null,"Visi Program")],-1),ae={class:"flex flex-col gap-2"},ne={class:"flex flex-row gap-6 items-center"},ie=["placeholder","value","onKeyup"],re=["onclick"],ce={class:"flex flex-col"},de=e("h2",null,"Pendorong Eksekusi Program",-1),ue={class:"flex flex-col gap-2"},pe={class:"flex flex-row gap-6 items-center"},_e=["placeholder","value","onKeyup"],ve=["onclick"],he={class:"flex flex-col"},fe=e("h2",null,"KPI yang dipantau",-1),me={class:"flex flex-col gap-2"},ge={class:"flex flex-row gap-6 items-center"},xe=["placeholder","value","onKeyup"],ke=["onclick"],ye={class:"flex flex-col"},we=e("h2",null,"Tahapan Eksekusi",-1),Pe={class:"flex flex-col gap-2"},$e={class:"flex flex-row gap-6 items-center"},Ie=["placeholder","value","onKeyup"],be=e("h3",null,"Execution periode",-1),Ce=["onChange"],Ke=e("option",{value:"1"},"Q1",-1),Be=e("option",{value:"2"},"Q2",-1),Ae=e("option",{value:"3"},"Q3",-1),Fe=e("option",{value:"4"},"Q4",-1),Te=[Ke,Be,Ae,Fe],De=["onclick"],Ee={class:"flex flex-col gap-2"},Se=e("h2",null,"PIC (Komtap)",-1),qe={class:"flex gap-4"},Ve={class:"flex gap-2"},Le=e("div",{class:"flex gap-2"},null,-1),ze={class:"flex flex-row gap-2 primeBox p-2 w-full overflow-scroll scroll-smooth"},Je={key:0,class:"flex flex-row flex-wrap gap-2 primeBox p-2 w-full"},Qe={class:"flex flex-col gap-2"},Xe=e("h2",null,"Mitra Strategis",-1),Ge={class:"flex gap-4"},Ne={class:"flex gap-2"},Oe=e("div",{class:"flex gap-2"},null,-1),Me={class:"flex flex-row gap-2 primeBox p-2 w-full overflow-scroll scroll-smooth"},je={key:0,class:"flex flex-row flex-wrap gap-2 primeBox p-2 w-full"},Re={class:"flex flex-col"},Ue=e("h2",null,"Keterkaitan 17 Prioritas",-1),Ye={class:"flex gap-4"},He={class:"flex gap-2"},We=e("div",{class:"flex gap-2"},null,-1),Ze={class:"flex flex-row gap-2 primeBox p-2 w-full overflow-scroll scroll-smooth"},et={key:0,class:"flex flex-row flex-wrap gap-2 primeBox p-2 w-full"},tt=["checked"],ot={class:"flex max-w-[100vw] gap-4"},st=["onclick"],lt={__name:"program",async setup(m){let c,d;const{trace:u}=L(),h=w(!0);u.value.PartnerId||([c,d]=F(()=>B("/program")),await c,d()),console.log(u.value.PartnerId);const{data:b,status:D}=([c,d]=F(()=>k(`${f}/partner/${u.value.PartnerId}`,"$Mqt1DtkSay")),c=await c,d(),c),o=w({program:{PartnerId:u.value.PartnerId},vision:[],driver:[],indicator:[],phase:[],committee:[],partner:[],priority:[]}),y=w([]),E=async r=>{if(r.target.value.length>2){const{data:n,status:g}=await k(`${f}/committee/search/${r.target.value}`,"$5J7F2xbz9n");n?y.value=n:y.value=[]}r.target.value.length<3&&(y.value=[])},P=w([]),S=async r=>{if(r.target.value.length>2){const{data:n,status:g}=await k(`${f}/partner/search/${r.target.value}`,"$LgOoY0uv4K");n?P.value=n:P.value=[]}r.target.value.length<3&&(P.value=[])},$=w([]),q=async r=>{if(r.target.value.length>2){const{data:n,status:g}=await k(`${f}/priority/search/${r.target.value}`,"$yz6GPOraFp");n?$.value=n:$.value=[]}r.target.value.length<3&&($.value=[])},C=(r,n)=>{console.log(r,n),o.value[r]=X([...o.value[r],n])},V=async()=>{o.value.program.name?(await k(`${f}/program/create`,{method:"post",body:o.value},"$G5LcG2yPJm"),h?o.value={program:{PartnerId:u.value.PartnerId},vision:[],driver:[],indicator:[],phase:[],committee:[],partner:[],priority:[]}:await B(`/program/${u.value.PartnerId}`)):console.log("input program name")};return(r,n)=>{var T;const g=j,K=H;return a(),i("div",W,[e("h1",Z,I((T=t(b))==null?void 0:T.name),1),e("div",ee,[te,e("input",{placeholder:"Nama Program",value:t(o).program.name,onKeyup:n[0]||(n[0]=s=>{t(o).program.name=s.target.value})},null,40,oe)]),e("div",se,[le,e("div",ae,[(a(!0),i(p,null,_(t(o).vision,(s,l)=>(a(),i("div",ne,[e("textarea",{rows:"2",placeholder:`Visi program ke-${l+1}`,class:"w-full",value:t(o).vision[l].description,onKeyup:v=>{t(o).vision[l].description=v.target.value}},null,40,ie),e("div",{class:"buttonDelete",onclick:()=>t(o).vision.splice(l,1)}," X ",8,re)]))),256)),e("div",{class:"buttonAdd",onClick:n[1]||(n[1]=()=>{t(o).vision.push({})})}," Add vision ")])]),e("div",ce,[de,e("div",ue,[(a(!0),i(p,null,_(t(o).driver,(s,l)=>(a(),i("div",pe,[e("textarea",{rows:"2",placeholder:`Pendorong eksekusi program ke-${l+1}`,class:"w-full",value:t(o).driver[l].description,onKeyup:v=>{t(o).driver[l].description=v.target.value}},null,40,_e),e("div",{class:"buttonDelete",onclick:()=>t(o).driver.splice(l,1)}," X ",8,ve)]))),256)),e("div",{class:"buttonAdd",onClick:n[2]||(n[2]=()=>{t(o).driver.push({})})}," Add Program Driver ")])]),e("div",he,[fe,e("div",me,[(a(!0),i(p,null,_(t(o).indicator,(s,l)=>(a(),i("div",ge,[e("textarea",{rows:"2",placeholder:`KPI yang dipantau ke-${l+1}`,class:"w-full",value:t(o).indicator[l].description,onKeyup:v=>{t(o).indicator[l].description=v.target.value}},null,40,xe),e("div",{class:"buttonDelete",onclick:()=>t(o).indicator.splice(l,1)}," X ",8,ke)]))),256)),e("div",{class:"buttonAdd",onClick:n[3]||(n[3]=()=>{t(o).indicator.push({})})}," Add KPI ")])]),e("div",ye,[we,e("div",Pe,[(a(!0),i(p,null,_(t(o).phase,(s,l)=>(a(),i("div",$e,[e("textarea",{rows:"2",placeholder:`Tahapan Eksekusi ke-${l+1}`,class:"w-full",value:t(o).phase[l].description,onKeyup:v=>{t(o).phase[l].description=v.target.value}},null,40,Ie),e("div",null,[be,e("select",{name:"quarter",onChange:v=>{t(o).phase[l].quarter=v.target.value}},Te,40,Ce)]),e("div",{class:"buttonDelete",onclick:()=>t(o).phase.splice(l,1)}," X ",8,De)]))),256)),e("div",{class:"buttonAdd",onClick:n[4]||(n[4]=()=>{t(o).phase.push({quarter:1})})}," Add Tahapan Eksekusi ")])]),e("div",Ee,[Se,e("div",qe,[e("div",Ve,[e("input",{placeholder:"Type to search",onKeyup:E},null,32),Le]),e("div",ze,[(a(!0),i(p,null,_(t(y).value,s=>(a(),x(g,{title:s.name,description:s.chief,key:s.id,onClick:l=>C("committee",{CommitteeId:s.id})},null,8,["title","description","onClick"]))),128))])]),t(o).committee.length?(a(),i("div",Je,[(a(!0),i(p,null,_(t(o).committee,(s,l)=>(a(),x(K,{FieldId:s.CommitteeId,field:"committee",onclick:()=>t(o).committee.splice(l,1),key:s.CommitteeId},null,8,["FieldId","onclick"]))),128))])):A("",!0)]),e("div",Qe,[Xe,e("div",Ge,[e("div",Ne,[e("input",{placeholder:"Type to search",onKeyup:S},null,32),Oe]),e("div",Me,[(a(!0),i(p,null,_(t(P).value,s=>(a(),x(g,{title:s.name,description:s.chief,key:s.id,onClick:l=>C("partner",{PartnerId:s.id})},null,8,["title","description","onClick"]))),128))])]),t(o).partner.length?(a(),i("div",je,[(a(!0),i(p,null,_(t(o).partner,(s,l)=>(a(),x(K,{FieldId:s.PartnerId,field:"partner",onclick:()=>t(o).partner.splice(l,1),key:s.PartnerId},null,8,["FieldId","onclick"]))),128))])):A("",!0)]),e("div",Re,[Ue,e("div",Ye,[e("div",He,[e("input",{placeholder:"Type to search",onKeyup:q},null,32),We]),e("div",Ze,[(a(!0),i(p,null,_(t($).value,s=>(a(),x(g,{title:s.name,description:s.chief,key:s.id,onClick:l=>C("priority",{PriorityId:s.id})},null,8,["title","description","onClick"]))),128))])]),t(o).priority.length?(a(),i("div",et,[(a(!0),i(p,null,_(t(o).priority,(s,l)=>(a(),x(K,{FieldId:s.PriorityId,onclick:()=>t(o).priority.splice(l,1),field:"priority",key:s.PriorityId},null,8,["FieldId","onclick"]))),128))])):A("",!0)]),e("div",null,[e("div",{onClick:n[5]||(n[5]=s=>h.value=!t(h)),class:"cursor-pointer"},[e("input",{type:"checkbox",checked:t(h)},null,8,tt),z(" Stay on this page after submit ")]),e("div",ot,[e("button",{class:"buttonAdd",style:{width:"100%"},type:"submit",onClick:V}," Submit "),e("button",{class:"buttonDelete",style:{width:"100%"},type:"button",onclick:()=>{("navigateTo"in r?r.navigateTo:t(B))(`/program/${t(u).PartnerId}`)}}," Cancel ",8,st)])])])}}},at=lt,nt={},it={class:"px-5"};function rt(m,c){const d=at;return a(),i("div",it,[Q(d)])}const pt=J(nt,[["render",rt]]);export{pt as default};
