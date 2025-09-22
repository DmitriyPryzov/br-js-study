import Element from "../../helpers/element.js";

export default function editTextInit() {

    const text = JSON.parse(localStorage.getItem("editText")) || `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eos a repellendus fugit, sit autem dolorem. Dolores commodi nulla non illum incidunt numquam doloremque asperiores fugit consequuntur. Ab, quam distinctio.
    Tempora fuga a dolores temporibus accusantium odit, iure omnis, quis culpa sapiente porro corporis, ea rerum perferendis repudiandae! Veniam itaque quae autem fugiat est molestias! Rerum id excepturi molestias aliquam.
    Ex, impedit modi! Magni sint repellendus praesentium accusamus nihil deserunt sit omnis consequatur placeat id obcaecati quos magnam sunt dolores molestiae delectus, neque est explicabo consectetur eos. Molestiae, natus nam.`

    const editText = new Element({tag: "div", classes: "edit-wrap"})
                        .child({name: "editor", tag: "div", classes: "edit-text", text, attributes: {"contenteditable": false}});

    keyPress(editText.get("editor"));

    return editText.get();
}


function keyPress(el) {
    document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key.toLowerCase() === "e") {
            e.preventDefault();
            
            el.setAttribute("contenteditable", "true");
            el.focus();
        }

        if (e.ctrlKey && e.key.toLowerCase() === "s") {
            e.preventDefault();
            
            el.setAttribute("contenteditable", "false");
            localStorage.setItem("editText", JSON.stringify(el.textContent));
        }
    });
}