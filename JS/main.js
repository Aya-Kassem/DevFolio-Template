let backToTop = document.getElementById("back-to-top");
let navbar = document.getElementById('navbar');
// FIXED NAVBAR ON SCROLL .......
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add("navBg");
            backToTop.style.display = 'block';
        }
        else {
            navbar.classList.remove("navBg");
            backToTop.style.display = 'none';
        }
    });
});

// HANDLING NAVBAR LINKS ON SCROLL .....
window.addEventListener("scroll", function(){
    let allSections = document.querySelectorAll("section");
    let windowScroll = window.scrollY;
    let allLinks = Array.from(document.querySelectorAll(".navbar .nav-item .nav-link"));

    let currentSection;
    allSections.forEach((section) => {
        let sectionLocation = section.offsetTop;

        if(windowScroll >= sectionLocation - 60){
            currentSection = section.getAttribute("id");
        }
    });

    allLinks.forEach((link) => {
        link.classList.remove("active");
        if(link.getAttribute("href").includes(currentSection)){
            link.classList.add("active");
        }
    })
})

// TYPING.JS LIBRARY .........
new Typed('.typed', {
strings: ["Designer", "Developer", "Freelancer", "Photographer"],
    loop: true,
    typeSpeed: 60,
    backSpeed: 50,
    backDelay: 2000
});

// BACK TO TOP BUTTON ...
$('#back-to-top').on('click', () => {
    $('html, body').animate({scrollTop: 0}, '300')
})


