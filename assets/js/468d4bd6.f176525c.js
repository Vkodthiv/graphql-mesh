(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),c=n(7),i=(n(0),n(295)),o={},a={unversionedId:"api/interfaces/types_src.yamlconfig.mockingconfig",id:"api/interfaces/types_src.yamlconfig.mockingconfig",isDocsHomePage:!1,title:"types_src.yamlconfig.mockingconfig",description:"Interface: MockingConfig",source:"@site/docs/api/interfaces/types_src.yamlconfig.mockingconfig.md",slug:"/api/interfaces/types_src.yamlconfig.mockingconfig",permalink:"/docs/api/interfaces/types_src.yamlconfig.mockingconfig",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/api/interfaces/types_src.yamlconfig.mockingconfig.md",version:"current",sidebar:"sidebar",previous:{title:"types_src.meshtransformoptions",permalink:"/docs/api/interfaces/types_src.meshtransformoptions"},next:{title:"types_src.yamlconfig.mockingfieldconfig",permalink:"/docs/api/interfaces/types_src.yamlconfig.mockingfieldconfig"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Table of contents",id:"table-of-contents",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"if",id:"if",children:[]},{value:"mocks",id:"mocks",children:[]},{value:"preserveResolvers",id:"preserveresolvers",children:[]}]}],p={toc:s};function l(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-mockingconfig"},"Interface: MockingConfig"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../modules/types_src"}),"types/src"),".",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../modules/types_src.yamlconfig"}),"YamlConfig"),".MockingConfig"),Object(i.b)("p",null,"Mock configuration for your source"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"MockingConfig"))),Object(i.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(i.b)("h3",{id:"properties"},"Properties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.mockingconfig#if"}),"if")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.mockingconfig#mocks"}),"mocks")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.mockingconfig#preserveresolvers"}),"preserveResolvers"))),Object(i.b)("h2",{id:"properties-1"},"Properties"),Object(i.b)("h3",{id:"if"},"if"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"if"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"If this expression is truthy, mocking would be enabled\nYou can use environment variables expression, for example: ",Object(i.b)("inlineCode",{parentName:"p"},"${MOCKING_ENABLED}")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L1006"}),"packages/types/src/config.ts:1006")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"mocks"},"mocks"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"mocks"),": ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"types_src.yamlconfig.mockingfieldconfig"}),Object(i.b)("em",{parentName:"a"},"MockingFieldConfig")),"[]"),Object(i.b)("p",null,"Mock configurations"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L1015"}),"packages/types/src/config.ts:1015")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"preserveresolvers"},"preserveResolvers"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"preserveResolvers"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Do not mock any other resolvers other than defined in ",Object(i.b)("inlineCode",{parentName:"p"},"mocks"),".\nFor example, you can enable this if you don't want to mock entire schema but partially."),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L1011"}),"packages/types/src/config.ts:1011")))}l.isMDXComponent=!0},295:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),c=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),l=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},b=function(e){var t=l(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,u=b["".concat(o,".").concat(m)]||b[m]||f[m]||i;return n?c.a.createElement(u,a(a({ref:t},p),{},{components:n})):c.a.createElement(u,a({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var p=2;p<i;p++)o[p]=n[p];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);