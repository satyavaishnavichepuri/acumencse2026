'use strict';

const EVENTS = [
  {
    id:'paper-presentation', name:'Paper Presentation', icon:'fa-file-alt',
    category:'TECHNICAL', color:'#4DE3FF',
    shortDesc:'Present your research to a panel of experts.',
    description:'Showcase original research in any CS domain. Individual or team. A great platform to gain academic exposure and constructive feedback from industry professionals.',
    venue:'Main Seminar Hall, Block A', date:'March 15, 2026 · 9:00 AM', team:'1–3 members', prize:'₹5000 + Certificate',
    registerLink:'https://unstop.com/p/paper-presentation-cse-acumen-2026-vasavi-college-of-engineering-vce-hyderabad-1671599'
  },
  {
    id:'poster-presentation', name:'Poster Presentation', icon:'fa-image',
    category:'TECHNICAL', color:'#5BFFB0',
    shortDesc:'Communicate your idea through a visual poster.',
    description:'Design a technically sound and visually compelling poster. Open to all CS and allied domains. Judged on content, clarity, and design.',
    venue:'Exhibition Hall, Block B', date:'March 15, 2026 · 10:00 AM', team:'1–2 members', prize:'₹3000 + Certificate',
    registerLink:'https://unstop.com/p/poster-presentation-cse-acumen-2026-vasavi-college-of-engineering-vce-hyderabad-1669200'
  },
  {
    id:'project-expo', name:'Project Expo', icon:'fa-flask',
    category:'TECHNICAL', color:'#C7FF63',
    shortDesc:'Demo your live working project.',
    description:'From IoT to AI-powered apps — bring your working prototype and impress the judges. All innovative projects across computing domains are welcome.',
    venue:'Ground Floor Lab, Block C', date:'March 15, 2026 · 11:00 AM', team:'2–4 members', prize:'₹8000 + Certificate',
    registerLink:'https://unstop.com/p/project-expo-cse-acumen-2026-vasavi-college-of-engineering-vce-hyderabad-1671602'
  },
  {
    id:'prompt-wars', name:'Prompt Wars', icon:'fa-robot',
    category:'TECHNICAL', color:'#4DE3FF',
    shortDesc:'Create with cutting-edge AI tools.',
    description:'Use modern AI tools to generate, design, or solve problems in a timed creative challenge. Tasks span image generation, prompt engineering, and AI-assisted coding.',
    venue:'Computer Lab 2, Block A', date:'March 16, 2026 · 9:00 AM', team:'1–2 members', prize:'₹4000 + Certificate',
    registerLink:'https://unstop.com/p/prompt-wars-cse-acumen-2026-vasavi-college-of-engineering-vce-hyderabad-1671604'
  },
  {
    id:'bid-n-code', name:'Bid N Code', icon:'fa-laptop-code',
    category:'TECHNICAL', color:'#5BFFB0',
    shortDesc:'Auction-style competitive coding.',
    description:'Bid on programming problems using virtual currency, solve them under time pressure, and outsmart rivals. A unique blend of strategy and coding speed.',
    venue:'Computer Lab 1, Block A', date:'March 16, 2026 · 11:00 AM', team:'1–2 members', prize:'₹5000 + Certificate',
    registerLink:'https://unstop.com/p/bid-n-code-cse-acumen-2026-vasavi-college-of-engineering-vce-hyderabad-1671606'
  },
  {
    id:'hack-the-core', name:'Hack The Core', icon:'fa-shield-alt',
    category:'TECHNICAL', color:'#C7FF63',
    shortDesc:'24-hour hackathon — build, break, repeat.',
    description:'The flagship event. 24 hours, real-world problem statements, cross-domain teams. Build solutions that matter. Top teams present to a jury of industry veterans.',
    venue:'Innovation Hub, Block D', date:'March 15–16, 2026 · 10:00 AM', team:'3–5 members', prize:'₹15000 + Trophy',
    registerLink:'https://unstop.com/p/hack-the-core-cse-acumen-2026-vasavi-college-of-engineering-vce-hyderabad-1671615'
  },
  {
    id:'cryptic-nexus', name:'Cryptic Nexus', icon:'fa-key',
    category:'TECHNICAL', color:'#4DE3FF',
    shortDesc:'Ciphers, puzzles, hidden clues.',
    description:'Decode cyphers, solve cryptographic puzzles, and trace hidden clues across digital and physical realms. Tests logical thinking and cryptography knowledge.',
    venue:'Library Hall, Block E', date:'March 16, 2026 · 2:00 PM', team:'1 member', prize:'₹3000 + Certificate',
    registerLink:'https://unstop.com/p/cryptic-nexus-cse-acumen-2026-vasavi-college-of-engineering-vce-hyderabad-1671611'
  },
  {
    id:'code-relay', name:'Code Relay', icon:'fa-bolt',
    category:'TECHNICAL', color:'#5BFFB0',
    shortDesc:'Team relay — code, pass, repeat.',
    description:'Each member writes one segment and passes it to the next. Speed, logic, and seamless teamwork are your only weapons.',
    venue:'Computer Lab 3, Block A', date:'March 16, 2026 · 3:00 PM', team:'4 members', prize:'₹6000 + Certificate',
    registerLink:'https://unstop.com/p/code-relay-cse-acumen-2026-vasavi-college-of-engineering-vce-hyderabad-1671605'
  },
  {
    id:'squid-game', name:'Squid Game', icon:'fa-gamepad',
    category:'NON-TECHNICAL', color:'#4DE3FF',
    shortDesc:'Multi-round nerve-testing elimination games.',
    description:'Inspired by the hit series — multi-round games that test nerve, strategy, and survival instincts. Each round eliminates participants until one winner remains.',
    venue:'Open Ground', date:'March 15, 2026 · 3:00 PM', team:'1 member', prize:'₹3000 + Trophy',
    registerLink:'https://unstop.com/p/squid-game-cse-acumen-2026-vasavi-college-of-engineering-vce-hyderabad-1672246'
  },
  {
    id:'treasure-hunt', name:'Treasure Hunt', icon:'fa-map-marked-alt',
    category:'NON-TECHNICAL', color:'#5BFFB0',
    shortDesc:'Campus-wide clue-based race.',
    description:'Follow clues hidden across the campus, solve riddles, and race to find the ultimate treasure before rival teams. Wit and speed both matter.',
    venue:'Entire Campus', date:'March 15, 2026 · 2:00 PM', team:'3–4 members', prize:'₹4000 + Certificate',
    registerLink:'https://unstop.com/p/treasure-hunt-cse-acumen-2026-vasavi-college-of-engineering-vce-hyderabad-1672249'
  },
  {
    id:'free-fire', name:'Free Fire', icon:'fa-fire',
    category:'NON-TECHNICAL', color:'#C7FF63',
    shortDesc:'Online battle royale tournament.',
    description:'Squad up and compete for the highest eliminations and final zone survival. Online knockout format — bring your best squad.',
    venue:'Online', date:'March 15, 2026 · 4:00 PM', team:'4 members', prize:'₹3000 + Certificate',
    registerLink:'https://unstop.com/p/free-fire-cse-acumen-2026-vasavi-college-of-engineering-vce-hyderabad-1672251'
  },
  {
    id:'relay-rush', name:'Relay Rush', icon:'fa-running',
    category:'NON-TECHNICAL', color:'#4DE3FF',
    shortDesc:'Sprint relay with a digital twist.',
    description:'Classic relay race where each leg includes a quick digital or logical challenge before passing the baton. Speed plus brains.',
    venue:'Sports Ground', date:'March 16, 2026 · 4:00 PM', team:'4 members', prize:'₹2000 + Certificate',
    registerLink:'https://unstop.com/p/relay-rush-cse-acumen-2026-vasavi-college-of-engineering-vce-hyderabad-1672253'
  },
  {
    id:'movie-hunt', name:'Movie Hunt', icon:'fa-film',
    category:'NON-TECHNICAL', color:'#5BFFB0',
    shortDesc:'Guess movies from frames and clues.',
    description:'Identify movies from stills, audio clips, and cryptic clues across multiple rounds and genres. A paradise for film buffs.',
    venue:'AV Room, Block B', date:'March 15, 2026 · 5:00 PM', team:'1–2 members', prize:'₹2000 + Certificate',
    registerLink:'https://unstop.com/p/movie-hunt-cse-acumen-2026-vasavi-college-of-engineering-vce-hyderabad-1672257'
  },
  {
    id:'jail-break', name:'Jail Break', icon:'fa-unlock',
    category:'NON-TECHNICAL', color:'#C7FF63',
    shortDesc:'Escape-room style team challenge.',
    description:'Solve physical and logical puzzles to "break out" before time runs out. High energy, high pressure, and huge fun.',
    venue:'Room 204, Block C', date:'March 16, 2026 · 11:00 AM', team:'3–4 members', prize:'₹3000 + Certificate',
    registerLink:'https://unstop.com/p/jail-break-cse-acumen-2026-vasavi-college-of-engineering-vce-hyderabad-1672259'
  },
  {
    id:'ipl-auction', name:'IPL Auction', icon:'fa-gavel',
    category:'NON-TECHNICAL', color:'#4DE3FF',
    shortDesc:'Build your dream team within budget.',
    description:'Step into the shoes of an IPL team owner. Bid for players within a budget cap and build the best possible team. Team performance is evaluated through mock matches.',
    venue:'Conference Hall, Block B', date:'March 16, 2026 · 10:00 AM', team:'2–3 members', prize:'₹2500 + Certificate',
    registerLink:'https://unstop.com/p/ipl-auction-cse-acumen-2026-vasavi-college-of-engineering-vce-hyderabad-1672260'
  },
];

