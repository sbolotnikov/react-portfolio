(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{116:function(e,t){},117:function(e,t){},118:function(e,t){},119:function(e,t){},120:function(e,t){},122:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),i=a.n(o),l=(a(81),a(82),a(83),a(36)),s=(a(46),a(23)),c=a(30);var m=function(e){var t=Object(n.useState)(!0),a=Object(s.a)(t,2),o=a[0],i=a[1];return r.a.createElement("div",{className:"fixed-top",style:{maxWidth:"1440px",marginLeft:"auto",marginRight:"auto"}},r.a.createElement("div",{className:(o?"show":"")+" collapse",id:"navbarToggleExternalContent"},r.a.createElement("div",{className:"row",id:"Row1"},r.a.createElement("div",{className:"col-12 col-sm-12 col-md-3 col-lg-3",id:"Brand"},r.a.createElement(c.b,{to:"/",className:"NavA"},r.a.createElement("span",{className:"NavP",style:{color:"white"}},"Home"))),r.a.createElement("div",{className:"col-12 col-sm-12 col-md-9 col-lg-9"},r.a.createElement("div",{className:"row",id:"subRow"},r.a.createElement("div",{className:"col-0 col-sm-0 col-md-3 col-lg-5"},r.a.createElement("h6",{id:"SpaceTab"}," dffgf")),r.a.createElement("div",{className:"col-4 col-sm-4 col-md-3 col-lg-2"},r.a.createElement(c.b,{to:"/projects",className:"NavA"},r.a.createElement("span",{className:"NavP"},"portfolio"))),r.a.createElement("div",{className:"col-4 col-sm-4 col-md-3 col-lg-2"},r.a.createElement("a",{title:"contact",href:"mailto:sbolotnikov@gmail.com",className:"NavA"},r.a.createElement("span",{className:"NavP"},"contact"))),r.a.createElement("div",{className:"col-4 col-sm-4 col-md-3 col-lg-3"},r.a.createElement(c.b,{to:"/resume",className:"NavA"},r.a.createElement("span",{className:"NavP"},"Resume"))))))),r.a.createElement("nav",{className:"navbar navbar-dark"},r.a.createElement("button",{className:"navbar-toggler",id:"btnMenu",type:"button",style:{backgroundColor:"#59aaa5"},"data-toggle":"collapse","data-target":"#navbarToggleExternalContent","aria-controls":"navbarToggleExternalContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){document.querySelector(".nav-tabs")&&(console.log("click show. nav-tabs "),document.querySelector(".nav-tabs").style.display=o?"none":"flex"),i(!o)}},r.a.createElement("span",{className:"navbar-toggler-icon"}))))};var u=function(e){return r.a.createElement("span",{className:"n"},e.charItem)};var d=function(e){var t=e.text.split("");return r.a.createElement("span",null,t.map((function(e,t){return r.a.createElement(u,{charItem:e,key:"item-"+t})})))},p=a(29),h=a(127);var g=function(e){return r.a.createElement(h.a,null,e.carArr.map((function(e,t){return r.a.createElement(h.a.Item,{key:"item-"+t},r.a.createElement("img",{className:"d-block w-100",src:e.link,alt:e.alt}),r.a.createElement(h.a.Caption,null,r.a.createElement("p",{className:"portfolioLabel"},e.text)))})))},f=a(56),b=a.n(f);a(89);var E=function(e){return r.a.createElement("section",{className:"card app"},r.a.createElement(b.a,{animateIn:"animate__"+e.animIn[0],animateOut:"animate__"+e.animOut[0]},r.a.createElement(g,{carArr:e.carouselArr})),r.a.createElement(b.a,{animateIn:"animate__"+e.animIn[1],animateOut:"animate__"+e.animOut[1]},r.a.createElement("figure",{className:"description"},r.a.createElement("a",{className:"link",href:e.site,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("h3",{className:"head1"},e.nameProject)),r.a.createElement("a",{className:"link",href:e.github,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("p",{className:"head1"},"Link to GitHub repository")),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.description}}))))},k=0;var v=function(){return Object(n.useEffect)((function(){l.a.from("#cardGreeting",{duration:1,backgroundPosition:"-200px,0px",scale:1.5,opacity:0,ease:"power2.out"}),l.a.from("#cardImage1",{duration:2,x:300,delay:1,opacity:0,ease:"power2.out"}),l.a.from("#cloud",{duration:2,x:200,y:200,opacity:0,delay:3,ease:"elastic"}),l.a.from("#aside1",{duration:1,opacity:0,delay:4,ease:"elastic"});var e=setInterval((function(){var t=document.querySelector("span.n");t?(t.className="",t.className="glow",k>0&&document.querySelector(".glow").classList.remove("glow"),228===++k&&(k=0,document.querySelector(".glow").classList.remove("glow"),clearInterval(e))):clearInterval(e)}),60)}),[]),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"container",style:{maxWidth:"1440px",overflow:"hidden"}},r.a.createElement(m,null),r.a.createElement("main",null,r.a.createElement("div",{className:"card",id:"cardGreeting",style:{alignItems:"center"}},r.a.createElement("img",{className:"card-img",id:"cardImage1",src:"./assets/images/SergeyProfile.png",alt:"Sergey's Profile",height:"80%"}),r.a.createElement("div",{className:"card-img-overlay"},r.a.createElement("figure",{id:"cloud"},r.a.createElement("p",{id:"anim"},r.a.createElement(d,{text:"Hello, My name is "}),r.a.createElement("strong",null,r.a.createElement(d,{text:"Sergey Bolotnikov."})),r.a.createElement("br",null)," ",r.a.createElement(d,{text:"I am a full-stack web developer and javascript specialist."}),r.a.createElement("br",null),r.a.createElement("strong",null,r.a.createElement(d,{text:" HTML/CSS | Bootstrap | JavaScript | React "}),r.a.createElement("br",null),r.a.createElement(d,{text:" NodeJS | Express | MongoDB "})),r.a.createElement("br",null),r.a.createElement(d,{text:"Tel.:(917)916-2840. "}),r.a.createElement(d,{text:"E-Mail:"}),r.a.createElement("a",{title:"Contact Email",href:"mailto:sbolotnikov@gmail.com"},r.a.createElement(d,{text:"sbolotnikov@gmail.com"})),r.a.createElement("br",null),r.a.createElement(d,{text:"My networks:"}),r.a.createElement("span",{className:"n"},r.a.createElement("a",{id:"facebook",href:"https://www.facebook.com/bolotnikov/",target:"_blank",rel:"noopener noreferrer",title:"Follow on Facebook"},r.a.createElement("span",{className:"fab"},r.a.createElement("i",{className:"fa fa-facebook-official","aria-hidden":"true"})))),r.a.createElement("span",{className:"n"},r.a.createElement("a",{id:"github",href:"https://github.com/sbolotnikov",target:"_blank",rel:"noopener noreferrer",title:"Follow on GitHub"},r.a.createElement("span",{className:"fab"},r.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"})))),r.a.createElement("span",{className:"n"}," ",r.a.createElement("a",{id:"linkedin",href:"https://www.linkedin.com/in/sergey-bolotnikov-10035617/",target:"_blank",rel:"noopener noreferrer",title:"Connect on Linkedin"},r.a.createElement("span",{className:"fab"},r.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})))))))),r.a.createElement("section",{id:"projects",className:"sec2"},r.a.createElement("figure",{id:"HeaderContainer"},r.a.createElement("h2",{className:"head1",style:{margin:"10px 10px 10px 45px"}},"Portfolio")),r.a.createElement("h3",{className:"head1",style:{margin:"10px 10px 10px 45px"}},"Featured Projects"),p.filter((function(e){return e.featured})).map((function(e,t){return r.a.createElement(E,Object.assign({},e,{key:"item-"+t}))})))),r.a.createElement("footer",{className:"footerclassName"},"\xa9 Sergey Bolotnikov 2020")))},y=a(34),w=a(126),x=a(128);var N=function(){var e=Object(n.useState)("fullStack"),t=Object(y.a)(e,2),a=t[0],o=t[1];return r.a.createElement("div",{className:"container",style:{maxWidth:"1440px",overflow:"hidden"}},r.a.createElement(m,null),r.a.createElement(w.a,{className:"fixed-top",activeKey:a,onSelect:function(e){return o(e)}},r.a.createElement(x.a,{eventKey:"fullStack",title:"Full Stack"},p.filter((function(e){return"Full Stack"===e.type})).map((function(e,t){return r.a.createElement(E,Object.assign({},e,{key:"item-"+t}))}))),r.a.createElement(x.a,{eventKey:"frontEnd",title:"Front End"},p.filter((function(e){return"Front End"===e.type})).map((function(e,t){return r.a.createElement(E,Object.assign({},e,{key:"item-"+t}))}))),r.a.createElement(x.a,{eventKey:"backEnd",title:"Back End"},p.filter((function(e){return"Back End"===e.type})).map((function(e,t){return r.a.createElement(E,Object.assign({},e,{key:"item-"+t}))})))))},I=a(9),S=a(10),A=a(74),O=a(14),F=a(124),T=a(125),j=a(44);var C=function(e){var t=Object(n.useState)(null),a=Object(y.a)(t,2),o=a[0],i=a[1],l=Object(n.useState)(2),s=Object(y.a)(l,2),c=s[0];return s[1],r.a.createElement("div",null,r.a.createElement(j.a,{file:e.file,onLoadSuccess:function(e){var t=e.numPages;i(t)}},r.a.createElement(j.b,{pageNumber:1}),r.a.createElement(j.b,{pageNumber:2})),r.a.createElement("p",null,"Page ",c," of ",o))},P=function(e){Object(O.a)(a,e);var t=Object(A.a)(a);function a(){return Object(I.a)(this,a),t.apply(this,arguments)}return Object(S.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container",style:{maxWidth:"1440px",overflow:"hidden"}},r.a.createElement(m,null),r.a.createElement(F.a,{style:{marginTop:"100px"}},r.a.createElement(T.a,{md:12,lg:8},r.a.createElement("h2",null,"Resume"),r.a.createElement("div",{className:"container",style:{maxWidth:"100%",overflow:"hidden"}},r.a.createElement(C,{id:"scrolly-div",file:"./assets/images/Sergey_Bolotnikov_FS_Resume.pdf"})),r.a.createElement("a",{href:"./assets/images/Sergey_Bolotnikov_FS_Resume.pdf",target:"_blank",rel:"noopener noreferrer",download:!0},r.a.createElement("button",{type:"button",id:"btn2Modal"},"Download"))),r.a.createElement(T.a,{md:12,lg:4},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:"./assets/images/SergeyProfile2.png",alt:"avatar",style:{height:"200px"}})),r.a.createElement("h2",{style:{paddingTop:"2em"}},"Sergey Bolotnikov"),r.a.createElement("h4",{style:{color:"grey"}},"Programmer"),r.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}}),r.a.createElement("p",null,"a full-stack developer who is driven by the unrelenting pursuit of customer-driven focus, ideals and user experience. Also known for his love of ballroom dance"),r.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}}),r.a.createElement("h5",null,"Address"),r.a.createElement("p",null,"3040 Edwin Ave. Apt. #2G, Fort Lee, NJ 07024"),r.a.createElement("h5",null,"Phone"),r.a.createElement("p",null,"(917) 916-2840"),r.a.createElement("h5",null,"Email"),r.a.createElement("p",null,"sbolotnikov@sbolotnikov.com"),r.a.createElement("h5",null,"Web"),r.a.createElement("p",null,"https://sbolotnikov.github.io/react-portfolio/"),r.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}}))))}}]),a}(n.Component),R=a(11);var D=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,null,r.a.createElement(R.a,{exact:!0,path:"/",component:v}),r.a.createElement(R.a,{exact:!0,path:"/projects",component:N}),r.a.createElement(R.a,{exact:!0,path:"/resume",component:P})))},_=(a(121),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function L(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-portfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/react-portfolio","/service-worker.js");_?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):L(e)}))}}()},29:function(e){e.exports=JSON.parse('[{"animIn":["flipInX","bounceInRight"],"animOut":["flipOutX","bounceOutRight"],"site":"https://sbolotnikov.github.io/employee-directory-react/","nameProject":"React Employee Directory","featured":true,"type":"Full Stack","github":"https://github.com/sbolotnikov/employee-directory-react","description":"This project creates a employee directory with React. It requires to break up application\'s UI into components, manage component state, and respond to user events. Using faker.js I get a table of random users, when the user loads the page, a table of employees should render. <br /><br /> It would be particularly helpful to be able to filter employees by name, date of birth, email, phone number and sort the table by 4 different categories","carouselArr":[{"link":"./assets/images/EmployeeDirREACT/img1.png","alt":"First slide","text":"Overall page look with sorting by phone number ascending"},{"link":"./assets/images/EmployeeDirREACT/img2.png","alt":"Second slide","text":"Example of sorting by email descending"},{"link":"./assets/images/EmployeeDirREACT/img3.png","alt":"Third slide","text":"Example of sorting by name ascending"},{"link":"./assets/images/EmployeeDirREACT/img4.png","alt":"Forth slide","text":"Example of sorting by date of birth ascending"}]},{"animIn":["flipInX","bounceInLeft"],"animOut":["flipOutX","bounceOutLeft"],"site":"https://afternoon-chamber-99661.herokuapp.com/","nameProject":"Fitness Tracker","featured":true,"type":"Full Stack","github":"https://github.com/sbolotnikov/fitnessTracker","description":" Fitness Tracker utilizes MongoDB to track a user\'s daily exercises. Weekly workout statistics are reflected on Dashboard charts.","carouselArr":[{"link":"./assets/images/Fitness/welcome_screen.png","alt":"First slide","text":"Welcome screen"},{"link":"./assets/images/Fitness/Cardio_input.png","alt":"Second slide","text":"Cardio workout input screenshot"},{"link":"./assets/images/Fitness/resistance_input.png","alt":"Third slide","text":"Resistance workout input screenshot"},{"link":"./assets/images/Fitness/workout_dashboard.png","alt":"Forth slide","text":"Workout dashboard screenshot"}]},{"animIn":["flipInX","bounceInRight"],"animOut":["flipOutX","bounceOutRight"],"site":"https://mighty-oasis-93514.herokuapp.com/","nameProject":"Online/Offline Budget Trackers","featured":true,"type":"Full Stack","github":"https://github.com/sbolotnikov/PWA-Budget-Tracker","description":"The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online. <br /><br /><strong>Offline Functionality:</strong><br />Enter deposits offline,<br />Enter expenses offline<br /><br /><strong>When brought back online:</strong><br />Offline entries should be added to tracker.","carouselArr":[{"link":"./assets/images/BudgetTrack/img1.png","alt":"First slide","text":"App screenshot example:"}]},{"animIn":["flipInX","bounceInLeft"],"animOut":["flipOutX","bounceOutLeft"],"site":"https://guarded-hamlet-46204.herokuapp.com/","nameProject":"Full-stack MMA School","featured":true,"type":"Full Stack","github":"https://github.com/mc4506/martial-art-school-management","description":"Full Stack MMA School is an application for creating and managing classNamees for a martial arts school. Instructors are able to log in and create classNamees based on user skill level and preference for in-person or virtual lessons, and coordinate className size if constraints are required by local health ordinances. Students and instructors can also post messages and communicate with each other through the platform.","carouselArr":[{"link":"./assets/images/MMASchool/desktop-login.jpg","alt":"First slide","text":"Front page on desktop with Google sign in option"},{"link":"./assets/images/MMASchool/chat.jpg","alt":"Second slide","text":"Special Studio Chat named KICKS"},{"link":"./assets/images/MMASchool/signingToClass.jpg","alt":"Third slide","text":"Signing to class as a student"},{"link":"./assets/images/MMASchool/teacherProfile.jpg","alt":"Forth slide","text":"Teacher\'s Profile check who is present"}]},{"animIn":["flipInX","bounceInRight"],"animOut":["flipOutX","bounceOutRight"],"site":"https://andrewdalba.github.io/what-is-for-dinner/","nameProject":"APP: What\'s For Dinner?","featured":true,"type":"Front End","github":"https://github.com/andrewdalba/what-is-for-dinner","description":"A helpful application to locate restaurants, find recipes, and recipe videos based on the users food preferences and location.","carouselArr":[{"link":"./assets/images/Dinner/2-restaurant-search-results.png","alt":"First slide","text":"restaurant search results"},{"link":"./assets/images/Dinner/4-dish-search-results.png","alt":"Second slide","text":"results of search for specific dish"},{"link":"./assets/images/Dinner/5-details-on-recipe.png","alt":"Third slide","text":"detailed look ingridients&how-to recipe"}]},{"animIn":["flipInX","bounceInLeft"],"animOut":["flipOutX","bounceOutLeft"],"site":"https://sbolotnikov.github.io/weather-dashboard/","nameProject":"Weather-Dashboard","featured":true,"type":"Front End","github":"https://github.com/sbolotnikov/weather-dashboard","description":"An interactive weather application that displays the forecast in a stylish fashion and stores the user\'s previously searched locations.","carouselArr":[{"link":"./assets/images/Weather/4-list-of-maps-used-switchto-Celsious.png","alt":"First slide","text":"List of maps displayed from openweathermap API using leaflet API and openstreetmap tiles and switching to Celsious"},{"link":"./assets/images/Weather/5-diffrent-city-click.png","alt":"Second slide","text":"You can choose diffrent city also it change background from rapidapi API"},{"link":"./assets/images/Weather/5-diffrent-city-click.png","alt":"Third slide","text":"Click on the city to find out weather"},{"link":"./assets/images/Weather/8-iPAD-look.png","alt":"Forth slide","text":"App on Iphone, IPad"}]},{"animIn":["flipInX","bounceInRight"],"animOut":["flipOutX","bounceOutRight"],"site":"https://boiling-badlands-26235.herokuapp.com/","nameProject":"Eat Da Burger","featured":false,"type":"Full Stack","github":"https://github.com/sbolotnikov/Eat_Da_Burger","description":"Eat Da Burger! is a restaurant app that lets users input the names of burgers they\'d like to eat. Whenever a user submits a burger\'s name, app will display the burger on the top part of the page- waiting to be devoured. Each burger in the waiting area also has a `Eat Me!` button. When the user clicks it, the burger will move to the lower portion of the page. App will store every burger in a database, whether devoured or not. Burger also has delete button to erase it from the database. Image of the burger provided by running pexel API if there is no image it display default image.","carouselArr":[{"link":"./assets/images/Burger/img1.png","alt":"First slide","text":"Desktop version Form and Ready section"},{"link":"./assets/images/Burger/img2.png","alt":"Second slide","text":"Desktop version Ready and Devoured section"}]},{"animIn":["flipInX","bounceInRight"],"animOut":["flipOutX","bounceOutRight"],"site":"https://sbolotnikov.github.io/Day-planner/","nameProject":"Day Planner","featured":false,"type":"Front End","github":"https://github.com/sbolotnikov/Day-planner","description":"A simple calendar application that allows the user to save events for each hour of the day.","carouselArr":[{"link":"./assets/images/Calendar/4-click-to-edit-on description.png","alt":"First slide","text":"Overall App look. To Edit click the appointment bar"},{"link":"./assets/images/Calendar/5-edit-apptmt-view.png","alt":"Second slide","text":"Edit/Add appointment view"},{"link":"./assets/images/Calendar/6-click-to-erase.png","alt":"Third slide","text":"Click to erase button"},{"link":"./assets/images/Calendar/7-erased.png","alt":"Forth slide","text":"Erase result view"}]},{"animIn":["flipInX","bounceInLeft"],"animOut":["flipOutX","bounceOutLeft"],"site":"https://sbolotnikov.github.io/Code-Quiz/","nameProject":"Code Quiz","featured":false,"type":"Front End","github":"https://github.com/sbolotnikov/Code-Quiz","description":"Multiple Choice Quiz A timed quiz. Time is deducted for selecting incorrect answers. Save and sort previous results. Gives details of the user\'s answers","carouselArr":[{"link":"./assets/images/Quiz/1-start-panel.png","alt":"First slide","text":"Start up panel"},{"link":"./assets/images/Quiz/3-example-of-the-response-to-user-input.png","alt":"Second slide","text":"App interract with customer on user\'s input"},{"link":"./assets/images/Quiz/5-display-of-the-stored-results.png","alt":"Third slide","text":"Results are stored and sorted"},{"link":"./assets/images/Quiz/6-detailed-look-of-the-individual-results.png","alt":"Forth slide","text":"Individual details of each test"}]},{"animIn":["flipInX","bounceInRight"],"animOut":["flipOutX","bounceOutRight"],"site":"https://youtu.be/mlQAWMMPP2w","nameProject":"CLI App: Team Information Chart","featured":false,"type":"Back End","github":"https://github.com/sbolotnikov/team-info-chart","description":"When the user has completed building the team,the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user. (For instructional video click on the heading)","carouselArr":[{"link":"./assets/images/Team-Info-Chart/results.jpg","alt":"First slide","text":"finished team roster results"},{"link":"./assets/images/Team-Info-Chart/dataInput.png","alt":"Second slide","text":"Input Data CLI style"}]},{"animIn":["flipInX","bounceInLeft"],"animOut":["flipOutX","bounceOutLeft"],"site":"https://youtu.be/T3FLJTATWkg","nameProject":"CLI App: Employee tracker","featured":false,"type":"Back End","github":"https://github.com/sbolotnikov/employee_tracker_CLI","description":"User has a menu of things that could be done:<br />Employee- Add, Update Role or Manager, Delete, View All<br />Role Add, Update, Delete, View All<br /> Departments Add, Update, Delete, View<br /> Views store All views named above and Employees by Manager, by Department, and Departments Salary budget(For instructional video click on the heading)","carouselArr":[{"link":"./assets/images/EmployeeTrack/img3.gif","alt":"First slide","text":"Views example:"}]}]')},76:function(e,t,a){e.exports=a(122)},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},89:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.fff3d02e.chunk.js.map