import{_ as e,d as t,h as n,n as r}from"./Container-BESNCKGJ.js";import{N as i,U as a,a as o,i as s,n as c,t as l}from"./index-DhdGXHm4.js";import{t as u}from"./PageContainer-idZOwr9l.js";var d=e(n(),1),f=t.section`
  padding-block: ${({theme:e})=>e.spacing.sectionStandard};
  background: ${({theme:e})=>e.colors.background};
`,p=t(u)`
  max-width: ${({theme:e})=>e.layout.contentMaxWidth};
`,m=t.div`
  display: grid;
  justify-items: center;
  margin-bottom: ${({theme:e})=>e.spacing.xxl};
  text-align: center;
`,h=t.span`
  color: ${({theme:e})=>e.colors.primaryHover};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`,g=t.h2`
  margin-top: ${({theme:e})=>e.spacing.md};
  color: ${({theme:e})=>e.colors.textPrimary};
  font-family: ${({theme:e})=>e.typography.headingFont};
  font-size: clamp(2.75rem, 7vw, 5.5rem);
  font-weight: 500;
  letter-spacing: -0.07em;
  line-height: 0.88;
`,_=t.div`
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,v=t.div`
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,y=t.button`
  display: flex;
  width: 100%;
  min-height: ${({theme:e})=>e.controls.tapTarget};
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing.lg};
  padding: ${({theme:e})=>e.spacing.lg} 0;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 0.95rem;
  font-weight: 700;
  text-align: left;

  &:hover {
    color: ${({theme:e})=>e.colors.primaryHover};
  }
`,b=t(s.span)`
  display: inline-grid;
  width: 2rem;
  height: 2rem;
  flex: 0 0 auto;
  place-items: center;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 50%;
  color: ${({theme:e})=>e.colors.primaryHover};
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1;
`,x=t(s.div)`
  overflow: hidden;
`,S=t.p`
  max-width: 42rem;
  padding: 0 3rem ${({theme:e})=>e.spacing.lg} 0;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.8;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    padding-right: 0;
  }
`,C=t.div`
  display: flex;
  justify-content: center;
  margin-top: ${({theme:e})=>e.spacing.xxl};
`,w=r();function T({items:e,id:t=`home-faq-preview`}){let[n,r]=(0,d.useState)(null);return(0,w.jsx)(f,{id:t,children:(0,w.jsxs)(p,{children:[(0,w.jsxs)(m,{children:[(0,w.jsx)(h,{children:`A few helpful things`}),(0,w.jsx)(g,{children:`Good to know.`})]}),(0,w.jsx)(_,{children:e.map(e=>{let t=n===e.id,i=`faq-panel-${e.id}`,a=`faq-trigger-${e.id}`;return(0,w.jsxs)(v,{children:[(0,w.jsxs)(y,{id:a,type:`button`,"aria-expanded":t,"aria-controls":i,onClick:()=>r(t?null:e.id),children:[(0,w.jsx)(`span`,{children:e.question}),(0,w.jsx)(b,{animate:{rotate:t?45:0},transition:{duration:.25},"aria-hidden":`true`,children:`+`})]}),(0,w.jsx)(o,{initial:!1,children:t?(0,w.jsx)(x,{id:i,role:`region`,"aria-labelledby":a,initial:{height:0,opacity:0},animate:{height:`auto`,opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:[.22,1,.36,1]},children:(0,w.jsx)(S,{children:e.answer})},i):null})]},e.id)})}),(0,w.jsx)(C,{children:(0,w.jsxs)(l,{as:a,to:`/faqs`,variant:c.GHOST,children:[`View all FAQs`,(0,w.jsx)(i,{"aria-hidden":`true`,color:`currentColor`,size:16})]})})]})})}export{T as t};