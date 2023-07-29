

// const addEventOnElements=(elements,eventType,callBack)=>{
//     for(let i=0; i<elements.length;i++){
//         elements[i].addEventListener(eventType,callBack);
//     }
// }


const navbar=document.querySelector("[data-navbar]");
const navToggler=document.querySelectorAll("[data-nav-toggler]");

// const toggleNav=()=>{
//     navbar.classList.toggle("active");
// }
// addEventOnElements(navToggler,"click",toggleNav)


// Second Way

for (let i=0; i<navToggler.length ; i++){
    navToggler[i].addEventListener("click",()=>{
        navbar.classList.toggle("active");
    })
}