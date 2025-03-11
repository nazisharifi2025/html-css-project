const html = document.getElementById("html");
const i = document.getElementById("i");
html.addEventListener("click",()=>{
    i.classList.remove("hidden");
});
const css = document.getElementById("css");
css.addEventListener("click",()=>{
    i.classList.add("hidden");
});