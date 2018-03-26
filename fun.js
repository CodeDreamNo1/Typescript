//完整的函数类型定义
var myAdd = function (x, y) { return x + y; };
// myAdd has the full function type
var myAdd1 = function (x, y) { return x + y; };
//myadd和myadd2的写法都可以ts会推断出函数类型
//
//参数 
//错误情况，多传和少传都不可以
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
//let result1 = buildName("Bob");                  // error, too few parameters
//let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
var result3 = buildName("Bob", "Adams"); // ah, just right
//参数可选
function buildNames(firstName, lastName) {
    return firstName + " " + lastName;
}
//默认参数类型
function buildNamess(firstName, lastName) {
    if (lastName === void 0) { lastName = 's'; }
    return firstName + " " + lastName;
}
buildNamess('s');
