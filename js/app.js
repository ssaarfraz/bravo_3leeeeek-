const videos = ["bravo", "bravo2", "bravo3"];
document.querySelector(".btn").addEventListener("click", () => {
    if (document.querySelector("input").value == "") {
        document.querySelector(".mylable").classList.remove("hide");
    } else {
        const vidclass = videos[Math.floor(Math.random() * videos.length)];
        const bravo = document.querySelector(`.${vidclass}`);
        document.querySelector(".mylable").classList.add("hide");
        document.querySelector("input").value = "";
        bravo.classList.remove("hide");
        bravo.currentTime = 0;
        bravo.play();
    }
});

videos.forEach((v) => {
    const bravo = document.querySelector(`.${v}`);
    bravo.addEventListener("ended", () => {
        bravo.classList.add("hide");
    });
    bravo.addEventListener("pause", () => {
        bravo.classList.add("hide");
    });
});
