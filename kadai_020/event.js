// HTMLの要素を取得する
const textElement = document.getElementById("text");
const buttonElement = document.getElementById("btn");

// ボタンがクリックされた時の処理をする
buttonElement.addEventListener("click", () => {
    // 文章を変更する
    textElement.textContent = "ボタンがクリックされました！";
});
