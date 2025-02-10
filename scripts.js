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
        // slides[currentIndex].classList.remove("active");
        dots[currentIndex].classList.remove("active");

        currentIndex = index;

        // slides[currentIndex].classList.add("active");
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
        autoPlayInterval = setInterval(nextSlide, 300000);
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






// We'll load the YT API with a timestamp to avoid caching
const script = document.createElement('script');
script.src = 'https://www.youtube.com/iframe_api?ts=' + new Date().getTime();
document.head.appendChild(script);


let player, player_2; // two YT Player variables

// Called by the YT IFrame API
function onYouTubeIframeAPIReady () {

    console.log("Global onYouTubeIframeAPIReady called.");
    // Player 1
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'nkjFc-PiWdM',
        playerVars: {
            autoplay: 0,
            controls: 0,
            modestbranding: 1
        },
        events: {
            onReady: onPlayerReady
        }
    });

    // Player 2
    player_2 = new YT.Player('player_2', {
        height: '360',
        width: '640',
        videoId: 'nkjFc-PiWdM',
        playerVars: {
            autoplay: 0,
            controls: 0,
            modestbranding: 1
        },
        events: {
            onReady: onPlayer2Ready
        }
    });
}

// Player 1 ready → set up controls
function onPlayerReady(event) {
    setupCustomControls();
}

// Player 2 ready → set up controls
function onPlayer2Ready(event) {
    setupCustomControls2();
}

// Custom controls for Player 1
function setupCustomControls() {
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const muteBtn = document.getElementById('muteBtn');
    const volumeSlider = document.getElementById('volumeSlider');

    playBtn.addEventListener('click', () => player.playVideo());
    pauseBtn.addEventListener('click', () => player.pauseVideo());
    muteBtn.addEventListener('click', () => {
        if (player.isMuted()) {
            player.unMute();
            muteBtn.textContent = 'Mute';
        } else {
            player.mute();
            muteBtn.textContent = 'Unmute';
        }
    });
    volumeSlider.addEventListener('input', () => {
        player.setVolume(volumeSlider.value);
    });
}

// Custom controls for Player 2
function setupCustomControls2() {
    const playBtn2 = document.getElementById('playBtn_2');
    const pauseBtn2 = document.getElementById('pauseBtn_2');
    const muteBtn2 = document.getElementById('muteBtn_2');
    const volumeSlider2 = document.getElementById('volumeSlider_2');

    playBtn2.addEventListener('click', () => player_2.playVideo());
    pauseBtn2.addEventListener('click', () => player_2.pauseVideo());
    muteBtn2.addEventListener('click', () => {
        if (player_2.isMuted()) {
            player_2.unMute();
            muteBtn2.textContent = 'Mute';
        } else {
            player_2.mute();
            muteBtn2.textContent = 'Unmute';
        }
    });
    volumeSlider2.addEventListener('input', () => {
        player_2.setVolume(volumeSlider2.value);
    });
}

// Optional helpers to pause one player while playing the other
function playFirstPlayer() {
    player.playVideo();
    player_2.pauseVideo();
}
function playSecondPlayer() {
    player_2.playVideo();
    player.pauseVideo();
}


function onPlayerReady(event) {
    console.log("Player 1 ready.");
    setupCustomControls();
}

function onPlayer2Ready(event) {
    console.log("Player 2 ready.");
    setupCustomControls2();
}


playBtn2.addEventListener('click', () => {
    console.log("Play button 2 clicked.");
    player_2.playVideo();
});