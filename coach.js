// AOS Animation

window.addEventListener("load", () => {
    let preloader = document.querySelector(".js-preloader");
    preloader.classList.add("fade-out");


    setTimeout(() => {
        preloader.style.display = "none";
        AOS.init();
    }, 3000);
});

//Sidebar

function showSidebar(){
    let sidebar = document.querySelector(".sidebar");
    sidebar.style.display ='flex';
}

function hideSidebar(){
    let sidebar = document.querySelector(".sidebar");
    sidebar.style.display ='none';
}



// Example of adding some additional animations (optional)
document.querySelectorAll('.coach-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = "transform 0.3s ease";
        card.style.transform = "scale(1.05)";
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = "scale(1)";
    });
});
