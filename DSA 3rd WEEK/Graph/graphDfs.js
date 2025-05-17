class GraphDfs{
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
    DFS(start,visited = new Set()){
        if(visited.has(start)) return 
        console.log(start)
        visited.add(start)
        for(let neibour of this.adjList.get(start)){
            this.DFS(neibour,visited)
        }
    }
}
const dfs = new GraphDfs()
dfs.addVertex("A")
dfs.addVertex("B")
dfs.addVertex("C")
dfs.addVertex("D")

dfs.addEdges("A","B")
dfs.addEdges("D","B")
dfs.addEdges("C","B")

dfs.DFS("A")