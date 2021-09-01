const kibria = {
    id: 101,
    money: 5000,
    name: 'Rj kibrea',
    treatDey: function(expense) {
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
}
kibria.treatDey(100);
//console.log(kibria);

const heroBalam = {
    id: 103,
    money: 6000,
    name: 'hero Balam'
}
const normalGollam = {
    id: 104,
    money: 10000,
    name: 'hero Balam'
}
const heroTreatDe = kibria.treatDey.bind(heroBalam);
heroTreatDe(500);
heroTreatDe(200);
kibria.treatDey(300);

const normalGollamDE = kibria.treatDey.bind(normalGollam);
normalGollamDE(2000)