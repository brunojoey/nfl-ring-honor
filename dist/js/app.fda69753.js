(function(e){function t(t){for(var o,s,a=t[0],r=t[1],l=t[2],b=0,f=[];b<a.length;b++)s=a[b],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&f.push(c[s][0]),c[s]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var r=n[a];0!==c[r]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},c={app:0},i=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],r=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=r;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0635":function(e,t,n){},"18cb":function(e,t,n){},"3c17":function(e,t,n){"use strict";n("b6d8")},"471e":function(e,t,n){"use strict";n("9b80")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function c(e,t,n,c,i,s){var a=Object(o["w"])("Header"),r=Object(o["w"])("router-view"),l=Object(o["w"])("Footer");return Object(o["r"])(),Object(o["e"])("div",null,[Object(o["h"])(a),Object(o["h"])(r,{class:"content"}),Object(o["h"])(l)])}var i={class:"navbar-header"},s={class:"nav-item"},a=Object(o["g"])("The Fame of Honors"),r=Object(o["g"])("Teams"),l=Object(o["g"])("Positions");function u(e,t){var n=Object(o["w"])("router-link");return Object(o["r"])(),Object(o["e"])("header",i,[Object(o["f"])("nav",null,[Object(o["f"])("strong",s,[Object(o["h"])(n,{class:"nav-item link",to:"/"},{default:Object(o["B"])((function(){return[a]})),_:1})]),Object(o["f"])("strong",null,[Object(o["h"])(n,{class:"nav-item link",to:"/teams"},{default:Object(o["B"])((function(){return[r]})),_:1})]),Object(o["f"])("strong",null,[Object(o["h"])(n,{class:"nav-item link",to:"/positions"},{default:Object(o["B"])((function(){return[l]})),_:1})])])])}n("6619");const b={};b.render=u;var f=b,O={class:"navbar-footer"},j=["href"],d=["href"],p=Object(o["g"])("Disclaimer");function m(e,t){var n=Object(o["w"])("router-link");return Object(o["r"])(),Object(o["e"])("footer",O,[Object(o["f"])("nav",null,[Object(o["f"])("strong",null,[Object(o["f"])("a",{class:"nav-item link",href:"https://www.nfl.com"},"NFL",8,j)]),Object(o["f"])("strong",null,[Object(o["f"])("a",{class:"nav-item link",href:"https://www.github.com/brunojoey"},"Made by Joey Bruno",8,d)]),Object(o["f"])("strong",null,[Object(o["h"])(n,{class:"nav-item link",to:"/disclaimer"},{default:Object(o["B"])((function(){return[p]})),_:1})])])])}n("bd4f");const h={};h.render=m;var g=h,y={name:"App",components:{Header:f,Footer:g}};n("cf5f");y.render=c;var v=y,k=n("6c02"),w={class:"home-div"},_=Object(o["f"])("h1",{class:"home-header"},"The Fame of Honors",-1),T=Object(o["f"])("div",{class:"home-paragraph"},[Object(o["f"])("p",null," The Fame of Honors strives to showcase each NFL Teams' Hall of Fames and Ring of Honors to exemplify the history of the NFL along with the franchise's history. "),Object(o["f"])("p",null," Hopefully, this website helps give recognition to each players' legacies who worked tirelessly each and every week in hopes of their team's success. ")],-1),B=[_,T];function P(e,t){return Object(o["r"])(),Object(o["e"])("div",w,B)}n("d51a");const H={};H.render=P;var F=H,x=Object(o["f"])("h1",{class:"team-header"},"Teams",-1),C={class:"team-page"},R={class:"team-name"},S=["src","alt"];function A(e,t,n,c,i,s){var a=Object(o["w"])("router-link");return Object(o["r"])(),Object(o["e"])("div",null,[x,Object(o["f"])("div",C,[(Object(o["r"])(!0),Object(o["e"])(o["a"],null,Object(o["v"])(i.teams,(function(e){return Object(o["r"])(),Object(o["e"])("div",{key:e.id,class:"team-card"},[Object(o["f"])("h3",R,[Object(o["h"])(a,{to:"/teams/"+e.id,class:"team-link"},{default:Object(o["B"])((function(){return[Object(o["g"])(Object(o["y"])(e.team_name),1)]})),_:2},1032,["to"])]),Object(o["f"])("img",{class:"team-logo",src:e.logo,alt:e.logo},null,8,S)])})),128))])])}var E=n("d4ec"),I=n("bee2"),N=n("bc3a"),D=n.n(N),L=D.a.create({baseURL:"",headers:{"Content-type":"application/json"}}),M=function(){function e(){Object(E["a"])(this,e)}return Object(I["a"])(e,[{key:"getAllTeams",value:function(){return L.get("/teams")}},{key:"getOneTeam",value:function(e){return L.get("/teams/".concat(e))}},{key:"getTeamInductees",value:function(e){return L.get("/teams/".concat(e,"/inductees"))}},{key:"getPosition",value:function(e){return L.get("/positions/".concat(e))}}]),e}(),G=new M,U={name:"teams",data:function(){return{teams:[],currentTeam:{}}},methods:{getTeams:function(){var e=this;G.getAllTeams().then((function(t){e.teams=t.data,console.log("Teams",t.data)})).catch((function(e){console.log("error",e)}))}},mounted:function(){this.getTeams()}};n("e765");U.render=A;var Y=U,$={class:"inductee"},q=["src","alt"],J={class:"history-ring"},W=Object(o["f"])("strong",null,"Ring of Honor History: ",-1),K={class:"inductee-team"},Q={class:"inductee-page"},V={key:0},z=Object(o["f"])("strong",null,"Name: ",-1),X={key:1},Z=Object(o["f"])("strong",null,"Position: ",-1),ee={key:2},te=Object(o["f"])("strong",null,"Additional Notes: ",-1),ne={key:3},oe=Object(o["f"])("strong",null,"Years Active: ",-1),ce={key:4},ie=Object(o["f"])("strong",null,"Year Inducted: ",-1);function se(e,t,n,c,i,s){return Object(o["r"])(),Object(o["e"])("div",null,[Object(o["f"])("div",$,[(Object(o["r"])(),Object(o["e"])("h1",{key:i.team.id},Object(o["y"])(i.team.team_name),1)),Object(o["f"])("img",{src:i.team.logo,alt:i.team.logo,class:"team-page-logo"},null,8,q),Object(o["f"])("p",J,[W,Object(o["g"])(" "+Object(o["y"])(i.team.history),1)]),Object(o["f"])("h2",K,Object(o["y"])(i.team.team_name)+" Inductees",1)]),Object(o["f"])("div",Q,[(Object(o["r"])(!0),Object(o["e"])(o["a"],null,Object(o["v"])(i.inductees,(function(e){return Object(o["r"])(),Object(o["e"])("div",{key:e.id,class:"inductee-card",style:Object(o["n"])({backgroundColor:i.team.color,borderColor:i.team.border_color})},[e.full_name?(Object(o["r"])(),Object(o["e"])("p",V,[z,Object(o["g"])(Object(o["y"])(e.full_name),1)])):Object(o["d"])("",!0),e.player_position?(Object(o["r"])(),Object(o["e"])("p",X,[Z,Object(o["g"])(Object(o["y"])(e.player_position),1)])):Object(o["d"])("",!0),e.notes?(Object(o["r"])(),Object(o["e"])("p",ee,[te,Object(o["g"])(" "+Object(o["y"])(e.notes),1)])):Object(o["d"])("",!0),e.years_active?(Object(o["r"])(),Object(o["e"])("p",ne,[oe,Object(o["g"])(Object(o["y"])(e.years_active),1)])):Object(o["d"])("",!0),e.year_inducted?(Object(o["r"])(),Object(o["e"])("p",ce,[ie,Object(o["g"])(Object(o["y"])(e.year_inducted),1)])):Object(o["d"])("",!0)],4)})),128))])])}var ae=n("1da1"),re=(n("96cf"),{name:"team",data:function(){return{team:{},inductees:[]}},methods:{getTeam:function(e){var t=this;return Object(ae["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,G.getOneTeam(e).then((function(e){t.team=e.data,console.log("Team",e.data)})).catch((function(e){console.log("error",e)}));case 2:case"end":return n.stop()}}),n)})))()},getTeamInductees:function(e){var t=this;return Object(ae["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,G.getTeamInductees(e).then((function(e){t.inductees=e.data,console.log("Inductees",e.data)})).catch((function(e){console.log("error",e)}));case 2:case"end":return n.stop()}}),n)})))()}},mounted:function(){this.getTeam(this.$route.params.id),this.getTeamInductees(this.$route.params.id)}});n("3c17");re.render=se;var le=re,ue=Object(o["f"])("h1",{class:"position-header"},"Positions",-1),be={class:"positions-page"},fe={class:"position-item"},Oe=Object(o["g"])("Quarterbacks"),je={class:"position-item"},de=Object(o["g"])("Running Backs"),pe={class:"position-item"},me=Object(o["g"])("Full Backs"),he={class:"position-item"},ge=Object(o["g"])("Wide Receivers"),ye={class:"position-item"},ve=Object(o["g"])("Tight Ends"),ke={class:"position-item"},we=Object(o["g"])("Offensive Tackles"),_e={class:"position-item"},Te=Object(o["g"])("Offensive Guards"),Be={class:"position-item"},Pe=Object(o["g"])("Centers"),He={class:"position-item"},Fe=Object(o["g"])("Defensive Ends"),xe={class:"position-item"},Ce=Object(o["g"])("Defensive Tackles"),Re={class:"position-item"},Se=Object(o["g"])("Linebackers"),Ae={class:"position-item"},Ee=Object(o["g"])("Cornerbacks"),Ie={class:"position-item"},Ne=Object(o["g"])("Safties"),De={class:"position-item"},Le=Object(o["g"])("Kickers"),Me={class:"position-item"},Ge=Object(o["g"])("Punters"),Ue={class:"position-item"},Ye=Object(o["g"])("Coaches"),$e={class:"position-item"},qe=Object(o["g"])("Coordinators"),Je={class:"position-item"},We=Object(o["g"])("Head Coaches"),Ke={class:"position-item"},Qe=Object(o["g"])("General Managers"),Ve={class:"position-item"},ze=Object(o["g"])("Executives"),Xe={class:"position-item"},Ze=Object(o["g"])("Owners");function et(e,t){var n=Object(o["w"])("router-link");return Object(o["r"])(),Object(o["e"])("div",null,[ue,Object(o["f"])("div",be,[Object(o["f"])("li",fe,[Object(o["h"])(n,{class:"position-link",to:"/positions/QB"},{default:Object(o["B"])((function(){return[Oe]})),_:1})]),Object(o["f"])("li",je,[Object(o["h"])(n,{class:"position-link",to:"/positions/RB"},{default:Object(o["B"])((function(){return[de]})),_:1})]),Object(o["f"])("li",pe,[Object(o["h"])(n,{class:"position-link",to:"/positions/FB"},{default:Object(o["B"])((function(){return[me]})),_:1})]),Object(o["f"])("li",he,[Object(o["h"])(n,{class:"position-link",to:"/positions/WR"},{default:Object(o["B"])((function(){return[ge]})),_:1})]),Object(o["f"])("li",ye,[Object(o["h"])(n,{class:"position-link",to:"/positions/TE"},{default:Object(o["B"])((function(){return[ve]})),_:1})]),Object(o["f"])("li",ke,[Object(o["h"])(n,{class:"position-link",to:"/positions/OT"},{default:Object(o["B"])((function(){return[we]})),_:1})]),Object(o["f"])("li",_e,[Object(o["h"])(n,{class:"position-link",to:"/positions/OG"},{default:Object(o["B"])((function(){return[Te]})),_:1})]),Object(o["f"])("li",Be,[Object(o["h"])(n,{class:"position-link",to:"/positions/Center"},{default:Object(o["B"])((function(){return[Pe]})),_:1})]),Object(o["f"])("li",He,[Object(o["h"])(n,{class:"position-link",to:"/positions/DE"},{default:Object(o["B"])((function(){return[Fe]})),_:1})]),Object(o["f"])("li",xe,[Object(o["h"])(n,{class:"position-link",to:"/positions/DT"},{default:Object(o["B"])((function(){return[Ce]})),_:1})]),Object(o["f"])("li",Re,[Object(o["h"])(n,{class:"position-link",to:"/positions/LB"},{default:Object(o["B"])((function(){return[Se]})),_:1})]),Object(o["f"])("li",Ae,[Object(o["h"])(n,{class:"position-link",to:"/positions/CB"},{default:Object(o["B"])((function(){return[Ee]})),_:1})]),Object(o["f"])("li",Ie,[Object(o["h"])(n,{class:"position-link",to:"/positions/Safety"},{default:Object(o["B"])((function(){return[Ne]})),_:1})]),Object(o["f"])("li",De,[Object(o["h"])(n,{class:"position-link",to:"/positions/Kicker"},{default:Object(o["B"])((function(){return[Le]})),_:1})]),Object(o["f"])("li",Me,[Object(o["h"])(n,{class:"position-link",to:"/positions/Punter"},{default:Object(o["B"])((function(){return[Ge]})),_:1})]),Object(o["f"])("li",Ue,[Object(o["h"])(n,{class:"position-link",to:"/positions/Coach"},{default:Object(o["B"])((function(){return[Ye]})),_:1})]),Object(o["f"])("li",$e,[Object(o["h"])(n,{class:"position-link",to:"/positions/Coordinator"},{default:Object(o["B"])((function(){return[qe]})),_:1})]),Object(o["f"])("li",Je,[Object(o["h"])(n,{class:"position-link",to:"/positions/Head%20Coach"},{default:Object(o["B"])((function(){return[We]})),_:1})]),Object(o["f"])("li",Ke,[Object(o["h"])(n,{class:"position-link",to:"/positions/General%20Manager"},{default:Object(o["B"])((function(){return[Qe]})),_:1})]),Object(o["f"])("li",Ve,[Object(o["h"])(n,{class:"position-link",to:"/positions/Executive"},{default:Object(o["B"])((function(){return[ze]})),_:1})]),Object(o["f"])("li",Xe,[Object(o["h"])(n,{class:"position-link",to:"/positions/Owner"},{default:Object(o["B"])((function(){return[Ze]})),_:1})])])])}n("bfb2");const tt={};tt.render=et;var nt=tt,ot={class:"position-header"},ct={class:"position-page"},it={key:0},st=Object(o["f"])("strong",null,"Name: ",-1),at={key:1},rt=Object(o["f"])("strong",null,"Team: ",-1),lt={key:2},ut=Object(o["f"])("strong",null,"Additional Notes: ",-1),bt={key:3},ft=Object(o["f"])("strong",null,"Years Active: ",-1),Ot={key:4},jt=Object(o["f"])("strong",null,"Year Inducted: ",-1);function dt(e,t,n,c,i,s){return Object(o["r"])(),Object(o["e"])(o["a"],null,[Object(o["f"])("h1",ot,Object(o["y"])(this.$route.params.player_position),1),Object(o["f"])("div",ct,[(Object(o["r"])(!0),Object(o["e"])(o["a"],null,Object(o["v"])(i.positions,(function(e){return Object(o["r"])(),Object(o["e"])("div",{key:e.id,class:"player-card"},[e.full_name?(Object(o["r"])(),Object(o["e"])("p",it,[st,Object(o["g"])(Object(o["y"])(e.full_name),1)])):Object(o["d"])("",!0),e.team_name?(Object(o["r"])(),Object(o["e"])("p",at,[rt,Object(o["g"])(Object(o["y"])(e.team_name),1)])):Object(o["d"])("",!0),e.notes?(Object(o["r"])(),Object(o["e"])("p",lt,[ut,Object(o["g"])(" "+Object(o["y"])(e.notes),1)])):Object(o["d"])("",!0),e.years_active?(Object(o["r"])(),Object(o["e"])("p",bt,[ft,Object(o["g"])(Object(o["y"])(e.years_active),1)])):Object(o["d"])("",!0),e.year_inducted?(Object(o["r"])(),Object(o["e"])("p",Ot,[jt,Object(o["g"])(Object(o["y"])(e.year_inducted),1)])):Object(o["d"])("",!0)])})),128))])],64)}var pt={name:"Positions",data:function(){return{positions:[]}},methods:{getPosition:function(e){var t=this;G.getPosition(e).then((function(e){t.positions=e.data,console.log("Position",e.data)})).catch((function(e){console.log("error",e)}))}},mounted:function(){this.getPosition(this.$route.params.player_position)}};n("c4b7");pt.render=dt;var mt=pt,ht={class:"disclaimer-page"},gt=Object(o["f"])("h1",{class:"disclaimer-header"},"Disclaimer for The Fame of Honors",-1),yt=Object(o["f"])("p",null," If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at fameofhonors@gmail.com. ",-1),vt=Object(o["f"])("p",null," All the information on this website is published in good faith and for general information purpose only. The Fame of Honors does not make any warranties about the completeness, reliability, and accuracy of this information. Any action you take upon the information you find on this website is strictly at your own risk. The Fame of Honors will not be liable for any losses and/or damages in connection with the use of our website. ",-1),kt=Object(o["f"])("p",null," From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone bad. ",-1),wt=Object(o["f"])("p",null,' Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information. ',-1),_t=Object(o["f"])("h3",{class:"disclaimer-header"},"Consent",-1),Tt=Object(o["f"])("p",null," By using our website, you hereby consent to our disclaimer and agree to its terms. ",-1),Bt=Object(o["f"])("h3",{class:"disclaimer-header"},"Update",-1),Pt=Object(o["f"])("p",null," Should we update, amend or make any changes to this document, those changes will be prominently posted here. ",-1),Ht=[gt,yt,vt,kt,wt,_t,Tt,Bt,Pt];function Ft(e,t){return Object(o["r"])(),Object(o["e"])("div",ht,Ht)}n("471e");const xt={};xt.render=Ft;var Ct=xt,Rt=[{path:"/",name:"Home",component:F},{path:"/teams",name:"Teams",component:Y},{path:"/teams/:id",name:"Team",component:le},{path:"/positions",name:"Positions",component:nt},{path:"/positions/:player_position",name:"Position",component:mt},{path:"/disclaimer",name:"Disclaimer",component:Ct}],St=Object(k["a"])({history:Object(k["b"])(Object({NODE_ENV:"production",BASE_URL:"/"}).baseURL),routes:Rt}),At=St;n("7b17"),n("ab8b");Object(o["c"])(v).use(At).mount("#app")},6619:function(e,t,n){"use strict";n("0635")},"6b2b":function(e,t,n){},"6c028":function(e,t,n){},"7fb4":function(e,t,n){},"9b80":function(e,t,n){},a4e2:function(e,t,n){},b6d8:function(e,t,n){},bd4f:function(e,t,n){"use strict";n("18cb")},bfb2:function(e,t,n){"use strict";n("6b2b")},c4b7:function(e,t,n){"use strict";n("a4e2")},cf5f:function(e,t,n){"use strict";n("7fb4")},d51a:function(e,t,n){"use strict";n("fb17")},e765:function(e,t,n){"use strict";n("6c028")},fb17:function(e,t,n){}});
//# sourceMappingURL=app.fda69753.js.map