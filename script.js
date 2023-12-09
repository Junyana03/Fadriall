const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const iyaBtn = document.querySelector(".iya-btn");
const gakBtn = document.querySelector(".ga-btn");

iyaBtn.addEventListener("click", () => {
    question.innerHTML = "AAAAAAAA AKU JUGA SAYANG KAMU";
    gif.src =
    "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

gakBtn.addEventListener("mouseover", () => {
    const gakBtnRect = gakBtn.getBoundingClientRect();
    const maxX = window.innerWidth - gakBtnRect.width;
    const maxY = window.innerHeight - gakBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    gakBtn.style.left = randomX + "px";
    gakBtn.style.top = randomY + "px";
});