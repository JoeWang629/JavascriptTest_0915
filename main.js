'use strict';

// 1. 實作 Fibonacci number (費式數列)
const fibonacci = (position) => {
    let fib = [0, 1];
    //f.push(0);
    //f.push(1);
    for (let i = 2; i <= position; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[position];
}

const getFib = () => {
    let position = document.getElementById('position').value;
    let fibResult = fibonacci(position)
    document.getElementById("fibResult").innerHTML = fibResult;
}

// 2. 實作 Debounce
const debounce = (fn, delay) => {
    let timeoutID;
    return function (...args) {
        if (timeoutID) {
            clearTimeout(timeoutID);
        }
        timeoutID = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};


document.getElementById("debounce").addEventListener(
    "click",
    debounce(e => {
        console.log("clicked");
    }, 2000)
);


// 3. 使用 Linked List 實作 Stack
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    //Push element into the stack
    push(element) {
        console.log(element);
        //Create a new node
        let node = new Node(element),
            current;

        current = this.head;
        node.next = current;
        this.head = node;
        this.length++;
    }

    //Pop element from the stack
    pop() {
        console.log('pop');
        let current = this.head;

        if (current) {
            let element = current.element;
            current = current.next;
            this.head = current;
            this.length--;
            document.getElementById("popResult").innerHTML = element;
            return element;
        }
        document.getElementById("popResult").innerHTML = "null";
        ;
        return null;
    }

    //Return the size of the stack
    size() {
        console.log('size', this.length);
        document.getElementById("sizeResult").innerHTML = this.length;
        return this.length;
    }
}
const myStack = new Stack();


// 4. 實作 getPagination

const getPagination = (offset, limit, total) => {

    let totalPage = Math.ceil(total / limit);
    let currentPage = parseInt(((offset / limit) + 1), 10);
    let startPage = 0;
    let endPage = 0;
    let renderPages = [];

    if (totalPage <= limit) {
        startPage = 1;
        endPage = totalPage;
    } else {
        let beforeCurrentPage = Math.floor(limit / 2);
        let afterCurrentPage = Math.ceil(limit / 2) - 1;
        if (currentPage <= beforeCurrentPage) {
            startPage = 1;
            endPage = limit;
        } else if (currentPage + beforeCurrentPage >= totalPage) {
            startPage = totalPage - limit + 1;
            endPage = totalPage;
        } else {
            startPage = currentPage - beforeCurrentPage;
            endPage = currentPage + afterCurrentPage;
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        renderPages.push(i);
    }

    let result = {
        currentPage: currentPage,
        totalPage: totalPage,
        renderPages: renderPages
    };
    return result;

}

const pageClick = () => {
    let pageElement = document.getElementById('pageElement').value;
    pageElement = pageElement.trim();
    let arrPageElement = pageElement.split(",");
    arrPageElement.forEach(element => {
        console.log(element);
    });
    if (arrPageElement.length < 3) document.getElementById("pageResult").innerHTML = 'Input error!';
    else document.getElementById("pageResult").innerHTML = JSON.stringify(getPagination(arrPageElement[0], arrPageElement[1], arrPageElement[2]));
}
