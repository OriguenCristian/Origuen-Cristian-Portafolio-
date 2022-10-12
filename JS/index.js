window.addEventListener("scroll",ScrollMenu);
const btnMenu = id("btnMenu")
const label= id("btnMenuLabel");
const img = id("imgLogo");
const container = id("headerContainer");
const contenedorBtn = document.querySelector(".contenedorBotones");

btnMenu.addEventListener('change', function() {
    
    if(window.scrollY>100){

        contenedorBtn.style.display = this.checked ? "flex" : "";
    }
   
  });

function id(str){
    return document.getElementById(str);    
}
 
function ScrollMenu(){ 
    contenedorBtn.classList.toggle("ScrollContenedorBtn",window.scrollY>100)
    container.classList.toggle("scrollMenuContainer", window.scrollY>100);
    label.classList.toggle("scrollIconLabel", window.scrollY>100)
    if( window.scrollY>100){
        img.style.cssText ="display:none"
        
    } else{
        img.style.cssText ="display:"
    }
}
