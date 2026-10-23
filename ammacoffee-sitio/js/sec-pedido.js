/* Pedido por WhatsApp */
(function(){
var $=AMMA.$,rm=AMMA.rm,CFG=AMMA.cfg,seg=AMMA.seg;
// order
var pr='molido',q=1;
function wa(){$('#qn').textContent=q;$('#wa').href='https://wa.me/'+CFG.whatsapp+'?text='+encodeURIComponent('Hola, quiero pedir '+q+(q>1?' bolsas':' bolsa')+' de AMMACOFFEE de 250 g ('+pr+').')}
seg('#op',function(bt){pr=bt.dataset.v;wa()});
$('#pl').onclick=function(){q=Math.min(q+1,CFG.maxBags);wa()};$('#mn').onclick=function(){q=Math.max(q-1,1);wa()};wa();
})();
