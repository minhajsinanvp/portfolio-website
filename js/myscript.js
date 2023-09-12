
// navbar scroll

let nav = document.querySelector(".navbar")
let home = document.querySelector(".home-class")
window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){

        nav.classList.add("nav-body")
        // home.classList.remove("home-class")
        // home.classList.add("home-class-small")
      

    }

    else{
        nav.classList.remove("nav-body");
        // home.classList.remove("home-class-small")
    }
}



// nav hide


document.addEventListener('click', function (event) {
    clsBtn = document.querySelector('.btn-close')
    // Check if the clicked element has a data-bs-dismiss attribute with the value "offcanvas"
    if (event.target.classList[0] === "nav-link") {
        // Find the Offcanvas element by its ID and close it
        clsBtn.click()
        
    }    
});