const FACULTY = [
  {
    id: 'adilakshmi',
    name: 'Dr. T. Adilakshmi',
    role: 'Head of Department',
    photo: 'hodmaam.jpg',
    bio: `Dr. T. Adilakshmi serves as the Head of Department and BoS Chairman for Computer Science & Engineering at Vasavi College of Engineering. She obtained her B.Tech (ECE) from Vasavi College of Engineering in 1986, her M.Tech in CSE from Manipal Institute of Technology in 1993, and her Ph.D in Artificial Intelligence from Hyderabad Central University in 2006.

With 34 years of extensive teaching experience across Vasavi College of Engineering (25+ years) and MIT Mangalore (8+ years), she has led the department with a visionary and research-driven approach. She has 154 publications across national and international journals and conferences, has guided 4 Ph.D. scholars to completion, and currently supervises 14 Ph.D. students in Machine Learning, Data Mining, Image Processing, and Networks.

She is a recognized research supervisor at Osmania University and JNTU Hyderabad, and has collaborated on consultancy projects with organizations including DRDO, BOSCH India, Titan Industries, and LightSpeedAI Labs. Under her leadership, she established the prestigious Industrial IoT Lab — first of its kind under AICTE's MODROB Scheme.

Her awards include the Best Teacher Award (2005), Best HoD of the Year from CSI Mumbai Chapter (TECHNEXT INDIA 2018), and Eminent Alumnus of Vasavi College of Engineering (2017). She served as TEQIP Coordinator for 5 years and as Secretary of the Alumni Association. She has been a caring mentor and source of moral inspiration to both students and faculty throughout her distinguished career.`,
    traits: 'Known for her visionary leadership, Dr. Adilakshmi is deeply empathetic, encouraging, and supportive — always motivating students and faculty to achieve their best.'
  },
  {
    id: 'komalkaur',
    name: 'Dr. S. Komal Kaur',
    role: 'Faculty Advisor',
    photo: 'komalmaam.jpg',
    bio: `Dr. S. Komal Kaur holds a B.Tech, M.Tech, and Ph.D, and serves as an Assistant Professor in the Department of Computer Science & Engineering at Vasavi College of Engineering. She brings 16 years of teaching experience across domains including Computer Networks, Software Engineering, Web Technology, Information Security, Artificial Intelligence, DBMS, and Compiler Construction.

She has published research in international journals, including her notable work on "Pattern based topics for document Modelling in information Filtering" (IJATIR, 2016, Vol. 8, Issue 11), which has garnered significant academic recognition. She is an active NPTEL achiever, earning Elite-Gold (Top 2%) in Programming in Java, Elite-Gold (Top 5%) in Joy of Computing using Python, Elite-Silver in Data Mining, Elite (Top 2%) in Software Engineering, and Elite-Gold (Top 1%) in Introduction to Programming in C. She also holds the prestigious NPTEL Discipline Star recognition.

She is a Life Member of the Computer Society of India and has received the BRONZE Partner recognition from Infosys InspireCampus Connect and the Longest Continuous SBC award from CSI. Her dedication to students and commitment to quality education make her a valued member of the CSE faculty.`,
    traits: 'Dr. Komal Kaur is approachable and enthusiastic about student growth — always ready to guide, encourage, and support learners at every step.'
  },
  {
    id: 'jalaja',
    name: 'Ms. T. Jalaja',
    role: 'Faculty Advisor',
    photo: 'jalajamaam.jpg',
    bio: `Ms. T. Jalaja holds a B.E. from JNTU (2003, CSE) and an M.Tech from Osmania University (2005, CSE), and serves as an Assistant Professor in Computer Science & Engineering at Vasavi College of Engineering. With 15 years of teaching experience, she has contributed to the department across multiple disciplines including DBMS, Data Mining, OOP using Java, Python Programming, Compiler Construction, Automata, and Operating Systems.

Her professional journey includes a software engineering role at Keane India Ltd. (2005–2006), followed by academic positions at Stanley College of Engineering (2011–2014) before joining Vasavi College of Engineering in 2014. She has presented and published research across national and international platforms, including work on Trie-based Speech Recognition, Hierarchical Multi-Label Classification over Ticket Data, and comparative studies on Hadoop File Systems.

She has received multiple honors from NPTEL — including Topper recognition in Compiler Design, Elite-Gold (Top 2%) in Programming in Java, Elite-Gold (Top 5%) in Joy of Computing, and Elite (Top 2%) in Software Engineering. She was also recognized as the BRONZE Partner by Infosys InspireCampus Connect.`,
    traits: 'Ms. Jalaja is warm, patient, and deeply committed to her students — known for her clear teaching style and her willingness to go the extra mile for anyone who needs support.'
  },
];

