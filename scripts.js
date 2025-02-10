const hoverBlob = document.getElementById('hoverBlob');
const navItems = document.querySelectorAll('.w3-bar-item.w3-button');

navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const itemRect = item.getBoundingClientRect();

        // Calculate the fixed position based on the viewport
        const blobX = itemRect.left + itemRect.width / 2;
        const blobY = itemRect.top + itemRect.height / 2;

        // Debugging: Log the positions to the console
        console.log(`Moving blob to X: ${blobX}, Y: ${blobY}`);

        // Move the blob to the center of the hovered menu item
        hoverBlob.style.left = `${blobX}px`;
        hoverBlob.style.top = `${blobY}px`;
        hoverBlob.style.transform = 'translate(-50%, -50%) scale(1)';

        // Optionally, change the blob's color
        const color = item.getAttribute('data-color');
        hoverBlob.style.backgroundColor = color || 'rgba(255, 99, 71, 0.8)';
    });

    item.addEventListener('mouseleave', () => {
        hoverBlob.style.transform = 'translate(-50%, -50%) scale(0)'; // Hide the blob when not hovering
    });
});


// You can use JavaScript to set the playback rate after the video metadata is loaded.
var video = document.getElementById('myVideo');
video.playbackRate = 0.65; // Slow down the video to 75% of the original speed.




// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function () { myFunction() };
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.classList.contains("w3-show")) {
        x.classList.remove("w3-show");
    } else {
        x.classList.add("w3-show");
    }
}



// DARK MODE TOGGLE with button scale for blob effect
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

const button = document.querySelector('.btnx');

let timeout;

button.addEventListener('mouseover', () => {
    timeout = setTimeout(() => {
        button.style.transform = 'scale(1.8)';
    }, 150); // delay in milliseconds (0.5 seconds)
});

button.addEventListener('mouseout', () => {
    clearTimeout(timeout); // stop the scaling if the user stops hovering
    button.style.transform = 'scale(1)';
});


//// skills
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel-slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const dotsContainer = document.querySelector(".carousel-dots");

    let currentIndex = 0;
    let autoPlayInterval;

    // Create dots dynamically
    slides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function goToSlide(index) {
        slides[currentIndex].classList.remove("active");
        dots[currentIndex].classList.remove("active");

        currentIndex = index;

        slides[currentIndex].classList.add("active");
        dots[currentIndex].classList.add("active");

        document.querySelector(".carousel-container").style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        let newIndex = (currentIndex + 1) % slides.length;
        goToSlide(newIndex);
    }

    function prevSlide() {
        let newIndex = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(newIndex);
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 3000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Event Listeners
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
    
    document.querySelector(".carousel").addEventListener("mouseenter", stopAutoPlay);
    document.querySelector(".carousel").addEventListener("mouseleave", startAutoPlay);

    // Start autoplay
    startAutoPlay();
});

