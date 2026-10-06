(function(){
const head=document.querySelector('.page-head');if(!head)return;
head.style.position='relative';head.style.overflow='hidden';
const cv=document.createElement('canvas');cv.style.cssText='position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:2';head.appendChild(cv);
const ctx=cv.getContext('2d');let W,H,dpr,t=0;
function size(){dpr=Math.min(devicePixelRatio||1,2);const r=head.getBoundingClientRect();W=r.width;H=r.height;cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0)}
function bez(u){const a=[-30,.75*H],b=[.3*W,-.1*H],c=[.65*W,1.05*H],d=[W+30,.15*H],v=1-u;
return[v*v*v*a[0]+3*v*v*u*b[0]+3*v*u*u*c[0]+u*u*u*d[0],v*v*v*a[1]+3*v*v*u*b[1]+3*v*u*u*c[1]+u*u*u*d[1]]}
function plane(x,y,a){ctx.save();ctx.translate(x,y);ctx.rotate(a);ctx.fillStyle='#a321e6';ctx.beginPath();
ctx.moveTo(14,0);ctx.lineTo(-2,-3);ctx.lineTo(-8,-12);ctx.lineTo(-10,-12);ctx.lineTo(-7,-2.5);ctx.lineTo(-13,-2);ctx.lineTo(-15,-5);ctx.lineTo(-16,-5);ctx.lineTo(-15,0);
ctx.lineTo(-16,5);ctx.lineTo(-15,5);ctx.lineTo(-13,2);ctx.lineTo(-7,2.5);ctx.lineTo(-10,12);ctx.lineTo(-8,12);ctx.lineTo(-2,3);ctx.closePath();ctx.fill();ctx.restore()}
function draw(){t+=.016;ctx.clearRect(0,0,W,H);const u=(t*.05)%1.25;if(u<=1){const p=bez(u),q=bez(Math.min(u+.004,1));plane(p[0],p[1],Math.atan2(q[1]-p[1],q[0]-p[0]))}requestAnimationFrame(draw)}
addEventListener('resize',size);size();draw();
})();
