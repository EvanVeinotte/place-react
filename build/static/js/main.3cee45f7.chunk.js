(this["webpackJsonpplace-react"]=this["webpackJsonpplace-react"]||[]).push([[0],{13:function(e,t,n){},7:function(e,t,n){e.exports=n(8)},8:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),i=n(4),c=n(3),o=n(0),u=n.n(o),l=n(6),s=n.n(l),h=(n(13),function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return u.a.createElement("div",{className:"pixel",style:{backgroundColor:this.props.backgroundColor}})}}]),n}(u.a.Component)),p=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={pixels:Array(32).fill(Array(32).fill("#000000"))},r}return Object(r.a)(n,[{key:"fetchData",value:function(){var e=this;fetch("http://vino0244.xyz/place/data").then((function(e){return e.json()})).then((function(t){return e.syncPixels(t,e)})),setTimeout(this.fetchData.bind(this),3e3)}},{key:"syncPixels",value:function(e){this.setState({pixels:e.matrix})}},{key:"renderPixel",value:function(e,t){return u.a.createElement(h,{key:e.toString()+t.toString(),backgroundColor:this.state.pixels[e][t]})}},{key:"renderRow",value:function(e){for(var t=[],n=0;n<32;n++)t.push(this.renderPixel(e,n));return u.a.createElement("div",{className:"row",key:e},t)}},{key:"renderBoard",value:function(){for(var e=[],t=0;t<32;t++)e.push(this.renderRow(t));return e}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return u.a.createElement("div",{className:"board-container"},u.a.createElement("div",{className:"theboard"},this.renderBoard()))}}]),n}(u.a.Component),f=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",{className:"title-txt"},"Visit\xa0",u.a.createElement("a",{href:"https://twitch.tv/vino0244/"},"https://twitch.tv/vino0244/"),"\xa0to participate!"),u.a.createElement(p,null))}}]),n}(u.a.Component);s.a.render(u.a.createElement(f,null),document.getElementById("root"))}},[[7,1,2]]]);
//# sourceMappingURL=main.3cee45f7.chunk.js.map