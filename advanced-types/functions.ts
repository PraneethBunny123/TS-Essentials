function getLength(val: string | any[]) {
    if(typeof(val) === 'string') {
        const numWords = val.split(' ').length // returns the number of words in the sentence 
        return `${numWords} words`
    }
    return val.length
}