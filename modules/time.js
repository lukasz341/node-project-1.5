function timeOS(t) {
    var t;
     var sekunda= (t%60).toFixed(0);
    var minuta= Math.floor(t/60);
   
    var godzina= Math.floor(minuta/60);
   
    if (t<=3600){
    //console.log('Uptime:', minuta, ' min', sekunda, ' s');
    return minuta+' m '+sekunda+' s ';
  
    } else  {
    
  //uptime gdy więcje niż godzina
   // console.log ('Uptime: ', godzina, 'godz', minuta-60*godzina,  'min', sekunda, ' s');
   return godzina+' h '+(minuta-60*godzina)+' m '+sekunda+' s ';
    }
}


exports.print = timeOS;