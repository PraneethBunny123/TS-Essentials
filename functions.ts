function add(a: number, b:number): number {
    return a+b;
}

function log(message: string): void {
    console.log(message)
}

////////////////////////
// function type

const logMsgCallbackFn = (msg: string) => {
    console.log(msg);   
}

function performJob(cb: (m: string) => void) {
    cb('Job done!')
}

performJob(logMsgCallbackFn)