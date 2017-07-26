/****Main****/

var body = document.querySelector("body");
var controleAudio = document.querySelector(".sourceDom");
var listaMusicas = ["sons/paula_fernandes.mp3","sons/Vanessa%20da%20Mata%20-%20Amado.mp3","sons/Ana Vilela - Trem Bala.mp3","sons/De Janeiro a Janeiro.mp3","sons/Paula Fernandes - Passaro de Fogo.mp3"];
var faixaCont = 1;


/****Desenvolvimento****/

if(objWidth(body)>800){
    //***instancias
    var img3 = document.querySelector(".img3");
    var fotos = document.querySelectorAll(".fotos");
    
    //***aplicações
    
    body.setAttribute("style","margin: auto; width: 80%;");
    
    
    document.querySelector(".img3-paragrafo").setAttribute("style",String("width: "+objWidth(img3)+"px;")); 
    document.querySelector(".banner").innerHTML = "<img class='img-responsive' src='img/final.jpg' alt='' style='margin-left:auto;margin-right:auto;'>"
    fotos.forEach(function(elemento, pos , array){
        elemento.setAttribute("style",String("margin-top: 20%;"));
    });
    
    
}else{
    //***instancias
    var introHead = document.querySelector(".col-lg-12");
    
    
    //***aplicações
    introHead.setAttribute("style","margin-top: 80%;");
    
    document.querySelector(".banner").innerHTML = "<img class='img-responsive' src='img/coracao.png' alt='' style='margin-left:auto;margin-right:auto; margin-bottom: 100px;'>"
}



/****Functions****/

function objWidth(obj){
    return obj.clientWidth;
}


function nextList(){
    addCont();
    
    controleAudio.removeChild(document.querySelector(".audioPlayer"));
    
    controleAudio.innerHTML = 
    `<audio class="audioPlayer" controls autoplay>
        <source src="${listaMusicas[faixaCont-1]}" type="audio/mp3">
        Seu navegador não suporta o elemento áudio.
    </audio>
    <div class="button-next" onclick="nextList()">
            <a class="glyphicon glyphicon-step-forward"></a>
    </div>`;
    
    
    
    //source.setAttribute("src",listaMusicas[faixaCont-1]);
    
   
}


function addCont(){
    
    if(faixaCont != listaMusicas.length){
        faixaCont++;
    }else{
        faixaCont = 1;
    }
    
}


