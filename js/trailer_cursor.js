(()=>{3>window.location.pathname.split("/").length?document.body.style.overflow="clip":document.body.style.overflowX="hidden";var l=document.getElementById("trailer"),i=(e,t)=>{let{clientX:a,clientY:o}=e,s=a-l.offsetWidth/2,n=o-l.offsetHeight/2,c={transform:`translate(${s}px, ${n}px) scale(${t?2.5:.75})`,opacity:`${t?.5:1}`};l.animate(c,{duration:350,fill:"forwards"})},r=e=>{switch(e){case"video":return"fa fa-play";case"title":return"fa fa-file-text-o";default:return"fa fa-location-arrow"}};window.onmousemove=e=>{let t=e.target.closest("a"),a=t!==null,o=document.getElementById("trailer-icon");i(e,a),l.className=a?t.className:"",a?o.className=r(t.className):o.className=""};})();