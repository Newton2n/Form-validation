const dark_button =document.querySelector(".dark_button");
const light_button =document.querySelector(".light_button");
dark_button.addEventListener("click",()=>{
 document.body.classList.add("dark");
})
light_button.addEventListener("click",()=>{
 document.body.classList.remove("dark");
})