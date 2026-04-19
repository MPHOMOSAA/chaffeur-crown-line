/* CROWN LINE CHAUFFEURS — script.js v4 */

/* ── LAMBORGHINI CURSOR ── */
(function(){
  if(window.innerWidth<=768)return;
  const LAMBO_SRC='data:image/png;base64,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';
  const el=document.createElement('div');
  el.id='lambo-cursor';
  const img=document.createElement('img');
  img.src=LAMBO_SRC;img.style.cssText='width:100%;height:100%;object-fit:contain;';
  el.appendChild(img);
  document.body.appendChild(el);
  const TRAIL_COUNT=5;
  const trails=[];
  for(let i=0;i<TRAIL_COUNT;i++){
    const d=document.createElement('div');
    d.className='cursor-trail-dot';
    const sz=Math.max(2,5-i);
    d.style.cssText='width:'+sz+'px;height:'+sz+'px;opacity:0;top:0;left:0;position:fixed;pointer-events:none;z-index:9998;border-radius:50%;background:radial-gradient(circle,#F5C518,#E8911A);transform:translate(-50%,-50%)';
    document.body.appendChild(d);
    trails.push({el:d});
  }
  let mx=-100,my=-100;
  let history=Array(TRAIL_COUNT+1).fill({x:-100,y:-100});
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
  document.addEventListener('mouseleave',()=>{el.style.opacity='0';trails.forEach(t=>{t.el.style.opacity='0';});});
  document.addEventListener('mouseenter',()=>el.style.opacity='1');
  document.addEventListener('mousedown',()=>el.style.transform='translate(-50%,-50%) scale(.8)');
  document.addEventListener('mouseup',()=>el.style.transform='translate(-50%,-50%) scale(1)');
  (function loop(){
    el.style.left=mx+'px';el.style.top=my+'px';
    history=[{x:mx,y:my},...history.slice(0,TRAIL_COUNT)];
    trails.forEach(function(t,i){
      var h=history[i+1]||{x:-100,y:-100};
      t.el.style.left=h.x+'px';t.el.style.top=h.y+'px';
      t.el.style.opacity=String((TRAIL_COUNT-i)/(TRAIL_COUNT*2.5));
    });
    requestAnimationFrame(loop);
  })();
})();

/* ── SWIRL CANVAS ANIMATION ── */
(function(){
  var cv=document.getElementById('bgCanvas'),ctx=cv.getContext('2d');
  var W,H;
  function rsz(){W=cv.width=innerWidth;H=cv.height=innerHeight;}
  rsz();addEventListener('resize',rsz);
  var COLORS=[[232,145,26],[245,197,24],[255,210,80],[255,255,220]];
  function Swirl(){this.init(Math.random()*600);}
  Swirl.prototype.init=function(lifeOffset){
    this.cx=(Math.random()-.1)*W;
    this.cy=(Math.random()-.1)*H;
    this.startR=40+Math.random()*100;
    this.r=this.startR;
    this.maxR=this.startR+120+Math.random()*180;
    this.angle=Math.random()*Math.PI*2;
    this.dA=(Math.random()*.005+.0025)*(Math.random()>.5?1:-1);
    this.expand=.05+Math.random()*.07;
    this.maxLife=500+Math.random()*500;
    this.life=lifeOffset||0;
    this.op=0;
    this.col=COLORS[Math.floor(Math.random()*COLORS.length)];
    this.trail=[];
    this.tLen=100+Math.floor(Math.random()*80);
    this.lw=.3+Math.random()*1.1;
    this.wave=Math.random()*Math.PI*2;
    this.wAmp=4+Math.random()*12;
    this.wSpd=.003+Math.random()*.005;
  };
  Swirl.prototype.update=function(){
    this.life++;
    this.angle+=this.dA;
    this.wave+=this.wSpd;
    this.r=Math.min(this.r+this.expand,this.maxR);
    var wav=Math.sin(this.wave)*this.wAmp;
    var x=this.cx+Math.cos(this.angle)*(this.r+wav);
    var y=this.cy+Math.sin(this.angle)*(this.r+wav);
    this.trail.push([x,y]);
    if(this.trail.length>this.tLen)this.trail.shift();
    var fl=70;
    if(this.life<fl)this.op=Math.min(.3,this.life/fl*.3);
    else if(this.life>this.maxLife-fl)this.op=Math.max(0,.3*(this.maxLife-this.life)/fl);
    if(this.life>=this.maxLife){this.r=this.startR;this.trail=[];this.init(0);}
  };
  Swirl.prototype.draw=function(){
    if(this.trail.length<2)return;
    var r=this.col[0],g=this.col[1],b=this.col[2];
    for(var i=1;i<this.trail.length;i++){
      var t=i/this.trail.length;
      ctx.beginPath();
      ctx.moveTo(this.trail[i-1][0],this.trail[i-1][1]);
      ctx.lineTo(this.trail[i][0],this.trail[i][1]);
      ctx.strokeStyle='rgba('+r+','+g+','+b+','+(t*this.op)+')';
      ctx.lineWidth=this.lw*t;
      ctx.stroke();
    }
    if(this.trail.length>0){
      var head=this.trail[this.trail.length-1];
      ctx.beginPath();
      ctx.arc(head[0],head[1],this.lw*1.8,0,Math.PI*2);
      ctx.fillStyle='rgba('+r+','+g+','+b+','+this.op+')';
      ctx.fill();
    }
  };
  var swirls=[];
  for(var i=0;i<22;i++)swirls.push(new Swirl());
  ctx.lineCap='round';
  (function loop(){
    ctx.clearRect(0,0,W,H);
    swirls.forEach(function(s){s.update();s.draw();});
    requestAnimationFrame(loop);
  })();
})();

