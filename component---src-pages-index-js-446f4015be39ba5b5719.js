(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{130:function(e,t,a){"use strict";a.r(t),a.d(t,"ListQuery",function(){return s});var n=a(0),r=a.n(n),i=a(134),o=a(140),c=a(156),d=c.a.div.withConfig({displayName:"pages__Container",componentId:"sc-6kvjaa-0"})(["text-decoration:none;max-width:630px;margin-left:auto;margin-right:auto;margin-top:30px;box-shadow:rgba(0,0,0,0.14) 0px 2px 2px 0px,rgba(0,0,0,0.2) 0px 3px 1px -2px,rgba(0,0,0,0.12) 0px 1px 5px 0px;"]),l=c.a.div.withConfig({displayName:"pages__Date",componentId:"sc-6kvjaa-1"})(["padding:15px;color:black;"]),u=c.a.p.withConfig({displayName:"pages__Excerpt",componentId:"sc-6kvjaa-2"})(["color:black;padding:15px;padding-top:0;"]),p=c.a.h1.withConfig({displayName:"pages__Header",componentId:"sc-6kvjaa-3"})(["padding:15px;"]);t.default=function(e){var t=e.data.allMarkdownRemark;return r.a.createElement(o.a,null,t.edges.map(function(e,t){var a=e.node;return r.a.createElement(d,null,r.a.createElement(i.Link,{to:a.fields.slug,className:"link",key:t},r.a.createElement("div",{className:"post-list-item"},r.a.createElement(p,null,a.frontmatter.title),r.a.createElement(l,null,a.frontmatter.date),r.a.createElement(u,null,a.excerpt))))}))};var s="437009982"},134:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return s}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(133),d=a.n(c);a.d(t,"Link",function(){return d.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(135),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var p=a(28);a.d(t,"parsePath",function(){return p.a});var s=r.a.createContext({}),f=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},135:function(e,t,a){var n;e.exports=(n=a(137))&&n.default||n},136:function(e){e.exports={data:{site:{siteMetadata:{title:"Blog"}}}}},137:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(47),d=a(2),l=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},138:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADG0lEQVQ4y22VSVMTURDHw1KevHDRi5ZWuVRplahcvfgNPHj1ZnnzI7jiQSz3hZNLWSVXRSABEQQSkEWyQEjCTAJkkgABhBRiEpaZvPbfk0zyJkLRNW/edP/63/2WOBylv1wiag0dWU2txXsNj+fV6Xq834LdUZTAAZ7L4xv7yLFZK55fcppqgdixznL8q6lXthPRMGXSxLaTjClbmnpVSlzHMSYHDBtUBm1pSiNUOGktRfnlOKlKQB8LTuiZVIxofYmQpHczrjTJ4FwVzFLUANAzBBhifZHi0WljOuw1AmEvOb0eNsMXmjR215K0m4wJ+L6B4kO2tmUr5V7HRJpLS82FKBjx6QAJPAlQ8c03LFyAdk66RY9vWA9F/GjDMiFmA7E3s6WeF2GJ6HEjrRGtJkiLBvegwgTB+CmmoBAQApBhwoXxl19DPL8nOG5jmcA475CknkQWHaUKANnRBEEZQ0kCUjeeDO3yuoU/5BVYKCOXjBEWpakC1NQTABbwkRUKqdR9gWxcOvshRmyn5ljhhWqFMpAsIJsFdNqBVAYuzhPibcBT+wEZxM2fwbjXP2JTaQfO/Qc8jQlRAU6akMisn8aDE/TxZx+9dnfzQpTBHTKQS9bsi2IDMoxVfgbg8aCTHvR30N2+r+bz7UivWXoXrKqHjdUlG3kAMwuzwj01Jl5BUTMALT866dFAlwm7D+jt7+30EHPt2DYr82He3ILjEH9OXuWznAW7n08GYC4CUDwfcokWwBjAsHswwMULzHPCALYNYvZ07EUovCgrPIwMq/QH/3GFF0VvG+unVk8Pm3gy6BSAipdI0urppk+j/cRHEOe5QJsrrG4DjCPWKakpQY/iw4ddbAHe+SjdQOmF9+gZQ9neYTwQGC38Xojo7KPj4kBMG2KPlSqtcdgGxTN9CZeEhwNoNUmLsRkdiyCwqiKBY0nphHmVwWccvpeltpVhVtnVd+E1WJzbsIP+ovnEY8wtwW7IlzGqrC2zbLdtEVyXrSQ5iOBmvOf5rGP8FHMN/A0tKfqWYrNVHNtEKYms9gysUVJVn5N85Z+Pf2yTHBiVNHFKAAAAAElFTkSuQmCC",width:60,height:60,src:"/static/ccdf23d0f006965d1af9d47483ab18ec/c44ff/logoWithoutFont.png",srcSet:"/static/ccdf23d0f006965d1af9d47483ab18ec/c44ff/logoWithoutFont.png 1x,\n/static/ccdf23d0f006965d1af9d47483ab18ec/ea943/logoWithoutFont.png 1.5x,\n/static/ccdf23d0f006965d1af9d47483ab18ec/6ba83/logoWithoutFont.png 2x,\n/static/ccdf23d0f006965d1af9d47483ab18ec/e0235/logoWithoutFont.png 3x"}}}}}},139:function(e,t,a){},140:function(e,t,a){"use strict";var n=a(136),r=a(0),i=a.n(r),o=a(4),c=a.n(o),d=a(141),l=a.n(d),u=a(134),p=(a(143),a(138)),s=a(142),f=a.n(s),m=function(){return i.a.createElement(u.StaticQuery,{query:"193324865",render:function(e){return i.a.createElement(f.a,{fixed:e.placeholderImage.childImageSharp.fixed})},data:p})},g=function(){return i.a.createElement("h1",{style:{backgroundColor:"#37a99a",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"15px",textAlign:"center",boxShadow:"0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"}},i.a.createElement(u.Link,{to:"  /"},i.a.createElement(m,null)))},A=(a(139),function(e){var t=e.children;return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(g,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",null,t))},data:n})});A.propTypes={children:c.a.node.isRequired};t.a=A}}]);
//# sourceMappingURL=component---src-pages-index-js-446f4015be39ba5b5719.js.map