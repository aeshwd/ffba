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



/* Gallery */

const galleryItems = document.querySelectorAll('.gallery-item');

const options = {
  root: null,
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, options);

galleryItems.forEach(item => {
  observer.observe(item);
});


/* Popup */

document.addEventListener("DOMContentLoaded", function () {
    // Show the modal after 3 seconds
    setTimeout(function () {
      document.getElementById('popupModal').classList.add('show');
    }, 3000);
  
    // Close modal when clicking the cross button
    document.getElementById('closeBtn').addEventListener('click', function () {
      document.getElementById('popupModal').classList.remove('show');
    });
  
    // Optional: Close modal when clicking outside the content
    window.addEventListener('click', function (e) {
      if (e.target == document.getElementById('popupModal')) {
        document.getElementById('popupModal').classList.remove('show');
      }
    });
  });
  


  













