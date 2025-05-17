class maxHeap{
    constructor(){
        this.heap = []
    }
    getParentIndex(i) {return Math.floor((i-1)/2)}
    getLeftIndex(i) {return 2*i+1}
    getRightIndex(i) {return 2*i+2}

    swap(i,j){
    [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }

        insert(value){
            this.heap.push(value)
            this.heapifyUp()
        }

        heapifyUp(){
            let index = this.heap.length-1
            while(index>0 && this.heap[this.getParentIndex(index)] < this.heap[index]){
                this.swap(index,this.getParentIndex(index))
                index = this.getParentIndex(index)
            }
        }

        extractMax(){
            if(this.heap.length === 0) return null
            if(this.heap.length === 1) return this.heap.pop()
                const max = this.heap[0]
            this.heap[0] = this.heap.pop()
            this.heapifyDown(0)
            return max
        }

        heapifyDown(index){
            let largest = index
            let left = this.getLeftIndex(index)
            let right = this.getRightIndex(index)
            if(left < this.heap.length && this.heap[left] > this.heap[largest]) largest = left
            if(right < this.heap.length && this.heap[right] > this.heap[largest]) largest = right
            if(largest !== index){
                this.swap(index,largest)
                this.heapifyDown(largest)
            }
        }

        printHeap(){
            console.log(this.heap)
        }
}


const maxheap = new maxHeap()
maxheap.insert(10)
maxheap.insert(80)
maxheap.insert(70)
maxheap.insert(60)
maxheap.insert(5)
maxheap.printHeap()
maxheap.extractMax()
maxheap.printHeap()