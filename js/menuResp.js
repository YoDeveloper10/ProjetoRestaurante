$(function(){
    $('nav.mobile h2').click (function(){
        var listaMenu = $('nav.mobile ul');
        const icone = document.querySelector('nav.mobile i')
        if (listaMenu.is(':hidden') == true) {
            //fa-solid fa-bars
            //fa-solid fa-xmark
            icone.style.color = "#fd0d03";
            icone.className = "fa-solid fa-xmark";
            listaMenu.slideToggle();
        }else{
            icone.style.color = "white";
            icone.className = "fa-solid fa-bars";
            listaMenu.slideToggle();
        }
        
    })
})



