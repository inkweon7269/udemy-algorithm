/*
    ES2015 Class Syntax
*/

class Student {
    // constructor(생성자) : 인스턴스화시킬 때 사용되는 특별한 메소드
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.tardies = 0;
        this.scores = [];
    }

    // Instance Methods (1)
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Instance Methods (2)
    markLate() {
        this.tardies += 1;
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }

    // Instance Methods (3)
    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }

    // Instance Methods (4)
    calculateAverage() {
        let sum = this.scores.reduce((a, b) => a + b );
        return sum / this.scores.length;
    }

    /*
        static

        - 클래스에 종속되는 반면 클래스의 개별 인스턴스 메소드에는 반드시 종속적일 필요가 없는 메서드 또는 기능 등을 생성할 때 사용
        - 클래스의 인스턴스화 없이도 호출될 수 있으며 클래스 인스턴스를 통해서는 호출될 수 없다.
        - 애플리케이션을 위한 유틸리티 기능을 생성할 때 자주 사용된다.
     */
    static EnrollStudents() {
        return "Enrolling Students!"
    }
}

const kim = new Student("inkweon", "Kim", 1000);
console.log(kim.markLate());
console.log(kim.markLate());
console.log(kim.markLate());


console.log(kim.addScore(92));
console.log(kim.addScore(76));
console.log(kim.addScore(100));
console.log(kim.calculateAverage());


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));