/* ── FLEET DATA ── */
var DEFAULT_CARS=[
  {id:1,name:'Mercedes-Benz S-Class',year:2023,category:'luxury',transmission:'Automatic',seats:4,price:4500,image:'https://images.unsplash.com/photo-1617469767524-7fd0f9f57fe9?w=800&auto=format&fit=crop&q=70',description:'The pinnacle of German luxury. Burmester surround sound, massaging seats, and an air of royalty.'},
  {id:2,name:'BMW 7 Series',year:2023,category:'luxury',transmission:'Automatic',seats:4,price:3800,image:'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&auto=format&fit=crop&q=70',description:'Executive presence meets driving precision. The ultimate in Bavarian luxury.'},
  {id:3,name:'Range Rover Vogue',year:2023,category:'suv',transmission:'Automatic',seats:5,price:4200,image:'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&auto=format&fit=crop&q=70',description:'British luxury redefined. The Vogue commands the road with regal composure.'},
  {id:4,name:'Bentley Continental GT',year:2023,category:'luxury',transmission:'Automatic',seats:4,price:8500,image:'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&auto=format&fit=crop&q=70',description:'Handcrafted in Crewe, England. Art in motion — a grand tourer that turns every journey into theatre.'},
  {id:5,name:'Lamborghini Urus',year:2022,category:'sport',transmission:'Automatic',seats:4,price:9800,image:'https://images.unsplash.com/photo-1609525313459-0cd0e6c9cf50?w=800&auto=format&fit=crop&q=70',description:'When luxury meets supercar DNA. Visceral, fast, and impossibly dramatic.'},
  {id:6,name:'Mercedes-AMG GT 63S',year:2023,category:'sport',transmission:'Automatic',seats:4,price:7500,image:'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&auto=format&fit=crop&q=70',description:'Pure performance. The AMG GT 63S is for moments when your arrival should turn every head.'},
  {id:7,name:'Audi A8 L',year:2023,category:'sedan',transmission:'Automatic',seats:4,price:3200,image:'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop&q=70',description:'Four-wheel steering, predictive adaptive suspension, and a cabin of unmatched refinement.'},
  {id:8,name:'Cadillac Escalade',year:2023,category:'suv',transmission:'Automatic',seats:7,price:5200,image:'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&auto=format&fit=crop&q=70',description:'The definition of American luxury. Bold and commanding — perfect for VIP group travel.'},
  {id:9,name:'BMW M4 Competition',year:2023,category:'sport',transmission:'Automatic',seats:4,price:5800,image:'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop&q=70',description:'A track-bred machine dressed in luxury. An intoxicating blend of aggression and sophistication.'},
  {id:10,name:'BMW M2',year:2023,category:'sport',transmission:'Manual',seats:4,price:4200,image:'https://images.unsplash.com/photo-1617531653332-bd46c16f4b28?w=800&auto=format&fit=crop&q=70',description:'Raw, rear-wheel-drive perfection. The purists choice.'},
  {id:11,name:'BMW M8 Gran Coupe',year:2023,category:'luxury',transmission:'Automatic',seats:4,price:6800,image:'https://images.unsplash.com/photo-1556800572-1b8aeeb44cda?w=800&auto=format&fit=crop&q=70',description:'Where grand touring meets M-power. BMW's most dramatic luxury statement.'},
  {id:12,name:'Mercedes-Benz C 200',year:2023,category:'sedan',transmission:'Automatic',seats:4,price:2400,image:'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=70',description:'Compact luxury perfected. S-Class technology in a refined, elegant form.'},
  {id:13,name:'Mercedes-Maybach S-Class',year:2023,category:'luxury',transmission:'Automatic',seats:4,price:12000,image:'https://images.unsplash.com/photo-1617654112368-307921291f42?w=800&auto=format&fit=crop&q=70',description:'Ultra-luxury redefined. Built for those who demand the absolute finest.'},
  {id:14,name:'Rolls-Royce Cullinan',year:2023,category:'luxury',transmission:'Automatic',seats:5,price:18000,image:'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800&auto=format&fit=crop&q=70',description:'The world's finest luxury SUV. No road is unworthy of effortless touring.'},
  {id:15,name:'Mercedes-Benz V-Class',year:2023,category:'van',transmission:'Automatic',seats:7,price:3500,image:'https://images.unsplash.com/photo-1609753073978-7e8e7c26e2d9?w=800&auto=format&fit=crop&q=70',description:'Business class comfort with executive styling. Perfect for airport transfers and corporate events.'},
  {id:16,name:'Mercedes-Benz Viano',year:2022,category:'van',transmission:'Automatic',seats:8,price:3200,image:'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop&q=70',description:'Spacious, refined, and built for comfort. Seats up to 8 passengers for group occasions.'},
];
var LS_KEY='crownline_v4_cars';
var BOOK_KEY='crownline_v4_bookings';
function getCars(){try{var s=localStorage.getItem(LS_KEY);return s?JSON.parse(s):DEFAULT_CARS.slice();}catch(e){return DEFAULT_CARS.slice();}}
function saveCars(c){try{localStorage.setItem(LS_KEY,JSON.stringify(c));}catch(e){}}
function getBookings(){try{return JSON.parse(localStorage.getItem(BOOK_KEY)||'[]');}catch(e){return[];}}
function saveBookings(b){localStorage.setItem(BOOK_KEY,JSON.stringify(b));}
if(!localStorage.getItem(LS_KEY))saveCars(DEFAULT_CARS);

/* ── SCROLL ── */
addEventListener('scroll',function(){document.getElementById('navbar').classList.toggle('scrolled',scrollY>20);});

/* ── HAMBURGER ── */
var ham=document.getElementById('hamburger'),navEl=document.getElementById('navLinks');
ham.addEventListener('click',function(){ham.classList.toggle('open');navEl.classList.toggle('open');});
document.querySelectorAll('.nav-link,.nav-book').forEach(function(el){
  el.addEventListener('click',function(){ham.classList.remove('open');navEl.classList.remove('open');});
});

/* ── PAGE TRANSITION ── */
var busy=false;
function navigateTo(pg){
  if(busy)return;
  var cur=document.querySelector('.page.active');
  if(cur&&cur.id==='page-'+pg)return;
  busy=true;
  var w=document.getElementById('pageWipe');
  w.className='page-wipe';void w.offsetWidth;w.classList.add('wi');
  setTimeout(function(){
    if(cur)cur.classList.remove('active');
    var t=document.getElementById('page-'+pg);
    if(t){t.classList.add('active');scrollTo({top:0,behavior:'instant'});}
    document.querySelectorAll('.nav-link').forEach(function(l){l.classList.toggle('active',l.dataset.page===pg);});
    if(pg==='fleet'){renderFleet('all');activeBrand='all';}
    void w.offsetWidth;w.className='page-wipe wo';
    setTimeout(function(){w.className='page-wipe';busy=false;triggerReveal();},380);
  },380);
}

/* ── REVEAL ── */
function triggerReveal(){
  var obs=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}});},{threshold:.08});
  document.querySelectorAll('.page.active .reveal,.page.active .reveal-right,.page.active .reveal-up').forEach(function(el){obs.observe(el);});
}

