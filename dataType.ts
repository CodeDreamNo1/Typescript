//数据类型
//布尔值

let is: boolean = true;
//数字

let num: number = 6;

//字符串

let name: string = 'a';
//字符串类型连接变量与js相同也可以使用模板字符串${},

//数组

let arr: number[] = [1,2];
//泛型数组let arr: Array<number> = [1, 2, 3]; 

//元组

let x = [string, number];

//正确的赋值方式: x = ['1', 1];错误的x = [1, '1'];

//枚举

enum Color(Red = 1, Green = 2, Blue)
let c: Color = color.Green;
let cname: string = Color[3] //选取值是3的Color打印Blue；

//Any 不清楚某些变量的值，但是还想不报错

let not: any = 4;

//void代表无任何类型，声明一个void值只能赋值undefined和null，当一个函数无返回值为void

let un: void= null;//  

//null和undefined同js

//never永不存在的类型

//类型断言

let val: any = 'a'
let strLength: number = (val as string).length;