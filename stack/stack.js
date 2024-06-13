// Imagine stack as a vertical array where bottom index is arr[0] and top index is arr[arr.length-1]
// LIFO - Last In First Out
// creating a class however we can do with object also
class Stack {

// initializing stack
constructor() {
    this.stack = []
}

// adding data into stack at last index (top of stack)
push(data) {
    this.stack.push(data)
}

// removing data from last index
pop() {
    this.stack.pop()
}

// returning last index value
peek() {
    return this.stack[this.stack.length-1]
}

// returns size of the stack
size() {
    return this.stack.length
}

// tells if stack has any value in it
isEmpty() {
    return this.stack.length === 0
}

// makes stack empty
clear() {
    this.stack = []
}

// finds any element inside stack
contains(element) {
    return this.stack.includes(element)
}

// it reverse the order of stack
reverse() {
    this.stack.reverse();
}

// is display all the values in the stack
print() {
    let str = ""
    if(this.stack.length === 0) {
        return "Stack is empty"
    }
    for(let i = 0; i < this.stack.length; i++){
        str += this.stack[i] + '\n'
    }
    return str
}

}

// usage

let myStack = new Stack()
myStack.push(2)
myStack.push(4)
myStack.push(6)
myStack.push(8)
myStack.pop()
myStack.reverse()
console.log(myStack.peek())
myStack.clear()
console.log(myStack.size())
console.log(myStack.isEmpty())
console.log(myStack.contains(4))
console.log(myStack.print())
