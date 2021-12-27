let lights = document.getElementsByClassName('light');
 
    lights[0].addEventListener('click',()=> {foo('red');},false);
    lights[1].addEventListener('click',()=> {foo('yellow');},false);
    lights[2].addEventListener('click',()=> {foo('green');},false);
 
    function foo(color){
        for(i=0; i<lights.length; i++){ lights[i].style.background = '#000000'; }
        color == 'red' ? lights[0].style.background = 'red' : '';
        color == 'yellow' ? lights[1].style.background = 'yellow' : '';
        color == 'green' ? lights[2].style.background = 'green' : '';
    }