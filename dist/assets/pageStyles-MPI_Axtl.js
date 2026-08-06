import{d as e,n as t,u as n}from"./Container-BESNCKGJ.js";import{t as r}from"./Heading-BmKVgAdz.js";var i={default:`background`,soft:`secondary`,surface:`surface`},a=e.section`
  padding-block: ${({theme:e})=>e.spacing.section};
  background: ${({$tone:e,theme:t})=>t.colors[i[e]||i.default]};
`,o=e.div`
  display: grid;
  width: min(100% - 2rem, ${({theme:e})=>e.layout.containerMaxWidth});
  gap: ${({theme:e})=>e.spacing.sm};
  max-width: ${({theme:e})=>e.layout.contentMaxWidth};
  margin-right: auto;
  margin-bottom: ${({theme:e})=>e.spacing.xxl};
  margin-left: auto;

  @media (min-width: ${({theme:e})=>e.breakpoints.tabletMin}) {
    width: min(100% - 4rem, ${({theme:e})=>e.layout.containerMaxWidth});
  }
`,s=e.span`
  display: block;
  color: ${({theme:e})=>e.colors.primaryHover};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`,c=e.p`
  max-width: 46rem;
  margin: ${({theme:e})=>e.spacing.xs} 0 0;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.95rem;
  line-height: 1.75;
`,l=e.div`
  margin-top: ${({theme:e})=>e.spacing.md};
`,u=t();function d({action:e,children:t,description:n,subtitle:i,title:d,headingLevel:f=2,tone:p=`default`,...m}){let h=!!(d||i||n||e);return(0,u.jsxs)(a,{$tone:p,...m,children:[h?(0,u.jsxs)(o,{children:[i?(0,u.jsx)(s,{children:i}):null,d?(0,u.jsx)(r,{level:f,children:d}):null,n?(0,u.jsx)(c,{children:n}):null,e?(0,u.jsx)(l,{children:e}):null]}):null,t]})}var f=n`
  min-height: 100%;
`;n`
  display: grid;
  place-items: center;
  min-height: min(60vh, 38rem);
  text-align: center;
`,n`
  max-width: ${({theme:e})=>e.layout.contentMaxWidth};
  margin: ${({theme:e})=>e.spacing.lg} auto 0;
`;export{d as n,f as t};