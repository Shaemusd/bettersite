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
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
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