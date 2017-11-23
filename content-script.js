document.addEventListener('copy', function(e){
    // 選択している文字を取得
    var select_word = window.getSelection().toString();

    // 文字を選択していない場合
    if (select_word === "") {
        e.clipboardData.setData("text/plain", document.title + "\n" + document.URL);
        e.preventDefault();
    }
});
