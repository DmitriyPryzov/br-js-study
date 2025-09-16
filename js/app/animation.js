function parallax(arrElem, mouseX, mouseY) {

    for (let i = 0; i  < arrElem.length; i++) {

        const x = (window.innerWidth / 2 - mouseX) / 80;
        const y = (window.innerHeight / 2 - mouseY) / 80;

        const speed = +arrElem[i].dataset.speed;
        
        arrElem[i].style.transform = `translate(calc(${x * speed}px), calc(${y * speed}px))`;
    }
}
export {parallax};