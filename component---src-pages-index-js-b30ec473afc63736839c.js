(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{131:function(e,t,a){"use strict";a.r(t),a.d(t,"ListQuery",function(){return u});var n=a(0),r=a.n(n),i=a(135),o=a(137),c=a(142),l=o.a.div.withConfig({displayName:"pages__Container",componentId:"sc-6kvjaa-0"})(["text-decoration:none;max-width:630px;margin-left:auto;margin-right:auto;margin-top:30px;"]),d=o.a.div.withConfig({displayName:"pages__Date",componentId:"sc-6kvjaa-1"})(["padding:15px;color:black;"]),p=o.a.p.withConfig({displayName:"pages__Excerpt",componentId:"sc-6kvjaa-2"})(["color:black;padding:15px;padding-top:0;"]),s=o.a.h1.withConfig({displayName:"pages__Header",componentId:"sc-6kvjaa-3"})(["padding:15px;"]);t.default=function(e){var t=e.data.allMarkdownRemark;return r.a.createElement(c.a,null,t.edges.map(function(e,t){var a=e.node;return r.a.createElement(l,{key:t},r.a.createElement(i.Link,{to:a.fields.slug,className:"link"},r.a.createElement("div",null,r.a.createElement(s,null,a.frontmatter.title),r.a.createElement(d,null,a.frontmatter.date),r.a.createElement(p,null,a.excerpt))))}))};var u="437009982"},135:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(134),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var d=a(136),p=a.n(d);a.d(t,"PageRenderer",function(){return p.a});var s=a(28);a.d(t,"parsePath",function(){return s.a});var u=r.a.createContext({}),m=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},136:function(e,t,a){var n;e.exports=(n=a(139))&&n.default||n},138:function(e){e.exports={data:{site:{siteMetadata:{title:"Blog"}}}}},139:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(47),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},140:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADG0lEQVQ4y22VSVMTURDHw1KevHDRi5ZWuVRplahcvfgNPHj1ZnnzI7jiQSz3hZNLWSVXRSABEQQSkEWyQEjCTAJkkgABhBRiEpaZvPbfk0zyJkLRNW/edP/63/2WOBylv1wiag0dWU2txXsNj+fV6Xq834LdUZTAAZ7L4xv7yLFZK55fcppqgdixznL8q6lXthPRMGXSxLaTjClbmnpVSlzHMSYHDBtUBm1pSiNUOGktRfnlOKlKQB8LTuiZVIxofYmQpHczrjTJ4FwVzFLUANAzBBhifZHi0WljOuw1AmEvOb0eNsMXmjR215K0m4wJ+L6B4kO2tmUr5V7HRJpLS82FKBjx6QAJPAlQ8c03LFyAdk66RY9vWA9F/GjDMiFmA7E3s6WeF2GJ6HEjrRGtJkiLBvegwgTB+CmmoBAQApBhwoXxl19DPL8nOG5jmcA475CknkQWHaUKANnRBEEZQ0kCUjeeDO3yuoU/5BVYKCOXjBEWpakC1NQTABbwkRUKqdR9gWxcOvshRmyn5ljhhWqFMpAsIJsFdNqBVAYuzhPibcBT+wEZxM2fwbjXP2JTaQfO/Qc8jQlRAU6akMisn8aDE/TxZx+9dnfzQpTBHTKQS9bsi2IDMoxVfgbg8aCTHvR30N2+r+bz7UivWXoXrKqHjdUlG3kAMwuzwj01Jl5BUTMALT866dFAlwm7D+jt7+30EHPt2DYr82He3ILjEH9OXuWznAW7n08GYC4CUDwfcokWwBjAsHswwMULzHPCALYNYvZ07EUovCgrPIwMq/QH/3GFF0VvG+unVk8Pm3gy6BSAipdI0urppk+j/cRHEOe5QJsrrG4DjCPWKakpQY/iw4ddbAHe+SjdQOmF9+gZQ9neYTwQGC38Xojo7KPj4kBMG2KPlSqtcdgGxTN9CZeEhwNoNUmLsRkdiyCwqiKBY0nphHmVwWccvpeltpVhVtnVd+E1WJzbsIP+ovnEY8wtwW7IlzGqrC2zbLdtEVyXrSQ5iOBmvOf5rGP8FHMN/A0tKfqWYrNVHNtEKYms9gysUVJVn5N85Z+Pf2yTHBiVNHFKAAAAAElFTkSuQmCC",width:60,height:60,src:"/static/ccdf23d0f006965d1af9d47483ab18ec/c44ff/logoWithoutFont.png",srcSet:"/static/ccdf23d0f006965d1af9d47483ab18ec/c44ff/logoWithoutFont.png 1x,\n/static/ccdf23d0f006965d1af9d47483ab18ec/ea943/logoWithoutFont.png 1.5x,\n/static/ccdf23d0f006965d1af9d47483ab18ec/6ba83/logoWithoutFont.png 2x,\n/static/ccdf23d0f006965d1af9d47483ab18ec/e0235/logoWithoutFont.png 3x"}}}}}},141:function(e,t,a){},142:function(e,t,a){"use strict";var n=a(138),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(143),d=a.n(l),p=a(135),s=(a(145),a(140)),u=a(144),m=a.n(u),g=function(){return i.a.createElement(p.StaticQuery,{query:"193324865",render:function(e){return i.a.createElement(m.a,{fixed:e.placeholderImage.childImageSharp.fixed})},data:s})},f=function(){return i.a.createElement("h1",{style:{backgroundColor:"#339E90",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"15px",paddingRight:"15px",textAlign:"center"}},i.a.createElement(p.Link,{to:"/"},i.a.createElement(g,null)))},h=a(137),A=a(147),E=h.a.div.withConfig({displayName:"footer__Footer",componentId:"r54yyk-0"})(["background-color:#339E90;color:#F7F7F7;height:50px;margin-top:-50px;padding-right:15px;padding-left:15px;a{float:right;padding-left:5px;svg{color:white;font-size:40px;padding-top:5px;}}"]),w=function(){return i.a.createElement(E,null,i.a.createElement("a",{href:"https://www.instagram.com/lampewebdev","aria-label":"instagram",target:"_blank",rel:"noreferrer"},i.a.createElement(A.b,null)),i.a.createElement("a",{href:"https://github.com/lampewebdev","aria-label":"github",target:"_blank",rel:"noreferrer"},i.a.createElement(A.a,null)),i.a.createElement("a",{href:"https://twitter.com/lampewebdev","aria-label":"Twitter",target:"_blank",rel:"noreferrer"},i.a.createElement(A.c,null)))},y=a(146),x=a.n(y),v=(a(141),h.a.div.withConfig({displayName:"layout__Content",componentId:"ii2kc2-0"})(["@media only screen and (max-width:650px){padding-left:10px;padding-right:10px;}"])),b=function(e){var t=e.children;return i.a.createElement(p.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(r.Fragment,null,i.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("script",{src:"https://unpkg.com/ionicons@4.2.2/dist/ionicons.js"}),i.a.createElement("html",{lang:"en"}),i.a.createElement("script",{async:!0,src:"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}),i.a.createElement(x.a.Google,{client:"ca-pub-5940437378624677",slot:"7806394621"})),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"content-inside"},i.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(v,null,t))),i.a.createElement(w,null))},data:n})};b.propTypes={children:c.a.node.isRequired};t.a=b}}]);
//# sourceMappingURL=component---src-pages-index-js-b30ec473afc63736839c.js.map