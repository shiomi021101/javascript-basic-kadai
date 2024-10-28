// ボタンとテキストの要素を取得する
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンクリック時のイベントリスナーを設定する
btn.addEventListener('click', () => {
  // 2秒後にテキストを変更する
  setTimeout(() => {
    text.textContent = 'テキストが書き換わりました';
  }, 2000); // 2000ミリ秒 = 2秒
});
