(this.webpackJsonpcovid_tracker=this.webpackJsonpcovid_tracker||[]).push([[0],{44:function(e,t,a){e.exports=a(61)},49:function(e,t,a){},51:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),c=a.n(r),s=(a(49),a(11)),o=a(12),i=a(14),m=a(13),u=(a(50),a(22)),d=a(5),E=(a(51),a(65)),v=a(64),h=a(38),p=a(33),b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(E.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},l.a.createElement("h2",{style:{color:"white"}},"Covid19 Tracker by "),l.a.createElement("div",{style:{fontSize:"24px",color:"white",marginLeft:"5px"}},l.a.createElement(h.Wave,{text:"KEVIN JACOB",speed:"3"})),l.a.createElement(E.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(E.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(v.a,{className:"ml-auto"},l.a.createElement(u.b,{className:"nav-link",to:"/india"},"India"),l.a.createElement(p.b,null),l.a.createElement(u.b,{className:"nav-link",to:"/world"},"World")),l.a.createElement(v.a,{className:"ml-auto"},l.a.createElement(p.a,null),l.a.createElement("a",{style:{color:"white"},href:"https://kevinjacob2001.github.io"},"My Portfolio"))))}}]),a}(n.Component),f=a(15),y=a.n(f),w=a(19),N=a(67),g=a(66),j=a(63),k=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={stateData:{}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(w.a)(y.a.mark((function e(){var t,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19india.org/state_district_wise.json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({stateData:a});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=Object.keys(this.state.stateData);return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement(g.a,null,t.map((function(t,a){var n=e.state.stateData[t].districtData,r=(Object.keys(n),0),c=0,s=0,o=0,i=[];for(var m in n){r+=n[m].active,c+=n[m].confirmed,s+=n[m].deceased,o+=n[m].recovered;var u=n[m];u.district_name=m,i.push(u)}return console.log(i),l.a.createElement("div",null,l.a.createElement(N.a,null,l.a.createElement(N.a.Header,null,l.a.createElement(g.a.Toggle,{as:j.a,variant:"primary",eventKey:a},t,"- ",l.a.createElement("span",{className:" btn btn-outline-dark p-1 mr-2"},"Total Cases-",c)," ",l.a.createElement("span",{className:"btn-outline-dark btn p-1 mr-2"},"  Active-",r," "),"   ",l.a.createElement("span",{className:"btn-outline-dark btn p-1 mr-2"},"Recovered-",o)," ",l.a.createElement("span",{className:"btn-outline-dark btn p-1 mr-2"},"Death-",s," "))),l.a.createElement(g.a.Collapse,{eventKey:a},l.a.createElement(N.a.Body,null,l.a.createElement("table",{className:"table table-bordered table-stripped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"District"),l.a.createElement("td",null,"Confirmed"),l.a.createElement("td",null,"Active"),l.a.createElement("td",null,"Recovered"),l.a.createElement("td",null,"Deaths"))),l.a.createElement("tbody",null,i.map((function(e,t){return l.a.createElement("tr",null,l.a.createElement("td",null,e.district_name),l.a.createElement("td",null,e.confirmed),l.a.createElement("td",null,e.active),l.a.createElement("td",null,e.recovered),l.a.createElement("td",null,e.deaths))}))))))))}))))))}}]),a}(n.Component),O=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={data:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(w.a)(y.a.mark((function e(){var t,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://corona.lmao.ninja/v2/countries/india");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),this.setState({data:a});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("img",{src:"https://www.countryflags.io/in/shiny/64.png"}),l.a.createElement("h3",null,"INDIA")),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3 col-sm-6"},l.a.createElement(N.a,{className:"badge badge-primary",style:{width:"18rem"}},l.a.createElement(N.a.Body,{className:"text-center"},l.a.createElement(N.a.Title,null,"TOTAL CASES"),l.a.createElement("h3",null,this.state.data.cases)))),l.a.createElement("div",{className:"col-md-3 col-sm-6"},l.a.createElement(N.a,{className:"badge badge-warning",style:{width:"18rem"}},l.a.createElement(N.a.Body,{className:"text-center"},l.a.createElement(N.a.Title,{style:{color:"white"}},"ACTIVE CASES"),l.a.createElement("h3",{style:{color:"white"}},this.state.data.active),l.a.createElement("h6",{style:{color:"white"}},"Critical:",this.state.data.critical)))),l.a.createElement("div",{className:"col-md-3 col-sm-6"},l.a.createElement(N.a,{className:"badge badge-success",style:{width:"18rem"}},l.a.createElement(N.a.Body,{className:"text-center"},l.a.createElement(N.a.Title,null,"RECOVERED"),l.a.createElement("h3",null,this.state.data.recovered)))),l.a.createElement("div",{className:"col-md-3 col-sm-6"},l.a.createElement(N.a,{className:"badge badge-danger",style:{width:"18rem"}},l.a.createElement(N.a.Body,{className:"text-center"},l.a.createElement(N.a.Title,null,"TOTAL DEATHS"),l.a.createElement("h3",null,this.state.data.deaths)))))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement(k,null)))}}]),a}(n.Component),x=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={data:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(w.a)(y.a.mark((function e(){var t,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://corona.lmao.ninja/v2/countries");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({data:a});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("table",{className:"table table-primary table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Country"),l.a.createElement("td",null,"Total Cases"),l.a.createElement("td",null,"Recovered"),l.a.createElement("td",null,"Death"))),l.a.createElement("tbody",null,this.state.data.map((function(e,t){return l.a.createElement("tr",null,l.a.createElement("td",null,e.country,l.a.createElement("img",{style:{width:"65px",marginLeft:"50px"},src:e.countryInfo.flag})),l.a.createElement("td",null,e.cases),l.a.createElement("td",null,e.recovered),l.a.createElement("td",null,e.deaths))}))))))}}]),a}(n.Component),C=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement(u.a,null,l.a.createElement(b,null),l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/CovidTrackerApp/"},l.a.createElement(O,null)),l.a.createElement(d.a,{path:"/india"},l.a.createElement(O,null)),l.a.createElement(d.a,{path:"/world"},l.a.createElement(x,null)))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.4aae8948.chunk.js.map