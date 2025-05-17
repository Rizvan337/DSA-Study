class GraphBfs{
    constructor(){
        this.adjList = new Map()
    }
    addVertex(vertex){
        this.adjList.set(vertex,[])
    }
    addEdges(v1,v2){
        this.adjList.get(v1).push(v2)
        this.adjList.get(v2).push(v1)
    }
    BFS(start){
        let visited = new Set()
        let queue = [start]
        while(queue.length>0){
            let current = queue.shift()
            if(!visited.has(current)){
                console.log(current)
                visited.add(current)
                for(let neibour of this.adjList.get(current)){
                    if(!visited.has(neibour)){
                        queue.push(neibour)
                    }
                }
            }
        }
    }
}

const bfs = new GraphBfs()
bfs.addVertex("A")
bfs.addVertex("B")
bfs.addVertex("C")
bfs.addVertex("D")
bfs.addEdges("A","B")
bfs.addEdges("A","C")
bfs.addEdges("C","B")
bfs.addEdges("C","D")
bfs.BFS("A")