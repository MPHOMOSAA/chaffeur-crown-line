/* CROWN LINE CHAUFFEURS — script.js v2 */

const DEFAULT_CARS = [
  {id:1,name:"Mercedes-Benz S-Class",year:2023,category:"luxury",transmission:"Automatic",seats:4,price:4500,image:"https://images.unsplash.com/photo-1617469767524-7fd0f9f57fe9?w=800&auto=format&fit=crop&q=60",description:"The pinnacle of German luxury. Massaging seats, Burmester sound, and an air of royalty that commands every street it glides down."},
  {id:2,name:"BMW 7 Series",year:2022,category:"luxury",transmission:"Automatic",seats:4,price:3800,image:"https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&auto=format&fit=crop&q=60",description:"Executive presence meets driving dynamics. The ultimate in Bavarian luxury with driver-assistance technology at its finest."},
  {id:3,name:"Range Rover Vogue",year:2023,category:"suv",transmission:"Automatic",seats:5,price:4200,image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=60",description:"British luxury redefined. The Range Rover Vogue commands the road with regal composure and unmatched premium comfort."},
  {id:4,name:"Bentley Continental GT",year:2023,category:"luxury",transmission:"Automatic",seats:4,price:8500,image:"https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&auto=format&fit=crop&q=60",description:"Handcrafted in Crewe, England. The Continental GT is art in motion — a grand tourer that turns every journey into theatre."},
  {id:5,name:"Lamborghini Urus",year:2022,category:"sport",transmission:"Automatic",seats:4,price:9800,image:"https://images.unsplash.com/photo-1609525313459-0cd0e6c9cf50?w=800&auto=format&fit=crop&q=60",description:"When luxury meets supercar DNA. The Urus redefines what an SUV can be — visceral, fast, and impossibly dramatic."},
  {id:6,name:"Mercedes-AMG GT",year:2023,category:"sport",transmission:"Automatic",seats:2,price:7500,image:"https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&auto=format&fit=crop&q=60",description:"Pure performance. Pure drama. The AMG GT is for moments when your arrival should turn every head in the room."},
  {id:7,name:"Audi A8 L",year:2023,category:"sedan",transmission:"Automatic",seats:4,price:3200,image:"https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop&q=60",description:"Four-wheel steering, predictive adaptive suspension, and a cabin of unmatched refinement. The Audi A8 is simply a marvel."},
  {id:8,name:"Porsche Panamera",year:2022,category:"sedan",transmission:"Automatic",seats:4,price:5500,image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=60",description:"The sport saloon that refused to compromise. Athletic, elegant, and devastatingly fast — the Panamera has it all."},
  {id:9,name:"Cadillac Escalade",year:2023,category:"suv",transmission:"Automatic",seats:7,price:5200,image:"https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&auto=format&fit=crop&q=60",description:"The definition of American luxury. Bold, commanding and spacious — perfect for group travel and VIP transport."}
];

function getCars(){try{const s=localStorage.getItem('crownline_v2_cars');return s?JSON.parse(s):[...DEFAULT_CARS]}catch{return[...DEFAULT_CARS]}}
function saveCars(c){try{localStorage.setItem('crownline_v2_cars',JSON.stringify(c))}catch{}}
if(!localStorage.getItem('crownline_v2_cars'))saveCars(DEFAULT_CARS);

/* CANVAS */
(function(){
  const canvas=document.getElementById('bgCanvas'),ctx=canvas.getContext('2d');
  let W,H,pts=[];
  function resize(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight}
  resize();window.addEventListener('resize',resize);
  const C=['rgba(232,145,26,','rgba(245,197,24,','rgba(255,159,28,'];
  class P{constructor(){this.reset(true)}reset(i){this.x=Math.random()*W;this.y=i?Math.random()*H:H+10;this.r=Math.random()*1.8+0.4;this.a=Math.random()*0.5+0.1;this.sp=Math.random()*0.4+0.1;this.d=(Math.random()-0.5)*0.3;this.c=C[Math.floor(Math.random()*C.length)];this.tw=Math.random()*Math.PI*2;this.ts=Math.random()*0.02+0.008}update(){this.y-=this.sp;this.x+=this.d;this.tw+=this.ts;this.a=Math.sin(this.tw)*0.25+0.35;if(this.y<-10)this.reset(false)}draw(){ctx.beginPath();ctx.arc(this.x,this.y,this.r,0,Math.PI*2);ctx.fillStyle=this.c+this.a+')';ctx.fill()}}
  for(let i=0;i<140;i++)pts.push(new P());
  (function loop(){ctx.clearRect(0,0,W,H);pts.forEach(p=>{p.update();p.draw()});requestAnimationFrame(loop)})();
})();

/* NAVBAR SCROLL */
window.addEventListener('scroll',()=>{document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>20)});

/* HAMBURGER */
const ham=document.getElementById('hamburger'),navL=document.getElementById('navLinks');
ham.addEventListener('click',()=>{ham.classList.toggle('open');navL.classList.toggle('open')});
document.querySelectorAll('.nav-link,.nav-cta').forEach(el=>el.addEventListener('click',()=>{ham.classList.remove('open');navL.classList.remove('open')}));

/* PAGE TRANSITIONS */
let isTransitioning=false;
function navigateTo(name){
  if(isTransitioning)return;
  const current=document.querySelector('.page.active');
  if(current&&current.id==='page-'+name)return;
  isTransitioning=true;
  const wipe=document.getElementById('pageWipe');
  wipe.classList.remove('wiping-in','wiping-out');
  void wipe.offsetWidth;
  wipe.classList.add('wiping-in');
  setTimeout(()=>{
    if(current)current.classList.remove('active');
    const target=document.getElementById('page-'+name);
    if(target){target.classList.add('active');window.scrollTo({top:0,behavior:'instant'})}
    document.querySelectorAll('.nav-link').forEach(l=>l.classList.toggle('active',l.dataset.page===name));
    if(name==='fleet')renderFleet('all');
    void wipe.offsetWidth;
    wipe.classList.remove('wiping-in');
    wipe.classList.add('wiping-out');
    setTimeout(()=>{wipe.classList.remove('wiping-out');isTransitioning=false;triggerReveal()},380);
  },380);
}

/* REVEAL */
function triggerReveal(){
  const els=document.querySelectorAll('.page.active .reveal,.page.active .reveal-right,.page.active .reveal-up');
  const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target)}})},{threshold:0.1});
  els.forEach(el=>obs.observe(el));
}

