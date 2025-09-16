import createTask from "../../helpers/createTask.js";

const Car = {
    brand: "Honda",
    model: "Civic",
    release: 1993,
    speed: 110,
    maxFuel: 45,
    consumption: 7.1,
    drivers: [],

    getData() {
        return `${this.brand} ${this.model} ${this.release}р. Середня швидкість: ${this.speed} км/год. Середній розхід: ${this.consumption}`;
    },

    addDriver(name) {
        this.drivers.push(name);

        return this.drivers;
    },

    isDriver(name) {
        return this.drivers.includes(name);
    },

    getTravelData(distance) {
        let time = +(distance / this.speed).toFixed(2);
        let fullTime = time >= 4 ? time + Math.floor(time / 4) : time;
    
        const hours = Math.floor(fullTime);
        const minutes = Math.floor((fullTime - Math.floor(fullTime)) * 60);
        const fuel = (this.consumption * distance / 100).toFixed(2);
        
        return {hours, minutes, fuel};
    }
};


const Time = {
    hours: 0,
    minutes: 0,
    seconds: 0,

    addHours(count) {
        this.hours += count;
    },

    addMinutes(count) {
        this.minutes += count;
    },

    addSeconds(count) {
        this.seconds += count;
    },

    getTime() {
        if (this.seconds < 0 || this.minutes < 0 || this.hours < 0) return {sec: 0, min: 0, h: 0};
        return {sec: this.seconds % 60,  
                min: (this.minutes + Math.floor(this.seconds / 60)) % 60, 
                h: this.hours + Math.floor((this.minutes + Math.floor(this.seconds / 60)) / 60)};
    }
};

const lesson4 = {
    title: "Об'єкти",
    order: 5,
    tasks: [
        createTask({
            desc: `Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:`,
            callback: (task) => {
                const {brand, model, release, speed, consumption} = Car;

                task.output(`Object car: ${brand} ${model} ${release}р. Середня швидкість: ${speed} км/год. Середній розхід: ${consumption}`);
            }
        }),

        createTask({
            desc: `Створи mетод, який виводить на екран інформацію про автомобіль.`,
            callback: (task) => {
                task.output(Car.getData());
            }
        }),

        createTask({
            desc: `Створи mетод, який додає ім’я водія у список`,
            inputs: [{name: "driver", label: "Введіть ім'я водія: "}],
            callback: (task) => {
                task.output(Car.addDriver(task.getValue("driver")));
            }
        }),

        createTask({
            desc: `Створи mетод, який перевіряє водія на наявність його ім’я у списку`,
            inputs: [{name: "driver", label: "Введіть ім'я водія для перевірки: "}],
            callback: (task) => {

                task.output(Car.isDriver(task.getValue("driver")));
            }
        }),

        createTask({
            desc: `Створи mетод, який перевіряє водія на наявність його ім’я у списку`,
            inputs: [{name: "driver", label: "Введіть ім'я водія для перевірки: "}],
            callback: (task) => {
                Car.addDriver("Dima");
                Car.addDriver("Ivan");
                
                task.output(Car.isDriver(task.getValue("driver")));
            }
        }),

        createTask({
            desc: `Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. `,
            inputs: [{name: "distance", label: "Введіть відстань: ", type: "number"}],
            callback: (task) => {
                const data = Car.getTravelData(task.getValue("distance"));                
                task.output(`Для подолання ${task.getValue("distance")}км. Потрібно ${data.hours}год. ${data.minutes}хв. та ${data.fuel}л. палива.`);
            }
        }),

        createTask({
            desc: `Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом: Для виведення часу на екран. Зміни часу на передану кількість секунд/хвилин та годин.`,
            inputs: [{name: "hours", label: "Додати годин: ", type: "number"}, {name: "minutes", label: "Додати хвилин: ", type: "number"}, {name: "seconds", label: "Додати секунд: ", type: "number"}],
            callback: (task) => {
                const editTime = (time) => {
                    return time < 10 ? `0${time}` : time;
                }


                Time.addHours(+task.getValue("hours"));
                Time.addMinutes(+task.getValue("minutes"));
                Time.addSeconds(+task.getValue("seconds"));

                const fullTime = Time.getTime();

                task.output(`Загальний час: ${editTime(fullTime.h)}:${editTime(fullTime.min)}:${editTime(fullTime.sec)} год.`);
                
                task.getInput("hours").value = "";
                task.getInput("minutes").value = "";
                task.getInput("seconds").value = "";
                
            }
        })
    ]
};

export default function init() {
    return lesson4;
}