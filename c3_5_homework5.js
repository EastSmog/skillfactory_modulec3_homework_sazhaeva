class Electrics {
    constructor(name, power){
        this.name = name;
        this.power = power;
        this.isWorking = false;
        this.turnOn = false;
        this.turnOff = true;
    }
    //метод, который позволяет узнать, включен ли сейчас прибор
    isTurnOn() {
        if (this.isWorking === true) {
            return this.name + " is working now!";
        } else {
            return this.name + " is not working now!";
        }
    };

    // метод, который включает прибор
    electricsOn() {
        this.turnOn = true;
        this.isWorking = true;
        this.turnOff = false;
        console.log(this.name + " is turned on successfully");
    };

    // метод, который выключает прибор
    electricsOff() {
        this.turnOff = true;
        this.isWorking = false;
        this.turnOn = false;
        console.log(this.name + " is turned off successfully");
    };
}

class JobElectrics extends Electrics{
    constructor(name, power) {
        super(name, power);
    }

    // метод, который проверяет, включены ли электроприборы на работе, и отключает их, если да
    goHome() {
        if (this.turnOn === true) {
            this.turnOff = true;
            this.turnOn = false;
            this.isWorking = false;
        }
    }
}

// Электроприборы общего рабочего пространства
class WorkspaceElectrics extends JobElectrics {
    constructor(name, place, power) {
        super(name, power);
        this.place = place;
    }
}

const computer1 = new WorkspaceElectrics('chiefsComputer', 'table1', 120);

const computer2 = new WorkspaceElectrics('chiefsLamp', 'table2', 120);

// Электроприборы в кабинете начальника
class ChiefOfficeElectrics extends JobElectrics{
    constructor (name, power) {
        super(name, power);
    }
}

const computer = new ChiefOfficeElectrics('chiefsComputer', 120);

const lamp = new ChiefOfficeElectrics('chiefsLamp', 5);

// Электроприборы в комнате отдыха
class RestRoom extends JobElectrics{
    constructor (name, power) {
        super(name, power);
    }
}

const fridge = new RestRoom('commonFridge', 20);

const teapot = new RestRoom('commonTeapot', 50);

// Все электрические приборы дома
class HomeElectrics extends Electrics{
    constructor(name, power) {
        super(name, power);
    }

    // метод, который проверяет, включены ли электроприборы на работе, и отключает их, если да
    goOut() {
        if (this.turnOn === true) {
            this.turnOff = true;
            this.turnOn = false;
            this.isWorking = false;
        }
    }
}

// Электроприборы в кухне
class Kitchen extends HomeElectrics{
    constructor(name, power) {
        super(name, power);
    }
}

const homeTeapot = new Kitchen('teapot', 12);

const homeFridge = new Kitchen('fridge', 30);

// Электроприборы в спальне
class Bedroom extends HomeElectrics{
    constructor(name, power) {
        super(name, power);
    }
}

const airCondition = new Bedroom('airCondition', 120);

// Электроприборы в гостиной
class CommonRoom extends HomeElectrics{
    constructor(name, power) {
        super(name, power);
    }
}

const tv = new CommonRoom('TV', 20);

const fire = new CommonRoom('fireplace', 50);

computer.electricsOn();
fire.goOut();

// результат
console.log(fire);
console.log(computer.isTurnOn());
console.log(computer);
