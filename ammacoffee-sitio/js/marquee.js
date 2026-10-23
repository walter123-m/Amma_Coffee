/* Cinta en movimiento */
(function(){
var $=AMMA.$,rm=AMMA.rm,CFG=AMMA.cfg,seg=AMMA.seg;
// marquee
var w=CFG.marquee.join(' · ')+' · ',mq='';for(i=0;i<8;i++)mq+=w;$('#mq').textContent=mq;
})();
