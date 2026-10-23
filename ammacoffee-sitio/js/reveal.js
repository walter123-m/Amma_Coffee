/* Aparición al hacer scroll + contadores animados */
(function(){
var $=AMMA.$,rm=AMMA.rm,CFG=AMMA.cfg,seg=AMMA.seg;
// reveal + counters
var yrs=new Date().getFullYear()-CFG.since;
function count(el){var n=+(el.dataset.n==='YEARS'?yrs:el.dataset.n),pl=el.dataset.plain,d=1400,st=null;
 function f(ts){st=st||ts;var p=Math.min((ts-st)/d,1),v=Math.round(n*(1-Math.pow(1-p,3)));el.textContent=pl?String(v):v.toLocaleString('es-PE');if(p<1)requestAnimationFrame(f)}
 rm?el.textContent=n:requestAnimationFrame(f)}
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');x.target.querySelectorAll('[data-n]').forEach(count);io.unobserve(x.target)}})},{threshold:.15});
document.querySelectorAll('.rv').forEach(function(el,j){el.style.transitionDelay=(j%3)*90+'ms';io.observe(el)});
})();
