// Flag to track whether the blob is on/off
let blobEnabled = false;

const hoverBlob = document.getElementById('hoverBlob');
const toggleBlobBtn = document.getElementById("toggleBlobBtn");

// Query your nav items, excluding toggleBtn
let navItems = document.querySelectorAll(
    '.w3-bar-item.w3-button, #playBtn, #pauseBtn, #muteBtn, #playBtn_2, #pauseBtn_2, #muteBtn_2, button'
);


// Hover logic
navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // If the blob is disabled, do nothing
        if (!blobEnabled) return;

        const itemRect = item.getBoundingClientRect();
        const blobX = itemRect.left + itemRect.width / 2;
        const blobY = itemRect.top + itemRect.height / 2;

        hoverBlob.style.left = `${blobX}px`;
        hoverBlob.style.top = `${blobY}px`;
        hoverBlob.style.transform = 'translate(-50%, -50%) scale(1)';
        hoverBlob.style.backgroundColor =
            item.getAttribute('data-color') || 'rgba(255, 99, 71, 0.8)';
    });

    item.addEventListener('mouseleave', () => {
        if (!blobEnabled) return;
        hoverBlob.style.transform = 'translate(-50%, -50%) scale(0)';
    });
});

// The toggle button
toggleBlobBtn.addEventListener("click", () => {
    blobEnabled = !blobEnabled;

    if (!blobEnabled) {
        // Immediately move it off screen (or scale down)
        hoverBlob.style.left = '-9999px';
        hoverBlob.style.top = '-9999px';
        hoverBlob.style.transform = 'translate(-50%, -50%) scale(0)';
        toggleBlobBtn.innerHTML = '<i class="fa fa-smile-o"></i>';
    } else {
        toggleBlobBtn.innerHTML = '<i class="fa fa-frown-o"></i>';
    }
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
function onYouTubeIframeAPIReady() {

    console.log("Global onYouTubeIframeAPIReady called.");
    // Player 1
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'nIBym2TN-qQ',
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
        videoId: 'l80Ff_JG37k',
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