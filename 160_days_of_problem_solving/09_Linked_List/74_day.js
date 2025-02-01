
// Name: LRU Cache
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/linked-list-gfg-160/problem/lru-cache

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}


class LRUCache {
    // Constructor for initializing the cache capacity with the given value.
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.head = new Node(-1, -1);
        this.tail = new Node(-1, -1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    add(node) {
        const nextNode = this.head.next;
        this.head.next = node;
        node.prev = this.head;
        node.next = nextNode;
        nextNode.prev = node;
    }

    remove(node) {
        const prevNode = node.prev;
        const nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }

    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }

        const node = this.cache.get(key);
        this.remove(node);
        this.add(node);
        return node.value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            this.remove(node);
            this.cache.delete(key);
        }

        if (this.cache.size >= this.capacity) {
            const lruNode = this.tail.prev;
            this.remove(lruNode);
            this.cache.delete(lruNode.key);
        }

        const newNode = new Node(key, value);
        this.add(newNode);
        this.cache.set(key, newNode);
    }
}

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));
cache.put(3, 3);
console.log(cache.get(2));
cache.put(4, 4);
console.log(cache.get(1));
console.log(cache.get(3));
console.log(cache.get(4));