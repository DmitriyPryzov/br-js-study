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

    output(text) {
        this._task.output.textContent = "output: " + text;

        return this._task.output;
    }

    render() {

        const taskBlock = document.createElement("div");
              taskBlock.classList.add("task-block");

        const desc = document.createElement("p");
              desc.classList.add("task");
              desc.textContent = "Task: " + this._task.description;

        taskBlock.append(desc);

        for (let i = 0; i < this._task.inputs.length; i++) {
            const inputData = this._task.inputs[i];

            const inputBlock = document.createElement("div");
                  inputBlock.classList.add("input-block");

            const label = document.createElement("label");
                  label.classList.add("task");
                  label.textContent = inputData.label;

            const input = document.createElement("input");
                  input.classList.add("task-input");
                  input.dataset.id = inputData.name;

                  this._inputsElements[inputData.name] = input;

                  if (inputData.type == "number") {                    
                    input.addEventListener("input", () => {
                        const regExp = new RegExp("[^0-9 -]", "g");

                        input.value =  input.value.replace(regExp, "");
                    }); 
                  }
            
            inputBlock.append(label, input);
            taskBlock.append(inputBlock);
        }

        const btn = document.createElement("button");
              btn.classList.add("task-btn");
              btn.textContent = this._task.nameBtn;

              btn.addEventListener("click", () => this._task.clickBtn());

        const output = document.createElement("p");
              output.classList.add("task");
              output.textContent = "output: ";
              this._task.output = output;

        taskBlock.append(btn, output);

        return taskBlock;
    }
}