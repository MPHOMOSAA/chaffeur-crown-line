/* CROWN LINE CHAUFFEURS — script.js v3 */

// Car images — using diverse reliable sources
const IMGS = {
  merc_s:   'https://images.unsplash.com/photo-1617469767524-7fd0f9f57fe9?w=800&auto=format&fit=crop&q=70',
  bmw7:     'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&auto=format&fit=crop&q=70',
  rr_vogue: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&auto=format&fit=crop&q=70',
  bentley:  'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&auto=format&fit=crop&q=70',
  lambo:    'https://images.unsplash.com/photo-1609525313459-0cd0e6c9cf50?w=800&auto=format&fit=crop&q=70',
  amg_gt:   'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&auto=format&fit=crop&q=70',
  audi_a8:  'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop&q=70',
  porsche:  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=70',
  escalade: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&auto=format&fit=crop&q=70',
  bmw_m4:   'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop&q=70',
  bmw_m2:   'https://images.unsplash.com/photo-1617531653332-bd46c16f4b28?w=800&auto=format&fit=crop&q=70',
  bmw_m8:   'https://images.unsplash.com/photo-1556800572-1b8aeeb44cda?w=800&auto=format&fit=crop&q=70',
  merc_c:   'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=70',
  maybach:  'https://images.unsplash.com/photo-1617654112368-307921291f42?w=800&auto=format&fit=crop&q=70',
  cullinan: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800&auto=format&fit=crop&q=70',
  viano:    'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&auto=format&fit=crop&q=70',
  vclass:   'https://images.unsplash.com/photo-1609753073978-7e8e7c26e2d9?w=800&auto=format&fit=crop&q=70',
};
const FB = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=60';

const DEFAULT_CARS = [
  {id:1, name:'Mercedes-Benz S-Class',       year:2023, category:'luxury', transmission:'Automatic', seats:4,  price:4500, image:IMGS.merc_s,   description:'The pinnacle of German luxury. Massaging seats, Burmester surround sound, and an air of royalty that commands every street it glides down.'},
  {id:2, name:'BMW 7 Series',                year:2023, category:'luxury', transmission:'Automatic', seats:4,  price:3800, image:IMGS.bmw7,     description:'Executive presence meets driving precision. Bavarian luxury with the finest driver-assistance technology available.'},
  {id:3, name:'Range Rover Vogue',           year:2023, category:'suv',    transmission:'Automatic', seats:5,  price:4200, image:IMGS.rr_vogue,  description:'British luxury redefined. The Vogue commands the road with regal composure, unmatched comfort and unmistakeable presence.'},
  {id:4, name:'Bentley Continental GT',      year:2023, category:'luxury', transmission:'Automatic', seats:4,  price:8500, image:IMGS.bentley,   description:'Handcrafted in Crewe, England. The Continental GT is art in motion — a grand tourer that turns every journey into theatre.'},
  {id:5, name:'Lamborghini Urus',            year:2022, category:'sport',  transmission:'Automatic', seats:4,  price:9800, image:IMGS.lambo,     description:'When luxury meets supercar DNA. The Urus redefines what an SUV can be — visceral, fast, and impossibly dramatic.'},
  {id:6, name:'Mercedes-AMG GT',             year:2023, category:'sport',  transmission:'Automatic', seats:2,  price:7500, image:IMGS.amg_gt,    description:'Pure performance. Pure drama. The AMG GT is for moments when your arrival should turn every head in the room.'},
  {id:7, name:'Audi A8 L',                   year:2023, category:'sedan',  transmission:'Automatic', seats:4,  price:3200, image:IMGS.audi_a8,   description:'Four-wheel steering, predictive adaptive suspension, and a cabin of unmatched refinement. Simply a marvel of engineering.'},
  {id:8, name:'Cadillac Escalade',           year:2023, category:'suv',    transmission:'Automatic', seats:7,  price:5200, image:IMGS.escalade,  description:'The definition of American luxury. Bold, commanding and spacious — perfect for VIP group travel.'},
  {id:9, name:'BMW M4 Competition',          year:2023, category:'sport',  transmission:'Automatic', seats:4,  price:5800, image:IMGS.bmw_m4,    description:'A track-bred machine dressed in luxury. The M4 Competition delivers an intoxicating blend of aggression and sophistication.'},
  {id:10,name:'BMW M2',                      year:2023, category:'sport',  transmission:'Manual',    seats:4,  price:4200, image:IMGS.bmw_m2,    description:'Raw, rear-wheel-drive perfection. The M2 is the purists\' choice — small, angry, and phenomenally fun.'},
  {id:11,name:'BMW M8 Gran Coupé',           year:2023, category:'luxury', transmission:'Automatic', seats:4,  price:6800, image:IMGS.bmw_m8,    description:'Where grand touring meets M-power. The M8 Gran Coupé is BMW\'s most dramatic luxury statement.'},
  {id:12,name:'Mercedes-Benz C 200',         year:2023, category:'sedan',  transmission:'Automatic', seats:4,  price:2400, image:IMGS.merc_c,    description:'Compact luxury perfected. The new C-Class brings S-Class technology to a more accessible form — elegant, refined, and beautifully built.'},
  {id:13,name:'Mercedes-Maybach S-Class',    year:2023, category:'luxury', transmission:'Automatic', seats:4,  price:12000,image:IMGS.maybach,   description:'Ultra-luxury redefined. The Maybach is built for those who demand the absolute finest — a moving masterpiece of space and opulence.'},
  {id:14,name:'Rolls-Royce Cullinan',        year:2023, category:'luxury', transmission:'Automatic', seats:5,  price:18000,image:IMGS.cullinan,  description:'The world\'s finest luxury SUV. The Cullinan is Rolls-Royce\'s statement that no road is unworthy of effortless touring.'},
  {id:15,name:'Mercedes-Benz V-Class',       year:2023, category:'van',    transmission:'Automatic', seats:7,  price:3500, image:IMGS.vclass,    description:'The luxury van of choice for group travel. Business class comfort with executive styling — perfect for airport transfers and corporate events.'},
  {id:16,name:'Mercedes-Benz Viano',         year:2022, category:'van',    transmission:'Automatic', seats:8,  price:3200, image:IMGS.viano,     description:'Spacious, refined, and built for comfort. The Viano seats up to 8 passengers in premium comfort — ideal for family or group occasions.'},
];

