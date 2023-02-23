(()=>{var n=document.getElementById("cursor-color");document.body.onpointermove=o=>{let{clientX:t,clientY:e}=o;n.animate({left:`${t}px`,top:`${e}px`},{duration:1e3,fill:"forwards"})};})();
