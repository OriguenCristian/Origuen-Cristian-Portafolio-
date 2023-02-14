window.addEventListener("scroll",ScrollMenu);



function id(str){
    return document.getElementById(str);    
}
 
function ScrollMenu(){ 
    if( window.scrollY>1){
       document.getElementById("headerLogo").style.display = "none"
    } else{
        document.getElementById("headerLogo").style.display = "block"
    }
}


let prueba = document.querySelector("trabajo-container")

 prueba.addEventListener("mouseover" ,function(){
    console.log("aqui se hixo hover")
 })