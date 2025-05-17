class TrieNode{
    constructor(){
        this.children = {}
        this.endOfWords = false
    }
}
class Trie{
    constructor(){
        this.root = new TrieNode()
    }
    insert(word){
        let current = this.root
        for(let char of word){
            if(!current.children[char]){
                current.children[char] = new TrieNode()
            }
            current = current.children[char]
        }
        current.endOfWords = true
    }
    search(word){
        let current = this.root
        for(let char of word){
            if(!current.children[char]){
              return false
            }
            current = current.children[char]
        }
        return current.endOfWords
    }
    startWith(prefix){
        let current = this.root
        prefix = prefix.toLowerCase()
        for(let char of prefix){
            if(!current.children[char]){
                return false
              }
              current = current.children[char]
        }
        return true
    }
    autoComplete(prefix){
        let current = this.root
        for(let char of prefix){
            if(!current.children[char]) return []
            current = current.children[char]
        }
        return this.getFromFirst(current,prefix)
    }
    getFromFirst(node,prefix){
        const words = []
        if(node.endOfWords) words.push(prefix)
            for(let char in node.children){
        words.push(...this.getFromFirst(node.children[char],prefix+char))
        }
        return words
    }
}

const trie = new Trie()
trie.insert("hello")
trie.insert("hel")
trie.insert("ello")
console.log(trie.autoComplete("h"));
console.log(trie.search("hel"));
console.log(trie.startWith("e"));


