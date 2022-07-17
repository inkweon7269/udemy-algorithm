/*
    스택

    - 스택은 후입선출 원칙을 따르는 데이터들의 모음 LIFO
*/

// 배열로 스택을 만들기
var stack = [];
stack.push('google');
stack.push('instagram');
stack.push('youtube');

// console.log(stack);

// stack.pop();
// console.log(stack);
// stack.pop();
// console.log(stack);
// stack.pop();
// console.log(stack);



// 스크래치로 자신만의 스택 클래스 작성하기
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // 기존 push(), pop()을 사용하게 되면 처음부터 맨 뒤까지 순회해서 처리해야하는 문제가 있음
    // shift / unshift 개념을 적용하면 처음 요소만 감지하면 됨
    // shift / unshift 방식을 적용
    push(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop() {
        if (!this.first) {
            return null;
        }
        var temp = this.first;

        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

const stack1 = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);

// console.log(stack1);

// stack1.pop();
// console.log(stack1);
// stack1.pop();
// console.log(stack1);
// stack1.pop();
// console.log(stack1);







/*
    큐 소개

    - 선입선출 (FIFO)
 */

// 배열을 사용해서 큐 만들기
// unshift - pop, push-shift 조합으로 구현 가능
var queueArr = [];

queueArr.push(1);
queueArr.push(2);
queueArr.push(3);

// console.log(queueArr);

// queueArr.shift();
// console.log(queueArr);
// queueArr.shift();
// console.log(queueArr);
// queueArr.shift();
// console.log(queueArr);



class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;

        var temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }

}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue);

queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);






































