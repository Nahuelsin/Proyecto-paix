const btnLeft = document.querySelector(".btnizq"),
    btnDer = document.querySelector(".btnder"),
    slider = document.querySelector("#slider"),
    sliderSect = document.querySelectorAll(".slider_section");




    /*    Funciones para mover a derecha e izq  */

btnLeft.addEventListener("click",  e => moveToLeft())
btnDer.addEventListener("click",  e => moveToRight())

let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSect.length;

function moveToRight(){
    if (counter >= sliderSect.length-1){
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`
    }else{
        counter++;
        operacion = operacion + widthImg;
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "all ease-in-out .6s"
    }
    
}

function moveToLeft (){
    counter--;
    if (counter < 0){
        counter = sliderSect.length-1;
        operacion = widthImg * (sliderSect.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
    }else{
        operacion = operacion - widthImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s"
    }
}