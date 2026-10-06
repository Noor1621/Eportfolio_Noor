(function(){
const sets=[...document.querySelectorAll('[data-gallery]')];if(!sets.length)return;
const ov=document.createElement('div');ov.className='gv';
ov.innerHTML='<button class="gv-x" aria-label="Close">×</button><button class="gv-n gv-p" aria-label="Previous">‹</button><figure><img alt=""><figcaption><span class="gv-c"></span><span class="gv-k"></span></figcaption></figure><button class="gv-n gv-nx" aria-label="Next">›</button>';
document.body.appendChild(ov);
const img=ov.querySelector('img'),cap=ov.querySelector('.gv-c'),cnt=ov.querySelector('.gv-k');let list=[],i=0;
function show(n){i=(n+list.length)%list.length;const a=list[i];img.src=a.href;img.alt=a.querySelector('img').alt;cap.textContent=a.dataset.caption||'';cnt.textContent=(i+1)+' / '+list.length;ov.classList.add('open')}
const close=()=>ov.classList.remove('open');
sets.forEach(g=>{const as=[...g.querySelectorAll('a')];as.forEach((a,k)=>a.addEventListener('click',e=>{e.preventDefault();list=as;show(k)}))});
ov.querySelector('.gv-x').onclick=close;ov.querySelector('.gv-p').onclick=()=>show(i-1);ov.querySelector('.gv-nx').onclick=()=>show(i+1);
ov.addEventListener('click',e=>{if(e.target===ov)close()});
document.addEventListener('keydown',e=>{if(!ov.classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowRight')show(i+1);if(e.key==='ArrowLeft')show(i-1)});
})();
