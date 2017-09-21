const Node = require('./node');

class LinkedList {
    constructor() {
        this.list;
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        if(this.length == 0){
            this._head = this._tail = new Node(data, null, null);
            this.length += 1;
            return this;
        }

        let temp = new Node(data, this._tail, null);
        this._tail.next = temp;
        this._tail = temp;
        this.length += 1;
        return this;
    }

    head() {
        if(this.length == 0){
            return null;
        }
        return this._head.data;
    }

    tail() {
        if(this.length == 0){
            return null;
        }
        return this._tail.data;
    }

    at(index) {
        let len = this.length;
        if(index == 0){
            return this._head.data;
        }
        let res = this._head;
        while(index > 0){
            res = res.next;
            index--;
        }
        return res.data;
    }

    insertAt(index, data) {
        if(index == 0){
            if(this.length == 0){
                this._head = this._tail = new Node(data, null, null);
                this.length += 1;
                return this;
            }

            let temp = new Node(data, null, this._head);
            this._head.prev = temp;
            this._head = temp;
            return this;
        }
        let res = this._head;
        while(index > 0){
            res = res.next;
            index--;
        }

        let temp = new Node(data, res.prev, res);
        res.prev.next = temp;
        res.prev = temp;
        return this;

    }

    isEmpty() {
        if(this.length == 0)
            return true;
        return false;
    }

    clear() {
        if(this.length == 0){
            return this;
        }

        while(this.length > 0 ){
            if (this.length == 1){
                this._head = this._tail = null;
                this.length--;
                return this;
            }
            this._tail = this._tail.prev;
            this._tail.next.prev = null;
            this._tail.next = null;
            this.length--;
        }
    }

    deleteAt(index) {
        if(this.length == 0){
            return this;
        }

        if(index == 0){
            if(this.length > 1){
                this._head = this.head.next;
                this.head.prev = null;
                this.length--;
                return this;
            }
            if(this.length == 1){
                this._head = this._tail = null;
                this.length--;
                return this;
            }
        }

        let res = this._head;
        while(index > 0 ){
            res = res.next;
            index--;
        }

        if(res.next == null){
            res.prev.next = null;
            res = res.prev = null;
            return this;
        }

        res.prev.next = res.next;
        res.next.prev = res.prev;
        res = res.next = res.prev = null;
        return this;
    }

    reverse() {
        let current = this._head;
        let temp = null;

        while(current != null){
            temp = current.next;
            current.next = current.prev;
            current.prev = temp;
            current = current.prev;
        }

        current = this._head;
        this._head = this._tail;
        this._tail = current;

        return this;
    }

    indexOf(data) {
        if(this.length == 0){
            return -1;
        }
        let index = 0;
        let res = this._head;
        while(index < this.length){
            if (res.data == data)
                return index;
            res = res.next;
            index++;
        }
        return -1;
    }
}

module.exports = LinkedList;
