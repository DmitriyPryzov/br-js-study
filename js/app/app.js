import {parallax} from "./animation.js";
import rain from "./rain.js";

const mainImg = document.querySelector(".main-img");
const imgWrapper = document.querySelector(".img-wrap");
const layers = document.body.querySelectorAll(".layer");
const canvas = document.body.querySelector("#rain");
const modal = document.body.querySelector(".modal");
const modalCloseBtn = document.querySelector(".close-btn");
const lessonList = document.body.querySelector(".hw-list");

rain(canvas);

function appInit() {

    modalCloseBtn.addEventListener("click", closeHomework);


    lessonList.addEventListener("click", async (e) => {
        if (e.target.classList.contains("lesson")) {
            openHomework();
            try {

            const module = await import(`../modules/lesson${e.target.textContent}/index.js`);
            
            const res = await module.default();
            
           const modalTitle = modal.querySelector(".modal-title");
           const modalBody = modal.querySelector(".modal-body");
            
           modalTitle.textContent = res.title;
           modalBody.innerHTML = "";
           modalBody.append(...res.tasks);

            } catch (err) {
                console.error("Помилка: " + err);
            }   
        }
    });

    document.addEventListener("mousemove", (e) => {
        parallax([mainImg, ...layers, canvas, modal], e.pageX, e.pageY);       
    });
}


function openHomework() {
    imgWrapper.classList.remove("show");
    imgWrapper.classList.add("hide");

    setTimeout(() => {
        modal.classList.remove("hide");
        imgWrapper.style.display = "none";
        modal.style.display = "flex";
    }, 240);

    setTimeout(() => {
        modal.classList.add("show");
    }, 200);
}


function closeHomework() {

    modal.classList.remove("show");
    modal.classList.add("hide");

    setTimeout(() => {
        modal.style.display = "none";
        imgWrapper.style.display = "block";
    }, 500);

    setTimeout(() => {
        imgWrapper.classList.remove("hide");
        imgWrapper.classList.add("show");
    }, 300);

    setTimeout(() => mainImg.classList.remove("show"), 800);
}


export default appInit;
