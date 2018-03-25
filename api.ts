//关键字 接口interface 
interface objVal {
	label: string;
	size: number;      ///必须定义传几个写几个
}
function fun(objs: objVal) {
	
}
fun({size: 10, label: '11111'}) /////必须包含参数label且是字符串


//接口可选属性
interface select {
  color?: string;
  width?: number;
}

function create(config: select): { color: string; area: number } {
  let newSquare = {color: "white", area: 100};
  if (config.clor) {
    //假定写错 报错 
    newSquare.color = config.clor;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = create({color: "black"});

//只读接口
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5; // 报错error!

//const和readonly区别 常量用const 属性用readonly

//特殊情况碰到不确定值,需要传特殊值
//使用断言可以绕过检查{ width: 100, opacity: 0.5 } as select   
interface anys {
    color?: string;
    width?: number;
    [propName: string]: any;  //用索引定义类型为任意也可以绕开检查用于扩展接口不安全
}


//函数接口
interface fun {
	(source: string, subString: string): boolean; //定义参数值以及返回类型
}

let my: fun;
my = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}


///类类型接口
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {    //关键字implements实现接口
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

//定义类构造函数接口与实例接口
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface; //此处定义构造函数的接口
}
interface ClockInterface {
    tick();  //此处定义实例的接口
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);


//接口的继承
//同后面类一样都是extends继承