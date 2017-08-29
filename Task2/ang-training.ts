
console.log('********************* STARTS 25th September');

class building {

    address: string;
    units: number;

    constructor(address: string, units: number) {
        this.address = address;
        this.units = units;

    }

    display(): void {
        console.log('Address :' + this.address);
        console.log('Units :' + this.units);
    }
}

var bld1 = new building("1 main street", 4);
var bld2 = new building("13 park ave", 5);

bld1.display();
bld2.display();

var properties: building[] = [bld1, bld2];

console.log('--------------------------------');

interface ITrips {

    destination: string;
    days: number;
    display(): void;

}
class BizTrip implements ITrips {

    constructor(public destination: string, public days: number) {

    };

    display() {
        console.log(this.destination + "," + this.days);
    }

}

var trip: ITrips = new BizTrip("new york", 3);
trip.display();

console.log('--------------------------------');

//Parameter and Return value types

function getString(): string {

    var str: string = "My String";
    return str;
}

function logMessage(message: string) {

    console.log(message);

}

logMessage(getString());

console.log('--- let, var and const - let and const in ES6.');

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log('--- Arrow functions - shorthand way top define functions');


var addr1 = function (a, b) { return a + b; }
var addr2 = (a, b) => a + b;
console.log(addr1(1, 2));
console.log(addr1(1, 2));

console.log('--- function with NO params');

var noparams = () => "Hello";

//Function with multiple lines of code
var multipleLinesofcode = (a: any, b: any) => { a += b; a += b; return a; };
console.log(multipleLinesofcode("x", "y"));


console.log('********************* ENDS 25th September');

console.log('********************* STARTS 27th September');

console.log('--- Class and Inheritence demo');

class Product {
    title: string;
    price: number;
    id: number;

    constructor(id: number) {
        this.id = id;
    }

    printdetails() {
        console.log(`Title: ${this.title}`)
        console.log(`ID: ${this.id}`)
        console.log(`Price: ${this.price}`)
    }

}

class Tour extends Product {
    duration: string;
    constructor(id: number, duration: string) {
        super(id);
        this.duration = duration;
    }
    printdetails() {

        super.printdetails()
        console.log(`Duration: ${this.duration}`)

    }

}

function test(p: Product) {

    p.printdetails()
}

var T = new Tour(1, "8 Hours")

T.title = "Trip to Goa"
T.price = 1200;
test(T)

console.log('--- INTERFACE');

interface Bookable {

    availableDates: [Date]
}

interface Cancelable {

    cancelationFee: number
}


class TourInterface extends Product implements Bookable, Cancelable {

    availableDates: [Date]
    cancelationFee: number

    duration: string;
    constructor(id: number, duration: string) {
        super(id);
        this.duration = duration;
    }
    printdetails() {

        super.printdetails()
        console.log(`Duration: ${this.duration}`)

    }


}

class cancelableobjectclass implements Cancelable {
    cancelationFee: number
}

function cancelBookingwithoutgenerics(c: Cancelable) {

    console.log("canceling booking. Charges: %d", c.cancelationFee)

}

var Tinterface_obj = new TourInterface(1, "8 Hours")
var X = new cancelableobjectclass();

Tinterface_obj.title = "Trip to Goa"
Tinterface_obj.price = 1200;
Tinterface_obj.cancelationFee = 100.00;

X.cancelationFee = 200.00;

cancelBookingwithoutgenerics(Tinterface_obj)

console.log('--- Generics');

function cancelBooking<T extends Cancelable & Product>(C: T) {

    console.log("canceling: %s (%d)", C.title, C.id)
    console.log("Price: %d", C.price)
    console.log("cancellation Fee: %d", C.cancelationFee)
    console.log("Total Refund: %d", C.price - C.cancelationFee)

}


// function identity(a: number): string {
//     return arg;
// }

function identity<T>(arg: T): T {
    return arg;
}



