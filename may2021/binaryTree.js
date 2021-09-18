class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5);
let f = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const depthFirstRecursionPrint = (root) => {
    if (!root) return 0;
        const curr = root
        depthFirstRecursionPrint(curr.left);
        console.log(curr.val) ;
        depthFirstRecursionPrint(curr.right);

}
const sumTree = (root) => {
    if (!root) return 0;

    return sumTree(root.left) + root.val + sumTree(root.right);
}
console.log(sumTree(a))
// const depthFirstRecursionPrint = (root) => {
//     if (!root) return
//         const curr = root
//         depthFirstRecursionPrint(curr.left);
//         console.log(curr.val) ;
//         depthFirstRecursionPrint(curr.right);

// }
// depthFirstRecursionPrint(a);
// console.log(a.val)
// const depthFirstPrint = (root) => {
//     const stack = [root];
//     while (stack.length > 0) {
//         const curr = stack.pop();
//         console.log(curr.val) ;
//         if (curr.right !== null) {
//             stack.push(curr.right)
//         }
//         if (curr.left) {
//             stack.push(curr.left)
//         }
//     }
// }
// depthFirstPrint(a);

const breathFirstPrint = (root) => {
    const queue = [root];
    while (queue.length > 0) {
        const curr = queue.shift();
        console.log(curr.val)
        if (curr.left !== null) {
            queue.push(curr.left)
        }
        if (curr.right) {
            queue.push(curr.right)
        }
    }
}
// const sumTree = (root) => {
//     let sum = 0;
//     const queue = [root];

//     while (queue.length > 0) {
//         const curr = queue.shift();
//         sum += curr.val;

//         if (curr.left !== null) {
//             queue.push(curr.left)
//         }
//         if (curr.right) {
//             queue.push(curr.right)
//         }
//     }
//     return sum;
// }
const bfs = (root,target) => {
    const queue = [root];
    while (queue.length > 0) {
        const curr = queue.shift();
        if (curr.val === target) return true;
        // console.log(curr.val)
        if (curr.left !== null) {
            queue.push(curr.left)
        }
        if (curr.right) {
            queue.push(curr.right)
        }
    }
    return false;
}


// breathFirstPrint(a)
// console.log(bfs(a,3));
// console.log(bfs(a,"d"));
// console.log(sumTree(a));
// bfs(a, "C")