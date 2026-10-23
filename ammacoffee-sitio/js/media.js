/* Lightbox de fotos y video del tostado */
(function(){
var $=AMMA.$,rm=AMMA.rm,CFG=AMMA.cfg,seg=AMMA.seg;
// lightbox
var lb=$('#lb');document.addEventListener('click',function(e){var im=e.target.closest('.ph img');if(im){lb.querySelector('img').src=im.src;lb.classList.add('on')}else if(lb.classList.contains('on'))lb.classList.remove('on')});
addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('on')});
// video
var v=$('#rv'),pp=$('#pp');
if(v){var vo=new IntersectionObserver(function(es){es.forEach(function(x){if(rm)return;if(x.isIntersecting){var pr=v.play();if(pr&&pr.catch)pr.catch(function(){})}else v.pause()})},{threshold:.5});vo.observe(v);
v.addEventListener('play',function(){pp.textContent='❚❚'});v.addEventListener('pause',function(){pp.textContent='▶'});
pp.onclick=function(){v.paused?v.play():v.pause()};if(rm)pp.textContent='▶'}
})();
