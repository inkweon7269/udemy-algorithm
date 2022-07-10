/*
    연결 리스트

    - 문자열 숫자 등 원하는 데이터를 저장하는 자료 구조
    - 배열과 차이점은 다음 데이터 엘리먼트를 가리키는 인덱스 없이 그냥 다수의 데이터 엘리먼트로 구성되어 있다.
    - 각각의 엘리먼트를 노드라고 얘기한다.

    - 연결 리스트는 노드의 집합이다.
    - 노드는 value로 불리는 단일 데이터 항목을 저장하고 이어서 호출될 다음 노드들에 대한 참조 정보인 next를 저장한다.

 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/*
var first = new Node("Hi");
first.next = new Node('there');
first.next.next = new Node('how');
first.next.next.next = new Node('are');
first.next.next.next.next = new Node('you');
// console.log(first);
*/


class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    traverse() {
        var current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }

    pop() {
        if (!this.head) return undefined;

        var current = this.head;
        var newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    shift() {
        if (!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return currentHead;
    }

    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;

        while (counter !== index) {
            current = current.next;
            counter++;
        }

        return current;
    }

    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }

        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);

        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;

        prev.next = newNode;
        newNode.next = temp;

        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        var prev = this.get(index - 1);
        var removed = prev.next;
        prev.next = removed.next;

        this.length--;
        return removed;
    }

    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;

        for (var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }

    print() {
        var arr = [];
        var current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

var list = new SinglyLinkedList();

list.push('Hello');
list.push('Goodbye');
list.push('!!!');

list.reverse();
list.print();


// console.log(list.get(0));
// console.log(list.set(0, 'Nice'));
// console.log(list.get(0));

// list.insert(2, 'Nice');
// console.log(list);

// list.remove(1);
// console.log(list);


// list.traverse();


/*
list.pop();
console.log(list);
list.pop();
console.log(list);
list.pop();
console.log(list);
*/


// list.unshift('Nice');
// list.unshift('to');
// console.log(list);














