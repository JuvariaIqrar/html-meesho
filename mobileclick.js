let menu= document.querySelectorAll(".menu")[0];
let menubar= document.querySelectorAll(".mobnav")[0];
let categorie =document.querySelectorAll(".bx-category")[1];
menu.addEventListener("click",sidemenu);
categorie.addEventListener("click",sidemenu);



// menubar.style.display=="none"
function sidemenu(){
    if(menubar.style.display=="none"){
        menubar.style.display="flex"
        menubar.style.width="100%"
        menu.innerHTML="<i class='bx bx-x'></i>"
        
        menubar.style.zIndex="1"
        menubar.style.position="sticky"
        menubar.style.bottom="0px"
    }
    else{
        menubar.style.display="none";
        menu.innerHTML="<i class='bx bx-menu'></i>"
        
    }
}