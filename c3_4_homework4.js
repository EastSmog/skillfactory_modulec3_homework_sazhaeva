// общая функция для электрики
function Electrics(name, power) {
    this.name = name;
    this.power = power;
    this.isWorking = false;
    this.turnOn = false;
    this.turnOff = true;
}

//метод, который позволяет узнать, включен ли сейчас прибор
Electrics.prototype.isTurnOn = function() {
    if (this.isWorking === true) {
        return this.name + " is working now!";
    } else {
        return this.name + " is not working now!";
    }
};

// метод, который включает прибор
Electrics.prototype.electricsOn = function() {
    this.turnOn = true;
    this.isWorking = true;
    this.turnOff = false;
    console.log(this.name + " is turned on successfully");

};

// метод, который выключает прибор
Electrics.prototype.electricsOff = function() {
    this.turnOff = true;
    this.isWorking = false;
    this.turnOn = false;
    console.log(this.name + " is turned off successfully");

};


// Все электрические приборы на работе
function JobElectrics(name, power) {
    this.name = name;
    this.power = power;
}

JobElectrics.prototype = new Electrics();

// метод, который проверяет, включены ли электроприборы на работе, и отключает их, если да
JobElectrics.prototype.goHome = function () {
    if (this.turnOn === true) {
        this.turnOff = true;
        this.turnOn = false;
        this.isWorking = false;

    }
}

// Электроприборы общего рабочего пространства
function WorkspaceElectrics(name, place, power) {
    this.name = name;
    this.place = place;
    this.power = power;
}

const computer1 = new WorkspaceElectrics('chiefsComputer', 'table1', 120);
const computer2 = new WorkspaceElectrics('chiefsLamp', 'table2', 120);

WorkspaceElectrics.prototype = new JobElectrics();

// Электроприборы в кабинете начальника
function ChiefOfficeElectrics(name, power) {
    this.name = name;
    this.power = power;
}

ChiefOfficeElectrics.prototype = new JobElectrics();

const computer = new ChiefOfficeElectrics('chiefsComputer', 120);
const lamp = new ChiefOfficeElectrics('chiefsLamp', 5);

// Электроприборы в комнате отдыха
function RestRoom(name, power) {
    this.name = name;
    this.power = power;
}

RestRoom.prototype = new JobElectrics();

const fridge = new RestRoom('commonFridge', 20);
const teapot = new RestRoom('commonTeapot', 50);

// Все электрические приборы дома
function HomeElectrics(name, power) {
    this.name = name;
    this.power = power;
}

HomeElectrics.prototype = new Electrics();

// метод, который проверяет, включены ли электроприборы на работе, и отключает их, если да
HomeElectrics.prototype.goOut = function () {
    if (this.turnOn === true) {
        this.turnOff = true;
        this.turnOn = false;
        this.isWorking = false;

    }
}

// Электроприборы в кухне
function Kitchen(name, power) {
    this.name = name;
    this.power = power;
}

const homeTeapot = new Kitchen('teapot', 12);
const homeFridge = new Kitchen('fridge', 30);

Kitchen.prototype = new HomeElectrics();

// Электроприборы в спальне
function Bedroom(name, power) {
    this.name = name;
    this.power = power;
}

Bedroom.prototype = new HomeElectrics();

const airCondition = new Bedroom('airCondition', 120);

// Электроприборы в гостиной
function CommonRoom(name, power) {
    this.name = name;
    this.power = power;
}

CommonRoom.prototype = new HomeElectrics();

const tv = new CommonRoom('TV', 20);
const fire = new CommonRoom('fireplace', 50);

computer.electricsOn();
fire.goOut();

// результат
console.log(fire);
console.log(computer.isTurnOn());
