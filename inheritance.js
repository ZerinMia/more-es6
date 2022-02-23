class TeamMember {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

}

class Support extends TeamMember {
    groupSupporTime;
    designation = 'Support Web Dev';
    constructor(name, address, time) {
        super(name, address)
        this.groupSupporTime = time;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

class studentCare extends TeamMember {
    designation = 'Care Web Dev';
    buildARutin(Student) {
        console.log(this.name, 'Build a routin', Student)
    }
}


class NeptuneDev extends TeamMember {
    codeEditor;
    designation = 'Neptune App Dev';
    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version)
    }
}

const aamir = new support('Aamir Khan', 'BD', 11);
const salman = new support('Salman Khan', 'Mombai', 4);
const sarukh = new support('Sarukh Khan', 'Dubai', 9);
const akshay = new support('Akshay Kumar', 'Kolkata', 11);

const alia = new studentCare('Alia Bhatt', 'Mumbai');
const ash = new NeptuneDev('Ash', 'Mumbai', 'Android Srudio');
ash.releaseApp('1.4.5');
console.log(ash.name);

