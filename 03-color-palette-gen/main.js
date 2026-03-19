const formatselect =document.getElementById("format");
const toneselect =document.getElementById("tone");
const button =document.getElementById("generateBtn");
const palette= document.getElementById("palette");

function randomRGB(tone){
    let min = 0;
    let max = 255;
    if(tone === "light"){
        let min=150;
        let max=255;
    }
    if(tone === "dark"){
        let min=0;
        let max=125;
    }
    const r= Math.floor(Math.random()*(max-min) + min);
    const g= Math.floor(Math.random()*(max-min) + min);
    const b= Math.floor(Math.random()*(max-min) + min);
    return {r, g, b};
}
function rgbTohex(r, g, b){
    return (
         "#" + [r,g,b].map( function (x) {
        return x.toString(16).padStart( 2, "0");
     }).join("")

    );
}
function generatepalette(){
    palette.innerHTML="";
    for(let i =0; i<5; i++){
        const{r,g,b} = randomRGB(toneselect.value);
        let  color;

        if(formatselect.value === 'hex'){
            color= rgbTohex(r,g,b);
        }else{
            color = `rgb(${r},${g},${b})`
        }

        const div = document.createElement("div");
        div.classList.add("color");

        div.style.background=`rgb(${r}, ${g}, ${b})`;
        div.textContent= color;
        palette.appendChild(div)
    }

}
button.addEventListener("click", generatepalette);
generatepalette();