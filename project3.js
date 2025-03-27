const clock=document.getElementById('clock');
// const clock = document.querySelector('#clock');
setInterval(function (){            //time in ms
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000);




