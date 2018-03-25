//定义一个类
class Greeter {
    greeting: string;             ///js里不可这样写   
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");


//类的继承
class A extends B {
	//类A继承B    //B叫派生类或叫子类
}
//类方法重写 此处使用了super关键字，它会调用基类的构造函数
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");


        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);


//修饰符
///public定义的属性和方法在任何地方都可以使用

//private私有属性方法，只可以在本类内访问，派生类不可以访问
//protected只可以在子类和本类内访问
//static 静态属性


//抽象类 abstract 主要是为了实现继承，是类更具有扩展性，接口也是抽象类的一种