const STUDENT_LEADS = [
  { name: 'Faaraz',        role: 'Head Organizer',    photo: 'faaraz.jpg' },
  { name: 'Chinmaya Teja', role: 'Marketing Head',    photo: 'chinmayateja.jpg' },
  { name: 'Navadeep',      role: 'Chief Editor',      photo: 'navadeep.jpg' },
  { name: 'Ganesh',        role: 'Logistics Head',    photo: 'ganesh.jpg' },
  { name: 'Sathwik',       role: 'Content Creation',  photo: 'sathwik.jpg' },
  { name: 'Rahul',         role: 'Content Creation',  photo: 'rahul.jpg' },
  { name: 'Abhinav',       role: 'Decor Team Head',   photo: 'abhinav.jpg' },
  { name: 'Prasanna Kumar',role: 'Non-Tech Lead',      photo: 'prasannakumar.jpg' },
  { name: 'Vaishnavi',     role: 'Tech Lead',         photo: 'vaishnavi.jpg' },
  { name: 'Vikranth',      role: 'Tech Lead',         photo: 'vikranth.jpg' },
  { name: 'Design Head',   role: 'Design Head',       photo: 'designhead.jpg' },
];

/* ───────────────────────────────────────────────────────────────────────
   SUBTLE MATRIX BACKGROUND
─────────────────────────────────────────────────────────────────────── */
(function MatrixRain() {
  const canvas = document.getElementById('rainCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const CHARS = '01';
  const FONT_SIZE = 15;
  let width = 0;
  let height = 0;
  let columns = 0;
  let drops = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    columns = Math.ceil(width / FONT_SIZE);
    drops = Array.from({ length: columns }, () => Math.random() * -80);
  }

  function draw() {
    ctx.fillStyle = 'rgba(4, 7, 13, 0.14)';
    ctx.fillRect(0, 0, width, height);
    ctx.font = `${FONT_SIZE}px "Turret Road", monospace`;

    for (let i = 0; i < drops.length; i += 1) {
      const char = CHARS[Math.floor(Math.random() * CHARS.length)];
      const level = Math.random();

      if (level > 0.995) {
        ctx.fillStyle = 'rgba(200, 255, 230, 0.86)';
      } else if (level > 0.94) {
        ctx.fillStyle = 'rgba(91, 255, 176, 0.58)';
      } else {
        ctx.fillStyle = 'rgba(77, 227, 255, 0.28)';
      }

      ctx.fillText(char, i * FONT_SIZE, drops[i] * FONT_SIZE);

      if (drops[i] * FONT_SIZE > height && Math.random() > 0.985) {
        drops[i] = 0;
      }

      drops[i] += 0.52;
    }

    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  requestAnimationFrame(draw);
}());

/* ───────────────────────────────────────────────────────────────────────
   SPONSOR DETAIL PAGE
─────────────────────────────────────────────────────────────────────── */
(function SponsorDetailModule() {
  const sponsorPage = document.getElementById('sponsor-detail-page');
  const sponsorName = document.getElementById('sdp-name');
  const sponsorCards = document.querySelectorAll('.sponsor-card');
  const sponsorBackButton = document.getElementById('sdp-back');

  sponsorCards.forEach(card => {
    card.addEventListener('click', () => {
      const name = card.querySelector('.sponsor-name');
      if (!name) return;
      sponsorName.textContent = name.textContent;
      sponsorPage.classList.add('open');
      sponsorPage.scrollTop = 0;
    });
  });

  sponsorBackButton.addEventListener('click', () => {
    sponsorPage.classList.remove('open');
  });
}());

/* ───────────────────────────────────────────────────────────────────────
   EVENTS FILTER BUTTONS
─────────────────────────────────────────────────────────────────────── */
(function EventsFilterModule() {
  document.addEventListener('click', event => {
    const button = event.target.closest('.filter-btn');
    if (!button) return;

    const selectedFilter = button.dataset.filter;
    document.querySelectorAll('.filter-btn').forEach(filterButton => {
      filterButton.classList.remove('active');
    });
    button.classList.add('active');

    document.querySelectorAll('.event-grid-card').forEach(card => {
      const category = card.querySelector('.egc-category');
      if (!category) return;
      card.style.display = selectedFilter === 'ALL' || category.textContent === selectedFilter ? '' : 'none';
    });
  });
}());

/* ───────────────────────────────────────────────────────────────────────
   WELCOME SCREEN
─────────────────────────────────────────────────────────────────────── */
(function WelcomeModule() {
  const screen  = document.getElementById('welcome-screen');
  const barFill = document.getElementById('welcome-bar-fill');

  const pContainer = document.getElementById('welcome-particles');
  for (let i = 0; i < 55; i++) {
    const p = document.createElement('div');
    const size = 1 + Math.random() * 2.5;
    Object.assign(p.style, {
      position:'absolute',
      width: size + 'px', height: size + 'px',
      borderRadius: '50%',
      background: Math.random() > 0.5 ? '#4DE3FF' : '#5BFFB0',
      left: Math.random() * 100 + '%',
      top:  Math.random() * 100 + '%',
      opacity: 0.1 + Math.random() * 0.35,
      animation: `float-p ${4 + Math.random()*6}s ease-in-out ${Math.random()*4}s infinite alternate`,
    });
    pContainer.appendChild(p);
  }
  const s = document.createElement('style');
  s.textContent = `@keyframes float-p {
    0%   { transform:translate(0,0) scale(1); }
    100% { transform:translate(${Math.random()*30-15}px,${Math.random()*-40-10}px) scale(1.4); }
  }`;
  document.head.appendChild(s);

  const DURATION = 1800;
  const start = performance.now();

  function tick(now) {
    const pct = Math.min((now - start) / DURATION, 1) * 100;
    barFill.style.width = pct + '%';
    if (pct < 100) { requestAnimationFrame(tick); return; }
    setTimeout(() => {
      screen.classList.add('exit');
      setTimeout(() => {
        screen.style.display = 'none';
        window.ShieldModule && window.ShieldModule.activate();
      }, 800);
    }, 300);
  }
  requestAnimationFrame(tick);
}());

/* ───────────────────────────────────────────────────────────────────────
   SHIELD ANIMATION
─────────────────────────────────────────────────────────────────────── */
(function ShieldModule() {
  const canvas = document.getElementById('shieldCanvas');
  const ctx    = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const CX = W / 2, CY = H / 2 + 30;

  const ORBITS = [
    { rx:290, ry:100, tilt:0,            color:'#4DE3FF', speed: 0.038 },
    { rx:290, ry:100, tilt:Math.PI/3,   color:'#5BFFB0', speed:-0.030 },
    { rx:290, ry:100, tilt:-Math.PI/3,  color:'#C7FF63', speed: 0.024 },
  ];
  const angles=[0,0,0];
  let frame=0, raf=null, active=false;

  function getPoint(rx,ry,tilt,theta){
    const px=rx*Math.cos(theta), py=ry*Math.sin(theta);
    const c=Math.cos(tilt),s=Math.sin(tilt);
    return {x:CX+px*c-py*s, y:CY+px*s+py*c};
  }

  const stars=Array.from({length:160},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.4,phase:Math.random()*Math.PI*2}));
  const SW=155, SH=200;

  function shieldPath(cx,cy,sw,sh){
    const t=cy-sh, pk=t-sh*0.14, b=cy+sh, l=cx-sw, r=cx+sw, aw=sw*0.36;
    ctx.beginPath();
    ctx.moveTo(l,t); ctx.lineTo(cx-aw,t); ctx.lineTo(cx,pk); ctx.lineTo(cx+aw,t); ctx.lineTo(r,t);
    ctx.bezierCurveTo(r+sw*0.04,cy-sh*0.05,r,cy+sh*0.22,cx,b);
    ctx.bezierCurveTo(l,cy+sh*0.22,l-sw*0.04,cy-sh*0.05,l,t);
    ctx.closePath();
  }
  function neonStroke(widths,blurs,alphas){
    widths.forEach((lw,i)=>{
      ctx.strokeStyle=`rgba(160,106,139,${alphas[i]})`; ctx.lineWidth=lw;
      ctx.shadowColor='#4DE3FF'; ctx.shadowBlur=blurs[i]; ctx.stroke();
    }); ctx.shadowBlur=0;
  }

  function drawShield(){
    ctx.save(); ctx.translate(0,50);
    const t=frame*0.016, gp=0.65+0.35*Math.sin(t*1.3);

    shieldPath(CX,CY,SW+28,SH+22);
    ctx.fillStyle=`rgba(160,106,139,${0.035*gp})`; ctx.shadowColor='#4DE3FF'; ctx.shadowBlur=60; ctx.fill(); ctx.shadowBlur=0;

    shieldPath(CX,CY,SW+7,SH+5);
    neonStroke([8,5,3,1.4],[35,20,10,4],[0.20*gp,0.38*gp,0.62*gp,1.0]);

    shieldPath(CX,CY,SW,SH);
    const body=ctx.createLinearGradient(CX,CY-SH,CX,CY+SH);
    body.addColorStop(0,'rgba(4,0,94,0.91)'); body.addColorStop(0.45,'rgba(4,0,94,0.95)'); body.addColorStop(1,'rgba(68,11,212,0.89)');
    ctx.fillStyle=body; ctx.fill();

    ctx.save(); shieldPath(CX,CY,SW,SH); ctx.clip();
    for(let sy=CY-SH-30;sy<CY+SH;sy+=3){ctx.fillStyle='rgba(74,124,89,0.011)';ctx.fillRect(CX-SW-15,sy,(SW+15)*2,1);}
    const shimY=((frame*1.6)%(SH*2.3))+CY-SH-30;
    const shimG=ctx.createLinearGradient(CX-SW,shimY,CX+SW,shimY+4);
    shimG.addColorStop(0,'rgba(74,124,89,0)'); shimG.addColorStop(0.5,'rgba(74,124,89,0.28)'); shimG.addColorStop(1,'rgba(74,124,89,0)');
    ctx.fillStyle=shimG; ctx.fillRect(CX-SW-15,shimY,(SW+15)*2,3);
    ctx.restore();

    shieldPath(CX,CY,SW-14,SH-14); neonStroke([4,2,1],[16,8,2],[0.10*gp,0.25*gp,0.48*gp]);

    ctx.save(); ctx.font='900 28px "Train One",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
    const cseY=CY-SH-50;
    ctx.shadowColor='#4DE3FF'; ctx.shadowBlur=35; ctx.fillStyle='rgba(160,106,139,0.4)'; ctx.fillText('C · S · E',CX,cseY);
    ctx.shadowBlur=15; ctx.fillStyle='rgba(160,106,139,0.7)'; ctx.fillText('C · S · E',CX,cseY);
    ctx.shadowBlur=5; ctx.fillStyle='#ffd7f6'; ctx.fillText('C · S · E',CX,cseY); ctx.restore();

    const acumenY=CY-90;
    ctx.save(); ctx.font='900 84px "Train One",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.shadowColor='#4DE3FF'; ctx.shadowBlur=40; ctx.fillStyle='rgba(160,106,139,0.18)'; ctx.fillText('ACUMEN',CX,acumenY);
    ctx.shadowBlur=20; ctx.fillStyle='rgba(160,106,139,0.35)'; ctx.fillText('ACUMEN',CX,acumenY);
    const tg=ctx.createLinearGradient(CX-240,acumenY-40,CX+240,acumenY+40);
    tg.addColorStop(0,'#4DE3FF'); tg.addColorStop(0.5,'#ffd7f6'); tg.addColorStop(1,'#4DE3FF');
    ctx.fillStyle=tg; ctx.shadowBlur=8; ctx.fillText('ACUMEN',CX,acumenY); ctx.restore();

    // Lock — bigger, more prominent
    ctx.save();
    const lockY=CY+35, lw=90, lh=68, shY=lockY-lh/2-26;
    ctx.beginPath(); ctx.arc(CX,shY,26,Math.PI,0); ctx.lineTo(CX+26,lockY-lh/2); ctx.moveTo(CX-26,lockY-lh/2); ctx.lineTo(CX-26,shY);
    ctx.strokeStyle='#4DE3FF'; ctx.lineWidth=9; ctx.shadowColor='#4DE3FF'; ctx.shadowBlur=30; ctx.stroke();
    ctx.strokeStyle='#ffd7f6'; ctx.lineWidth=4; ctx.shadowBlur=10; ctx.stroke();
    ctx.beginPath();
    if(ctx.roundRect) ctx.roundRect(CX-lw/2,lockY-lh/2,lw,lh,12);
    else ctx.rect(CX-lw/2,lockY-lh/2,lw,lh);
    ctx.fillStyle='rgba(4,0,94,0.95)'; ctx.fill();
    ctx.strokeStyle='#4DE3FF'; ctx.lineWidth=5; ctx.shadowBlur=22; ctx.stroke();
    ctx.strokeStyle='rgba(204,255,255,0.8)'; ctx.lineWidth=2; ctx.shadowBlur=0; ctx.stroke();
    ctx.beginPath(); ctx.arc(CX,lockY-6,10,0,Math.PI*2);
    ctx.moveTo(CX-7,lockY+18); ctx.lineTo(CX+7,lockY+18); ctx.lineTo(CX+4,lockY-2); ctx.lineTo(CX-4,lockY-2);
    ctx.fillStyle='#4DE3FF'; ctx.shadowColor='#4DE3FF'; ctx.shadowBlur=40; ctx.fill();
    ctx.fillStyle='#ffd7f6'; ctx.shadowBlur=10; ctx.fill(); ctx.restore();

    ctx.restore();
  }

  function render(){
    if(!active) return;
    ORBITS.forEach((o,i)=>{ angles[i]+=o.speed*0.016; });
    ctx.clearRect(0,0,W,H);
    stars.forEach(s=>{
      const a=0.08+0.3*Math.abs(Math.sin(s.phase+frame*0.007));
      ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(200,225,255,${a})`; ctx.fill();
    });
    ORBITS.forEach((o,idx)=>{
      const {rx,ry,tilt,color}=o, offset=angles[idx];
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(CX,CY,rx,ry,tilt,0,Math.PI*2);
      ctx.strokeStyle=`${color}33`; ctx.lineWidth=1; ctx.stroke();
      const pt=getPoint(rx,ry,tilt,offset);
      ctx.beginPath(); ctx.arc(pt.x,pt.y,6,0,Math.PI*2);
      ctx.fillStyle=color; ctx.shadowColor=color; ctx.shadowBlur=18; ctx.fill();
      ctx.restore();
    });
    drawShield();
    frame++;
    raf=requestAnimationFrame(render);
  }

  function isOnLock(cx,cy){
    const rect=canvas.getBoundingClientRect();
    const scale=W/rect.width;
    const mx=(cx-rect.left)*scale, my=(cy-rect.top)*scale;
    const lockCX=CX, lockCY=(CY+50)+35, lw=90, lh=68;
    const hitPad = window.innerWidth <= 700 ? 26 : 0;
    return (
      mx > lockCX - lw / 2 - hitPad &&
      mx < lockCX + lw / 2 + hitPad &&
      my > lockCY - lh / 2 - hitPad &&
      my < lockCY + lh / 2 + hitPad
    );
  }

  function activate(){
    active=true;
    document.getElementById('shield-phase').classList.add('active');
    render();
    const hint=document.getElementById('click-hint');
    setTimeout(()=>hint.classList.add('show'),600);
  }

  function stop(){ active=false; cancelAnimationFrame(raf); }

  canvas.addEventListener('mousemove',e=>{
    canvas.style.cursor=isOnLock(e.clientX,e.clientY)?'pointer':'crosshair';
  });

  window.ShieldModule={ activate, stop, isOnLock };
}());

/* ───────────────────────────────────────────────────────────────────────
   CRACK ANIMATION
─────────────────────────────────────────────────────────────────────── */
(function CrackModule(){
  const canvas=document.getElementById('crackCanvas');
  const ctx=canvas.getContext('2d');
  const W=canvas.width, H=canvas.height;
  let raf=null, started=false;

  function buildCracks(ox,oy){
    return Array.from({length:16},()=>{
      const angle=(Math.random()*Math.PI*2), len=90+Math.random()*220;
      let cx=ox, cy=oy, a=angle;
      const segs=[];
      for(let s=0;s<6;s++){
        a+=(Math.random()-0.5)*0.7;
        const nx=cx+Math.cos(a)*len/6, ny=cy+Math.sin(a)*len/6;
        segs.push({x1:cx,y1:cy,x2:nx,y2:ny}); cx=nx; cy=ny;
      }
      return {segs,progress:0,speed:0.06+Math.random()*0.06};
    });
  }

  let cracks=[];

  function drawCracks(){
    ctx.clearRect(0,0,W,H);
    let allDone=true;
    cracks.forEach(cr=>{
      cr.progress=Math.min(1,cr.progress+cr.speed);
      if(cr.progress<1) allDone=false;
      cr.segs.forEach((seg,i)=>{
        const segProg=Math.max(0,Math.min(1,cr.progress*cr.segs.length-i));
        if(segProg<=0) return;
        const ex=seg.x1+(seg.x2-seg.x1)*segProg, ey=seg.y1+(seg.y2-seg.y1)*segProg;
        ctx.beginPath(); ctx.moveTo(seg.x1,seg.y1); ctx.lineTo(ex,ey);
        ctx.strokeStyle='#4DE3FF'; ctx.lineWidth=Math.max(0.5,1.8-i*0.22);
        ctx.shadowColor='#4DE3FF'; ctx.shadowBlur=10-i; ctx.globalAlpha=0.9-i*0.1; ctx.stroke();
      });
      ctx.globalAlpha=1;
    });
    raf=requestAnimationFrame(drawCracks);
    if(allDone){ cancelAnimationFrame(raf); setTimeout(()=>{ if(window.CrackModule.onDone) window.CrackModule.onDone(); },220); }
  }

  function start(ox,oy){
    if(started) return; started=true;
    cracks=buildCracks(ox,oy);
    canvas.style.opacity='1';
    drawCracks();
  }
  function stop(){
    cancelAnimationFrame(raf);
    canvas.style.transition='opacity 0.5s'; canvas.style.opacity='0';
  }

  window.CrackModule={ start, stop, onDone:null };
}());

/* ───────────────────────────────────────────────────────────────────────
   BRAIN/ORBIT ANIMATION (replaces atom)
─────────────────────────────────────────────────────────────────────── */
(function AtomModule(){
  const canvas=document.getElementById('atomCanvas');
  const ctx=canvas.getContext('2d');
  const W=canvas.width, H=canvas.height;
  const CX=W/2, CY=H/2;
  const ORBIT_R=260; // reduced orbit radius

  const ORBITS=[
    {rx:170,ry:60,tilt:0,           color:'#4DE3FF',speed: 0.038},
    {rx:170,ry:60,tilt:Math.PI/3,  color:'#5BFFB0',speed:-0.030},
    {rx:170,ry:60,tilt:-Math.PI/3, color:'#C7FF63',speed: 0.024},
  ];
  const angles=[0,0,0];
  let frame=0, active=false;

  const stars=Array.from({length:80},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.3,phase:Math.random()*Math.PI*2}));

  function getPoint(rx,ry,tilt,theta){
    const x=rx*Math.cos(theta),y=ry*Math.sin(theta),c=Math.cos(tilt),s=Math.sin(tilt);
    return {x:CX+x*c-y*s, y:CY+x*s+y*c};
  }

  function drawAtomNucleus(){
    const pulse = 1 + 0.06 * Math.sin(frame * 0.06);
    const nr = 28 * pulse;

    // Outer glow halos
    [90, 68, 50].forEach((hr, i) => {
      ctx.beginPath(); ctx.arc(CX, CY, hr * pulse, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(160,106,139,${0.016 + i * 0.009})`; ctx.fill();
    });

    // Nucleus gradient fill
    const ng = ctx.createRadialGradient(CX - nr*0.3, CY - nr*0.3, 1, CX, CY, nr);
    ng.addColorStop(0, '#F2F2F2');
    ng.addColorStop(0.3, '#4DE3FF');
    ng.addColorStop(0.7, '#C7FF63');
    ng.addColorStop(1, '#E6C7D8');
    ctx.beginPath(); ctx.arc(CX, CY, nr, 0, Math.PI * 2);
    ctx.fillStyle = ng;
    ctx.shadowColor = '#4DE3FF'; ctx.shadowBlur = 40; ctx.fill(); ctx.shadowBlur = 0;

    // Nucleus rim
    ctx.beginPath(); ctx.arc(CX, CY, nr, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(160,106,139,0.8)'; ctx.lineWidth = 2;
    ctx.shadowColor = '#4DE3FF'; ctx.shadowBlur = 20; ctx.stroke(); ctx.shadowBlur = 0;

    // Small proton/neutron circles inside nucleus
    const numParticles = 6;
    for (let p = 0; p < numParticles; p++) {
      const pa = (p / numParticles) * Math.PI * 2 + frame * 0.02 * (p % 2 === 0 ? 1 : -1);
      const pr = nr * 0.42;
      const px = CX + Math.cos(pa) * pr * (0.7 + 0.3 * Math.sin(frame * 0.05 + p));
      const py = CY + Math.sin(pa) * pr * (0.7 + 0.3 * Math.cos(frame * 0.05 + p));
      const pcol = p % 2 === 0 ? '#4DE3FF' : '#5BFFB0';
      ctx.beginPath(); ctx.arc(px, py, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = pcol; ctx.shadowColor = pcol; ctx.shadowBlur = 12; ctx.fill();
    }
    ctx.shadowBlur = 0;
  }

  function drawOuterRing(){
    const pulse=1+0.015*Math.sin(frame*0.025);
    ctx.save();
    ctx.beginPath(); ctx.arc(CX,CY,ORBIT_R*pulse,0,Math.PI*2);
    ctx.strokeStyle='rgba(77,227,255,0.12)'; ctx.lineWidth=1.5; ctx.setLineDash([6,10]); ctx.stroke(); ctx.setLineDash([]);
    ctx.restore();
  }

  function atomRender(){
    if(!active) return;
    ORBITS.forEach((o,i)=>{ angles[i]+=o.speed*0.016; });
    // Keep canvas transparent so page background shows through (no dark square under orbit).
    ctx.clearRect(0,0,W,H);
    const rg=ctx.createRadialGradient(CX,CY,0,CX,CY,300);
    rg.addColorStop(0,'rgba(14,42,62,0.26)'); rg.addColorStop(1,'rgba(14,42,62,0)');
    ctx.fillStyle=rg; ctx.fillRect(0,0,W,H);
    stars.forEach(s=>{
      const a=0.08+0.4*Math.abs(Math.sin(s.phase+frame*0.007));
      ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(160,106,139,${a * 0.6})`; ctx.fill();
    });
    drawOuterRing();
    ORBITS.forEach((o,idx)=>{
      const {rx,ry,tilt,color}=o, offset=angles[idx];
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(CX,CY,rx,ry,tilt,0,Math.PI*2);
      ctx.strokeStyle=color+'22'; ctx.lineWidth=1.2; ctx.stroke();
      const pt=getPoint(rx,ry,tilt,offset);
      const g=ctx.createRadialGradient(pt.x,pt.y,0,pt.x,pt.y,8);
      g.addColorStop(0,'#F2F2F2'); g.addColorStop(0.4,color); g.addColorStop(1,'transparent');
      ctx.beginPath(); ctx.arc(pt.x,pt.y,6,0,Math.PI*2);
      ctx.fillStyle=g; ctx.shadowColor=color; ctx.shadowBlur=20; ctx.fill();
      ctx.restore();
    });
    drawAtomNucleus();
    frame++;
    requestAnimationFrame(atomRender);
  }

  function startAtom(){ active=true; atomRender(); }

  window.AtomModule={ startAtom, ORBIT_R, CX, CY };
}());

/* ───────────────────────────────────────────────────────────────────────
   EVENT NODES
─────────────────────────────────────────────────────────────────────── */
(function EventNodes(){
  const container = document.getElementById('event-nodes-container');
  const hoverCard = document.getElementById('hover-card');
  const hcCategory= document.getElementById('hc-category');
  const hcTitle   = document.getElementById('hc-title');
  const hcDesc    = document.getElementById('hc-desc');
  const hcRegister= document.getElementById('hc-register');
  const { ORBIT_R, CX, CY } = window.AtomModule;
  const N = EVENTS.length;
  let hideTimer = null;
  let usingMobileLayout = false;

  function isMobileLayout() {
    return window.matchMedia('(max-width: 600px)').matches;
  }

  function positionCard(nodeEl, ev){
    const nodeRect = nodeEl.getBoundingClientRect();
    const cardW = 220, cardH = 180;
    const vw = window.innerWidth, vh = window.innerHeight;
    let x = nodeRect.left + nodeRect.width/2 - cardW/2;
    let y = nodeRect.top  - cardH - 12;
    if(y < 10) y = nodeRect.bottom + 12;
    x = Math.max(10, Math.min(x, vw - cardW - 10));
    hoverCard.style.left = x + 'px';
    hoverCard.style.top  = y + 'px';
  }

  function showCard(nodeEl, ev){
    clearTimeout(hideTimer);
    hoverCard.style.setProperty('--hc-color', ev.color);
    hcCategory.textContent = ev.category;
    hcTitle.textContent    = ev.name;
    hcDesc.textContent     = ev.shortDesc;
    hcRegister.href        = ev.registerLink;
    positionCard(nodeEl, ev);
    hoverCard.classList.add('show');
  }
  function hideCard(){
    hideTimer = setTimeout(()=> hoverCard.classList.remove('show'), 180);
  }

  hoverCard.addEventListener('mouseenter',()=> clearTimeout(hideTimer));
  hoverCard.addEventListener('mouseleave',()=> hideCard());

  function buildNodes(){
    container.innerHTML = '';
    usingMobileLayout = isMobileLayout();
    container.classList.toggle('mobile-layout', usingMobileLayout);

    EVENTS.forEach((ev,i)=>{
      const angle = (i/N)*Math.PI*2 - Math.PI/2;
      const nx = CX + ORBIT_R*Math.cos(angle);
      const ny = CY + ORBIT_R*Math.sin(angle);

      const node = document.createElement('div');
      node.className = 'event-node';
      if (!usingMobileLayout) {
        node.style.left = nx + 'px';
        node.style.top  = ny + 'px';
      }
      node.style.setProperty('--node-color', ev.color);
      node.innerHTML = `
        <div class="node-ring"><i class="fas ${ev.icon} node-icon"></i></div>
        <div class="node-label">${ev.name}</div>
      `;

      node.addEventListener('mouseenter', ()=> showCard(node, ev));
      node.addEventListener('mouseleave', ()=> hideCard());
      node.addEventListener('click', ()=> {
        window.open(ev.registerLink, '_blank', 'noopener,noreferrer');
      });

      container.appendChild(node);
      if (usingMobileLayout) {
        node.classList.add('show');
      } else {
        setTimeout(()=> node.classList.add('show'), 800 + i*65);
      }
    });
  }

  window.addEventListener('resize', () => {
    if (!container.children.length) return;
    const nextMobileLayout = isMobileLayout();
    if (nextMobileLayout !== usingMobileLayout) {
      buildNodes();
    }
  });

  window.EventNodes = { buildNodes };
}());

/* ───────────────────────────────────────────────────────────────────────
   EVENTS GRID (below atom section)
─────────────────────────────────────────────────────────────────────── */
function buildEventsGrid() {
  const grid = document.getElementById('events-grid');
  if (!grid) return;
  grid.innerHTML = '';
  EVENTS.forEach(ev => {
    const card = document.createElement('div');
    card.className = 'event-grid-card';
    card.style.setProperty('--eg-color', ev.color);
    card.innerHTML = `
      <div class="egc-top">
        <span class="egc-category">${ev.category}</span>
        <i class="fas ${ev.icon} egc-icon"></i>
      </div>
      <div class="egc-name">${ev.name}</div>
      <div class="egc-desc">${ev.shortDesc}</div>
      <div class="egc-image-wrap">
        <img src="event.jpg" alt="${ev.name} poster" class="egc-image" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
        <div class="egc-image-placeholder" style="display:none"><span>event.jpg</span></div>
      </div>
      <a class="egc-btn" href="${ev.registerLink}" target="_blank" rel="noopener noreferrer">REGISTER NOW</a>
    `;
    grid.appendChild(card);
  });
}

/* ───────────────────────────────────────────────────────────────────────
   EVENT DETAIL PAGE
─────────────────────────────────────────────────────────────────────── */
function openEventPage(ev){
  const page = document.getElementById('event-detail-page');
  page.style.setProperty('--edp-color', ev.color);
  document.getElementById('edp-category').textContent    = ev.category;
  document.getElementById('edp-title').textContent       = ev.name;
  document.getElementById('edp-description').textContent = ev.description;
  document.getElementById('edp-venue').textContent       = ev.venue   || 'TBA';
  document.getElementById('edp-date').textContent        = ev.date    || 'TBA';
  document.getElementById('edp-team').textContent        = ev.team    || 'TBA';
  document.getElementById('edp-prize').textContent       = ev.prize   || 'TBA';
  document.getElementById('edp-register').href           = ev.registerLink;
  document.getElementById('edp-poster-label').textContent= ev.name + ' — POSTER';
  page.classList.add('open');
  page.scrollTop = 0;
  history.pushState({ eventId:ev.id }, '', '#event/' + ev.id);
}

document.getElementById('edp-back').addEventListener('click',()=>{
  document.getElementById('event-detail-page').classList.remove('open');
  history.pushState({}, '', '#');
});

window.addEventListener('popstate', e=>{
  if(!e.state || !e.state.eventId){
    document.getElementById('event-detail-page').classList.remove('open');
  }
});

/* ───────────────────────────────────────────────────────────────────────
   FACULTY DETAIL PAGE
─────────────────────────────────────────────────────────────────────── */
function openFacultyPage(faculty) {
  const page = document.getElementById('faculty-detail-page');
  document.getElementById('fdp-name').textContent = faculty.name;
  document.getElementById('fdp-role').textContent = faculty.role;
  document.getElementById('fdp-photo').src = faculty.photo;
  document.getElementById('fdp-photo').alt = faculty.name;
  document.getElementById('fdp-bio').textContent = faculty.bio;
  document.getElementById('fdp-traits').textContent = faculty.traits;
  page.classList.add('open');
  page.scrollTop = 0;
}

document.getElementById('fdp-back').addEventListener('click', () => {
  document.getElementById('faculty-detail-page').classList.remove('open');
});

/* ───────────────────────────────────────────────────────────────────────
   NAVBAR
─────────────────────────────────────────────────────────────────────── */
(function NavbarModule(){
  const navbar = document.getElementById('navbar');
  navbar.classList.add('visible');
  navbar.querySelectorAll('.nav-link').forEach(link=>{
    link.addEventListener('click', e=>{
      e.preventDefault();
      const href = link.getAttribute('href');
      const target = document.querySelector(href);
      if(target) target.scrollIntoView({behavior:'smooth'});
    });
  });
  window.NavbarModule = {
    show(){ navbar.classList.add('visible'); }
  };
}());

/* ───────────────────────────────────────────────────────────────────────
   BUILD COMMITTEE SECTION
─────────────────────────────────────────────────────────────────────── */
function buildCommittee() {
  // Faculty
  const facultyRow = document.getElementById('faculty-row');
  if (facultyRow) {
    facultyRow.innerHTML = '';
    FACULTY.forEach(f => {
      const card = document.createElement('div');
      card.className = 'committee-card reveal-item faculty-clickable';
      card.innerHTML = `
        <div class="cc-photo-wrap">
          <img src="${f.photo}" alt="${f.name}" class="cc-photo" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
          <div class="cc-photo-placeholder" style="display:none"><span>${f.photo}</span></div>
        </div>
        <div class="cc-name">${f.name}</div>
        <div class="cc-role">${f.role}</div>
        <div class="cc-view-more">VIEW PROFILE <i class="fas fa-arrow-right"></i></div>
      `;
      card.addEventListener('click', () => openFacultyPage(f));
      facultyRow.appendChild(card);
    });
  }

  // Students
  const studentRow = document.getElementById('student-row');
  if (studentRow) {
    studentRow.innerHTML = '';
    STUDENT_LEADS.forEach(s => {
      const card = document.createElement('div');
      card.className = 'committee-card reveal-item';
      card.innerHTML = `
        <div class="cc-photo-wrap">
          <img src="${s.photo}" alt="${s.name}" class="cc-photo" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
          <div class="cc-photo-placeholder" style="display:none"><span>${s.photo}</span></div>
        </div>
        <div class="cc-name">${s.name}</div>
        <div class="cc-role">${s.role}</div>
      `;
      studentRow.appendChild(card);
    });
  }
}

/* ───────────────────────────────────────────────────────────────────────
   SCROLL SECTIONS
─────────────────────────────────────────────────────────────────────── */
(function ScrollSections(){
  document.querySelectorAll('.timeline-item').forEach((el,i)=>{
    el.style.setProperty('--delay', (i*0.12)+'s');
    el.style.transitionDelay = (i*0.12)+'s';
  });

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('revealed');
    });
  }, { threshold:0.1 });

  document.querySelectorAll('.reveal-item').forEach(el=> io.observe(el));
  window.ScrollRevealObserver = io;
}());

/* ───────────────────────────────────────────────────────────────────────
   ORCHESTRATION
─────────────────────────────────────────────────────────────────────── */
(function Orchestrate(){
  const shieldPhase = document.getElementById('shield-phase');
  const atomPhase   = document.getElementById('atom-phase');
  const atomTitle   = document.getElementById('atom-title');
  const scrollCont  = document.getElementById('scroll-container');
  const shieldCanvas= document.getElementById('shieldCanvas');
  let triggered = false;

  function triggerUnlock(clientX, clientY) {
    if (triggered) return;
    if (!window.ShieldModule.isOnLock(clientX, clientY)) return;

    triggered = true;

    shieldPhase.classList.add('cracking');

    setTimeout(()=>{
      window.CrackModule.start(450, 530);
    }, 320);

    window.CrackModule.onDone = ()=>{
      shieldPhase.classList.add('hide');

      window.ShieldModule.stop();

      setTimeout(()=>{
        atomPhase.classList.add('visible');
        window.AtomModule.startAtom();
        window.CrackModule.stop();

        setTimeout(()=>{
          atomTitle.classList.add('show');
          window.EventNodes.buildNodes();
          window.NavbarModule.show();
          scrollCont.classList.add('enabled');
          buildEventsGrid();
          buildCommittee();
          // Re-observe new reveal items
          document.querySelectorAll('.reveal-item').forEach(el => {
            if (window.ScrollRevealObserver) window.ScrollRevealObserver.observe(el);
          });
        }, 900);
      }, 300);
    };
  }

  shieldCanvas.addEventListener('click', e=>{
    triggerUnlock(e.clientX, e.clientY);
  });

  shieldCanvas.addEventListener('touchstart', e => {
    const touch = e.touches && e.touches[0];
    if (!touch) return;
    triggerUnlock(touch.clientX, touch.clientY);
  }, { passive: true });
}());