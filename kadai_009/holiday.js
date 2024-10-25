//holidaysのiを0から順に増やしながら、holidays(i)を出力する
let holidays = ["元日", "成人の日", "建国記念の日", "天皇誕生日", "春分の日", "昭和の日", "憲法記念日", "みどりの日", "こどもの日", "海の日", "山の日", "敬老の日", "秋分の日", "スポーツの日", "文化の日", "勤労感謝の日"];

console.log("for文を使用:");
//宣言 i を繰り返し　増やして出力する
for (let i = 0; i < holidays.length; i++) {
    console.log(holidays[i]);
}

console.log("\nwhile文を使用:");
//宣言　indexを0から始め、ループする。最後のコードまでいったら出力する
let index = 0;
while (index < holidays.length) {
    console.log(holidays[index]);
    index++;
}
