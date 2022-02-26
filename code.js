const shortestPath = (edges, nodeA, nodeB) => {

    const graph = buildGraph(edges);
    console.log(graph)
    const visited = new Set([ nodeA ]);
    //console.log(visited)
    const queue = [[ nodeA, 0 ]];
    //console.log(queue)

    while (queue.length > 0) {
        const [ node, distance ] = queue.shift();


        if (node === nodeB) return distance;

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([ neighbor, distance + 1 ]);
            }
        }
    }

    return -1;
};

const buildGraph = (edges) => {
    const graph = {};

    for (let edge of edges) {
        const [a, b] = edge;
        //console.log(a,b)
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
};

const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
];

let o=shortestPath(edges, 'w', 'z');
console.log(o);
