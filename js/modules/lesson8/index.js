import editTextInit from "./textEdit.js";
import getPageTable from "./sortTable.js";
import resizeInit from "./resizeble.js";
import createTask from "../../helpers/createTask.js";

const lesson8 = {
    title: "Події",
    order: 8,
    tasks: [createTask({
            desc: "Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.",
            callback: (task) => {
                task.output(editTextInit());
            }
        }),
    
        createTask({
            desc: "Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.",
            callback: async (task) => {
                task.output(await getPageTable());
            }
        }),

        createTask({
            desc: "Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.",
            callback: async (task) => {
                task.output(resizeInit());
            }
        }),
    ]
};



export default async function init() {        
    return lesson8;
}