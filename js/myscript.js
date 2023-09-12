let nav = document.querySelector(".navbar")


window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){

        nav.classList.add("nav-body")
      

    }

    else{
        nav.classList.remove("nav-body");
    }
}