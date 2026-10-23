/* Utilidades compartidas (se carga antes que el resto) */
(function(){
var $=function(s){return document.querySelector(s)};
window.AMMA={
  $:$,
  cfg:window.AMMA_CONFIG,
  rm:window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  // selector tipo "pastillas": marca el botón activo y avisa con callback
  seg:function(sel,cb){var c=$(sel);c.addEventListener('click',function(e){var bt=e.target.closest('button');if(!bt)return;c.querySelectorAll('button').forEach(function(x){x.classList.remove('on')});bt.classList.add('on');cb(bt)})}
};
})();
