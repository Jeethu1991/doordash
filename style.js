document.addEventListener("DOMContentLoaded",() => {
    const stripscroll = document.getElementById("stripscroll");
    const triggerPoint = 300;

    window.addEventListener("scroll", () =>{
        if(window.scrollY >= triggerPoint){
            stripscroll.classList.add("visible");
        }
        else{
            stripscroll.classList.remove("visible");
        }
        lastscroll = window.scrollY;
    });
});