/* ── COUNTERS ── */
function animateStats(){
  document.querySelectorAll('.stat-num').forEach(function(el){
    var t=parseInt(el.dataset.target,10),c=0;
    var step=Math.max(1,Math.floor(t/55));
    var tm=setInterval(function(){c=Math.min(c+step,t);el.textContent=c.toLocaleString();if(c>=t)clearInterval(tm);},16);
  });
}

/* ── BRAND DETECTION ── */
function getBrand(name){
  if(name.indexOf('Rolls-Royce')>=0)return'Rolls-Royce';
  if(name.indexOf('Maybach')>=0)return'Maybach';
  if(name.indexOf('AMG')>=0)return'Mercedes-AMG';
  if(name.indexOf('Mercedes')>=0)return'Mercedes-Benz';
  if(name.match(/BMW M[0-9]/))return'BMW M';
  if(name.indexOf('BMW')>=0)return'BMW';
  if(name.indexOf('Audi')>=0)return'Audi';
  if(name.indexOf('Range Rover')>=0)return'Range Rover';
  if(name.indexOf('Bentley')>=0)return'Bentley';
  if(name.indexOf('Lamborghini')>=0)return'Lamborghini';
  if(name.indexOf('Porsche')>=0)return'Porsche';
  if(name.indexOf('Cadillac')>=0)return'Cadillac';
  return'Other';
}

