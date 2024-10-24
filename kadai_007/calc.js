//変数numは15までの整数を代入
let num = 15;
//変数numが３と５の倍数の場合は"３と５の倍数です"
if (num % 3 === 0 && num % 5 === 0) {
    console.log("3と5の倍数です");
//変数numが５の倍数の場合は"５の倍数です"
} else if (num % 5 === 0) {
    console.log("5の倍数です");
//変数numが３の倍数の場合は"３の倍数です"
} else if (num % 3 === 0) {
    console.log("3の倍数です");
//それ以外の場合：変数numを出力する
} else {
    console.log(num);
}
