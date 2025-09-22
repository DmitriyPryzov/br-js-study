import Element from "../helpers/element.js";

export default class Task {
    constructor () {
        this._task = {
            description: "Опис задачі",
            nameBtn: "Результат",
            inputs: []
        };
        this._render;
        this._inputsElements = {};
    }

    setDescription(text = "Опис задачі") {
        this._task.description = text;
        return this;
    }

    setNameBtn(name = "Результат") {
        this._task.nameBtn = name;
        return this;
    }

    btnClick(callback) {
        this._task.clickBtn = callback;
    }

    setInput({name, label = "Input:", type = "text"}) {
        this._task.inputs.push({name, label, type});
        return this;
    }
    getInput(name) {
        return this._inputsElements[name];
    }

    getValue(name) {
        return this._inputsElements[name].value;
    }

    output(answer) {

        if (answer instanceof HTMLElement) {
            this._task.output.innerHTML = "output: ";
            this._task.output.append(answer);
        } else {
            this._task.output.textContent = "output: " + answer;
        }

        return this._task.output;
    }

    render() {

        const taskBlock = new Element({tag: "div", classes: "task-block"})
                            .child({tag: "p", classes: "task", text: "Task: " + this._task.description});

        for (let i = 0; i < this._task.inputs.length; i++) {
            const inputData = this._task.inputs[i];

            const inputBlock = new Element({tag: "div", classes: "input-block"})
                            .child({tag: "label", classes: "task", text: inputData.label})
                            .child({name: "input", tag: "input", classes: "task-input", attributes: {"data-id": inputData.name}});


            let input = inputBlock.get("input");

                  this._inputsElements[inputData.name] = input;

                  if (inputData.type == "number") {                    
                    input.addEventListener("input", () => {
                        const regExp = new RegExp("[^0-9 -]", "g");

                        input.value =  input.value.replace(regExp, "");
                    }); 
                  }
            
            taskBlock.get().append(inputBlock.get());
        }

        taskBlock.child({tag: "button", classes: "task-btn", text: this._task.nameBtn, onClick: () => this._task.clickBtn()})
                 .child({name: "output", tag: "div", classes: "task", text: "output: "});

              this._task.output = taskBlock.get("output");

        return taskBlock.get();
    }
}