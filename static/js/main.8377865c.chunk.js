(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(t,e,a){t.exports=a(67)},50:function(t,e,a){},51:function(t,e,a){},67:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),s=a(22),u=a.n(s),i=(a(49),a(50),a(10)),o=a(11),c=a(13),l=a(12),m=a(14),h=a(42),p=a(21),y=a(82),d=(a(51),a(7)),x=a(68),f=a(69),M=a(70),E=a(71),g=a(72),b=a(73),v=a(74),O=a(86),w=a(75),j=a(76),S=a(77),P=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(c.a)(this,Object(l.a)(e).call(this,t))).toggle=a.toggle.bind(Object(d.a)(a)),a.state={isOpen:!1},a}return Object(m.a)(e,t),Object(o.a)(e,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(x.a,{color:"light",light:!0,expand:"md"},r.a.createElement(f.a,{href:"/#/"},"GermWarfare"),r.a.createElement(M.a,{onClick:this.toggle}),r.a.createElement(E.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(g.a,{className:"ml-auto",navbar:!0},r.a.createElement(b.a,null,r.a.createElement(v.a,{href:"/components/"},"JohnKang")),r.a.createElement(b.a,null,r.a.createElement(v.a,{href:"https://gitlab.com/JohnKang"},"GitLab")),r.a.createElement(O.a,{nav:!0,inNavbar:!0},r.a.createElement(w.a,{nav:!0,caret:!0},"Options"),r.a.createElement(j.a,{right:!0},r.a.createElement(S.a,{href:"/vsplayer"},"P vs P"),r.a.createElement(S.a,{href:"/vscomputer"},"P vs C")))))))}}]),e}(r.a.Component),C=a(83),k=a(84),D=["white","red","blue"],N=["white","#f4a688","#fff2df","#ffff99"],R=function(t){function e(){return Object(i.a)(this,e),Object(c.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t={width:"60px",height:"60px",padding:"5%",border:"1px solid #c8c3cc",background:N[this.props.bgStatus]},e={width:"50px",height:"50px",WebkitBorderRadius:"25px",MozBorderRadius:"25px",borderRadius:"25px",background:D[this.props.status],margin:"0 auto"};return r.a.createElement("div",{className:"cell",style:t},0!==this.props.status?r.a.createElement("div",{style:e}):"")}}]),e}(r.a.Component);function z(t,e,a,n){var r=e.filter(function(t){return 0===t.row}).length;switch(e[t.x*r+t.y].bgStatus){case 0:break;case 1:e[t.x*r+t.y].status=a.status,B(t,e,a),n=1===n?2:1,I(e);break;case 2:e[t.x*r+t.y].status=a.status,B(t,e,a),e[a.row*r+a.col].status=0,n=1===n?2:1,I(e)}return n}function G(t,e){return I(e),T(t,e)}function B(t,e,a){var n=K(t,e.filter(function(t){return 0===t.col}).length,e.filter(function(t){return 0===t.row}).length);e.map(function(t){return-1!==n.findIndex(function(e){return e.x===t.row&&e.y===t.col})&&0!==t.status&&(t.status=a.status),t})}function I(t){t.map(function(t){return t.bgStatus=0,t})}function T(t,e){var a=e.filter(function(t){return 0===t.col}).length,n=e.filter(function(t){return 0===t.row}).length,r=K(t,a,n),s=function(t,e,a){var n=[];return n.push({x:Math.min(Math.max(t.x-2,0),e-1),y:Math.min(Math.max(t.y-2,0),a-1)}),n.push({x:Math.min(Math.max(t.x-2,0),e-1),y:Math.min(Math.max(t.y-1,0),a-1)}),n.push({x:Math.min(Math.max(t.x-2,0),e-1),y:Math.min(Math.max(t.y,0),a-1)}),n.push({x:Math.min(Math.max(t.x-2,0),e-1),y:Math.min(Math.max(t.y+1,0),a-1)}),n.push({x:Math.min(Math.max(t.x-2,0),e-1),y:Math.min(Math.max(t.y+2,0),a-1)}),n.push({x:Math.min(Math.max(t.x-1,0),e-1),y:Math.min(Math.max(t.y-2,0),a-1)}),n.push({x:Math.min(Math.max(t.x-1,0),e-1),y:Math.min(Math.max(t.y+2,0),a-1)}),n.push({x:Math.min(Math.max(t.x,0),e-1),y:Math.min(Math.max(t.y-2,0),a-1)}),n.push({x:Math.min(Math.max(t.x,0),e-1),y:Math.min(Math.max(t.y+2,0),a-1)}),n.push({x:Math.min(Math.max(t.x+1,0),e-1),y:Math.min(Math.max(t.y-2,0),a-1)}),n.push({x:Math.min(Math.max(t.x+1,0),e-1),y:Math.min(Math.max(t.y+2,0),a-1)}),n.push({x:Math.min(Math.max(t.x+2,0),e-1),y:Math.min(Math.max(t.y-2,0),a-1)}),n.push({x:Math.min(Math.max(t.x+2,0),e-1),y:Math.min(Math.max(t.y-1,0),a-1)}),n.push({x:Math.min(Math.max(t.x+2,0),e-1),y:Math.min(Math.max(t.y,0),a-1)}),n.push({x:Math.min(Math.max(t.x+2,0),e-1),y:Math.min(Math.max(t.y+1,0),a-1)}),n.push({x:Math.min(Math.max(t.x+2,0),e-1),y:Math.min(Math.max(t.y+2,0),a-1)}),n}(t,a,n);e.map(function(e){return t.x===e.row&&t.y===e.col&&(e.bgStatus=3),-1!==s.findIndex(function(t){return t.x===e.row&&t.y===e.col})&&0===e.status&&(e.bgStatus=2),-1!==r.findIndex(function(t){return t.x===e.row&&t.y===e.col})&&0===e.status&&(e.bgStatus=1),e})}function J(t){return{p1:t.filter(function(t){return 1===t.status}).length,p2:t.filter(function(t){return 2===t.status}).length}}function W(t,e,a,n){var r=e.filter(function(t){return 0===t.row}).length;switch(e[t.x*r+t.y].status){case 0:n=z(t,e,a,n);break;case 1:1===n&&function(t,e){I(e),T(t,e)}(t,e);break;default:2===n&&G(t,e)}return{md:e,pt:n,ct:J(e)}}function A(t,e){var a=L(t.filter(function(t){return t.status===e})),n=[];a.map(function(a){var r=L(t);G({x:a.row,y:a.col},r);var s=L(r.filter(function(t){return 1===t.bgStatus||2===t.bgStatus}));return s&&s.map(function(s){r=L(t),G({x:a.row,y:a.col},r),z({x:s.row,y:s.col},r,a,e);var u=J(r);return n.push({mapData:r,ct:u,diff:u.p2-u.p1}),s}),a});var r,s=Math.max.apply(Math,n.map(function(t){return t.diff})),u=n.filter(function(t){return t.diff===s}),i=(r=u.length,Math.floor(Math.random()*Math.floor(r)));return{md:u?u[i].mapData:t,pt:1===e?2:1,ct:u?u[i].ct:J(t)}}function K(t,e,a){var n=[];return n.push({x:Math.min(Math.max(t.x-1,0),e-1),y:Math.min(Math.max(t.y-1,0),a-1)}),n.push({x:Math.min(Math.max(t.x-1,0),e-1),y:Math.min(Math.max(t.y,0),a-1)}),n.push({x:Math.min(Math.max(t.x-1,0),e-1),y:Math.min(Math.max(t.y+1,0),a-1)}),n.push({x:Math.min(Math.max(t.x,0),e-1),y:Math.min(Math.max(t.y-1,0),a-1)}),n.push({x:Math.min(Math.max(t.x,0),e-1),y:Math.min(Math.max(t.y+1,0),a-1)}),n.push({x:Math.min(Math.max(t.x+1,0),e-1),y:Math.min(Math.max(t.y-1,0),a-1)}),n.push({x:Math.min(Math.max(t.x+1,0),e-1),y:Math.min(Math.max(t.y,0),a-1)}),n.push({x:Math.min(Math.max(t.x+1,0),e-1),y:Math.min(Math.max(t.y+1,0),a-1)}),n}function L(t){return JSON.parse(JSON.stringify(t))}var X=function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,s=new Array(n),u=0;u<n;u++)s[u]=arguments[u];return(a=Object(c.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(s)))).state={mapSize:{numRow:7,numCol:7},mapData:a.createPlayMap(7,7),playerTurn:1,currData:{},count:{},isPlayed:!1},a.createRow=function(t,e){for(var n=a.state.mapData.filter(function(e){return e.row===t}),s=[],u=0;u<e;u++)s.push(r.a.createElement("td",{key:u},r.a.createElement(R,{status:n[u].status,bgStatus:n[u].bgStatus})));return r.a.createElement("tr",{key:t},s)},a.createMap=function(t,e){for(var n=[],s=0;s<t;s++)n.push(a.createRow(s,e));return r.a.createElement("table",{className:"mainpane",onClick:a.onMainPaneClick,style:{margin:"0 auto"}},r.a.createElement("tbody",null,n))},a.onMainPaneClick=function(t){var e=document.getElementsByClassName("mainpane")[0].getBoundingClientRect(),n=Math.floor((t.clientY-e.y)/(e.height/a.state.mapSize.numRow)),r=Math.floor((t.clientX-e.x)/(e.width/a.state.mapSize.numCol)),s=a.state.playerTurn;a.props.gameEnd||a.processClickInput(n,r,s)},a}return Object(m.a)(e,t),Object(o.a)(e,[{key:"createPlayMap",value:function(t,e){for(var a=[],n=0;n<t;n++)for(var r=0;r<e;r++)a.push({row:n,col:r,status:0,bgStatus:0});return a[0].status=1,a[e-1].status=2,a[t*e-e].status=2,a[t*e-1].status=1,a}},{key:"processClickInput",value:function(t,e,a){var n=this;this.state.mapData[t*this.state.mapSize.numCol+e].status===this.state.playerTurn?this.setState({currData:this.state.mapData[t*this.state.mapSize.numCol+e]},function(){n.processInputPosition(t,e,a)}):this.processInputPosition(t,e,a)}},{key:"processInputPosition",value:function(t,e,a){var n=this,r=W({x:t,y:e},this.state.mapData,this.state.currData,this.state.playerTurn);this.setState({mapData:r.md,playerTurn:r.pt,count:r.ct,isPlayed:a!==r.pt},function(){if(n.props.updateCellCount(n.state.count),1===n.props.playmode&&n.state.isPlayed&&2===n.state.playerTurn&&0!==n.state.count.p2){var t=A(n.state.mapData,n.state.playerTurn);(e=500,new Promise(function(t){return setTimeout(t,e)})).then(function(){n.setState({mapData:t.md,playerTurn:t.pt,count:t.ct,isPlayed:a!==t.pt},function(){n.props.updateCellCount(n.state.count)})})}var e})}},{key:"render",value:function(){return r.a.createElement("div",null,this.createMap(this.state.mapSize.numRow,this.state.mapSize.numCol))}}]),e}(r.a.Component),Y=a(78),$=function(t){function e(){return Object(i.a)(this,e),Object(c.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t={width:"50px",height:"50px",WebkitBorderRadius:"25px",MozBorderRadius:"25px",borderRadius:"25px",background:1===this.props.status?"red":"blue",margin:"0 auto"};return r.a.createElement("div",{className:"w-100 h-100",style:{border:"1px solid #c8c3cc"}},r.a.createElement("div",{className:"h-50 d-flex justify-content-center align-items-center"},r.a.createElement("h1",null,this.props.playerid,r.a.createElement("div",{style:t}))),r.a.createElement("div",{className:"h-50"},r.a.createElement(Y.a,{className:"h-100 d-flex justify-content-center align-items-center"},r.a.createElement("p",{style:{fontSize:"90px"}},this.props.count))))}}]),e}(r.a.Component),q=a(85),F=a(79),H=a(80),Q=a(81),U=a(40),V=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(c.a)(this,Object(l.a)(e).call(this,t))).state={modal:!1},a.toggle=a.toggle.bind(Object(d.a)(a)),a}return Object(m.a)(e,t),Object(o.a)(e,[{key:"toggle",value:function(){this.setState(function(t){return{modal:!t.modal}})}},{key:"render",value:function(){var t=0===this.props.playmode?r.a.createElement("div",null,r.a.createElement("p",null,"Player1: ",this.props.countP1),r.a.createElement("p",null,"Player2: ",this.props.countP2)):r.a.createElement("div",null,r.a.createElement("p",null,"Player: ",this.props.countP1),r.a.createElement("p",null,"Computer: ",this.props.countP2));return r.a.createElement("div",null,r.a.createElement(q.a,{isOpen:this.props.isOpen,toggle:this.toggle,className:this.props.className},r.a.createElement(F.a,null,0===this.props.playmode?this.props.countP1>this.props.countP2?"Player1 won!":"Player2 won!":this.props.countP1>this.props.countP2?"Player won!":"Computer won!"),r.a.createElement(H.a,null,t),r.a.createElement(Q.a,null,0===this.props.playmode?r.a.createElement(U.a,{color:"primary",onClick:this.toggle,href:"/vsplayer"},"Ok"):r.a.createElement(U.a,{color:"primary",onClick:this.toggle,href:"/vscomputer"},"Ok"))))}}]),e}(r.a.Component),Z=function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).state={count:{p1:2,p2:2},playMode:0,gameStatus:{isGameEnded:!1,winner:null}},a.updateCountState=function(t){a.setState({count:t},function(){a.setState({gameStatus:{isGameEnded:0===a.state.count.p1||0===a.state.count.p2||a.state.count.p1+a.state.count.p2===49,winner:a.state.count.p1>a.state.count.p2?1:2}})})},a}return Object(m.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y.a,null,r.a.createElement(C.a,null,r.a.createElement(k.a,{xs:"3"},r.a.createElement($,{playerid:0===this.state.playMode?"Player1":"Player",status:1,count:this.state.count.p1})),r.a.createElement(k.a,{xs:"6"},r.a.createElement(X,{updateCellCount:this.updateCountState,playmode:this.state.playMode,gameEnd:this.state.gameStatus.isGameEnded})),r.a.createElement(k.a,{xs:"3"},r.a.createElement($,{playerid:0===this.state.playMode?"Player2":"Computer",status:2,count:this.state.count.p2})))),r.a.createElement(V,{isOpen:this.state.gameStatus.isGameEnded,playmode:this.state.playMode,countP1:this.state.count.p1,countP2:this.state.count.p2}))}}]),e}(r.a.Component),_=function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).state={count:{p1:2,p2:2},playMode:1,gameStatus:{isGameEnded:!1,winner:null}},a.updateCountState=function(t){a.setState({count:t},function(){a.setState({gameStatus:{isGameEnded:0===a.state.count.p1||0===a.state.count.p2||a.state.count.p1+a.state.count.p2===49,winner:a.state.count.p1>a.state.count.p2?1:2}})})},a}return Object(m.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y.a,null,r.a.createElement(C.a,null,r.a.createElement(k.a,{xs:"3"},r.a.createElement($,{playerid:0===this.state.playMode?"Player1":"Player",status:1,count:this.state.count.p1})),r.a.createElement(k.a,{xs:"6"},r.a.createElement(X,{updateCellCount:this.updateCountState,playmode:this.state.playMode,gameEnd:this.state.gameStatus.isGameEnded})),r.a.createElement(k.a,{xs:"3"},r.a.createElement($,{playerid:0===this.state.playMode?"Player2":"Computer",status:2,count:this.state.count.p2})))),r.a.createElement(V,{isOpen:this.state.gameStatus.isGameEnded,playmode:this.state.playMode,countP1:this.state.count.p1,countP2:this.state.count.p2}))}}]),e}(r.a.Component),tt=function(t){function e(){return Object(i.a)(this,e),Object(c.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y.a,{style:{marginBottom:"25px"}},r.a.createElement(P,{updatePlayMode:this.updatePlayModeState})),r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(p.a,{exact:!0,path:"/",component:Z}),r.a.createElement(p.a,{path:"/vsplayer",component:Z}),r.a.createElement(p.a,{path:"/vscomputer",component:_}))))}}]),e}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(tt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[44,1,2]]]);
//# sourceMappingURL=main.8377865c.chunk.js.map