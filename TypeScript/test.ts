// let dict :Words ={
//     "potato": "food",
//     "rice": "also food"
// }

type Words = {
    [key:string]:string
}

class Dict {
    private words: Words
    constructor(){
        this.words = {}
    }
    add(word:Word){
        if(this.words[word.term]===undefined){
            this.words[word.term]=word.def
        }
    }
    get(term:string){
        return this.words[term]
    }
    delete(word:Word){
        delete this.words[word.term]
    }
    update(word:Word){
        if(this.words[word.term]){
            this.words[word.term]=word.def
        }
    }

    showAll(dict:Dict){
        return Object.values(dict)
    }
    count(dict:Dict){
        return Object.keys(dict).length
    }
}

class Word {
    constructor(
        public term:string,
        public def:string
    ){}
}

const kimchi = new Word("kimchi", "korean food");
const kimchi2 = new Word("kimchi", "delicious food")
const dict = new Dict()
dict.add(kimchi)
dict.get("kimchi")
dict.update(kimchi2)
dict.showAll(dict)
dict.count(dict)
dict.delete(kimchi)