/* ── FLEET ── */
var activeFilter='all',activeBrand='all';
function renderBrandFilters(category){
  var bf=document.getElementById('brandFilters');if(!bf)return;
  var cars=getCars();
  var relevant=category==='all'?cars:cars.filter(function(c){return c.category===category;});
  var brands=[...new Set(relevant.map(function(c){return getBrand(c.name);}))].sort();
  if(brands.length<=1){bf.innerHTML='';return;}
  var html='<button class="brand-btn '+(activeBrand==='all'?'active':'')+'" onclick="filterBrand('all')">All Brands</button>';
  brands.forEach(function(b){html+='<button class="brand-btn '+(activeBrand===b?'active':'')+'" onclick="filterBrand(''+b+'')">'+b+'</button>';});
  bf.innerHTML=html;
}
function filterBrand(brand){activeBrand=brand;renderBrandFilters(activeFilter);applyFleetFilter();}
var FB='https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=60';
function applyFleetFilter(){
  var grid=document.getElementById('fleetGrid'),empty=document.getElementById('fleetEmpty');
  var cars=getCars();
  var list=activeFilter==='all'?cars:cars.filter(function(c){return c.category===activeFilter;});
  if(activeBrand!=='all')list=list.filter(function(c){return getBrand(c.name)===activeBrand;});
  if(!list.length){grid.innerHTML='';empty.style.display='block';return;}
  empty.style.display='none';
  grid.innerHTML=list.map(function(car){return '<div class="car-card" onclick="openModal('+car.id+')"><div class="car-img-wrap"><img src="'+car.image+'" alt="'+car.name+'" loading="lazy" onerror="this.onerror=null;this.src=''+FB+''" /><div class="car-badge">'+cap(car.category)+'</div></div><div class="car-body"><p class="car-year">'+car.year+' &middot; <em style="color:var(--or);font-style:normal;font-size:.65rem">'+getBrand(car.name)+'</em></p><h3 class="car-name">'+car.name+'</h3><div class="car-specs"><span class="spec-tag"><i class="fas fa-cog"></i> '+car.transmission+'</span><span class="spec-tag"><i class="fas fa-user-group"></i> '+car.seats+' Seats</span></div><div class="car-footer"><div class="car-price">R'+car.price.toLocaleString()+'<small>Per Day</small></div><span class="car-cta">View <i class="fas fa-arrow-right"></i></span></div></div></div>';}).join('');
  setTimeout(triggerReveal,50);
}
function renderFleet(filter){
  activeFilter=filter;activeBrand='all';
  document.querySelectorAll('.filter-btn').forEach(function(b){b.classList.toggle('active',b.dataset.filter===filter);});
  renderBrandFilters(filter);applyFleetFilter();
}
document.querySelectorAll('.filter-btn').forEach(function(b){b.addEventListener('click',function(){renderFleet(b.dataset.filter);});});

