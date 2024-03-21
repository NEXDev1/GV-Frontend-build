import{r as l,u as x,j as n,L as f}from"./index-eNUBUYn0.js";import{X as g}from"./index.es-mXu4_z24.js";import{a as r}from"./api-Q4hECNGJ.js";const j=()=>{const[o,a]=l.useState([]),c=x();l.useEffect(()=>{(async()=>{try{const t=await r({method:"get",url:"admin/channels"});a(t.data.listChannels)}catch(s){console.error("Error fetching channels:",s)}})()},[]),console.log(o);const i=[{name:"Index",selector:(e,s)=>s+1},{name:"Name",selector:e=>e.name},{name:"E-mail",selector:e=>e.email},{name:"Commission %",selector:e=>e.commission},{name:"Action",cell:e=>n.jsxs("div",{children:[n.jsx("button",{onClick:()=>m(e),className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2",children:"Edit"}),n.jsx("button",{onClick:()=>h(e),className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",children:"Delete"})]})}],d=o.map((e,s)=>({_id:e._id,index:s+1,name:e.channelName,channelName:e.channelName,email:e.email,commission:e.commission})),m=e=>{console.log("Edit row:",e),c(`/channels/edit-channel/${e._id}`)},h=async e=>{if(window.confirm("Are you sure you want to delete this Channel ?"))try{const t={method:"delete",url:`admin/channel/${e._id}`},u=await r(t);a(u.data.listChannels),console.log("Channel deleted successfully"),alert("Channel deleted successfully")}catch(t){console.error("Error deleting channel:",t)}};return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"p-6 bg-gray-100 rounded-lg shadow-md",children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-4",children:"Channels List"}),n.jsx(f,{to:"/channels/add-channel",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2",children:"Add Channel"})]}),n.jsx("div",{className:"flex flex-col mt-10",children:n.jsx(g,{columns:i,data:d,pagination:!0,highlightOnHover:!0,responsive:!0})})]})})};export{j as default};
