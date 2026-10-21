const P=[
 {k:"pro",t:{es:"Programa de puntos desde cero",en:"Loyalty points program from scratch"},
  pr:{es:"Una empresa de hostelería y deporte quería premiar la fidelidad de sus clientes y no tenía programa de puntos.",en:"A hospitality and sports business wanted to reward customer loyalty but had no points program."},
  so:{es:"Diseño e implementación del programa en Salesforce Loyalty Management: en estándar, totalmente a medida y mixto, según el caso. Único desarrollador.",en:"Designed and built the program in Salesforce Loyalty Management: standard, fully custom or hybrid depending on the case. Sole developer."},
  te:["Salesforce Loyalty Management","Apex","LWC","Flows"]},
 {k:"pro",t:{es:"Componentes Salesforce a medida",en:"Custom Salesforce components"},
  pr:{es:"Clientes de farmacia, laboratorio, industria y óptica necesitaban funcionalidades que Salesforce no trae de serie.",en:"Pharma, lab, industrial and optical retail clients needed features Salesforce doesn't ship out of the box."},
  so:{es:"Componentes Lightning y lógica en Apex adaptados al proceso de cada cliente.",en:"Lightning Web Components and Apex logic tailored to each client's process."},
  te:["Apex","LWC","JavaScript","SOQL"]},
 {k:"pro",t:{es:"Integración Salesforce – SAP con MuleSoft",en:"Salesforce – SAP integration with MuleSoft"},
  pr:{es:"Datos repartidos entre el CRM, el ERP y otras herramientas que no se hablaban entre sí.",en:"Data split across CRM, ERP and other tools that didn't talk to each other."},
  so:{es:"Integraciones con MuleSoft que intercambian datos en JSON mediante APIs REST.",en:"MuleSoft integrations exchanging JSON data through REST APIs."},
  te:["MuleSoft","SAP","Salesforce","Java","JSON"]},
 {k:"pro",t:{es:"Chatbots en Telegram, WhatsApp, Salesforce y web",en:"Chatbots on Telegram, WhatsApp, Salesforce & web"},
  pr:{es:"Consultas repetitivas que ocupaban tiempo del equipo de atención.",en:"Repetitive questions taking up the support team's time."},
  so:{es:"Chatbots que responden dudas frecuentes y derivan a una persona cuando hace falta, en Telegram, WhatsApp, Salesforce y web.",en:"Chatbots that answer FAQs and hand off to a human when needed, on Telegram, WhatsApp, Salesforce and the web."},
  te:["Telegram","WhatsApp","Salesforce","Web"]},
 {k:"per",t:{es:"Comparador de precios de CS2",en:"CS2 market price comparator"},
  pr:{es:"Los precios de los objetos de Counter-Strike 2 cambian entre mercados y compararlos a mano lleva mucho tiempo.",en:"Counter-Strike 2 item prices vary across markets and comparing them by hand takes ages."},
  so:{es:"Bot que consulta varios mercados y muestra dónde sale más barato cada objeto.",en:"A bot that checks several markets and shows where each item is cheapest."},
  te:["Python","Scraping"]},
 {k:"per",t:{es:"App de cartas TCG con escáner",en:"TCG card scanner & inventory app"},
  pr:{es:"Las apps para catalogar colecciones de cartas cobran suscripción.",en:"Card collection apps charge a subscription."},
  so:{es:"App propia que escanea las cartas con la cámara, las reconoce y lleva el inventario de la colección.",en:"My own app that scans cards with the camera, recognises them and keeps the collection inventory."},
  te:["Flutter"]},
 {k:"per",t:{es:"App del hogar",en:"Home organiser app"},
  pr:{es:"Controlar lo que hay en casa, la compra y los gastos compartidos requería varias apps.",en:"Tracking pantry stock, shopping and shared expenses needed several apps."},
  so:{es:"Una sola app con escáner de productos para el inventario, lista de la compra y reparto de gastos en pareja. En uso diario.",en:"One app with a product scanner for stock, a shopping list and shared expenses for couples. Used daily."},
  te:["Flutter"]},
 {k:"per",t:{es:"Bot de comunidad para Discord",en:"Discord community bot"},
  pr:{es:"Los servidores de Discord necesitan moderación, soporte y bienvenida sin depender de bots genéricos.",en:"Discord servers need moderation, support and onboarding without generic bots."},
  so:{es:"Avisos guardados en SQLite, silenciado, limpieza, registro, tickets con botones persistentes y bienvenida.",en:"Warnings stored in SQLite, timeouts, purge, logs, persistent-button tickets and welcome messages."},
  te:["Python","discord.py","SQLite"]}
];
const T={es:{"nav.work": "Trabajo", "nav.about": "Sobre mí", "nav.contact": "Contacto", "hero.status": "Disponible · Madrid · 8:00–20:00 CET", "hero.l1": "Conecto sistemas,", "hero.l2": "automatizo", "hero.l3": "lo repetitivo", "hero.l4": "y lo entrego", "hero.lead": "Soy Javier Requena, desarrollador generalista. Programo en Java, Python, Ruby, C/C++, JavaScript y Flutter: backends, APIs y apps web, móviles y de escritorio. Además, trabajo con Salesforce, MuleSoft y SAP.", "hero.cta": "Ver proyectos", "facts.years": "años programando, 2 en consultoría", "facts.sectors": "lenguajes a nivel alto: Java, Python, Ruby, C, C++, JS, HTML", "facts.cert": "Salesforce Administrator y Platform Developer certificado", "work.title": "Trabajo seleccionado", "work.note": "Proyectos profesionales descritos sin nombres de clientes.", "about.title": "Sobre mí", "about.p1": "He sido el único desarrollador en proyectos para farmacia, papelera, industria, una cadena hotelera internacional, un pabellón y un club de la ACB, un laboratorio y una cadena de ópticas. Me gusta entender el problema antes de escribir una línea.", "about.code": "Lenguajes", "about.build": "Desarrollo", "about.buildv": "Backends · APIs REST · apps web, móviles y de escritorio", "about.stack": "Empresa", "about.edu": "Formación", "about.eduv": "Grado Superior DAW/DAM · Grado Medio SMR · Certificaciones de Salesforce", "about.lang": "Idiomas", "about.langv": "Español nativo · Inglés escrito profesional", "about.extra": "Además", "about.extrav": "Montaje de servidores desde cero (hardware y software) y mods de videojuegos", "contact.title": "¿Tienes algo entre manos?", "contact.p": "También me encuentras en Workana, Fiverr, Upwork y Malt.", "hero.swap": "funcionando."},en:{"nav.work":"Work","nav.about":"About","nav.contact":"Contact","hero.status":"Available · Madrid · 8:00–20:00 CET","hero.l1":"I connect systems,","hero.l2":"automate","hero.l3":"the boring parts","hero.l4":"and ship it","hero.lead":"I'm Javier Requena, a full-range developer. I code in Java, Python, Ruby, C/C++, JavaScript and Flutter: backends, APIs, and web, mobile and desktop apps. I also work with Salesforce, MuleSoft and SAP.","hero.cta":"See projects","facts.years":"years coding, 2 in consulting","facts.sectors":"languages at an advanced level: Java, Python, Ruby, C, C++, JS, HTML","facts.cert":"Certified Salesforce Administrator & Platform Developer","work.title":"Selected work","work.note":"Client projects are described without client names.","about.title":"About","about.p1":"I've been the sole developer on projects for pharma, paper, industrial, an international hotel chain, an arena and a pro basketball club, a lab and an optical retail chain. I like to understand the problem before writing a single line.","about.code":"Languages","about.build":"Build","about.buildv":"Backends · REST APIs · web, mobile and desktop apps","about.stack":"Enterprise","about.edu":"Education","about.eduv":"Higher VET in Web & Multiplatform Development · VET in IT Systems & Networks · Salesforce certifications","about.lang":"Languages","about.langv":"Native Spanish · Professional written English","about.extra":"Also","about.extrav":"Building servers from scratch (hardware and software) and game mods","contact.title":"Got something in mind?","contact.p":"You can also find me on Workana, Fiverr, Upwork and Malt."}};
T.en['hero.swap']='working.';
const L={es:{pr:"Problema",so:"Solución",te:"Tecnologías",pro:"Profesional",per:"Personal"},en:{pr:"Problem",so:"Solution",te:"Stack",pro:"Client work",per:"Side project"}};
const STACK=['Java','Python','Ruby','C','C++','JavaScript','HTML','Flutter','Backends','REST APIs','Web · Mobile · Desktop','Salesforce','MuleSoft','SAP'];
const EMAIL='javier.requena.dev@agentmail.to';
const RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
let LANG=new URLSearchParams(location.search).get("lang")||localStorage.getItem("lang")||"es";
function t(k){return T[LANG][k]||T.es[k]||""}
function applyLang(){document.documentElement.lang=LANG;localStorage.setItem("lang",LANG);
 document.querySelectorAll("[data-i18n]").forEach(e=>e.textContent=t(e.dataset.i18n));
 document.querySelectorAll("[data-lang-btn] span").forEach(s=>s.classList.toggle("on",s.dataset.l==LANG));}
function langButton(cb){const b=document.querySelector("[data-lang-btn]");b.addEventListener("click",()=>{LANG=LANG=="es"?"en":"es";applyLang();cb&&cb();});}
function smooth(){if(RM||!window.Lenis)return null;const l=new Lenis({lerp:.09});l.on("scroll",ScrollTrigger.update);gsap.ticker.add(x=>l.raf(x*1000));gsap.ticker.lagSmoothing(0);
 document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{e.preventDefault();l.scrollTo(a.getAttribute("href"),{offset:-20})}));return l;}
