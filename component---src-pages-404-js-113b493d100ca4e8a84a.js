(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{129:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(140);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},134:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(133),d=n.n(c);n.d(t,"Link",function(){return d.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(135),l=n.n(u);n.d(t,"PageRenderer",function(){return l.a});var s=n(28);n.d(t,"parsePath",function(){return s.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},135:function(e,t,n){var a;e.exports=(a=n(137))&&a.default||a},136:function(e){e.exports={data:{site:{siteMetadata:{title:"Blog"}}}}},137:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(47),d=n(2),u=function(e){var t=e.location,n=d.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},138:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADG0lEQVQ4y22VSVMTURDHw1KevHDRi5ZWuVRplahcvfgNPHj1ZnnzI7jiQSz3hZNLWSVXRSABEQQSkEWyQEjCTAJkkgABhBRiEpaZvPbfk0zyJkLRNW/edP/63/2WOBylv1wiag0dWU2txXsNj+fV6Xq834LdUZTAAZ7L4xv7yLFZK55fcppqgdixznL8q6lXthPRMGXSxLaTjClbmnpVSlzHMSYHDBtUBm1pSiNUOGktRfnlOKlKQB8LTuiZVIxofYmQpHczrjTJ4FwVzFLUANAzBBhifZHi0WljOuw1AmEvOb0eNsMXmjR215K0m4wJ+L6B4kO2tmUr5V7HRJpLS82FKBjx6QAJPAlQ8c03LFyAdk66RY9vWA9F/GjDMiFmA7E3s6WeF2GJ6HEjrRGtJkiLBvegwgTB+CmmoBAQApBhwoXxl19DPL8nOG5jmcA475CknkQWHaUKANnRBEEZQ0kCUjeeDO3yuoU/5BVYKCOXjBEWpakC1NQTABbwkRUKqdR9gWxcOvshRmyn5ljhhWqFMpAsIJsFdNqBVAYuzhPibcBT+wEZxM2fwbjXP2JTaQfO/Qc8jQlRAU6akMisn8aDE/TxZx+9dnfzQpTBHTKQS9bsi2IDMoxVfgbg8aCTHvR30N2+r+bz7UivWXoXrKqHjdUlG3kAMwuzwj01Jl5BUTMALT866dFAlwm7D+jt7+30EHPt2DYr82He3ILjEH9OXuWznAW7n08GYC4CUDwfcokWwBjAsHswwMULzHPCALYNYvZ07EUovCgrPIwMq/QH/3GFF0VvG+unVk8Pm3gy6BSAipdI0urppk+j/cRHEOe5QJsrrG4DjCPWKakpQY/iw4ddbAHe+SjdQOmF9+gZQ9neYTwQGC38Xojo7KPj4kBMG2KPlSqtcdgGxTN9CZeEhwNoNUmLsRkdiyCwqiKBY0nphHmVwWccvpeltpVhVtnVd+E1WJzbsIP+ovnEY8wtwW7IlzGqrC2zbLdtEVyXrSQ5iOBmvOf5rGP8FHMN/A0tKfqWYrNVHNtEKYms9gysUVJVn5N85Z+Pf2yTHBiVNHFKAAAAAElFTkSuQmCC",width:60,height:60,src:"/static/ccdf23d0f006965d1af9d47483ab18ec/c44ff/logoWithoutFont.png",srcSet:"/static/ccdf23d0f006965d1af9d47483ab18ec/c44ff/logoWithoutFont.png 1x,\n/static/ccdf23d0f006965d1af9d47483ab18ec/ea943/logoWithoutFont.png 1.5x,\n/static/ccdf23d0f006965d1af9d47483ab18ec/6ba83/logoWithoutFont.png 2x,\n/static/ccdf23d0f006965d1af9d47483ab18ec/e0235/logoWithoutFont.png 3x"}}}}}},139:function(e,t,n){},140:function(e,t,n){"use strict";var a=n(136),r=n(0),i=n.n(r),o=n(4),c=n.n(o),d=n(141),u=n.n(d),l=n(134),s=(n(143),n(138)),p=n(142),f=n.n(p),m=function(){return i.a.createElement(l.StaticQuery,{query:"1880554309",render:function(e){return i.a.createElement(f.a,{fixed:e.placeholderImage.childImageSharp.fixed,style:{display:"flex"}})},data:s})},A=function(){return i.a.createElement("h1",{style:{backgroundColor:"#37a99a",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"15px",boxShadow:"0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"}},i.a.createElement(l.Link,{to:"/"},i.a.createElement(m,null)))},g=(n(139),function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(A,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",null,t))},data:a})});g.propTypes={children:c.a.node.isRequired};t.a=g}}]);
//# sourceMappingURL=component---src-pages-404-js-113b493d100ca4e8a84a.js.map