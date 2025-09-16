import createTask from "../../helpers/createTask.js";

let id = 0;

const lesson4 = {
    title: "Функції",
    order: 4,
    tasks: [
        createTask({
            desc: `Створи функцію, яка буде виводити кількість переданих їй аргументів.`,
            callback: (task) => {
                function getArgs(...args) {
                    return args.length;
                }

                task.output("Дивись в коді: " + getArgs(1, 2, 3, 4, 5, 6, 7, 8));
            }
        }),

        createTask({
            desc: `Напиши функцію, яка приймає 2 числа і повертає : -1, якщо перше число менше, ніж друге; 1 - якщо перше число більше, ніж друге; 0 - якщо числа рівні.`,
            inputs: [{name: "num1", label: "Введіть перше число: ", type: "number"}, {name: "num2", label: "Введіть друге число: ", type: "number"}],
            callback: (task) => {
                const isNum = (num1, num2) => num1 < num2 ? -1 : num1 > num2 ? 1 : 0;

                task.output(isNum(+task.getValue("num1"), +task.getValue("num2")));
            }
        }),

        createTask({
            desc: `Напиши функцію, яка обчислює факторіал переданого їй числа.`,
            inputs: [{name: "num", label: "Введіть число: ", type: "number"}],
            callback: (task) => {
                const factorial = (num) => {
                    let res = 1;

                    for (let i = 1; i <= num; i++) {
                        res *= i;                        
                    }

                    return res;
                };

                task.output(factorial(+task.getValue("num")));
            }
        }),

        createTask({
            desc: `Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.`,
            inputs: [{name: "num1", label: "Введіть число: ", type: "number"}, {name: "num2", label: "Введіть число: ", type: "number"}, {name: "num3", label: "Введіть число: ", type: "number"}],
            callback: (task) => {
                const join = (...numbers) => numbers.join("");

                task.output(join(+task.getValue("num1"), +task.getValue("num2"), +task.getValue("num3")));
            }
        }),

        createTask({
            desc: `Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.`,
            inputs: [{name: "length", label: "Довжина: ", type: "number"}, {name: "width", label: "Ширина: ", type: "number"}],
            callback: (task) => {
                const s = (length, width) => width <= 0 ? length**2 : length * width;
                
                task.output("S = " + s(+task.getValue("length"), +task.getValue("width")));
            }
        }),

        createTask({
            desc: `Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.`,
            inputs: [{name: "num", label: "Введіть число: ", type: "number"}],
            callback: (task) => {
                const isPerfect = (num) => {
                    let sum = 0;

                    for (let i = 0; i < num; i++) {
                        if (num % i == 0) sum += i;
                    }
                    return sum == num;
                }   

                task.output(isPerfect(+task.getValue("num")));
            }
        }),

        createTask({
            desc: `Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.`,
            inputs: [{name: "min", label: "Початок: ", type: "number"}, {name: "max", label: "Кінець: ", type: "number"}],
            callback: (task) => {
                const isPerfect = (num) => {
                    let sum = 0;

                    for (let i = 0; i < num; i++) {
                        if (num % i == 0) sum += i;
                    }
                    return sum == num;
                }   

                let res = [];

                for (let i = +task.getValue("min"); i < +task.getValue("max"); i++) {
                    if (isPerfect(i)) res.push(i);
                }

                task.output(res.join(", "));
            }
        })
    ]
};

export default function init() {
    return lesson4;
}