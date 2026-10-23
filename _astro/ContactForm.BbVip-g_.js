import{j as e}from"./jsx-runtime.u17CrQMm.js";import{a as d}from"./index.UEuQJ2Tp.js";const N={name:"BrandUp",legalName:"BrandUp Agency",domain:"https://brandup.cl",city:"Maipú, Santiago de Chile",locality:"Maipú",region:"Región Metropolitana",postalCode:"9250000",geo:{lat:-33.5025168,lng:-70.7872217},googleMaps:"https://maps.app.goo.gl/YGoAKnDwkneJawrt8",googleCid:"https://www.google.com/maps?cid=18239725017259252089",email:"brandup.092@gmail.com",phone:"+56 9 7982 2862",whatsappNumber:"56979822862",instagram:"https://www.instagram.com/brand.up.cl/",tiktok:"https://www.tiktok.com/@brand.up.cl",founded:"2024",googleSiteVerification:"LOm1za6n0YKvNQGvIXNDMmH9LAuAQhkIwNTzXDWdr-A",formspreeId:"mljrkvan",metaPixelId:"3246537428868858",clarityId:"yvbgsvull3"},k={es:{head:"Cotización brandup.cl",name:"Nombre",email:"Email",phone:"Teléfono",service:"Servicio",budget:"Presupuesto",project:"Proyecto"},en:{head:"Quote request brandup.cl",name:"Name",email:"Email",phone:"Phone",service:"Service",budget:"Budget",project:"Project"}},p="w-full rounded-xl border border-line bg-white px-4 py-3.5 text-sm text-paper placeholder:text-gray/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15 transition-all",o="mb-1.5 block text-[12px] md:text-[11px] font-bold uppercase tracking-[0.1em] text-gray";function A({labels:t,variant:_="contact",locale:j="es"}){const m=k[j],[c,l]=d.useState("idle"),[s,y]=d.useState({}),[u,h]=d.useState(""),[x,f]=d.useState("");async function v(a){a.preventDefault();const n=a.currentTarget,r=new FormData(n),i={};r.get("name")||(i.name=t.required);const b=String(r.get("email")??"");if(b?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b)||(i.email=t.invalidEmail):i.email=t.required,r.get("message")||(i.message=t.required),y(i),!Object.keys(i).length){l("sending");try{r.set("service",u),r.set("budget",x);const g=String(r.get("name")??"").trim().slice(0,60);if(r.set("_subject",g?`${m.head}: ${g}`:m.head),!(await fetch(`https://formspree.io/f/${N.formspreeId}`,{method:"POST",body:r,headers:{Accept:"application/json"}})).ok)throw new Error("formspree error");const w=window.fbq;w?.("track","Lead"),l("ok"),n.reset(),h(""),f("")}catch{l("error")}}}return c==="ok"?e.jsxs("div",{className:"relative flex flex-col items-center gap-5 overflow-hidden rounded-2xl border border-accent/25 bg-accent/[0.06] px-8 py-14 text-center",children:[e.jsx("span",{className:"bu-echo bu-echo--1","aria-hidden":"true",children:"↑"}),e.jsx("span",{className:"bu-echo bu-echo--2","aria-hidden":"true",children:"↑"}),e.jsx("span",{className:"bu-echo bu-echo--3","aria-hidden":"true",children:"↑"}),e.jsx("span",{className:"bu-launch flex h-20 w-20 items-center justify-center rounded-full bg-accent shadow-[0_14px_40px_rgba(240,94,35,0.45)]",children:e.jsxs("svg",{width:"34",height:"38",viewBox:"0 0 24 28",fill:"none","aria-hidden":"true",className:"bu-launch__arrow",children:[e.jsx("path",{d:"M12 25 V7",stroke:"#fff",strokeWidth:"3.4",strokeLinecap:"round"}),e.jsx("path",{d:"M5 13 12 5.5 19 13",stroke:"#fff",strokeWidth:"3.2",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"})]})}),e.jsx("p",{className:"relative max-w-[38ch] font-display text-lg font-bold leading-snug text-paper",children:t.success}),e.jsx("button",{onClick:()=>l("idle"),className:"relative text-sm font-semibold text-gray underline underline-offset-4 transition-colors hover:text-accent",children:t.name==="Nombre"?"Enviar otro mensaje":"Send another message"}),e.jsx("style",{children:`
          @keyframes buLaunchPop {
            0%   { transform: translateY(70px) scale(0.4); opacity: 0; }
            55%  { transform: translateY(-12px) scale(1.12); opacity: 1; }
            75%  { transform: translateY(4px) scale(0.97); }
            100% { transform: translateY(0) scale(1); opacity: 1; }
          }
          @keyframes buArrowPulse {
            0%, 100% { transform: translateY(0); }
            50%      { transform: translateY(-4px); }
          }
          @keyframes buEchoRise {
            0%   { transform: translateY(30px); opacity: 0; }
            25%  { opacity: 0.55; }
            100% { transform: translateY(-120px); opacity: 0; }
          }
          .bu-launch { animation: buLaunchPop 0.9s cubic-bezier(0.22, 1, 0.36, 1) both; }
          .bu-launch__arrow { animation: buArrowPulse 1.6s ease-in-out 1s infinite; }
          .bu-echo {
            position: absolute;
            bottom: 8%;
            font-size: 26px;
            font-weight: 800;
            color: rgba(240, 94, 35, 0.5);
            pointer-events: none;
            animation: buEchoRise 2.2s ease-out infinite;
          }
          .bu-echo--1 { left: 18%; animation-delay: 0.4s; }
          .bu-echo--2 { left: 50%; font-size: 20px; animation-delay: 1.1s; }
          .bu-echo--3 { left: 78%; font-size: 30px; animation-delay: 1.7s; }
          @media (prefers-reduced-motion: reduce) {
            .bu-launch, .bu-launch__arrow, .bu-echo { animation: none; }
            .bu-echo { display: none; }
          }
        `})]}):e.jsxs("form",{onSubmit:v,noValidate:!0,className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("span",{className:o,children:t.serviceChips??t.service}),e.jsx("div",{className:"mt-2 flex flex-wrap gap-2",role:"group","aria-label":t.service,children:t.serviceOptions.map(a=>{const n=u===a;return e.jsxs("button",{type:"button","aria-pressed":n,onClick:()=>h(n?"":a),className:`inline-flex items-center gap-1.5 rounded-full border px-4 py-2.5 md:py-2 text-[13px] font-semibold transition-all duration-200 ${n?"border-accent bg-accent text-white shadow-[0_8px_20px_rgba(240,94,35,0.35)]":"border-line bg-white text-gray hover:border-accent/50 hover:text-paper"}`,children:[n&&e.jsx("span",{className:"bu-chip-up","aria-hidden":"true",children:"↑"}),a]},a)})})]}),e.jsxs("div",{children:[e.jsx("span",{className:o,children:t.budget}),e.jsx("div",{className:"mt-2 flex flex-wrap gap-2",role:"group","aria-label":t.budget,children:t.budgetOptions.map(a=>{const n=x===a;return e.jsxs("button",{type:"button","aria-pressed":n,onClick:()=>f(n?"":a),className:`inline-flex items-center gap-1.5 rounded-full border px-4 py-2.5 md:py-2 text-[13px] font-semibold transition-all duration-200 ${n?"border-paper bg-paper text-ink shadow-[0_8px_20px_rgba(35,35,35,0.28)]":"border-line bg-white text-gray hover:border-paper/50 hover:text-paper"}`,children:[n&&e.jsx("span",{className:"bu-chip-up","aria-hidden":"true",children:"↑"}),a]},a)})})]}),e.jsxs("div",{className:"grid gap-5 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsxs("label",{className:o,htmlFor:"f-name",children:[t.name," *"]}),e.jsx("input",{id:"f-name",name:"name",className:p,autoComplete:"name"}),s.name&&e.jsx("p",{className:"mt-1.5 text-xs font-semibold text-accent",children:s.name})]}),e.jsxs("div",{children:[e.jsxs("label",{className:o,htmlFor:"f-email",children:[t.email," *"]}),e.jsx("input",{id:"f-email",name:"email",type:"email",className:p,autoComplete:"email"}),s.email&&e.jsx("p",{className:"mt-1.5 text-xs font-semibold text-accent",children:s.email})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:o,htmlFor:"f-phone",children:t.phone??t.company}),e.jsx("input",{id:"f-phone",name:"phone",type:"tel",className:p,autoComplete:"tel",placeholder:"+56 9 …"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:o,htmlFor:"f-message",children:[t.message," *"]}),e.jsx("textarea",{id:"f-message",name:"message",rows:4,className:p}),s.message&&e.jsx("p",{className:"mt-1.5 text-xs font-semibold text-accent",children:s.message})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("button",{type:"submit",disabled:c==="sending",className:"group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-accent px-8 py-4 text-[15px] font-bold text-white shadow-[0_14px_36px_rgba(240,94,35,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(240,94,35,0.42)] disabled:opacity-60",children:[e.jsx("svg",{viewBox:"0 0 24 24",className:"h-5 w-5 fill-current","aria-hidden":"true",children:e.jsx("path",{d:"M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5zm2.2.3 7.05 5.64a1.2 1.2 0 0 0 1.5 0L19.8 6.8a1 1 0 0 0-.62-.3H4.82a1 1 0 0 0-.62.3M4 8.6v8.9c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V8.6l-6.5 5.2a3.2 3.2 0 0 1-4 0z"})}),c==="sending"?t.sending:t.submit,e.jsx("span",{"aria-hidden":"true",className:"bu-btn-up inline-block text-lg leading-none transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-0.5",children:"↑"})]}),t.note&&e.jsxs("p",{className:"flex items-center justify-center gap-2 text-center text-xs text-gray",children:[e.jsx("span",{className:"inline-block h-1.5 w-1.5 rounded-full bg-accent","aria-hidden":"true"}),t.note]})]}),c==="error"&&e.jsx("p",{className:"text-sm font-semibold text-red-500",role:"alert",children:t.error}),e.jsx("style",{children:`
        @keyframes buChipPop {
          0%   { transform: translateY(8px) scale(0); opacity: 0; }
          60%  { transform: translateY(-3px) scale(1.35); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        @keyframes buBtnFloat {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-3px); }
        }
        .bu-chip-up {
          display: inline-block;
          font-weight: 800;
          line-height: 1;
          animation: buChipPop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .bu-btn-up { animation: buBtnFloat 1.8s ease-in-out infinite; }
        .group:hover .bu-btn-up { animation: none; }
        @media (prefers-reduced-motion: reduce) {
          .bu-chip-up, .bu-btn-up { animation: none; }
        }
      `})]})}export{A as default};
