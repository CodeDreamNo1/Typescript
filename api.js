function fun(objs) {
}
fun({ size: 10, label: '11111', s: 2 }); /////必须包含参数label且是字符串
function create(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.clor) {
        //假定写错 Error: Property 'clor' does not exist on type 'SquareConfig' 
        newSquare.color = config.clor;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = create({ color: "black" });
var p1 = { x: 10, y: 20 };
p1.x = 5; // 报错error!
