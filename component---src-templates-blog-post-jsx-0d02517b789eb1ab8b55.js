(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{133:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(142),o=n(144),c=n.n(o),l=n(137),d=n(143),p=n.n(d);var m=function(e){return r.a.createElement(p.a,{title:e.title,meta:[{name:"title",content:e.title},{name:"description",content:e.description},{property:"og:title",content:e.title},{property:"og:url",content:e.pathname?e.url+e.pathname:e.url},{property:"og:image",content:e.thumbnail&&e.thumbnail},{property:"og:image:secure_url",content:e.thumbnail&&e.thumbnail},{property:"og:description",content:e.description},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"},{property:"og:locale",content:"en"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:e.title},{name:"twitter:description",content:e.description},{name:"twitter:image",content:e.thumbnail&&e.thumbnail},{property:"og:type",content:"website"},{name:"robots",content:"index, follow"},{name:"twitter:creator",content:"@lampewebdev"},{property:"og:site_name",content:"https://lampewebdev.github.io/"}]},r.a.createElement("html",{lang:"en"}))};n.d(t,"query",function(){return f});var u=l.a.div.withConfig({displayName:"blog-post__Container",componentId:"sc-197d81a-0"})(["text-decoration:none;max-width:630px;margin-left:auto;margin-right:auto;margin-top:30px;"]),s=l.a.h1.withConfig({displayName:"blog-post__Header",componentId:"sc-197d81a-1"})(["padding:15px;margin-bottom:15px;"]),g=l.a.div.withConfig({displayName:"blog-post__Content",componentId:"sc-197d81a-2"})(["padding-top:15px;"]);t.default=function(e){var t=e.data.markdownRemark,n=e.data.site.siteMetadata.siteUrl,a=t.frontmatter,o=a.title,l=a.description,d=t.frontmatter.image.childImageSharp.resize.src;return r.a.createElement(i.a,null,r.a.createElement(m,{title:o,description:l,thumbnail:n+d,url:n,pathname:e.location.pathname}),r.a.createElement(u,null,r.a.createElement(s,null,o),r.a.createElement(c.a,{fluid:t.frontmatter.image.childImageSharp.fluid}),r.a.createElement(g,{dangerouslySetInnerHTML:{__html:t.html}})))};var f="1673348542"},135:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return u}),n.d(t,"StaticQuery",function(){return s});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(134),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var d=n(136),p=n.n(d);n.d(t,"PageRenderer",function(){return p.a});var m=n(28);n.d(t,"parsePath",function(){return m.a});var u=r.a.createContext({}),s=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},136:function(e,t,n){var a;e.exports=(a=n(139))&&a.default||a},138:function(e){e.exports={data:{site:{siteMetadata:{title:"Blog"}}}}},139:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(47),l=n(2),d=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},140:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADG0lEQVQ4y22VSVMTURDHw1KevHDRi5ZWuVRplahcvfgNPHj1ZnnzI7jiQSz3hZNLWSVXRSABEQQSkEWyQEjCTAJkkgABhBRiEpaZvPbfk0zyJkLRNW/edP/63/2WOBylv1wiag0dWU2txXsNj+fV6Xq834LdUZTAAZ7L4xv7yLFZK55fcppqgdixznL8q6lXthPRMGXSxLaTjClbmnpVSlzHMSYHDBtUBm1pSiNUOGktRfnlOKlKQB8LTuiZVIxofYmQpHczrjTJ4FwVzFLUANAzBBhifZHi0WljOuw1AmEvOb0eNsMXmjR215K0m4wJ+L6B4kO2tmUr5V7HRJpLS82FKBjx6QAJPAlQ8c03LFyAdk66RY9vWA9F/GjDMiFmA7E3s6WeF2GJ6HEjrRGtJkiLBvegwgTB+CmmoBAQApBhwoXxl19DPL8nOG5jmcA475CknkQWHaUKANnRBEEZQ0kCUjeeDO3yuoU/5BVYKCOXjBEWpakC1NQTABbwkRUKqdR9gWxcOvshRmyn5ljhhWqFMpAsIJsFdNqBVAYuzhPibcBT+wEZxM2fwbjXP2JTaQfO/Qc8jQlRAU6akMisn8aDE/TxZx+9dnfzQpTBHTKQS9bsi2IDMoxVfgbg8aCTHvR30N2+r+bz7UivWXoXrKqHjdUlG3kAMwuzwj01Jl5BUTMALT866dFAlwm7D+jt7+30EHPt2DYr82He3ILjEH9OXuWznAW7n08GYC4CUDwfcokWwBjAsHswwMULzHPCALYNYvZ07EUovCgrPIwMq/QH/3GFF0VvG+unVk8Pm3gy6BSAipdI0urppk+j/cRHEOe5QJsrrG4DjCPWKakpQY/iw4ddbAHe+SjdQOmF9+gZQ9neYTwQGC38Xojo7KPj4kBMG2KPlSqtcdgGxTN9CZeEhwNoNUmLsRkdiyCwqiKBY0nphHmVwWccvpeltpVhVtnVd+E1WJzbsIP+ovnEY8wtwW7IlzGqrC2zbLdtEVyXrSQ5iOBmvOf5rGP8FHMN/A0tKfqWYrNVHNtEKYms9gysUVJVn5N85Z+Pf2yTHBiVNHFKAAAAAElFTkSuQmCC",width:60,height:60,src:"/static/ccdf23d0f006965d1af9d47483ab18ec/c44ff/logoWithoutFont.png",srcSet:"/static/ccdf23d0f006965d1af9d47483ab18ec/c44ff/logoWithoutFont.png 1x,\n/static/ccdf23d0f006965d1af9d47483ab18ec/ea943/logoWithoutFont.png 1.5x,\n/static/ccdf23d0f006965d1af9d47483ab18ec/6ba83/logoWithoutFont.png 2x,\n/static/ccdf23d0f006965d1af9d47483ab18ec/e0235/logoWithoutFont.png 3x"}}}}}},141:function(e,t,n){},142:function(e,t,n){"use strict";var a=n(138),r=n(0),i=n.n(r),o=n(4),c=n.n(o),l=n(143),d=n.n(l),p=n(135),m=(n(145),n(140)),u=n(144),s=n.n(u),g=function(){return i.a.createElement(p.StaticQuery,{query:"193324865",render:function(e){return i.a.createElement(s.a,{fixed:e.placeholderImage.childImageSharp.fixed})},data:m})},f=function(){return i.a.createElement("h1",{style:{backgroundColor:"#339E90",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"15px",paddingRight:"15px",textAlign:"center"}},i.a.createElement(p.Link,{to:"/"},i.a.createElement(g,null)))},h=n(137),w=n(146),A=h.a.div.withConfig({displayName:"footer__Footer",componentId:"r54yyk-0"})(["background-color:#339E90;color:#F7F7F7;height:50px;margin-top:-50px;padding-right:15px;padding-left:15px;a{float:right;padding-left:5px;svg{color:white;font-size:40px;padding-top:5px;}}"]),y=function(){return i.a.createElement(A,null,i.a.createElement("a",{href:"https://www.instagram.com/lampewebdev/",target:"_blank"},i.a.createElement(w.b,null)),i.a.createElement("a",{href:"https://github.com/lampewebdev",target:"_blank"},i.a.createElement(w.a,null)),i.a.createElement("a",{href:"https://twitter.com/lampewebdev",target:"_blank"},i.a.createElement(w.c,null)))},E=(n(141),h.a.div.withConfig({displayName:"layout__Content",componentId:"ii2kc2-0"})(["@media only screen and (max-width:650px){padding-left:10px;padding-right:10px;}"])),b=function(e){var t=e.children;return i.a.createElement(p.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(r.Fragment,null,i.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("script",{src:"https://unpkg.com/ionicons@4.2.2/dist/ionicons.js"}),i.a.createElement("html",{lang:"en"})),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"content-inside"},i.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(E,null,t))),i.a.createElement(y,null))},data:a})};b.propTypes={children:c.a.node.isRequired};t.a=b}}]);
//# sourceMappingURL=component---src-templates-blog-post-jsx-0d02517b789eb1ab8b55.js.map