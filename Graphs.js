class Graphs{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v=>v!==v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v=>v!==v1);   
    }
    removeVertex(vertex){  
        while(this.adjacencyList[vertex].length){
            this.removeEdge(vertex,this.adjacencyList[vertex].pop());
        }
        delete this.adjacencyList[vertex]
    }
    DFSRecursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        function dfs(vertex){
            if(!vertex)return null;
            visited[vertex]= true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbour=>{
                if(!visited[neighbour]){
                    return dfs(neighbour)
                }
            })
        }
        dfs(start)
        return result;
    }
    DFSIterative(start){
        let stack = [start];
        const result = [];
        const visited = {}
        let currentVertex;
        visited[start] = true;

        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbour=>{
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    stack.push(neighbour)
                }
            }) 
        }
        return result
    }
    BFS(start){
        let queue = [start]
        let result  = []
        let visited = {}
        visited[start] = true;
        let vertex;

        while(queue.length){
            vertex = queue.shift(start);
            visited[vertex] = true;
            result.push(vertex)
            this.adjacencyList[vertex].forEach(neighbour=>{
                if(!visited[neighbour]){
                    visited[neighbour] = true
                    queue.push(neighbour)
                }
            })
        }
        return result
    }
}

let first = new Graphs;
first.addVertex("A");first.addVertex("B");first.addVertex("C");first.addVertex("D");first.addVertex("E");first.addVertex("F");
first.addEdge("A","B");first.addEdge("A","C");first.addEdge("B","D");first.addEdge("C","E");first.addEdge("D","E");
first.addEdge("D","F");first.addEdge("E","F");
console.log(first.BFS("F"))
//console.log(first)