/* COUNTERS */
function animateStats(){
  document.querySelectorAll('.stat-num').forEach(el=>{
    const t=parseInt(el.dataset.target,10);let c=0;
    const step=Math.max(1,Math.floor(t/60));
    const timer=setInterval(()=>{c=Math.min(c+step,t);el.textContent=c.toLocaleString();if(c>=t)clearInterval(timer)},18);
  });
}

/* FLEET */
let activeFilter='all';
function renderFleet(filter){
  activeFilter=filter;
  const grid=document.getElementById('fleetGrid'),empty=document.getElementById('fleetEmpty');
  const cars=getCars();
  const filtered=filter==='all'?cars:cars.filter(c=>c.category===filter);
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.toggle('active',b.dataset.filter===filter));
  if(!filtered.length){grid.innerHTML='';empty.style.display='block';return}
  empty.style.display='none';
  grid.innerHTML=filtered.map(car=>`
    <div class="car-card reveal-up" onclick="openCarModal(${car.id})">
      <div class="car-img-wrap"><img src="${car.image}" alt="${car.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=60'"/><div class="car-badge">${cap(car.category)}</div></div>
      <div class="car-body"><p class="car-year">${car.year}</p><h3 class="car-name">${car.name}</h3>
        <div class="car-specs"><span class="spec-pill"><i class="fas fa-cog"></i> ${car.transmission}</span><span class="spec-pill"><i class="fas fa-user-group"></i> ${car.seats} Seats</span></div>
        <div class="car-footer"><div class="car-price">R${car.price.toLocaleString()}<small>Per Day</small></div><span class="car-view-btn">View <i class="fas fa-arrow-right"></i></span></div>
      </div>
    </div>`).join('');
  setTimeout(()=>triggerReveal(),50);
}
document.querySelectorAll('.filter-btn').forEach(b=>b.addEventListener('click',()=>renderFleet(b.dataset.filter)));

/* CAR MODAL */
function openCarModal(id){
  const car=getCars().find(c=>c.id==id);if(!car)return;
  document.getElementById('modalImg').src=car.image;
  document.getElementById('modalName').textContent=car.name;
  document.getElementById('modalYear').textContent=car.year;
  document.getElementById('modalCategory').textContent=cap(car.category);
  document.getElementById('modalDesc').textContent=car.description;
  document.getElementById('modalPrice').textContent=`R${car.price.toLocaleString()} / Day`;
  document.getElementById('modalSpecs').innerHTML=`<span class="spec-pill"><i class="fas fa-cog"></i> ${car.transmission}</span><span class="spec-pill"><i class="fas fa-user-group"></i> ${car.seats} Seats</span><span class="spec-pill"><i class="fas fa-tag"></i> ${cap(car.category)}</span>`;
  document.getElementById('carModal').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeCarModal(){document.getElementById('carModal').classList.remove('open');document.body.style.overflow=''}
document.getElementById('carModal').addEventListener('click',function(e){if(e.target===this)closeCarModal()});

/* FORM */
function handleFormSubmit(e){
  e.preventDefault();
  document.getElementById('contactForm').style.display='none';
  document.getElementById('formSuccess').style.display='block';
  showToast('Enquiry sent! We\'ll be in touch shortly ✓');
}

/* TOAST */
let toastTimer;
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),3200)}

/* HELPERS */
function cap(s){return s.charAt(0).toUpperCase()+s.slice(1)}

/* ESC KEY */
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeCarModal()});

/* INIT */
document.addEventListener('DOMContentLoaded',()=>{
  navigateTo('home');
  animateStats();
  setTimeout(()=>triggerReveal(),200);
});
