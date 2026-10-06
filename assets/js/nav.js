(function(){
const nav=document.querySelector('.rail .nav');if(!nav)return;
const links=[...nav.querySelectorAll('a')],active=nav.querySelector('a.active')||links[0];
const g=document.createElement('span');g.className='nav-glide';nav.prepend(g);
function to(a,instant){if(!a)return;if(instant)g.style.transition='none';
g.style.transform='translateY('+a.offsetTop+'px)';g.style.height=a.offsetHeight+'px';g.style.opacity=1;
if(instant){g.offsetHeight;g.style.transition=''}}
function hov(a){nav.classList.add('hovering');links.forEach(l=>l.classList.toggle('hot',l===a));to(a)}
links.forEach(a=>{a.addEventListener('mouseenter',()=>hov(a));a.addEventListener('focus',()=>hov(a))});
nav.addEventListener('mouseleave',()=>{nav.classList.remove('hovering');links.forEach(l=>l.classList.remove('hot'));to(active)});
nav.addEventListener('focusout',()=>{nav.classList.remove('hovering');links.forEach(l=>l.classList.remove('hot'));to(active)});
document.fonts&&document.fonts.ready.then(()=>to(active,true));to(active,true);addEventListener('resize',()=>to(active,true));
const bar=document.createElement('span');bar.className='rail-progress';document.querySelector('.rail').appendChild(bar);
function prog(){const h=document.documentElement.scrollHeight-innerHeight;bar.style.height=(h>0?Math.min(100,scrollY/h*100):0)+'%'}
addEventListener('scroll',prog,{passive:true});prog();
})();
