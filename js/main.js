/****Main****/
var body = document.querySelector("body");

if(widthPlataforma()>800){
    body.setAttribute("style","margin: auto; width: 80%;");
    
    document.querySelector(".img3-paragrafo").setAttribute("style",String("width: "+img3Width()+"px;"));
    
    document.querySelector(".banner").innerHTML = "<img class='img-responsive' src='img/final.jpg' alt='' style='margin-left:auto;margin-right:auto;'>"
    
    
}else{
     document.querySelector(".banner").innerHTML = "<img class='img-responsive' src='img/coracao.png' alt='' style='margin-left:auto;margin-right:auto; margin-bottom: 100px;'>"
}



/****Functions****/
function widthPlataforma(){
        return Number(body.clientWidth);
}

function img3Width(){
    return document.querySelector(".img3").clientWidth;
}