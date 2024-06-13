// Imagine queue as a horizontal array where first index is arr[0] and last index is arr[arr.length-1]
// FIFO - First In First Out
// It's an expensive operation because we need to shift all elements after each operation
// creating a class however we can do with object also
class Queue {

    // initializing queue
    constructor() {
        this.queue = []
    }
    
    // adding data into queue at first index
    enqueue(data) {
        this.queue.unshift(data)
    }
    
    // removing data from first index
    dequeue() {
        this.queue.shift()
    }
    
    // returning first index value
    peek() {
        if(this.queue.length === 0) {
            return "Queue is empty"
        }
        return this.queue[0]
    }
    
    // returns size of the queue
    size() {
        return this.queue.length
    }
    
    // tells if queue has any value in it
    isEmpty() {
        return this.queue.length === 0
    }
    
    // makes queue empty
    clear() {
        this.queue = []
    }
    
    // finds any element inside queue
    contains(element) {
        return this.queue.includes(element)
    }
    
    // it reverse the order of queue
    reverse() {
        this.queue.reverse();
    }
    
    // is display all the values in the queue
    print() {
        let str = ""
        if(this.queue.length === 0) {
            return "Queue is empty"
        }
        for(let i = 0; i < this.queue.length; i++){
            str += this.queue[i] + '\n'
        }
        return str
    }
    
    }
    
    // usage
    
    let myQueue = new Queue()
    myQueue.enqueue(2)
    myQueue.enqueue(4)
    myQueue.enqueue(6)
    myQueue.enqueue(8)
    myQueue.dequeue()
    console.log(myQueue.print())
    myQueue.reverse()
    console.log(myQueue.peek())
    myQueue.clear()
    console.log(myQueue.size())
    console.log(myQueue.isEmpty())
    console.log(myQueue.contains(4))
    console.log(myQueue.print())
    