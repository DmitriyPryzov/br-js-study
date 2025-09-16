import createTask from "../../helpers/createTask.js"; 

const lesson1 = {
    title: "Основи Java Script",
    order: 1,
    tasks: [
        createTask({
            desc: "Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;",
            inputs: [{name: "name", label: "Введіть ім'я: "}],
            callback: (task) => {
                task.output("Привіт, " + task.getValue("name"));
            }
        }),

        createTask({
            desc: "Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;",
            inputs: [{name: "year", label: "Введіть рік народження: "}],
            callback: (task) => {
                task.output((new Date().getFullYear()  - +task.getInput("year").value));
            }
        }),

        createTask({
            desc: "Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата",
            inputs: [{name: "length", label: "Введіть довжину сторони квадрату: "}],
            callback: (task) => {
                task.output(+task.getInput("length").value * 4);
            }
        }),

        createTask({
            desc: "Запитай у користувача радіус кола і виведи площу такої окружності.",
            inputs: [{name: "radius", label: "Введіть радіус кола: "}],
            callback: (task) => {
                task.output((Math.PI * (+task.getInput("radius").value)**2).toFixed(2) + " см2.");
            }
        }),


        createTask({
            desc: "Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.",
            inputs: [{name: "distance", label: "Введіть відстань між містами: "}, {name: "time", label: "Введіть час: "}],
            callback: (task) => {
                const distance = +task.getInput("distance").value;
                const time = +task.getInput("time").value;
                
                task.output(distance / time + " км/год.");
            }
        }),

        createTask({
            desc: "Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.",
            inputs: [{name: "dollars", label: "Введіть суму: "}],
            callback: (task) => {
                task.output(+task.getValue("dollars") * 0.85 + " EUR.");
            }
        }),
    ]
};

export default function init() {
    return lesson1;
}