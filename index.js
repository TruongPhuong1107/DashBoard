function toggle(){
    let togg= document.querySelector(".toggle");
    let main =document.querySelector(".main");
    let nav =document.querySelector(".nav");
    togg.classList.toggle("active");
    main.classList.toggle("active");
    nav.classList.toggle("active");
}