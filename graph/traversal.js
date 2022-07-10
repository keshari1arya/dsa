
class Node {
    adj = [];
    constructor(val, neighbours) {
        this.val = val;
        this.adj = neighbours | [];
    }
}

class Graph {
    constructor(root) {
        this.root = root;
    }

    bfs() {
        console.log('BFS Traversal');
        // var startTime = window.performance.now();
        let q = [this.root];
        let visited = new Set();
        while (q.length > 0) {
            let curr = q.shift();
            for (let node of curr.adj) {
                if (!visited.has(node))
                    q.push(node);
            }
            visited.add(curr);
        }

        visited.forEach(x => console.log(x.val))
        // var endTime = window.performance.now();
        // console.log('Timt taken: ' + (endTime - startTime))
    }

    dfs() {
        console.log('DFS Traversal');
        // var startTime = window.performance.now();
        let stack = [this.root];
        let visited = new Set();
        while (stack.length > 0) {
            let curr = stack.pop();
            for (let node of curr.adj) {
                if (!visited.has(node))
                    stack.push(node);
            }
            visited.add(curr);
        }

        visited.forEach(x => console.log(x.val))
        // var endTime = window.performance.now();
        // console.log('Timt taken: ' + (endTime - startTime))
    }
    dfsRecursive() {
        console.log('DFS Traversal Recursive');
        // var startTime = window.performance.now();
        let visited = new Set();
        (function traverse(curr) {
            if (visited.has(curr))
                return;
            visited.add(curr);
            for (let node of curr.adj) {
                traverse(node)
            }
        })(this.root);
        visited.forEach(x => console.log(x.val))
        // var endTime = window.performance.now();
        // console.log('Timt taken: ' + (endTime - startTime))
    }
}


let six = new Node(6, null);
let five = new Node(5, null);
let four = new Node(4, null);
let three = new Node(3, null);
let two = new Node(2, null);
let one = new Node(1, null);

one.adj = [two, three];
two.adj = [one, four, five];
three.adj = [one, five];
four.adj = [two, five, six];
five.adj = [two, three, four, six];
six.adj = [four, five];

let graph = new Graph(one);
graph.bfs();
graph.dfs();
graph.dfsRecursive();

// to track performance uncomment code in all functions and get it run in browser