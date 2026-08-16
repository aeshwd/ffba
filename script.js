document.addEventListener("DOMContentLoaded", () => {
    
    // 🍔 NAVIGATION MANAGER
    const menuToggle = document.getElementById("menuToggle");
    const mobileDrawer = document.getElementById("mobileDrawer");
    const drawerLinks = document.querySelectorAll(".mobile-nav-link");

    function toggleMenu() {
        menuToggle.classList.toggle("open");
        mobileDrawer.classList.toggle("open");
        document.body.classList.toggle("lock-scroll");
    }

    if (menuToggle) menuToggle.addEventListener("click", toggleMenu);

    drawerLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (mobileDrawer.classList.contains("open")) toggleMenu();
        });
    });

    // 🎬 SLIDER ENGINE
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot-indicator");
    const prevBtn = document.querySelector(".prev-arrow");
    const nextBtn = document.querySelector(".next-arrow");
    let currentSlide = 0;

    function changeSlide(index) {
        if(!slides.length) return;
        slides[currentSlide].classList.remove("active");
        dots[currentSlide].classList.remove("active");
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add("active");
        dots[currentSlide].classList.add("active");
    }

    if(nextBtn && prevBtn) {
        nextBtn.addEventListener("click", () => changeSlide(currentSlide + 1));
        prevBtn.addEventListener("click", () => changeSlide(currentSlide - 1));
    }

    dots.forEach((dot, idx) => {
        dot.addEventListener("click", () => changeSlide(idx));
    });

    setInterval(() => changeSlide(currentSlide + 1), 3000);

    // 📊 METRICS COUNTER ANIMATOR
    const counters = document.querySelectorAll(".stat-number");
    const speed = 60;

    const startCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute("data-target");
                const count = +counter.innerText;
                const inc = Math.ceil(target / speed);

                if (count < target) {
                    counter.innerText = count + inc;
                    setTimeout(updateCount, 25);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };
    setTimeout(startCounters, 400);

    // ⏰ COUNTDOWN TIMER
   const targetDate = new Date("July 23, 2030 00:00:00");

function updateCountdown() {
    const countdownEl = document.getElementById("countdown");
    if (!countdownEl) return;

    const now = new Date().getTime();
    const difference = targetDate - now;

    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = d < 10 ? "0" + d : d;
    document.getElementById("hours").innerText = h < 10 ? "0" + h : h;
    document.getElementById("minutes").innerText = m < 10 ? "0" + m : m;
    document.getElementById("seconds").innerText = s < 10 ? "0" + s : s;

    if (difference < 0) {
        clearInterval(timerInterval);
        countdownEl.innerHTML = "<p>COMPETITION IN PROGRESS</p>";
    }
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();
});



























// 📅 TIMETABLE TAB FILTER ENGINE
const tabButtons = document.querySelectorAll(".matrix-tab-btn");
const tabPanes = document.querySelectorAll(".matrix-pane");

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");

        // Clear baseline activity states
        tabButtons.forEach(b => b.classList.remove("active"));
        tabPanes.forEach(p => p.classList.remove("active"));

        // Activate matching structural tags
        btn.classList.add("active");
        const targetPane = document.getElementById(targetId);
        if (targetPane) targetPane.classList.add("active");
    });
});














// 🖼️ INTERACTIVE GALLERY FILTER SYSTEM
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryCards = document.querySelectorAll(".gallery-card");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const activeFilter = btn.getAttribute("data-filter");

        // Cycle filter button active highlight states
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // Filter cards matching structural category attributes
        galleryCards.forEach(card => {
            const cardCategory = card.getAttribute("data-category");

            if (activeFilter === "all" || cardCategory === activeFilter) {
                card.classList.remove("hidden-card");
            } else {
                card.classList.add("hidden-card");
            }
        });
    });
});










// 📞 FORMSPREE HIGH-PERFORMANCE INTAKE CONTROLLER
const registrationForm = document.getElementById("academy-intake-form");

if (registrationForm) {
    registrationForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const submitButton = registrationForm.querySelector(".btn-submit-terminal");
        const originalButtonText = submitButton.innerHTML;
        
        // Visual feedback to athlete while payload is in flight
        submitButton.disabled = true;
        submitButton.innerHTML = 'TRANSMITTING... <i class="fa-solid fa-circle-notch fa-spin"></i>';

        const formData = new FormData(registrationForm);

        try {
            const response = await fetch(registrationForm.action, {
                method: registrationForm.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert("Application Transmitted Successfully! Our Technical Directors will review your record and email you shortly.");
                registrationForm.reset();
            } else {
                const errorData = await response.json();
                alert(`Transmission failed: ${errorData.errors ? errorData.errors.map(err => err.message).join(', ') : 'Unknown Server Error'}`);
            }
        } catch (error) {
            alert("Network error detected. Please verify your connection or reach out directly via our intake hotlines.");
        } finally {
            // Restore structural state
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
        }
    });
}





















// ⭐ AUTO-SLIDING TESTIMONIAL ENGINE CONTROL
const slides = document.querySelectorAll(".testimonial-slide");
const prevBtn = document.getElementById("prev-slide");
const nextBtn = document.getElementById("next-slide");
let currentSlideIndex = 0;
let slideIntervalTimer;

function updateSlideView(targetIndex) {
    slides.forEach(slide => slide.classList.remove("active"));
    currentSlideIndex = (targetIndex + slides.length) % slides.length;
    slides[currentSlideIndex].classList.add("active");
}

function fireNextSlide() { updateSlideView(currentSlideIndex + 1); }
function initiateSliderTimer() { slideIntervalTimer = setInterval(fireNextSlide, 6000); }

if(slides.length > 0) {
    initiateSliderTimer();
    nextBtn.addEventListener("click", () => {
        clearInterval(slideIntervalTimer);
        fireNextSlide();
        initiateSliderTimer();
    });
    prevBtn.addEventListener("click", () => {
        clearInterval(slideIntervalTimer);
        updateSlideView(currentSlideIndex - 1);
        initiateSliderTimer();
    });
}

// ❓ ACCORDION TOGGLE INTERACTION ENGINE
const faqTriggers = document.querySelectorAll(".faq-trigger");

faqTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
        const targetNode = trigger.parentNode;
        const isOpen = targetNode.classList.contains("active-node");
        
        // Collapse open entries for clean UX layouts
        document.querySelectorAll(".faq-node").forEach(node => node.classList.remove("active-node"));
        
        if (!isOpen) {
            targetNode.classList.add("active-node");
        }
    });
});