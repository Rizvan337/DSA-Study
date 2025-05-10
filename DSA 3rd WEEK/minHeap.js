class minHeap{
    constructor(){
        this.heap = []
    }

    getParentIndex(i){return Math.floor((i-1)/2)}
    getLeftIndex(i){return 2*i+1}
    getRightIndex(i){return 2*i+2}

    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    heapifyUp(){
        let index = this.heap.length-1
        while(index > 0 && this.heap[this.getParentIndex(index)] > this.heap[index]){
            this.swap(index,this.getParentIndex(index))
            index = this.getParentIndex(index)
        }
    }

    extractMin(){
        if(this.heap.length === 0) return null
        if(this.heap.length === 1) return this.heap.pop()
            const min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return min 
    }

    heapifyDown(index){
        let smallest = index
        let left = this.getLeftIndex(index)
        let right = this.getRightIndex(index)
        if(left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left
        if(right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right
        if(smallest !== index){
            this.swap(index,smallest)
            this.heapifyDown(smallest)
        }
    }
    
    printMinheap(){
        console.log(this.heap)
    }
}


const minheap = new minHeap()
minheap.insert(10)
minheap.insert(30)
minheap.insert(40)
minheap.insert(1)
minheap.insert(11)
minheap.printMinheap()
minheap.extractMin()
minheap.printMinheap()