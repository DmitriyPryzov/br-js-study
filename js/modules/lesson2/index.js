import createTask from "../../helpers/createTask.js";

const lesson2 = {
    title: "Типи даних та оператори",
    order: 2,
    tasks: [
        createTask({
            desc: "Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.",
            callback: (task) => {
                task.output('Можна використати Math.round(0.1 + 0.2) = 0.3');
            }
        }),

        createTask({
            desc: `Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.`,
            callback: (task) => {
                task.output(`Можна використати res = +"1" + 2. Так само в змінних.`);
            }
        }),

        createTask({
            desc: `Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку`,
            inputs: [{name: "size", label: "Введіть обсяг флешки (гб): "}],
            callback: (task) => {
                task.output(`Ви можете записати: ${Math.floor(+task.getValue("size") / 0.82)}. При цьому залишиться: ${(+task.getValue("size") % 0.82).toFixed(2)} гб. вільного місця`);
            }
        }),

        createTask({
            desc: `Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.`,
            inputs: [{name: "countMoney", label: "Введіть кількість грошей: "}, {name: "countChoc", label: "Введіть ціну шоколадки: "}],
            callback: (task) => {
                const countMoney = +task.getValue("countMoney");
                const countChocolate = +task.getValue("countChoc");

                task.output(`Ви можете купити ${Math.floor(countMoney / countChocolate)} шоколадок. При цьому залишиться ${(countMoney % countChocolate).toFixed(2)} грн. решти.`);
            }
        }),

        createTask({
            desc: `Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).`,
            inputs: [{name: "number", label: "Введіть тризначне число: "}],
            callback: (task) => {
                const number = +task.getValue("number");

                task.output(`${number % 10}${Math.floor(number / 10) % 10}${Math.floor(number / 100) % 10}`);
            }
        }),

        createTask({
            desc: `Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.`,
            inputs: [{name: "sum", label: "Введіть суму депозиту: "}],
            callback: (task) => {
                const sum = +task.getValue("sum");
                task.output(`Ви отримаєте: ${Math.round((sum * (1 + (5 * 2 / 12 / 100))) - sum)} грн.`);
            }
        }),
    ]
};

export default function init() {
    return lesson2;
}