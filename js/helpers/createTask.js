import Task from "../components/Task.js";

export default function createTask({desc = "Description", inputs = [], nameBtn = "Результат", callback}) {

    const task = new Task();

    task.setDescription(desc);
    task.setNameBtn(nameBtn);

    if (inputs) {
        if (Array.isArray(inputs)) {
            inputs.forEach(i => task.setInput(i));
        } else {
            task.setInput(inputs);
        }
    }

    if (typeof callback === "function") {
        task.btnClick(() => callback(task));
    }

    return task.render();
}