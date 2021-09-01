const student = {
    id: 101,
    name: 'Rj kibrea',
    money: 5000,
    isRich: false,
    major: 'mathematics',
    subjects: ['english', 'economics', 'math 101', 'calculus'],
    bestFriend: {
        name: 'kindu',
        major: 'Mathematics'
    },
    takeExam: function() {
        console.log(this.name, 'talking exam');
    },
    treatDey: function(expense, boksis) {
        this.money = this.money - expense - boksis;
        return this.money;
    }
}

student.takeExam();
const remaining = student.treatDey(900, 50);
const remaining2 = student.treatDey(500, 50);
console.log(remaining2);