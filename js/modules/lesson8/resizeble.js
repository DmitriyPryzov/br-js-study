import Element from "../../helpers/element.js";

function createBlock() {

    let text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eos a repellendus fugit, sit autem dolorem. Dolores commodi nulla non illum incidunt numquam doloremque asperiores fugit consequuntur. Ab, quam distinctio.
    Tempora fuga a dolores temporibus accusantium odit, iure omnis, quis culpa sapiente porro corporis, ea rerum perferendis repudiandae! Veniam itaque quae autem fugiat est molestias! Rerum id excepturi molestias aliquam.
    Ex, impedit modi! Magni sint repellendus praesentium accusamus nihil deserunt sit omnis consequatur placeat id obcaecati quos magnam sunt dolores molestiae delectus, neque est explicabo consectetur eos. Molestiae, natus nam.`;
    
    return new Element({text, classes: "resize-block"}).child({name: "resizeBtn", classes: "resize-btn"});
}



export default function resizeInit() {
    const element = createBlock();

    const block = element.get();

    const resizeData = {
        widthBlock: 0,
        heightBlock: 0,
        resizeWidth: 0,
        resizeHeight: 0,
        lastMouseX: 0,
        lastMouseY: 0
    };

    let resize = false;

    element.get("resizeBtn").addEventListener("mousedown", (e) => {
        e.preventDefault();
        resizeData.widthBlock = block.offsetWidth;
        resizeData.heightBlock = block.offsetHeight;
        resizeData.lastMouseX = e.pageX;
        resizeData.lastMouseY = e.pageY;

        resize = true;
        
    });
    window.addEventListener("mousemove", (e) => {
        
        if (resize) {
            resizeData.resizeWidth = resizeData.widthBlock + (e.pageX - resizeData.lastMouseX);
            resizeData.resizeHeight = resizeData.heightBlock + (e.pageY - resizeData.lastMouseY);

            
            block.style.width = Math.max(resizeData.resizeWidth, 100) + 'px';
            block.style.height = Math.max(resizeData.resizeHeight, 100) + 'px';
        }

    });

    window.addEventListener("mouseup", (e) => {
        
       resize = false; 
    });


    return block;
}