import createTask from "../../helpers/createTask.js";

let id = 0;

const lesson3 = {
    title: "Цикли й умови",
    order: 3,
    tasks: [
        createTask({
            desc: "Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.",
            inputs: [{name: "age", label: "Введіть вік: ", type: "number"}],
            callback: (task) => {

                const age = +task.getValue("age");

                if (age >= 0 && age <=11) task.output('Ви дитина 👶');
                if (age >= 12 && age <= 17) task.output('Ви підліток 🤡');
                if (age > 18 && age <= 59) task.output('Ви дорослий 💀');
                if (age >= 60 ) task.output('Ви старий 💀');
            }
        }),

        createTask({
            desc: "Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).",
            inputs: [{name: "number", label: "Введіть цифру: ", type: "number"}],
            callback: (task) => {
                const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
                
                const number = +task.getValue("number");

                task.output(symbols[number-1]);
            }
        }),
         
        createTask({
            desc: "Підрахуй суму всіх чисел в заданому користувачем діапазоні",
            inputs: [{name: "start", label: "Введіть початок: ", type: "number"}, {name: "end", label: "Введіть кінець: ", type: "number"}],
            callback: (task) => {                
                const start = +task.getValue("start");
                const end = +task.getValue("end");
                let res = "";

                for (let i = start; i <= end; i++) {
                    res += i !== end ? `${i}, ` : `${i}`;
                }

                task.output(res);
            }
        }),

        createTask({
            desc: "Запитай у користувача 2 числа і знайди найбільший спільний дільник.",
            inputs: [{name: "num1", label: "Введіть число: ", type: "number"}, {name: "num2", label: "Введіть число: ", type: "number"}],
            callback: (task) => {                
                let start = +task.getValue("num1");
                let end = +task.getValue("num2");

                while (end !== 0) {
                    let temp = end;
                    end = start % end;
                    start = temp;
                }

                task.output(start);
            }
        }),

        createTask({
            desc: "Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.",
            inputs: [{name: "num", label: "Введіть число: ", type: "number"}],
            callback: (task) => {                
                let num = task.getValue("num");

                if (num.length > 5 || num.length < 5) {
                    task.output("Написано ж п’ятирозрядне число...");
                } else {
                    task.output(num.split("").reverse().join("") == num);
                }
            }
        }),

        createTask({
            desc: "Запитай у користувача суму покупки і виведи суму до оплати зі знижкою: від 200 до 300 - знижка буде 3%; від 300 до 500 - 5%; від 500 і вище - 7%",
            inputs: [{name: "sum", label: "Введіть суму покупки: ", type: "number"}],
            callback: (task) => {                
                let sum = +task.getValue("sum");
                let res = 0;

                if (sum >= 200 && sum < 300) {
                    res = (sum * 3) / 100;
                } else if (sum >= 300 && sum < 500) {
                    res = (sum * 5) / 100;
                } else if (sum >= 500) {
                    res = (sum * 7) / 100;
                } else {
                    res = sum;
                }

                task.output(sum - res);
            }
        }),

        createTask({
            desc: "Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.",
            inputs: [{name: "numbers", label: "Введіть числа через пробіл: ", type: "number"}],
            callback: (task) => {                
                let numbers = task.getValue("numbers").split(" ");
                const stat = {
                    positive: 0,
                    negative: 0,
                    even: 0,
                    odd: 0,
                };

                numbers.forEach(item => {
                        if (item >= 0) {
                            stat.positive++;
                        } else {
                            stat.negative++;
                        }

                        if (item % 2 == 0) {
                            stat.even++;
                        } else {
                            stat.odd++;
                        }
                });

                task.output(`Додатніх: ${stat.positive}
                    Від'ємних: ${stat.negative}
                    Парних: ${stat.even}
                    Не парних: ${stat.odd}`);
            }
        }),

        createTask({
            desc: "Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.",
            nameBtn: "ОК",
            callback: (task) => {                
                const day = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];

                task.output(day[id]);
                id = id == day.length-1 ? 0 : id+1;
            }
        }),
    ]
};

export default function init() {
    return lesson3;
}