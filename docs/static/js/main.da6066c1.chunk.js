(this.webpackJsonpjentor=this.webpackJsonpjentor||[]).push([[0],{14:function(t,e){function a(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}a.keys=function(){return[]},a.resolve=a,t.exports=a,a.id=14},208:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(4),s=a.n(i),r=(a(75),a(55)),l=a(56),c=a(68),u=a(57),g=a(69),d=a(31),m=a.n(d),M=a(58),y=a.n(M),p=a(59),w=a.n(p),h=a(60),N=a.n(h),j=a(61),T=a.n(j),C=a(62),D=a.n(C),L=a(63),b=a.n(L),f=a(32),O=a.n(f),E=(a(95),a(64)),k=a.n(E),I=(a(98),a(99),a(65)),x=a(21),v=a(67),S=a.n(v),Y=a(33),z=a.n(Y),A=a(34),U={incomingCategories:["Account receivable","Additional Income","Allowance","Bonus","Business profit","Capital Gain","Income","Incoming","Interest","Reimbursment","Salary"],outgoingCategories:["Books","Cable TV","Cafe","Cash withdrawal","Charity & donation","Children","Cinema","Cost & taxes","Credit Card","Doctor fee","Domestic helper","Drugs/ medicine","Education","Entertainment","Fashion","Food & Drinks","Gadget & electronics","Games","Gas","Gasoline","Gifts","Groceries","Hang out","Healthcare","Hobby","House & apartment rent","Housing","Insurance","Investment","Loans","Mobile & Internet","Others","Outgoing","Parking fee","Personal care","Pet","Refund","Renovation","Restaurant","Savings","Sports","Top up card","Top up Wallet","Transportation","Utilities","Vehicle maintenance","Wedding"]};a(206);window.pdfjsLib=m.a,window.addCommas=function(t){for(var e=(t+="").split("."),a=e[0],n=e.length>1?"."+e[1]:"",o=/(\d+)(\d{3})/;o.test(a);)a=a.replace(o,"$1,$2");return a+n};var B={value:null,files:[],loading:!1,done:!1,tableViewEnabled:!1,categorySpendingEnabled:!1,incomingOutgoingEnabled:!1,monthMap:["january","februari","march","april","may","june","july","augustus","september","october","november","december"],jeniusCategories:[],rows:[],columns:[{title:"id",field:"id"},{title:"transactionNumber",field:"transactionNumber"},{title:"dateTime",field:"dateTime"},{title:"mutationType",field:"mutationType"},{title:"category",field:"category"},{title:"entityName",field:"entityName"},{title:"entityDetail",field:"entityDetail"},{title:"amount",field:"amount"}],spendingByCategoryDataCurrentRange:"all",spendingByCategoryData:{all:{datasets:[{data:[],backgroundColor:[]}],labels:[]}},incomingOutgoingDataCurrentRange:"all",incomingOutgoingData:{all:{datasets:[{data:[],backgroundColor:[]}],labels:[]}},incomingOutgoingStackedData:{datasets:[{data:[],backgroundColor:[]},{data:[],backgroundColor:[]}],labels:[]},timeRangeKeys:[],spendingByCategoryChartType:"Pie",chartTypes:["Pie","Bar"]},Q=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(c.a)(this,Object(u.a)(e).call(this,t))).componentDidMount=function(){B.jeniusCategories=U.incomingCategories.concat(U.outgoingCategories),a.setState(B)},a.renderToText=function(t){return new Promise((function(e,a){return t.getTextContent({normalizeWhitespace:!1,disableCombineTextItems:!1}).then((function(t){var a,n="",o=!0,i=!1,s=void 0;try{for(var r,l=t.items[Symbol.iterator]();!(o=(r=l.next()).done);o=!0){var c=r.value;a!==c.transform[5]&&a?n+="\n"+c.str:n+=c.str,a=c.transform[5]}}catch(u){i=!0,s=u}finally{try{o||null==l.return||l.return()}finally{if(i)throw s}}e(n)})).catch((function(t){a(t)}))}))},a.parse=function(t){var e=t.text.split("CategoryTransaction Type");e.splice(0,1);var a=e.join("CateoryTransaction Type").split("\n"),n=[],o=!1,i={},s=0;for(var r in a)if(o)switch(s){case 1:i.time=a[r].trim(),s++;break;case 2:i.entityName=a[r].trim(),s++;break;case 3:if(a[r].trim().indexOf(" | ")<0){i.entityDetail=a[r].trim(),s++;break}s++;case 4:i.transactionNumber=a[r].trim().split(" | ")[0],i.category=a[r].trim().split(" | ")[1],s++;break;case 5:"-"===a[r].trim().split(" ")[0]?i.mutationType="credit":"+"===a[r].trim().split(" ")[0]&&(i.mutationType="debit"),i.amount=a[r].trim().split(" ")[1],o=!1,s=0,n.push(i),i={},r}else{var l=!1,c=void 0,u=void 0;try{u=(c=new Date(a[r])).toString()}catch(g){l=!0}l||"Invalid Date"===u||3!==a[r].split(" ").length||(o=!0,i.date=c,s=1)}return n},a.handlePDF=function(t){var e,n,o={numpages:0,numrender:0,info:null,metadata:null,text:"",version:null};m.a.getDocument(t).then((function(t){return e=t,o.numpages=e.numPages,e.getMetadata()})).then((function(t){n=t;var i=e.numPages;i=i>e.numPages?e.numPages:i,o.text="";for(var s=[],r=1;r<=i;r++)s.push(r);O.a.eachSeries(s,(function(t,n){e.getPage(t).then((function(t){return a.renderToText(t)})).then((function(t){o.text+="\n\n"+t,n()})).catch((function(t){console.log(t)}))}),(function(t){t&&console.log(t),o.metaData=n,o.numrender=i,e.destroy();var s=a.parse(o);a.processDb(s)}))})).catch((function(t){console.log(t)}))},a.processDb=function(t){var e=0,n=[];O.a.eachSeries(t,(function(t,a){e++,t._id=k()(e+t.transactionNumber+t.date.toISOString()+t.time+""),t.id=e+1,t.date=new Date(t.date),t.time&&5===t.time.length&&t.time.indexOf(":")>-1&&(t.dateTime=t.date,t.dateTime.setHours(parseInt(t.time.split(":")[0],10)),t.dateTime.setMinutes(parseInt(t.time.split(":")[1],10))),t.amount=parseInt(t.amount.replace(/,/g,""),10),n.push(t),a()}),(function(t){console.log(t),a.setState({rows:n,tableViewEnabled:!0,categorySpendingEnabled:!0,incomingOutgoingEnabled:!0},(function(){a.processChart()}))}))},a.processChart=function(){var t={all:{}},e=new Date(a.state.rows[0].dateTime),n=new Date(a.state.rows[a.state.rows.length-1].dateTime),o=new Date(n),i={};i[o.getFullYear().toString()]=i[o.getFullYear().toString()]||[],i[o.getFullYear().toString()].push(o.getMonth());var s=!0;for(o.setDate(1);s;)i[o.getFullYear().toString()]=i[o.getFullYear().toString()]||[],i[o.getFullYear().toString()].push(o.getMonth()+1),o.getMonth()+1===12?(o.setYear(o.getFullYear()+1),o.setMonth(0)):o.setMonth(o.getMonth()+1),o.getFullYear()===e.getFullYear()&&o.getMonth()===e.getMonth()&&(s=!1,i[o.getFullYear().toString()]=i[o.getFullYear().toString()]||[],i[o.getFullYear().toString()].push(o.getMonth()+1));for(var r in a.state.jeniusCategories)for(var l in t.all[a.state.jeniusCategories[r]]=0,Object.keys(i)){var c=Object.keys(i)[l];for(var u in i[c])t[c+"_"+a.state.monthMap[i[c][u]-1]]=t[c+"_"+a.state.monthMap[i[c][u]-1]]||{},t[c+"_"+a.state.monthMap[i[c][u]-1]][a.state.jeniusCategories[r]]=0}for(var g in a.setState({timeRangeKeys:Object.keys(t).reverse()}),a.state.rows){var d=new Date(a.state.rows[g].dateTime),m=d.getFullYear()+"_"+a.state.monthMap[d.getMonth()];"credit"===a.state.rows[g].mutationType?(t.all.totalOutgoing=t.all.totalOutgoing||0,t.all.totalOutgoing+=a.state.rows[g].amount,t[m].totalOutgoing=t[m].totalOutgoing||0,t[m].totalOutgoing+=a.state.rows[g].amount):(t.all.totalIncoming=t.all.totalIncoming||0,t.all.totalIncoming+=a.state.rows[g].amount,t[m].totalIncoming=t[m].totalIncoming||0,t[m].totalIncoming+=a.state.rows[g].amount),t.all[a.state.rows[g].category]+=a.state.rows[g].amount,t[m][a.state.rows[g].category]+=a.state.rows[g].amount}var M={all:{datasets:[{data:[],backgroundColor:[]}],labels:[]}},y={all:{datasets:[{data:[],backgroundColor:[]}],labels:[]}},p={datasets:[{data:[],backgroundColor:[]},{data:[],backgroundColor:[]}],labels:[]},w=JSON.parse(JSON.stringify(M.all)),h=Object.keys(t.all);for(var N in h){console.log(h[N]);var j=Object.keys(t);for(var T in j){if(M[j[T]]=M[j[T]]||JSON.parse(JSON.stringify(w)),t[j[T]][h[N]]>0&&"totalIncoming"!==h[N]&&"totalOutgoing"!==h[N]){var C=S()();M[j[T]].datasets[0].data.push(t[j[T]][h[N]]),M[j[T]].datasets[0].backgroundColor.push(C),M[j[T]].labels.push(h[N])}if(y[j[T]]=y[j[T]]||JSON.parse(JSON.stringify(w)),y[j[T]].labels.length<2&&(y[j[T]].datasets[0].backgroundColor.push("green"),y[j[T]].labels.push("Incoming"),y[j[T]].datasets[0].data[0]=0,y[j[T]].datasets[0].backgroundColor.push("red"),y[j[T]].labels.push("Outgoing"),y[j[T]].datasets[0].data[1]=0),"totalIncoming"===h[N]){var D=t[j[T]][h[N]]||0;D+=t[j[T]][h[N]],y[j[T]].datasets[0].data[0]=D}else if("totalOutgoing"===h[N]){var L=y[j[T]].datasets[0].data[1]||0;L+=t[j[T]][h[N]],y[j[T]].datasets[0].data[1]=L}if(p.labels.indexOf(j[T])<0&&"all"!==j[T]&&p.labels.push(j[T]),p.datasets[0].label=p.datasets[0].label||"Incoming",p.datasets[0].backgroundColor="deepskyblue","totalIncoming"===h[N]&&t[j[T]][h[N]]&&parseInt(t[j[T]][h[N]],10)>0&&p.datasets[0].data.push(parseInt(t[j[T]][h[N]],10)),p.datasets[1].label=p.datasets[1].label||"Outgoing",p.datasets[1].backgroundColor="maroon","totalOutgoing"===h[N]&&t[j[T]][h[N]]&&parseInt(t[j[T]][h[N]],10)>0){var b=parseInt(t[j[T]][h[N]],10);b=0-b,p.datasets[1].data.push(b)}}}console.log(p),a.setState({spendingByCategoryData:M,incomingOutgoingData:y,incomingOutgoingStackedData:p,loading:!1,done:!0})},a.handleChange=function(t){var e=new FileReader;e.onload=function(){var t=new Uint8Array(e.result);a.setState({loading:!0},(function(){a.handlePDF(t)}))},e.readAsArrayBuffer(t[0])},a.state={},a}return Object(g.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"App"},this.state.loading&&o.a.createElement("div",{style:{marginTop:"40vh"}},o.a.createElement("img",{src:y.a,className:"App-logo",alt:"logo"})),!this.state.done&&o.a.createElement("header",{className:"App-header"},!this.state.loading&&o.a.createElement("div",{style:{width:"100%"}},o.a.createElement("div",{style:{width:"100%",height:"60vh",paddingTop:"30vh"}},o.a.createElement("h1",null,"Jentor"),o.a.createElement("p",null,"Your Jenius Transaction History Parser"),o.a.createElement("input",{type:"file",onChange:function(e){return t.handleChange(e.target.files)}})),o.a.createElement("div",{style:{backgroundImage:"url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMTVweCIgdmlld0JveD0iMCAwIDEyODAgMTQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik04NTMuODkzLDg2Ljk5OGMtMzguODU5LDAtNTguODExLTE2LjQ1NS03Ny45NTYtMzUuMDUxYzE4LjI5NS0xMC41MzYsNDAuODkxLTE4LjI3Niw3My4zNzgtMTguMjc2IGMzOC42ODUsMCw2NC4xMzIsMTIuNTY0LDg1LjQ4OSwyOC4zNDdDOTE2LjE5Miw3Mi4wMTIsOTAwLjgsODYuOTk4LDg1My44OTMsODYuOTk4eiBNNTI2LjI2NSw4MC45NDUgYy02LjUxNy0wLjU2Mi0xMy41OTktMC44NzktMjEuNDEtMC44NzljLTcwLjc5OSwwLTkxLjMzNywyNy4yMjktMTM0LjQzMywzNS42NjJjMTQuOTAxLDMuNzIsMzIuMTE4LDYuMDcsNTIuODk4LDYuMDcgQzQ3MC4xNzEsMTIxLjc5Nyw1MDAuMzQsMTAzLjQyMSw1MjYuMjY1LDgwLjk0NXoiIGZpbGwtb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNNjYzLjQ1OCwxMDkuNjcxYy02Ny4xMzcsMC04MC4zNDUtMjMuODI0LTEzNy4xOTMtMjguNzI2QzU2Ny4wODYsNDUuNTU1LDU5Ny4zODEsMCw2NjUuNjkxLDAgYzYxLjg1NywwLDg1LjM2OSwyNy43ODIsMTEwLjI0Niw1MS45NDdDNzM2Ljg4OCw3NC40MzQsNzE3LjQ1OSwxMDkuNjcxLDY2My40NTgsMTA5LjY3MXogTTIxNy42OCw5NC4xNjMgYzU1Ljk3MSwwLDYyLjUyNiwyNC4wMjYsMTI2LjMzNywyNC4wMjZjOS44NTgsMCwxOC41MDgtMC45MTYsMjYuNDA0LTIuNDYxYy01Ny4xODYtMTQuMjc4LTgwLjE3Ny00OC44MDgtMTM4LjY1OS00OC44MDggYy03Ny4wNjMsMC05OS45Niw0OC41NjktMTUxLjc1MSw0OC41NjljLTQwLjAwNiwwLTYwLjAwOC0xMi4yMDYtODAuMDExLTI5LjUwNnYxNi44MDZjMjAuMDAzLDEwLjg5MSw0MC4wMDUsMjEuNzgyLDgwLjAxMSwyMS43ODIgQzE2MC4wMTQsMTI0LjU3LDE1OC42MDgsOTQuMTYzLDIxNy42OCw5NC4xNjN6IE0xMjAwLjExMiw0Ni4yOTJjLTU3LjQ5MywwLTU2LjkzNSw0Ni41OTUtMTE1LjAxNSw0Ni41OTUgYy01My42MTIsMC01OS43NTUtMzkuNjE4LTExNS42MDItMzkuNjE4Yy0xNS4yNjcsMC0yNS4zODEsMy43NTEtMzQuNjksOC43NDljMzYuMDk2LDI2LjY3NSw2MC41MDMsNjIuNTUyLDExNy4zNDIsNjIuNTUyIGM2OS4yNDksMCw3NS45NTEtNDMuNTU5LDE0Ny45NjQtNDMuNTU5YzM5LjgwNCwwLDU5Ljk4NiwxMC45NDMsNzkuODg4LDIxLjc3N1Y4NS45ODIgQzEyNjAuMDk3LDY4Ljc3MSwxMjM5LjkxNiw0Ni4yOTIsMTIwMC4xMTIsNDYuMjkyeiIgZmlsbC1vcGFjaXR5PSIuNSIvPjxwYXRoIGQ9Ik0xMDUyLjE0NywxMjQuNTdjLTU2Ljg0LDAtODEuMjQ3LTM1Ljg3Ni0xMTcuMzQyLTYyLjU1MmMtMTguNjEzLDkuOTk0LTM0LjAwNSwyNC45OC04MC45MTIsMjQuOTggYy0zOC44NTksMC01OC44MTEtMTYuNDU1LTc3Ljk1Ni0zNS4wNTFjLTM5LjA1LDIyLjQ4Ny01OC40NzksNTcuNzI0LTExMi40OCw1Ny43MjRjLTY3LjEzNywwLTgwLjM0NS0yMy44MjQtMTM3LjE5My0yOC43MjYgYy0yNS45MjUsMjIuNDc1LTU2LjA5Myw0MC44NTItMTAyLjk0Niw0MC44NTJjLTIwLjc3OSwwLTM3Ljk5Ni0yLjM0OS01Mi44OTgtNi4wN2MtNy44OTUsMS41NDUtMTYuNTQ2LDIuNDYxLTI2LjQwNCwyLjQ2MSBjLTYzLjgxMSwwLTcwLjM2Ni0yNC4wMjYtMTI2LjMzNy0yNC4wMjZjLTU5LjA3MiwwLTU3LjY2NSwzMC40MDctMTM3LjY2OSwzMC40MDdjLTQwLjAwNiwwLTYwLjAwOC0xMC44OTEtODAuMDExLTIxLjc4MlYxNDBoMTI4MCB2LTM3LjIxMmMtMTkuOTAzLTEwLjgzNS00MC4wODQtMjEuNzc3LTc5Ljg4OC0yMS43NzdDMTEyOC4wOTgsODEuMDExLDExMjEuMzk3LDEyNC41NywxMDUyLjE0NywxMjQuNTd6Ii8+PC9nPjwvc3ZnPg==)",height:"115px",marginTop:"-115px"}}),o.a.createElement("div",{className:"App-secondary-landing"},o.a.createElement("h2",null,"How to"),o.a.createElement("img",{src:w.a,className:"App-howto",alt:"howto",style:{marginBottom:15}}),o.a.createElement("br",null),o.a.createElement("h2",null,"Screenshots"),o.a.createElement("img",{src:N.a,className:"App-demo",alt:"howto",style:{marginBottom:15}}),o.a.createElement("br",null),o.a.createElement("img",{src:T.a,className:"App-demo",alt:"howto",style:{marginBottom:15}}),o.a.createElement("br",null),o.a.createElement("img",{src:D.a,className:"App-demo",alt:"howto",style:{marginBottom:15}}),o.a.createElement("br",null),o.a.createElement("img",{src:b.a,className:"App-demo",alt:"howto",style:{marginBottom:50}}),o.a.createElement("br",null),o.a.createElement("div",{className:"disclaimer"},"Jentor was originally an unsuccessful submission for"," ",o.a.createElement("a",{href:"https://www.cocreate.id/cocreation-week-2020/hackathon/"},"Jenius's CoCreation Week 2020 Hackathon"),". See"," ",o.a.createElement("a",{href:"https://github.com/herpiko/jentor/blob/master/jentor.pdf"},"our proposal here"),". This is still a work-in-progress and may contains bugs. Also there is no guarantee that the parser will always work as expected. If Jenius decided to change the PDF layout or column of the report then Jentor may fail."),o.a.createElement("div",{className:"disclaimer"},"Our app does not and will not upload the PDF file to the cloud. Your document will be parsed and processed in the app/browser itself, hence zero user data will be out from your device. We know and fully understand about privacy. Unsure? Check our"," ",o.a.createElement("a",{href:"https://github.com/herpiko/jentor"},"source code here"),"."),o.a.createElement("div",{className:"disclaimer footer"},"Made in rush with <3.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("span",{style:{fontSize:11}},"Jenius is a trademark or a registered trademark of PT. Bank Tabungan Pensiunan Nasional"))))),this.state.done&&o.a.createElement("div",{className:"App-done-header"},"Jentor"," ",o.a.createElement("button",{style:{position:"absolute",left:15},onClick:function(){t.componentDidMount()}},"Reset")),this.state.categorySpendingEnabled&&o.a.createElement("div",{style:{marginBottom:50,padding:15}},o.a.createElement("h4",null,"Spending by Category"),o.a.createElement("div",{style:{width:"300px",margin:"0 auto"}},o.a.createElement(z.a,{options:this.state.timeRangeKeys,placeHolder:"All (from beginning)",onChange:function(e){t.setState({spendingByCategoryDataCurrentRange:e.value})},value:this.state.spendingByCategoryDataCurrentRange})),"Pie"===this.state.spendingByCategoryChartType&&o.a.createElement(x.b,{data:this.state.spendingByCategoryData[this.state.spendingByCategoryDataCurrentRange],width:500,height:300,options:{maintainAspectRatio:!1,tooltips:{callbacks:{label:function(t,e){var a=e.labels[t.index];return a+": Rp. "+window.addCommas(e.datasets[0].data[t.index].toString())}}}}}),"Bar"===this.state.spendingByCategoryChartType&&o.a.createElement(x.a,{data:this.state.spendingByCategoryData[this.state.spendingByCategoryDataCurrentRange],width:500,height:300,options:{maintainAspectRatio:!1,tooltips:{callbacks:{label:function(t,e){return"Rp. "+window.addCommas(e.datasets[0].data[t.index].toString())}}}}}),o.a.createElement("div",{style:{width:"120px",float:"right"}},o.a.createElement(z.a,{options:this.state.chartTypes,placeHolder:"Pie",onChange:function(e){t.setState({spendingByCategoryChartType:e.value})},value:this.state.spendingByCategoryChartType})),o.a.createElement("br",null)),this.state.incomingOutgoingEnabled&&o.a.createElement("div",{style:{marginBottom:50,padding:15}},o.a.createElement("h4",null,"Total Incoming vs Total Outgoing"),o.a.createElement("div",{style:{marginTop:"-15px",marginBottom:15,fontSize:11}},"Based on ",o.a.createElement("a",{href:"https://raw.githubusercontent.com/herpiko/jentor/master/src/categories.js"},"this classification")),o.a.createElement(x.a,{data:this.state.incomingOutgoingStackedData,options:{tooltips:{callbacks:{label:function(t,e){return"Rp. "+window.addCommas(t.value)}}},scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}}})),o.a.createElement("div",null,o.a.createElement(A.BrowserView,null,this.state.rows&&this.state.rows.length>0&&this.state.tableViewEnabled&&o.a.createElement("div",null,o.a.createElement("h4",null,"Table"),o.a.createElement(I.ReactTabulator,{data:this.state.rows,columns:this.state.columns,tooltips:!0,layout:"fitData"}))),o.a.createElement(A.MobileView,null,this.state.rows&&this.state.rows.length>0&&this.state.tableViewEnabled&&o.a.createElement("div",{style:{margin:15}},o.a.createElement("h4",null,"Table"),"Table view does not work well on mobile browser, please use a desktop browser instead."))))}}]),e}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},58:function(t,e,a){t.exports=a.p+"static/media/spinner.c460e012.gif"},59:function(t,e,a){t.exports=a.p+"static/media/howto.577ef68a.png"},60:function(t,e,a){t.exports=a.p+"static/media/spending_by_category.b7a0b8c1.png"},61:function(t,e,a){t.exports=a.p+"static/media/spending_by_category_pie.090cf567.png"},62:function(t,e,a){t.exports=a.p+"static/media/incoming_outgoing.52dcea3b.png"},63:function(t,e,a){t.exports=a.p+"static/media/table.58e21afc.png"},70:function(t,e,a){t.exports=a(208)},75:function(t,e,a){},80:function(t,e){},82:function(t,e){},83:function(t,e){},84:function(t,e){},85:function(t,e){},95:function(t,e,a){}},[[70,1,2]]]);