function toggleNav(element) {
    const sideNav = document.getElementById("sideNav");
    sideNav.style.width = sideNav.style.width === "170px" ? "0" : "170px";

    // Toggle the open class to animate the hamburger
    element.classList.toggle("open");
}


// Video Carousel
let currentIndex = 0;

function slideRight() {
    const carousel = document.querySelector('.video-carousel');
    const slides = document.querySelectorAll('.video-slide');
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the start
    }
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function slideLeft() {
    const carousel = document.querySelector('.video-carousel');
    const slides = document.querySelectorAll('.video-slide');
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1; // Loop back to the end
    }
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}


