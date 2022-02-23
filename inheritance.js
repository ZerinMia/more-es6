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


class studentCare {
    name;
    designation = 'Student Care Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    buildARutin(Student) {
        console.log(this.name, 'Build a routin', Student)
    }
}


class NeptuneDev {
    name;
    designation = 'Student Care Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version)
    }
}

const alia = new studentCare('Alia Bhatt', 'Mumbai');
console.log(alia)