const LS_KEY = 'crownline_v3_cars';
function getCars(){try{const s=localStorage.getItem(LS_KEY);return s?JSON.parse(s):[...DEFAULT_CARS]}catch{return[...DEFAULT_CARS]}}
function saveCars(c){try{localStorage.setItem(LS_KEY,JSON.stringify(c))}catch{}}
if(!localStorage.getItem(LS_KEY)) saveCars(DEFAULT_CARS);

/* CANVAS */
(function(){
  const cv=document.getElementById('bgCanvas'),ctx=cv.getContext('2d');
  let W,H,pts=[];
  function rsz(){W=cv.width=innerWidth;H=cv.height=innerHeight}
  rsz();addEventListener('resize',rsz);
  const C=['rgba(232,145,26,','rgba(245,197,24,','rgba(255,159,28,'];
  class P{constructor(){this.rst(true)}rst(i){this.x=Math.random()*W;this.y=i?Math.random()*H:H+10;this.r=Math.random()*1.6+0.3;this.a=.3;this.sp=Math.random()*.45+.1;this.d=(Math.random()-.5)*.3;this.c=C[Math.floor(Math.random()*C.length)];this.tw=Math.random()*Math.PI*2;this.ts=Math.random()*.022+.007}upd(){this.y-=this.sp;this.x+=this.d;this.tw+=this.ts;this.a=Math.sin(this.tw)*.22+.28;if(this.y<-10)this.rst(false)}drw(){ctx.beginPath();ctx.arc(this.x,this.y,this.r,0,Math.PI*2);ctx.fillStyle=this.c+this.a+')';ctx.fill()}}
  for(let i=0;i<160;i++)pts.push(new P());
  (function lp(){ctx.clearRect(0,0,W,H);pts.forEach(p=>{p.upd();p.drw()});requestAnimationFrame(lp)})();
})();

/* SCROLL */
addEventListener('scroll',()=>document.getElementById('navbar').classList.toggle('scrolled',scrollY>20));

/* HAMBURGER */
const ham=document.getElementById('hamburger'),nav=document.getElementById('navLinks');
ham.addEventListener('click',()=>{ham.classList.toggle('open');nav.classList.toggle('open')});
document.querySelectorAll('.nav-link,.nav-book').forEach(el=>el.addEventListener('click',()=>{ham.classList.remove('open');nav.classList.remove('open')}));

/* PAGE TRANSITION */
let busy=false;
function navigateTo(pg){
  if(busy)return;
  const cur=document.querySelector('.page.active');
  if(cur&&cur.id==='page-'+pg)return;
  busy=true;
  const w=document.getElementById('pageWipe');
  w.className='page-wipe';
  void w.offsetWidth;
  w.classList.add('wi');
  setTimeout(()=>{
    cur&&cur.classList.remove('active');
    const t=document.getElementById('page-'+pg);
    if(t){t.classList.add('active');scrollTo({top:0,behavior:'instant'})}
    document.querySelectorAll('.nav-link').forEach(l=>l.classList.toggle('active',l.dataset.page===pg));
    if(pg==='fleet')renderFleet('all');
    void w.offsetWidth;
    w.className='page-wipe wo';
    setTimeout(()=>{w.className='page-wipe';busy=false;triggerReveal()},360);
  },360);
}

