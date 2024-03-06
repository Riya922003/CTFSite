document.addEventListener("DOMContentLoaded", function() {
    const starfield = document.querySelector(".starfield");

    // Function to generate a random number within a range
    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Function to create a star element
    function createStar() {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.left = `${getRandomNumber(0, 100)}vw`;
        star.style.top = `${getRandomNumber(0, 100)}vh`;
        star.style.width = `${getRandomNumber(1, 2)}px`;
        star.style.height = `${getRandomNumber(1, 2)}px`;
        starfield.appendChild(star);
    }

    // Generate many stars
    for (let i = 0; i < 1000; i++) {
        createStar();
    }

    // Function to make stars fade in and out
    function blinkStars() {
        const stars = document.querySelectorAll(".star");
        stars.forEach(star => {
            const duration = getRandomNumber(1, 4); // Randomize duration for each star
            star.style.animation = `blink ${duration}s infinite alternate`;
        });
    }

    // Blink stars
    blinkStars();
});


// JavaScript for the eye movement
document.addEventListener("DOMContentLoaded", function () {
    const eye = document.getElementById("eye");
    const pupil = eye.querySelector(".pupil");

    document.addEventListener("mousemove", function (event) {
        // Get the position of the eye relative to the viewport
        const eyeRect = eye.getBoundingClientRect();

        // Calculate the center of the eye
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        // Calculate the angle between the cursor and the center of the eye
        const angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);

        // Calculate the maximum displacement for the pupil
        const maxDisplacement = Math.min(eyeRect.width, eyeRect.height) * 0.2;

        // Calculate the position of the pupil
        const pupilX = Math.cos(angle) * maxDisplacement;
        const pupilY = Math.sin(angle) * maxDisplacement;

        // Apply the position to the pupil
        pupil.style.transform = `translate(-50%, -50%) translate(${pupilX}px, ${pupilY}px)`;

    });
});



document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.button button');
  
  button.addEventListener('mousedown', function() {
    button.classList.add('pressed');
  });
  
  button.addEventListener('mouseup', function() {
    button.classList.remove('pressed');
  });
});



