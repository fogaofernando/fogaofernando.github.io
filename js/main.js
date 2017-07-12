/****Main****/
var body = document.querySelector("body");
var img3 = document.querySelector(".img3");
var fotos = document.querySelectorAll(".fotos");


if(objWidth(body)>800){
    body.setAttribute("style","margin: auto; width: 80%;");
    
    document.querySelector(".img3-paragrafo").setAttribute("style",String("width: "+objWidth(img3)+"px;"));
    
    document.querySelector(".banner").innerHTML = "<img class='img-responsive' src='img/final.jpg' alt='' style='margin-left:auto;margin-right:auto;'>"
    
    fotos.forEach(function(elemento, pos , array){
        elemento.setAttribute("style",String("margin-top: 20%;"));
    });
    
    
}else{
     document.querySelector(".banner").innerHTML = "<img class='img-responsive' src='img/coracao.png' alt='' style='margin-left:auto;margin-right:auto; margin-bottom: 100px;'>"
}



/****Functions****/
function objWidth(obj){
    return obj.clientWidth;
}