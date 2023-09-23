const panels = document.querySelectorAll(".yemekler");



panels.forEach(yemekler => {
    yemekler.addEventListener("click", () => {

        removeActive();
        yemekler.classList.add("active");
    });
})
function removeActive(){
    panels.forEach(yemekler => {
        yemekler.classList.remove("active");
    })
}