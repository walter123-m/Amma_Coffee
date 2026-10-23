/* Barra superior: se oscurece al hacer scroll */
(function(){
var $=AMMA.$,rm=AMMA.rm,CFG=AMMA.cfg,seg=AMMA.seg;
var nav=$('#nav');
addEventListener('scroll',function(){nav.classList.toggle('s',scrollY>40)},{passive:true});
nav.classList.toggle('s',scrollY>40);
})();
