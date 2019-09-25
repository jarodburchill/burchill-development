(window["webpackJsonpburchill-development"]=window["webpackJsonpburchill-development"]||[]).push([[0],{14:function(e,n,i){e.exports=i(24)},24:function(e,n,i){"use strict";i.r(n);var t=i(0),a=i.n(t),r=i(7),o=i.n(r),u=i(2),c=i(1),s=i(8),l=i.n(s);function m(){var e=Object(u.a)(['\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background-image: url(',");\n    background-position: 50%;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;\n    @supports (-webkit-overflow-scrolling: touch) {\n      background-image: unset;\n      background-position: unset;\n      background-repeat: unset;\n      background-attachment: unset;\n      background-size: unset;\n      background: rgb(0, 0, 0);\n    }\n  }\n\n  #root {\n    /* padding-top: 10vh; */\n    background: inherit;\n  }\n"]);return m=function(){return e},e}var d=Object(c.b)(m(),l.a),p=i(11);function f(){var e=Object(u.a)(["\n  @media screen and (max-width: 1000px) {\n    width: 30px;\n    height: 3px;\n    margin: 5px 0;\n    background: ",";\n  }\n"]);return f=function(){return e},e}function g(){var e=Object(u.a)(["\n  @media screen and (max-width: 1000px) {\n    position: absolute;\n    cursor: pointer;\n    right: 5%;\n    top: 50%;\n    transform: translate(-5%, -50%);\n    z-index: 3;\n  }\n"]);return g=function(){return e},e}function b(){var e=Object(u.a)(["\n  @media screen and (max-width: 1000px) {\n    position: fixed;\n    flex-direction: column;\n    justify-content: space-evenly;\n    background: ",";\n    height: 100vh;\n    width: 100vw;\n    margin: 5% 0 0 0;\n    transition: all 0.75s ease-out;\n    clip-path: ",";\n    -webkit-clip-path: ",";\n    pointer-events: ",";\n    li {\n      transition: all 0.25s ease-out;\n      opacity: ",";\n      a {\n        font-size: 25px;\n      }\n    }\n  }\n"]);return b=function(){return e},e}function h(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  align-items: center;\n  list-style: none;\n  width: 45%;\n  height: 100%;\n  margin: 0 5% 0 0;\n  li {\n    margin: 0 2.5%;\n  }\n  li a {\n    color: ",";\n    text-decoration: none;\n    font-size: 15px;\n  }\n"]);return h=function(){return e},e}function q(){var e=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  color: ",";\n  margin-left: 5%;\n  z-index: 3;\n  @media screen and (max-width: 1000px) {\n    font-size: 20px;\n  }\n"]);return q=function(){return e},e}function v(){var e=Object(u.a)(["\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n"]);return v=function(){return e},e}function w(){var e=Object(u.a)(["\n  width: 100vw;\n  height: 10vh;\n  top: 0;\n  position: fixed;\n  background: ",";\n  z-index: 2;\n"]);return w=function(){return e},e}var x=c.c.nav(w(),(function(e){return e.bg})),E=c.c.div(v()),k=c.c.h1(q(),(function(e){return e.fg})),y=c.c.ul(h(),(function(e){return e.fg})),j=Object(c.c)(y)(b(),(function(e){return e.bg}),(function(e){return e.open?"circle(200% at 95% -10%)":"circle(100px at 95% -10%)"}),(function(e){return e.open?"circle(200% at 95% -10%)":"circle(100px at 95% -10%)"}),(function(e){return e.open?"all":"none"}),(function(e){return e.open?"1":"0"})),O=c.c.div(g()),z=c.c.div(f(),(function(e){return e.fg})),L=function(e){var n=e.children,i=e.title,r=e.bg,o=e.fg,u=Object(t.useState)(!1),c=Object(p.a)(u,2),s=c[0],l=c[1];if(window.navigator.userAgent.indexOf("Edge")<0&&window.navigator.userAgent.indexOf("MSIE")<0&&window.navigator.userAgent.indexOf("Trident")<0){var m=function(){l(!s)};if(window.addEventListener("resize",(function(e){e.target.outerWidth>1e3&&l(!1)})),s){var d=window.scrollX,f=window.scrollY;window.onscroll=function(){window.scrollTo(d,f)}}else window.onscroll=function(){};return a.a.createElement(x,{bg:r},a.a.createElement(O,{onClick:function(){return m()}},a.a.createElement(z,{fg:o}),a.a.createElement(z,{fg:o}),a.a.createElement(z,{fg:o})),a.a.createElement(E,null,a.a.createElement(k,{fg:o},i),a.a.createElement(j,{fg:o,bg:r,open:s},n.map((function(e,n){return a.a.createElement("li",{key:n,onClick:function(){return m()}},e)})))))}return a.a.createElement(x,{bg:r},a.a.createElement(E,null,a.a.createElement(k,{fg:o},i),a.a.createElement(y,{fg:o},n.map((function(e,n){return a.a.createElement("li",{key:n},e)})))))};function A(){var e=Object(u.a)(['\n  margin: 10vh 1% 0 1%;\n  padding: 10%;\n  border-radius: 10px;\n  width: 98%;\n  min-height: 50vh;\n  position: relative;\n  background: inherit;\n  overflow: hidden;\n  z-index: 1;\n\n  &::before {\n    content: "";\n    position: absolute;\n    background: inherit;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    box-shadow: inset 0 0 0 2000px rgba(255, 255, 255, 0.75);\n    filter: blur(10px);\n    margin: -20px;\n    z-index: -1;\n  }\n']);return A=function(){return e},e}var Q={primary:"rgb(0, 0, 0)",secondary:"rgb(255, 255, 255)"},S=c.c.div(A()),B=function(){return a.a.createElement(c.a,{theme:Q},a.a.createElement(a.a.Fragment,null,a.a.createElement(L,{title:"Burchill Development",bg:Q.primary,fg:Q.secondary},a.a.createElement("a",{href:"#home"},"Home"),a.a.createElement("a",{href:"#projects"},"Projects"),a.a.createElement("a",{href:"#blog"},"Blog"),a.a.createElement("a",{href:"#about"},"About"),a.a.createElement("a",{href:"#contact"},"Contact")),a.a.createElement(d,null),a.a.createElement(S,null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores consequatur soluta modi voluptates sed hic optio itaque sunt nisi reprehenderit tenetur doloremque ratione quasi ducimus officia, illo architecto accusamus eaque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod obcaecati animi qui praesentium fugiat soluta temporibus impedit magni, incidunt laudantium nesciunt, aliquam quisquam. Eos harum aliquid, qui facilis assumenda error? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores consequatur soluta modi voluptates sed hic optio itaque sunt nisi reprehenderit tenetur doloremque ratione quasi ducimus officia, illo architecto accusamus eaque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod obcaecati animi qui praesentium fugiat soluta temporibus impedit magni, incidunt laudantium nesciunt, aliquam quisquam. Eos harum aliquid, qui facilis assumenda error?"),a.a.createElement(S,null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores consequatur soluta modi voluptates sed hic optio itaque sunt nisi reprehenderit tenetur doloremque ratione quasi ducimus officia, illo architecto accusamus eaque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod obcaecati animi qui praesentium fugiat soluta temporibus impedit magni, incidunt laudantium nesciunt, aliquam quisquam. Eos harum aliquid, qui facilis assumenda error? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores consequatur soluta modi voluptates sed hic optio itaque sunt nisi reprehenderit tenetur doloremque ratione quasi ducimus officia, illo architecto accusamus eaque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod obcaecati animi qui praesentium fugiat soluta temporibus impedit magni, incidunt laudantium nesciunt, aliquam quisquam. Eos harum aliquid, qui facilis assumenda error?"),a.a.createElement(S,null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores consequatur soluta modi voluptates sed hic optio itaque sunt nisi reprehenderit tenetur doloremque ratione quasi ducimus officia, illo architecto accusamus eaque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod obcaecati animi qui praesentium fugiat soluta temporibus impedit magni, incidunt laudantium nesciunt, aliquam quisquam. Eos harum aliquid, qui facilis assumenda error? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores consequatur soluta modi voluptates sed hic optio itaque sunt nisi reprehenderit tenetur doloremque ratione quasi ducimus officia, illo architecto accusamus eaque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod obcaecati animi qui praesentium fugiat soluta temporibus impedit magni, incidunt laudantium nesciunt, aliquam quisquam. Eos harum aliquid, qui facilis assumenda error?")))};o.a.render(a.a.createElement(B,null),document.getElementById("root"))},8:function(e,n,i){e.exports=i.p+"static/media/background2.771d63e6.jpg"}},[[14,1,2]]]);
//# sourceMappingURL=main.2db312e2.chunk.js.map