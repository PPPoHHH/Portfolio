const band=document.getElementById("band");band.innerHTML=[...STACK,...STACK].map(s=>`<span>${s}</span>`).join("");
document.getElementById("mail").textContent=EMAIL;document.getElementById("mail").href="mailto:"+EMAIL;
const isCap=location.search.includes("capture");
function renderGrid(){const g=document.getElementById("grid");g.innerHTML=P.map((p,i)=>`<article class="card rv"><div class="top mono"><span>0${i+1}</span><span class="k">${L[LANG][p.k]}</span></div><h3>${p.t[LANG]}</h3><p><b>${L[LANG].pr}</b>${p.pr[LANG]}</p><p><b>${L[LANG].so}</b>${p.so[LANG]}</p><div class="chips">${p.te.map(x=>`<span>${x}</span>`).join("")}</div></article>`).join("");
 if(!RM)g.querySelectorAll(".card").forEach(c=>{c.addEventListener("pointermove",e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.setProperty("--mx",x*100+"%");c.style.setProperty("--my",y*100+"%");gsap.to(c,{rotateY:(x-.5)*14,rotateX:(.5-y)*14,duration:.4,ease:"power2.out"})});c.addEventListener("pointerleave",()=>gsap.to(c,{rotateX:0,rotateY:0,duration:.8,ease:"elastic.out(1,.5)"}))});}
const CH="!<>-_\\/[]{}=+*^?#01";
function scramble(el,dur=1){const fin=el.textContent;if(RM||isCap)return;const o={p:0};gsap.to(o,{p:1,duration:dur,ease:"none",onUpdate:()=>{const n=Math.floor(o.p*fin.length);el.textContent=fin.slice(0,n)+[...fin.slice(n)].map(c=>c==" "?" ":CH[Math.random()*CH.length|0]).join("")},onComplete:()=>el.textContent=fin})}
let typer;function type(){const el=document.getElementById("typed"),s=t("hero.lead");clearInterval(typer);if(RM||isCap){el.textContent=s;return}let i=0;el.textContent="";typer=setInterval(()=>{el.textContent=s.slice(0,++i);if(i>=s.length)clearInterval(typer)},18)}
function boot(){applyLang();renderGrid();document.querySelectorAll(".sc").forEach((e,i)=>setTimeout(()=>scramble(e,.9),i*140));setTimeout(type,isCap?0:700);if(window.ScrollTrigger)ScrollTrigger.refresh()}
langButton(boot);boot();
gsap.registerPlugin(ScrollTrigger);smooth();
if(!RM){
 ScrollTrigger.batch(".rv",{start:"top 88%",onEnter:b=>gsap.fromTo(b,{y:50,opacity:0,filter:"blur(8px)"},{y:0,opacity:1,filter:"blur(0px)",duration:1,stagger:.08,ease:"power3.out"})});
 if(!isCap)gsap.set(".rv",{opacity:0});
 document.querySelectorAll("[data-count]").forEach(b=>{const o={v:0};gsap.to(o,{v:+b.dataset.count,duration:1.6,ease:"power2.out",scrollTrigger:{trigger:b,start:"top 90%"},onUpdate:()=>b.textContent=Math.round(o.v)})});
 gsap.utils.toArray(".h2,.big").forEach(h=>ScrollTrigger.create({trigger:h,start:"top 85%",once:true,onEnter:()=>h.querySelectorAll("[data-i18n]").forEach(x=>scramble(x,.8))}));
} else document.querySelectorAll("[data-count]").forEach(b=>b.textContent=b.dataset.count);
// mesh
const cv=document.getElementById("mesh"),cx=cv.getContext("2d");let W,H,pts=[],m={x:-999,y:-999};
function rs(){W=cv.width=innerWidth*devicePixelRatio;H=cv.height=innerHeight*devicePixelRatio;const n=Math.min(90,Math.floor(innerWidth/16));pts=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35}))}
rs();addEventListener("resize",rs);addEventListener("pointermove",e=>{m.x=e.clientX*devicePixelRatio;m.y=e.clientY*devicePixelRatio});
function draw(){cx.clearRect(0,0,W,H);const D=140*devicePixelRatio,fade=Math.max(0,1-scrollY/innerHeight);
 for(const p of pts){if(!RM){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;const dx=p.x-m.x,dy=p.y-m.y,d=Math.hypot(dx,dy);if(d<D){p.x+=dx/d*1.2;p.y+=dy/d*1.2}}
  cx.fillStyle=`rgba(94,242,194,${.5*fade+.1})`;cx.fillRect(p.x,p.y,2*devicePixelRatio,2*devicePixelRatio)}
 for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const a=pts[i],b=pts[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<D){cx.strokeStyle=`rgba(94,242,194,${(1-d/D)*.22*(fade*.8+.2)})`;cx.lineWidth=devicePixelRatio;cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(b.x,b.y);cx.stroke()}}
 if(!RM)requestAnimationFrame(draw)}draw();
