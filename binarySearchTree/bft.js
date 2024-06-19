// left to right same level

// class BSTNode {
//     constructor(key) {
//         this.key = key;
//         this.left = null;
//         this.right = null;
//     }
// }

// iterative approach
breadthFirstTraversal = (root) => {
    const values = [];
    const queue = [root]; // we dont have queue in js and bft optimization depends on the queue it is using, shift operation is not so optimised hence tc is onsquare

    if(root === null){
        return // msg or empty array
    }
    // poping element one by one from queue untill it's empty
    while(queue.length>0){
        const node = queue.shift(); // point of optimization
        values.push(node.key)
    
        // push the same order first bcz queue in FIFO
        if(root.left !== null){
            queue.push(node.left)
        }
        if(root.right !== null){
            queue.push(node.right)
        }
    }
    return values
    }
    