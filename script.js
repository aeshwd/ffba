//Sidebar

function showSidebar(){
    let sidebar = document.querySelector(".sidebar");
    sidebar.style.display ='flex';
}

function hideSidebar(){
    let sidebar = document.querySelector(".sidebar");
    sidebar.style.display ='none';
}

// AOS Animation

window.addEventListener("load", () => {
    let preloader = document.querySelector(".js-preloader");
    preloader.classList.add("fade-out");


    setTimeout(() => {
        preloader.style.display = "none";
        AOS.init();
    }, 3000);
});