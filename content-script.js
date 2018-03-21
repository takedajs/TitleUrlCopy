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

        var ua = window.navigator.userAgent.toLowerCase();
        var is_mac = (ua.indexOf("mac") > -1);

        if (is_mac) {
            var new_line_word = "\n";
        } else {
            var new_line_word = "\r\n";
        }

        //オプションで設定した情報を取得
        var checkCopy = "";
        browser.storage.local.get('checkCopy', function(res) {
            checkCopy = res.checkCopy;
        });

        if (checkCopy == "urlOnly") {
            e.clipboardData.setData("text/plain", document.URL);
        } else if (checkCopy == "titleOnly") {
            e.clipboardData.setData("text/plain", document.title);
        } else {
            e.clipboardData.setData("text/plain", document.title + new_line_word + document.URL);
        }
        e.preventDefault();

    }
});

function sleep(time) {
    const d1 = new Date();
    while (true) {
        const d2 = new Date();
        if (d2 - d1 > time) {
            return;
        }
    }
}
