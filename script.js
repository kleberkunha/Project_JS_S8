
/*FIRST EXO*/
/* document.getElementsByTagName("footer")[0].addEventListener("click", function(){
    console.log('clique');
}); */
/*FIRST EXO*/


/*Second EXO*/
/*var counter = 1;

document.getElementsByTagName("footer")[0].addEventListener("click", function(){
    console.log(`cliques ${counter}`);
    counter++;
});*/
/*Second EXO*/

function remove(){
    if (document.getElementById('navbarHeader').classList.contains('collapse')){
        document.getElementById('navbarHeader').classList.remove('collapse');
    }
    else if (document.getElementById('navbarHeader').classList.contains("bg-dark")){
        document.getElementById('navbarHeader').classList.add('collapse');
    }
}


function edit(){
    var cartao = document.getElementById('text-1');
    cartao.style.color = "red";
}




var secCard = document.getElementsByClassName("card-body")[1];
secCard.getElementsByTagName("button")[1].addEventListener("click", function(){
    secCard.getElementsByTagName("p")[0].classList.toggle("text-success");
})


document.getElementsByClassName("navbar")[0].addEventListener("click", function(){
    if (document.getElementsByTagName("link")[0].rel == "stylesheet"){
         document.getElementsByTagName("link")[0].rel = "styleDisable";
    }
    else{
        document.getElementsByTagName("link")[0].rel = "stylesheet";
    }
});



let botao = document.getElementsByClassName("btn btn-sm btn-success");
for (let i = 0; i < botao.length; i++){
    botao[i].addEventListener("mouseover" , function(){
    document.getElementsByClassName("card-text")[i].classList.toggle("d-none");
    document.getElementsByClassName("card-img-top")[i].classList.toggle("w-25");
  });
}
/*
var principal = document.getElementsByClassName("col-md-4")[0];
var lista = document.getElementsByTagName("main");
document.getElementsByClassName("btn btn-secondary my-2")[0].addEventListener("click", function(){
    document.getElementsByClassName("col-md-4")[0].style.left = "760px";
    document.getElementsByClassName("col-md-4")[0].style.top = "185px";
    document.getElementsByClassName("col-md-4")[5].style.right = "760px";
    document.getElementsByClassName("col-md-4")[5].style.bottom = "185px";
});
*/

document.getElementsByClassName("jumbotron")[0].getElementsByTagName('a')[1].addEventListener("click", function(){
    document.getElementsByClassName("row")[1].prepend( document.getElementsByClassName("col-md-4")[5] );
    let botao = document.getElementsByClassName("btn btn-sm btn-success");
    for (let i = 0; i < botao.length; i++){
        botao[i].addEventListener("mouseover" , function(){
        document.getElementsByClassName("card-text")[i].classList.toggle("d-none");
        document.getElementsByClassName("card-img-top")[i].classList.toggle("w-25");
      });
    }
});

