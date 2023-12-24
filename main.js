let btn = document.querySelector("button")
let img = document.querySelector("img")

btn.addEventListener("click",()  => {
if (btn.innerHTML == "on"){
    img.setAttribute("src", "image/on.jpg" )
    btn.innerHTML = "off";
}else{
    img.setAttribute("src", "image/off.jpg" )
    btn.innerHTML = "on";
}
});