(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{132:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(140),o=n(142),c=n.n(o),l=n(141),d=n.n(l);var u=function(t){return r.a.createElement(d.a,{title:t.title,meta:[{name:"title",content:t.title},{name:"description",content:t.description},{property:"og:title",content:t.title},{property:"og:url",content:t.pathname?t.url+t.pathname:t.url},{property:"og:image",content:t.thumbnail&&t.thumbnail},{property:"og:image:secure_url",content:t.thumbnail&&t.thumbnail},{property:"og:description",content:t.description},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"},{property:"og:locale",content:"en"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:t.title},{name:"twitter:description",content:t.description},{name:"twitter:image",content:t.thumbnail&&t.thumbnail},{property:"og:type",content:"website"},{name:"robots",content:"index, follow"},{name:"twitter:creator",content:"@saigowthamr"},{property:"og:site_name",content:"yoursitename"}]},r.a.createElement("html",{lang:"en"}))};n.d(e,"query",function(){return p});e.default=function(t){var e=t.data.markdownRemark,n=t.data.site.siteMetadata.siteUrl,a=e.frontmatter,o=a.title,l=a.description,d=e.frontmatter.image.childImageSharp.resize.src;return r.a.createElement(i.a,null,r.a.createElement(u,{title:o,description:l,thumbnail:n+d,url:n,pathname:t.location.pathname}),r.a.createElement("div",null,r.a.createElement("h1",null,o),r.a.createElement(c.a,{fluid:e.frontmatter.image.childImageSharp.fluid}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}})))};var p="1673348542"},134:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return s}),n.d(e,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(133),l=n.n(c);n.d(e,"Link",function(){return l.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var d=n(135),u=n.n(d);n.d(e,"PageRenderer",function(){return u.a});var p=n(28);n.d(e,"parsePath",function(){return p.a});var s=r.a.createContext({}),m=function(t){return r.a.createElement(s.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},135:function(t,e,n){var a;t.exports=(a=n(137))&&a.default||a},136:function(t){t.exports={data:{site:{siteMetadata:{title:"Blog"}}}}},137:function(t,e,n){"use strict";n.r(e);n(29);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(47),l=n(2),d=function(t){var e=t.location,n=l.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=d},138:function(t){t.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADG0lEQVQ4y22VSVMTURDHw1KevHDRi5ZWuVRplahcvfgNPHj1ZnnzI7jiQSz3hZNLWSVXRSABEQQSkEWyQEjCTAJkkgABhBRiEpaZvPbfk0zyJkLRNW/edP/63/2WOBylv1wiag0dWU2txXsNj+fV6Xq834LdUZTAAZ7L4xv7yLFZK55fcppqgdixznL8q6lXthPRMGXSxLaTjClbmnpVSlzHMSYHDBtUBm1pSiNUOGktRfnlOKlKQB8LTuiZVIxofYmQpHczrjTJ4FwVzFLUANAzBBhifZHi0WljOuw1AmEvOb0eNsMXmjR215K0m4wJ+L6B4kO2tmUr5V7HRJpLS82FKBjx6QAJPAlQ8c03LFyAdk66RY9vWA9F/GjDMiFmA7E3s6WeF2GJ6HEjrRGtJkiLBvegwgTB+CmmoBAQApBhwoXxl19DPL8nOG5jmcA475CknkQWHaUKANnRBEEZQ0kCUjeeDO3yuoU/5BVYKCOXjBEWpakC1NQTABbwkRUKqdR9gWxcOvshRmyn5ljhhWqFMpAsIJsFdNqBVAYuzhPibcBT+wEZxM2fwbjXP2JTaQfO/Qc8jQlRAU6akMisn8aDE/TxZx+9dnfzQpTBHTKQS9bsi2IDMoxVfgbg8aCTHvR30N2+r+bz7UivWXoXrKqHjdUlG3kAMwuzwj01Jl5BUTMALT866dFAlwm7D+jt7+30EHPt2DYr82He3ILjEH9OXuWznAW7n08GYC4CUDwfcokWwBjAsHswwMULzHPCALYNYvZ07EUovCgrPIwMq/QH/3GFF0VvG+unVk8Pm3gy6BSAipdI0urppk+j/cRHEOe5QJsrrG4DjCPWKakpQY/iw4ddbAHe+SjdQOmF9+gZQ9neYTwQGC38Xojo7KPj4kBMG2KPlSqtcdgGxTN9CZeEhwNoNUmLsRkdiyCwqiKBY0nphHmVwWccvpeltpVhVtnVd+E1WJzbsIP+ovnEY8wtwW7IlzGqrC2zbLdtEVyXrSQ5iOBmvOf5rGP8FHMN/A0tKfqWYrNVHNtEKYms9gysUVJVn5N85Z+Pf2yTHBiVNHFKAAAAAElFTkSuQmCC",width:60,height:60,src:"/static/ccdf23d0f006965d1af9d47483ab18ec/c44ff/logoWithoutFont.png",srcSet:"/static/ccdf23d0f006965d1af9d47483ab18ec/c44ff/logoWithoutFont.png 1x,\n/static/ccdf23d0f006965d1af9d47483ab18ec/ea943/logoWithoutFont.png 1.5x,\n/static/ccdf23d0f006965d1af9d47483ab18ec/6ba83/logoWithoutFont.png 2x,\n/static/ccdf23d0f006965d1af9d47483ab18ec/e0235/logoWithoutFont.png 3x"}}}}}},139:function(t,e,n){},140:function(t,e,n){"use strict";var a=n(136),r=n(0),i=n.n(r),o=n(4),c=n.n(o),l=n(141),d=n.n(l),u=n(134),p=(n(143),n(138)),s=n(142),m=n.n(s),f=function(){return i.a.createElement(u.StaticQuery,{query:"1880554309",render:function(t){return i.a.createElement(m.a,{fixed:t.placeholderImage.childImageSharp.fixed,style:{display:"flex"}})},data:p})},g=function(){return i.a.createElement("h1",{style:{backgroundColor:"#37a99a",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"15px",boxShadow:"0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"}},i.a.createElement(u.Link,{to:"/"},i.a.createElement(f,null)))},h=(n(139),function(t){var e=t.children;return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(g,{siteTitle:t.site.siteMetadata.title}),i.a.createElement("div",null,e))},data:a})});h.propTypes={children:c.a.node.isRequired};e.a=h}}]);
//# sourceMappingURL=component---src-templates-blog-post-jsx-915a0985189cef5cf190.js.map