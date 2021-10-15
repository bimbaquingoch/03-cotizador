var O=Object.defineProperty,q=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var b=(r,e,n)=>e in r?O(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n,g=(r,e)=>{for(var n in e||(e={}))H.call(e,n)&&b(r,n,e[n]);if(f)for(var n of f(e))B.call(e,n)&&b(r,n,e[n]);return r},v=(r,e)=>q(r,D(e));import{s as a,P as m,j as o,r as y,a as i,t as E,T as I,R as N,b as A}from"./vendor.7b83f634.js";const Y=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function n(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerpolicy&&(c.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?c.credentials="include":t.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(t){if(t.ep)return;t.ep=!0;const c=n(t);fetch(t.href,c)}};Y();const $=a.div`
  background-color: #26c6da;
  border-radius: 30px 30px 0 0;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`,K=a.h1`
  font-family: "Slabo 27px", serif;
  font-size: 2rem;
  margin: 0;
  text-align: center;
  text-transform: capitalize;
`,w=({titulo:r})=>o($,{children:o(K,{children:r})});w.propTypes={titulo:m.string.isRequired};const G=r=>new Date().getFullYear()-r,J=r=>{let e;switch(r){case"europeo":e=1.3;break;case"americano":e=1.15;break;case"asiatico":e=1.05;break}return e},Q=r=>r==="basico"?1.2:1.5,k=a.label`
  align-items: center;
  color: var(--numeros-letras-primario);
  flex: 0 0 100px;
  padding: 0 10px;
  text-transform: capitalize;
`,h=a.option`
  text-transform: capitalize;
`,z=a.div({backgroundColor:"var(--background-select)",borderRadius:"30px",boxShadow:"2px 2px 5px 1px",display:"flex",height:"3em",lineHeight:"3",marginBottom:"20px",position:"relative",overflow:"hidden",width:"100%","::after":{content:'"\\25BC"',position:"absolute",top:"0",right:"0",padding:"0 1em",background:"#f9f9f9",cursor:"pointer",pointerEvents:"none",transition:"0.25s all ease"},":hover::after":{color:"#23b499"}}),R=a.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: var(--background-select);
  border: none;
  box-shadow: none;
  color: var(--numeros-letras-primario);
  cursor: pointer;
  flex: 1;
  font-size: 1rem;
  outline: 0;
  padding: 0.5rem;

  ::-ms-expand {
    display: none;
  }
`,U=a.div`
  margin-bottom: 30px;
  text-align: center;
  width: 100%;
  h1 {
    margin-bottom: 10px;
  }
`,S=a.label`
  align-items: center;
  color: var(--numeros-letras-primario);
  cursor: pointer;
  padding: 0 10px;
  position: relative;
  text-transform: capitalize;
`,x=a.span``,C=a.input`
  opacity: 0;
  position: absolute;

  + ${x} {
    font-family: "Material Icons";
    color: var(--numeros-letras-primario);
    border-radius: 10px;
    padding: 10px;
    transition: all 0.4s;
    -webkit-transition: all 0.4s;
  }
  &:checked + ${x} {
    border: 5px solid #4285f4;
  }
`,V=a.h2`
  color: var(--numeros-letras-primario);
  margin-bottom: 25px;
  text-align: center;
`,W=a.form`
  display: flex;
  flex-direction: column;
`,X=a.button`
  padding: 20px 60px;
  outline: none;
  background-color: var(--react-text-color);
  border: none;
  border-radius: 5px;
  box-shadow: 0 9px var(--gradient-back);
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  transition: 150ms all ease;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    box-shadow: 0 5px #95a5a6;
    transform: translateY(4px);
  }
`,F=({setResumen:r})=>{const e={marca:"",year:"",plan:""},[n,l]=y.exports.useState(e),{marca:t,year:c,plan:d}=n,M=["americano","europeo","asiatico"],P=[2023,2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010],u=s=>{l(v(g({},n),{[s.target.name]:s.target.value}))};return i(W,{onSubmit:s=>{if(s.preventDefault(),t.trim()===""||c.trim()===""||d.trim()===""){E.warn("Todos los campos son obligatorios");return}let p=2e3;p-=G(c)*3*p/100,p=J(t)*p;const L=Q(d);p=parseFloat(L*p).toFixed(2),r({cotizacion:Number(p),datos:n})},children:[i(z,{children:[o(k,{htmlFor:"",children:"marca"}),i(R,{name:"marca",id:"",value:t,onChange:u,children:[o(h,{value:"",children:"--Seleccione--"}),M.map(s=>o(h,{value:s,children:s},s))]})]}),i(z,{children:[o(k,{htmlFor:"",children:"a\xF1o"}),i(R,{name:"year",id:"",value:c,onChange:u,children:[o(h,{value:"",children:"--Seleccione--"}),P.map(s=>o(h,{value:s,children:s},s))]})]}),o(V,{children:"Escoge un Plan"}),i(U,{children:[i(S,{children:[o(C,{type:"radio",name:"plan",value:"basico",checked:d==="basico",onChange:u}),o(x,{children:"basico"})]}),i(S,{children:[o(C,{type:"radio",name:"plan",value:"completo",checked:d==="completo",onChange:u}),o(x,{children:"completo"})]})]}),o(X,{type:"submit",children:"cotizar"})]})};F.propTypes={setResumen:m.func.isRequired};const Z=a.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 30px 0 0 0;

  > h2 {
    color: var(--numeros-letras-primario);
    font-family: "Slabo 27px", serif;
    letter-spacing: 2px;
    margin-bottom: 10px;
  }
  > ul {
    padding: 20px;
    width: 100%;
  }
  > ul li {
    color: var(--numeros-letras-primario);
    display: flex;
    font-weight: bold;
    justify-content: space-between;
    text-transform: capitalize;
  }
`,T=({datos:r})=>{const{marca:e,year:n,plan:l}=r;return e===""||n===""||l===""?null:i(Z,{children:[o("h2",{children:"Resumen de Cotizaci\xF3n"}),i("ul",{children:[i("li",{children:["Marca: ",o("span",{children:e})]}),i("li",{children:["A\xF1o: ",o("span",{children:n})]}),i("li",{children:["Plan: ",o("span",{children:l})]})]})]})};T.propTypes={datos:m.object.isRequired};const _=a.div`
  align-items: center;
  color: var(--numeros-letras-primario);
  display: flex;
  flex-direction: row;
  font-size: 2rem;
  justify-content: space-evenly;
  text-transform: capitalize;
  flex-wrap: wrap;
  > span {
    margin-right: 10px;
    font-weight: bold;
  }
`,j=({cotizacion:r})=>i(_,{children:["Total a pagar ",o("span",{children:r})]});j.propTypes={cotizacion:m.number.isRequired};const ee=a.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 10px;
`,re=a.div`
  border: 1px solid black;
  border-radius: 30px;
  box-shadow: 3px 5px 15px 1px black;
  width: 100%;
  @media screen and (min-width: 420px) {
    width: 80%;
  }

  @media screen and (min-width: 770px) {
    width: 500px;
  }
`,oe=a.div`
  background-color: var(--background-body);
  border-radius: 0px 0px 30px 30px;
  padding: 3rem;
`,ne=()=>{const[r,e]=y.exports.useState({cotizacion:0,datos:{marca:"",year:"",plan:""}}),{cotizacion:n,datos:l}=r;return i(ee,{children:[o(I,{}),i(re,{children:[o(w,{titulo:"cotizador de seguros"}),i(oe,{children:[o(F,{setResumen:e}),o(T,{datos:l}),n!==0&&o(j,{cotizacion:n})]})]})]})};N.render(o(A.StrictMode,{children:o(ne,{})}),document.getElementById("root"));
