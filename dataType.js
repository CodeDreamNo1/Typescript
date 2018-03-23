//数据类型
//布尔值
var is = true;
//数字
var num = 6;
//字符串
var name = 'a';
//字符串类型连接变量与js相同也可以使用模板字符串${},
//数组
var arr = [1, 2];
//泛型数组let arr: Array<number> = [1, 2, 3]; 
//元组
var x = [string, number];
//正确的赋值方式: x = ['1', 1];错误的x = [1, '1'];
//枚举
var Color;
(function (Color) {
})(Color || (Color = {}));
(Red = 1, Green = 2, Blue);
var c = color.Green;
var cname = Color[3]; //选取值是3的Color打印Blue；
//Any 不清楚某些变量的值，但是还想不报错
var not = 4;
//void代表无任何类型，声明一个void值只能赋值undefined和null，当一个函数无返回值为void
var un = null; //  
//null和undefined同js
//never永不存在的类型
//类型断言
var val = 'a';
var strLength = val.length;
