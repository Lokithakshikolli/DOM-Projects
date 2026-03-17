const btn=document.getElementById("togglButton");
btn.addEventListener("click" ,()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        btn.textContent="Toggle to Dark mode"
    }else{
         btn.textContent="Toggle to Light mode"
    }
})
