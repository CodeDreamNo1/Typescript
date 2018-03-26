
//完整的函数类型定义
let myAdd: (baseValue: number, increment: number) => number =    //此处用=>链接如函数没有返回值可以用void，但不可以不指定
    function(x: number, y: number): number { return x + y; };
// myAdd has the full function type
let myAdd1 = function(x: number, y: number): number { return x + y; };

//myadd和myadd2的写法都可以ts会推断出函数类型
//
//参数 
//错误情况，多传和少传都不可以
function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

//let result1 = buildName("Bob");                  // error, too few parameters
//let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right
//参数可选
function buildNames(firstName: string, lastName?: string) {
    return firstName + " " + lastName;
}
//默认参数类型
function buildNamess(firstName: string, lastName = 's') {  //此处默认参数不做处理。
    return firstName + " " + lastName;
}
buildNamess('s')