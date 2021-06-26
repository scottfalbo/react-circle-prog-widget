(this["webpackJsonpreact-circle-prog-widget"]=this["webpackJsonpreact-circle-prog-widget"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(8),r=a.n(i),o=(a(14),a(2)),c=a(3),l=a(5),u=a(4),b=a(7),h=a.n(b),d=a(9),j=(a(16),a(0)),p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={query:""},n}return Object(c.a)(a,[{key:"handleInput",value:function(e){this.setState({query:e.target.value})}},{key:"handleSubmission",value:function(){this.fakeQuery(this.state.query)}},{key:"fakeQuery",value:function(){var e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Math.floor(99*Math.random()+1),this.props.updateValue(t),this.props.animateDisplay(),this.setState({query:""});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Click the button to generate a random number."}),Object(j.jsx)("button",{className:"make-box",onClick:this.handleSubmission.bind(this),children:"Generate Number"})]})}}]),a}(n.Component),m=(a(18),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).ticker=function(){n.setState({value:n.props.value}),n.props.animateDisplay&&n.state.output<=n.state.value-1&&(n.setState((function(e){return{output:e.output+1,final:n.state.output,outerColor:n.displayColor(n.state.final)}})),n.progressBar()),n.state.output===n.state.value-1&&(n.setState({final:n.state.output,output:0}),n.props.toggleAnimation())},n.progressBar=function(){n.state.output<51?n.setState({bar:"progress-circle p"+n.state.output}):n.setState({bar:"progress-circle over50 p"+n.state.output})},n.displayColor=function(e){var t;e>=0&&e<25?t="green":e>24&&e<50?t="yellow":e>49&&e<75?t="orange":e>74&&(t="red"),n.setState({textColor:"span-"+t,outerColor:"outer-color-"+t})},n.state={output:0,value:-1,final:0,bar:"progress-circle p0",textColor:"",outerColor:""},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.intervalId=setInterval((function(){return e.ticker()}),25)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){return Object(j.jsx)("section",{className:"circle-prog-widget",children:Object(j.jsx)("div",{id:"circle-container",className:this.state.outerColor,children:Object(j.jsxs)("div",{className:this.state.bar,children:[Object(j.jsxs)("span",{id:"number-display",className:this.state.textColor,children:[this.state.final,"%"]}),Object(j.jsxs)("div",{className:"left-half-clipper",children:[Object(j.jsx)("div",{className:"first50-bar"}),Object(j.jsx)("div",{className:"value-bar"})]})]})})})}}]),a}(n.Component)),g=(a(19),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={value:-1,animateDisplay:!1},e.updateValue=function(t){e.setState({value:t})},e.animateDisplay=function(){e.setState({animateDisplay:!e.state.animateDisplay})},e}return Object(c.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"make-box",children:[Object(j.jsx)(p,{updateValue:this.updateValue,animateDisplay:this.animateDisplay}),Object(j.jsx)(m,{value:this.state.value,updateValue:this.updateValue,animateDisplay:this.state.animateDisplay,toggleAnimation:this.animateDisplay})]})}}]),a}(n.Component)),f=(a(20),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={showAbout:!1},e}return Object(c.a)(a,[{key:"handleSubmission",value:function(){this.setState({showAbout:!this.state.showAbout}),console.log(this.state.showAbout)}},{key:"render",value:function(){return Object(j.jsxs)("main",{children:[Object(j.jsx)("h1",{className:"make-box",children:"React Circular Progress Widget"}),Object(j.jsx)("p",{children:"This circular progress widget takes in a value between 1 and 100.  The progress wheel then loads and counts up to the value, changing colors every 25%.  Please see the README for implementation instructions."}),Object(j.jsx)(g,{}),Object(j.jsx)("button",{className:"make-box",onClick:this.handleSubmission.bind(this),children:"About"}),Object(j.jsx)("div",{className:this.state.showAbout?"screen-dim":"screen-dim hide-me",children:Object(j.jsxs)("section",{className:"about-me",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("figure",{children:Object(j.jsx)("img",{src:"./images/selfie.jpg",alt:"Scott Falbo"})}),Object(j.jsxs)("section",{className:"social",children:[Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"mailto:scottfalboart@gmail.com",children:"scottfalboart@gmail.com"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://www.scottfalbo.com",target:"_blank",rel:"noreferrer",children:"scottfalbo.com"})})]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://www.linkedin.com/in/scott-falbo/",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{src:"./images/linkedIn-black.png",alt:"LinkedIn"})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://github.com/scottfalbo",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{src:"./images/github.png",alt:"GitHub"})})})]})]})]}),Object(j.jsxs)("article",{children:["Hello, my name is Scott Falbo, I'm a software developer and artist in Seattle.",Object(j.jsx)("br",{}),"I'm a huge gamer nerd that loves coding.  Learning a new language or technologies to solve a problem domain is basically studying ancient tongues to scribe spells.  HttpRequest, more like Neo-Electrical Telekinesis.  Writing code is wizardry, and who doesn't want to be a wizard.",Object(j.jsx)("br",{}),"As a long time end game MMO gamer and puzzler I enjoy solving problems and organizing solutions.  I find great satisfaction in laying out repository patterns in .NET or figuring out entity relations for a database.  When everything works out it's like beating a level of a game.  If things don't work out it's a learning experience until they do.",Object(j.jsx)("br",{}),"While I enjoy puzzling and problem solving I'm also a career artist with a passion for visual creation.  With a firm understanding of composition and color theory I also enjoy building attractive, accessible and functional front ends.",Object(j.jsx)("br",{}),"Thanks for looking, let's write some spells!"]}),Object(j.jsx)("button",{className:"make-box",onClick:this.handleSubmission.bind(this),children:"\ud83d\uddd9 close"})]})})]})}}]),a}(n.Component)),v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),v()}],[[21,1,2]]]);
//# sourceMappingURL=main.3476f0ad.chunk.js.map