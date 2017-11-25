document.addEventListener('copy', function(e){
    // 選択している文字を取得(フォームの選択文字は取得できない)
    var select_word = window.getSelection().toString();

    var active_element = document.activeElement;
    var value = active_element.value;
    var form_select_word = "";
    if (value) {
        // フォームの選択文字を取得する
        var start = parseInt(active_element.selectionStart, 10);
        var end = parseInt(active_element.selectionEnd, 10);
        form_select_word = value.substring(start, end);
    }

    // 文字を選択していない場合
    if (select_word === "" && form_select_word === "") {
        e.clipboardData.setData("text/plain", document.title + "\n" + document.URL);
        e.preventDefault();
    }
});
