//ラジオボタンを変更した時に実行
document.getElementById("copy").onchange = function(){

    var copy = document.getElementsByName("copy");

    var checkedCopy = "";
    for (var i = 0; i < copy.length; i++) {
        //チェックした値を取得
        if (copy[i].checked) {
            checkedCopy = copy[i].value;
            break;
        }
    }

    //チェックした要素をストレージに格納
    browser.storage.local.set({
        'checkCopy': checkedCopy
    });
}

//ストレージに格納されている情報をラジオボタンに反映
browser.storage.local.get('checkCopy', function(res) {
    document.getElementById(res.checkCopy).checked = true;
});
