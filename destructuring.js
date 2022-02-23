const fish = { id: 58, name: 'king Hilsha', price: 9000, phone: '01717555555', address: 'Chandpur', dress: 'silver' };
// Option 1
/*-------------
 const phone = fish.phone;
const price = fish.price;
const dress = fish.dress;
const id = fish.id 
--------------*/
// Option 2. shortcut
const { phone, price, dress, id } = fish;

const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fucka' },
    web: {
        work: 'website development', employee: 22, framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    }
};

// const work = company.web.work;
// const framework = company.web.framework;
const { work, framework } = company.web;
const { food } = company.ceo;
const { second, third } = company.web.tech;
console.log(work, framework, food, second, third);