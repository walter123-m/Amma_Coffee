/* Bolsa 3D y selector Molido/Grano */
(function(){
var $=AMMA.$,rm=AMMA.rm,CFG=AMMA.cfg,seg=AMMA.seg;
// bag tilt + toggle
var bag=$('#bag');
bag.parentNode.addEventListener('mousemove',function(e){if(rm)return;var r=bag.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;bag.style.transform='perspective(700px) rotateY('+x*18+'deg) rotateX('+(-y*18)+'deg)'});
bag.parentNode.addEventListener('mouseleave',function(){bag.style.transform=''});
seg('#pres',function(bt){$('#bagt').textContent=bt.dataset.v});
})();
