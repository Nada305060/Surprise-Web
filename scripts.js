document.addEventListener("DOMContentLoaded", function () {

    const openButton = document.getElementById("openButton");

    const welcomeScreen =
        document.getElementById("welcomeScreen");

    const surpriseScreen =
        document.getElementById("surpriseScreen");

    const song =
        document.getElementById("song");

    const heartsContainer =
        document.getElementById("hearts-container");

    const sparklesContainer =
        document.getElementById("sparkles-container");

    // Open Surprise
    openButton.addEventListener("click", function () {

        welcomeScreen.style.display = "none";
        surpriseScreen.style.display = "flex";

        // Start Music
        song.play().catch(function (error) {
            console.log("Audio error:", error);
        });

        // Start Hearts
        startHearts();

        // Create Sparkles
        createSparkles();
    });


    // Floating Hearts
    function createHeart() {

        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "❤️";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.animationDuration =
            (5 + Math.random() * 6) + "s";

        heartsContainer.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 12000);

    }

    function startHearts() {

        createHeart();
        setInterval(function () {
            createHeart();

        }, 500);
    }

    // Sparkles
    function createSparkles() {

        for (let i = 0; i < 35; i++) {

            setTimeout(function () {

                const sparkle =
                    document.createElement("div");

                sparkle.classList.add("sparkle");

                sparkle.style.left =
                    Math.random() * 100 + "%";

                sparkle.style.top =
                    Math.random() * 100 + "%";

                sparklesContainer.appendChild(sparkle);

                setTimeout(function () {
                    sparkle.remove();
                }, 2000);

            }, i * 100);

        }

    }

});