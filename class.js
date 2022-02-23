class support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session')
    }
}
const aamir = new support('Amir Khan', 'bangladesh');
const salman = new support('Salman Khan', 'cina');
const sarukh = new support('sarukh Khan', 'dubai');
aamir.startSession();
salman.startSession();
sarukh.startSession();

console.log(aamir, salman, sarukh)