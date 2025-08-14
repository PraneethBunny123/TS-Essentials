function logger(target: any, ctx: ClassDecoratorContext) {
    console.log('logger decorator');
    console.log(target)
    console.log(ctx);   
}

@logger
class Person {
    name = 'max'

    greet() {
        console.log('Hi, I am ' + this.name)
    }
}