/* ── MODAL ── */
function openModal(id){
  var car=getCars().find(function(c){return c.id==id;});if(!car)return;
  var img=document.getElementById('modalImg');
  img.src=car.image;img.onerror=function(){img.onerror=null;img.src=FB;};
  document.getElementById('modalName').textContent=car.name;
  document.getElementById('modalYear').textContent=car.year;
  document.getElementById('modalCategory').textContent=cap(car.category);
  document.getElementById('modalDesc').textContent=car.description;
  document.getElementById('modalPrice').textContent='R'+car.price.toLocaleString()+' / Day';
  document.getElementById('modalSpecs').innerHTML='<span class="spec-tag"><i class="fas fa-cog"></i> '+car.transmission+'</span><span class="spec-tag"><i class="fas fa-user-group"></i> '+car.seats+' Seats</span><span class="spec-tag"><i class="fas fa-tag"></i> '+getBrand(car.name)+'</span>';
  document.getElementById('carModal').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeCarModal(){document.getElementById('carModal').classList.remove('open');document.body.style.overflow='';}
document.getElementById('carModal').addEventListener('click',function(e){if(e.target===this)closeCarModal();});

/* ── BOOKING CALENDAR ── */
var calYear,calMonth,selectedDate=null;
function initCalendar(){var now=new Date();calYear=now.getFullYear();calMonth=now.getMonth();renderCalendar();}
function renderCalendar(){
  var cal=document.getElementById('bookingCalendar');if(!cal)return;
  var booked=getBookings().filter(function(b){return b.status==='confirmed';}).map(function(b){return b.date;});
  var now=new Date();
  var firstDay=new Date(calYear,calMonth,1).getDay();
  var daysInMonth=new Date(calYear,calMonth+1,0).getDate();
  var mNames=['January','February','March','April','May','June','July','August','September','October','November','December'];
  var dNames=['Su','Mo','Tu','We','Th','Fr','Sa'];
  var html='<div class="cal-header"><button class="cal-nav" onclick="changeMonth(-1)"><i class="fas fa-chevron-left"></i></button><h4>'+mNames[calMonth]+' '+calYear+'</h4><button class="cal-nav" onclick="changeMonth(1)"><i class="fas fa-chevron-right"></i></button></div><div class="cal-grid">';
  dNames.forEach(function(d){html+='<div class="cal-day-name">'+d+'</div>';});
  for(var i=0;i<firstDay;i++)html+='<div class="cal-day cal-empty"></div>';
  for(var d=1;d<=daysInMonth;d++){
    var ds=calYear+'-'+String(calMonth+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');
    var isPast=new Date(calYear,calMonth,d)<new Date(now.getFullYear(),now.getMonth(),now.getDate());
    var isToday=d===now.getDate()&&calMonth===now.getMonth()&&calYear===now.getFullYear();
    var isBooked=booked.indexOf(ds)>=0;
    var isSel=ds===selectedDate;
    var cls='cal-day';
    if(isPast)cls+=' cal-past';
    else if(isBooked)cls+=' cal-booked';
    else if(isSel)cls+=' cal-selected';
    else if(isToday)cls+=' cal-today';
    var click=(!isPast&&!isBooked)?'onclick="selectDate(''+ds+'')"':'';
    html+='<div class="'+cls+'" '+click+' title="'+(isBooked?'Booked — Unavailable':'')+'">'+d+'</div>';
  }
  html+='</div>';
  cal.innerHTML=html;
}
function changeMonth(dir){calMonth+=dir;if(calMonth<0){calMonth=11;calYear--;}if(calMonth>11){calMonth=0;calYear++;}renderCalendar();}
function selectDate(d){selectedDate=d;renderCalendar();var di=document.querySelector('.cform input[type="date"]');if(di)di.value=d;}

/* ── FORM ── */
function handleForm(e){
  e.preventDefault();
  var form=e.target;
  var name=form.querySelector('input[type="text"]')?.value||'Guest';
  var phone=form.querySelector('input[type="tel"]')?.value||'';
  var email=form.querySelector('input[type="email"]')?.value||'';
  var sels=form.querySelectorAll('select');
  var service=sels[0]?.value||'';
  var date=form.querySelector('input[type="date"]')?.value||selectedDate||'';
  var city=sels[1]?.value||'';
  var vehicle=sels[2]?.value||'';
  var msg=form.querySelector('textarea')?.value||'';
  var booking={id:Date.now(),name:name,phone:phone,email:email,service:service,date:date,city:city,vehicle:vehicle,message:msg,status:'pending',createdAt:new Date().toISOString()};
  var bookings=getBookings();bookings.push(booking);saveBookings(bookings);
  form.style.display='none';
  document.getElementById('formSuccess').style.display='block';
  showToast('Enquiry sent! Crown Line will be in touch shortly.');
}

/* ── TOAST ── */
var toastTm;
function showToast(msg){var t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(toastTm);toastTm=setTimeout(function(){t.classList.remove('show');},3400);}
function cap(s){return s.charAt(0).toUpperCase()+s.slice(1);}

addEventListener('keydown',function(e){if(e.key==='Escape')closeCarModal();});

/* ── ADMIN API ── */
window.getCars=getCars;window.saveCars=saveCars;window.LS_KEY=LS_KEY;
window.getBookings=getBookings;window.saveBookings=saveBookings;window.BOOK_KEY=BOOK_KEY;

/* ── INIT ── */
document.addEventListener('DOMContentLoaded',function(){
  navigateTo('home');animateStats();
  setTimeout(triggerReveal,200);
  setTimeout(initCalendar,600);
});
