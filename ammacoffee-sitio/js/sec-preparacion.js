/* Calculadora de preparación y pestañas de método */
(function(){
var $=AMMA.$,rm=AMMA.rm,CFG=AMMA.cfg,seg=AMMA.seg;
// calculator
var cu=$('#cups');function calc(){var n=+cu.value;$('#cn').textContent=n;$('#g').textContent=n*CFG.gramsPerCup+' g';$('#ml').textContent=n*CFG.mlPerCup+' ml'}
cu.addEventListener('input',calc);calc();
var tabs={'Filtro':'Ideal para una taza limpia y aromática.','Cafetera italiana':'Una taza intensa y de gran cuerpo.','Gota a gota':'Extracción lenta que resalta las notas del origen.'};
seg('#tabs',function(bt){$('#tabtxt').textContent='Método sugerido: '+bt.dataset.t+'. '+tabs[bt.dataset.t]+' Almacena el café en un lugar fresco y seco.'});
})();
