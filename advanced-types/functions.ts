function getLength(val: string | any[]) {
    if(typeof(val) === 'string') {
        return val.split(' ').length // returns the number of words in the sentence 
    }
    return val.length
}