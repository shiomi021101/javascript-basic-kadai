// 現在の日付を調べる
const today = new Date();

// 年、月、日を調べる
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

// フォーマットに合わせて出力する
console.log(`${year}年${month}月${day}日`);
