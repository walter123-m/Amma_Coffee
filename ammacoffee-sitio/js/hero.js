/* Portada: granos flotantes, texto que se escribe y parallax de montañas */
(function(){
var $=AMMA.$,rm=AMMA.rm,CFG=AMMA.cfg,seg=AMMA.seg;
var m1=$('#m1');
// beans
var b=$('#beans'),i;
if(!rm){for(i=0;i<16;i++){var e=document.createElementNS('http://www.w3.org/2000/svg','svg');e.setAttribute('viewBox','0 0 20 28');e.setAttribute('class','bean');var s=10+Math.random()*16;e.style.cssText='width:'+s+'px;left:'+(Math.random()*100)+'%;animation-duration:'+(14+Math.random()*18)+'s;animation-delay:-'+(Math.random()*30)+'s';e.innerHTML='<ellipse cx="10" cy="14" rx="8" ry="12" fill="#c08444"/><path d="M10 3 q-5 11 0 22" stroke="#6a3f1c" stroke-width="1.6" fill="none"/>';b.appendChild(e)}}
// typing
var txt=CFG.heroText,t=$('#type'),k=0;
function ty(){t.textContent=txt.slice(0,++k);if(k<txt.length)setTimeout(ty,rm?0:32)}
rm?t.textContent=txt:ty();
// parallax mountains
if(!rm)addEventListener('scroll',function(){m1.setAttribute('transform','translate(0 '+Math.min(scrollY*.08,30)+')')},{passive:true});
})();
