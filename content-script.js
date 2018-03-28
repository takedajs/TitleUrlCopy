
window.setInterval(getCheckCopy,1000)

var checkCopy = "";
//オプションで設定した情報を取得
function getCheckCopy(){
    browser.storage.local.get('checkCopy', function(res) {
        checkCopy = res.checkCopy;
    });
}

var isKeyPush = [];
document.onkeydown = keyDown;
document.onkeyup = keyUp;

var isAllTabs = false;

function keyDown(e) {

    isKeyPush[e.key] = true;

    if (isKeyPush["x"] && isKeyPush["c"]) {
        console.log(22222);
        isAllTabs = true;
    }
}

function keyUp(e) {
    console.log(33333);
    isKeyPush[e.key] = false;
}

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

        //オプションで選択した取得条件に合わせてコピーするものを変える
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