/* REVEAL */
function triggerReveal(){
  const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target)}})},{threshold:.1});
  document.querySelectorAll('.page.active .reveal,.page.active .reveal-right,.page.active .reveal-up').forEach(el=>obs.observe(el));
}

/* COUNTERS */
function animateStats(){
  document.querySelectorAll('.stat-num').forEach(el=>{
    const t=parseInt(el.dataset.target,10);let c=0;
    const step=Math.max(1,Math.floor(t/60));
    const tm=setInterval(()=>{c=Math.min(c+step,t);el.textContent=c.toLocaleString();if(c>=t)clearInterval(tm)},16);
  });
}

/* FLEET */
let activeFilter='all';
function renderFleet(filter){
  activeFilter=filter;
  const grid=document.getElementById('fleetGrid'),empty=document.getElementById('fleetEmpty');
  const cars=getCars();
  const list=filter==='all'?cars:cars.filter(c=>c.category===filter);
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.toggle('active',b.dataset.filter===filter));
  if(!list.length){grid.innerHTML='';empty.style.display='block';return}
  empty.style.display='none';
  grid.innerHTML=list.map(car=>`
    <div class="car-card" onclick="openModal(${car.id})">
      <div class="car-img-wrap">
        <img src="${car.image}" alt="${car.name}" loading="lazy"
             onerror="this.onerror=null;this.src='${FB}'"/>
        <div class="car-badge">${cap(car.category)}</div>
      </div>
      <div class="car-body">
        <p class="car-year">${car.year}</p>
        <h3 class="car-name">${car.name}</h3>
        <div class="car-specs">
          <span class="spec-tag"><i class="fas fa-cog"></i> ${car.transmission}</span>
          <span class="spec-tag"><i class="fas fa-user-group"></i> ${car.seats} Seats</span>
        </div>
        <div class="car-footer">
          <div class="car-price">R${car.price.toLocaleString()}<small>Per Day</small></div>
          <span class="car-cta">View <i class="fas fa-arrow-right"></i></span>
        </div>
      </div>
    </div>`).join('');
  setTimeout(triggerReveal,50);
}
document.querySelectorAll('.filter-btn').forEach(b=>b.addEventListener('click',()=>renderFleet(b.dataset.filter)));

/* MODAL */
function openModal(id){
  const car=getCars().find(c=>c.id==id);if(!car)return;
  const img=document.getElementById('modalImg');
  img.src=car.image;
  img.onerror=()=>{img.onerror=null;img.src=FB};
  document.getElementById('modalName').textContent=car.name;
  document.getElementById('modalYear').textContent=car.year;
  document.getElementById('modalCategory').textContent=cap(car.category);
  document.getElementById('modalDesc').textContent=car.description;
  document.getElementById('modalPrice').textContent=`R${car.price.toLocaleString()} / Day`;
  document.getElementById('modalSpecs').innerHTML=`
    <span class="spec-tag"><i class="fas fa-cog"></i> ${car.transmission}</span>
    <span class="spec-tag"><i class="fas fa-user-group"></i> ${car.seats} Seats</span>
    <span class="spec-tag"><i class="fas fa-tag"></i> ${cap(car.category)}</span>`;
  document.getElementById('carModal').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeCarModal(){document.getElementById('carModal').classList.remove('open');document.body.style.overflow=''}
document.getElementById('carModal').addEventListener('click',function(e){if(e.target===this)closeCarModal()});

/* FORM */
function handleForm(e){
  e.preventDefault();
  document.getElementById('contactForm').style.display='none';
  document.getElementById('formSuccess').style.display='block';
  showToast('Enquiry sent! We\'ll be in touch shortly ✓');
}

/* TOAST */
let toastTm;
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(toastTm);toastTm=setTimeout(()=>t.classList.remove('show'),3200)}
function cap(s){return s.charAt(0).toUpperCase()+s.slice(1)}

/* ESC */
addEventListener('keydown',e=>{if(e.key==='Escape')closeCarModal()});

/* ADMIN hooks (kept for admin.html localStorage compatibility) */
window.getCars=getCars;window.saveCars=saveCars;window.LS_KEY=LS_KEY;

/* INIT */
document.addEventListener('DOMContentLoaded',()=>{
  navigateTo('home');
  animateStats();
  setTimeout(triggerReveal,200);
});
