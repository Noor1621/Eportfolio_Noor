(function(){
const cards=[...document.querySelectorAll('.map-card')];if(!cards.length)return;
const D=cards.map(c=>({img:c.querySelector('img').src,alt:c.querySelector('img').alt,t:c.querySelector('h3').textContent,d:c.querySelector('p').textContent,pdf:c.querySelector('a[download]').getAttribute('href')}));
const mv=document.createElement('div');mv.className='mv';mv.innerHTML='<div class="mv-box"><button class="mv-x" aria-label="Close">×</button><div class="mv-frame"><img alt=""></div><div class="mv-info"><div class="kicker"></div><h3></h3><p></p><div class="mv-btns"><a class="button coral" target="_blank" rel="noopener">Open PDF ↗</a><a class="button light" download>Download PDF</a></div><div class="mv-nav"><button class="pv">← Previous</button><button class="nx">Next →</button></div></div></div>';
document.body.appendChild(mv);let c=0;const q=s=>mv.querySelector(s);
function show(i){c=(i+D.length)%D.length;const m=D[c];const im=q('.mv-frame img');im.src=m.img;im.alt=m.alt;q('.kicker').textContent='Map '+String(c+1).padStart(2,'0')+' / '+String(D.length).padStart(2,'0');q('h3').textContent=m.t;q('p').textContent=m.d;q('.mv-btns a:first-child').href=m.pdf;q('.mv-btns a:last-child').href=m.pdf;mv.classList.add('open')}
const close=()=>mv.classList.remove('open');
cards.forEach((card,i)=>{const a=card.querySelector('a[target]');a.addEventListener('click',e=>{e.preventDefault();show(i)})});
q('.mv-x').onclick=close;q('.pv').onclick=()=>show(c-1);q('.nx').onclick=()=>show(c+1);
mv.addEventListener('click',e=>{if(e.target===mv)close()});
document.addEventListener('keydown',e=>{if(!mv.classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowRight')show(c+1);if(e.key==='ArrowLeft')show(c-1)});
})();
