// up to down traversal

// class BSTNode {
//     constructor(key) {
//         this.key = key;
//         this.left = null;
//         this.right = null;
//     }
// }

// iterative approach
depthFirstTraversal = (root) => {
const values = [];
const stack = [root]; // pushed root into stack
if(root === null){
    return // msg or empty array
}
// poping element one by one from stack untill it's empty
while(stack.length>0){
    const node = stack.pop();
    values.push(node.key)

    // push the opposite order first bcz stack in FILO
    if(root.right !== null){
        stack.push(node.right)
    }
    if(root.left !== null){
        stack.push(node.left)
    }
}
return values
}

// recursive approach
const recursiveDepthFirstTraversal = (root) => {
    if(root === null){
        return // empty arr or msg
    }
    const leftValues = recursiveDepthFirstTraversal(root.left)
    const righttValues = recursiveDepthFirstTraversal(root.right)
    // return [root.key, leftValues, righttValues] OR
    return [root.key, ...leftValues, ...righttValues]    
}

