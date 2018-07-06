//setInterval(String,mmS) 1000mms = 1s
setInterval(clock, 1000); //1秒ごとに結果を反映
setInterval(getData, 1000); //1秒ごとに結果を反映

function clock() {
    var weeks = new Array("Sun", "Mon", "Thu", "Wed", "Thr", "Fri", "Sat"); //曜日を出力
    var now = new Date();
    var y = now.getFullYear();
    var mo = now.getMonth() + 1;
    var d = now.getDate();
    var w = weeks[now.getDay()];
    var h = now.getHours();
    var mi = now.getMinutes();
    var s = now.getSeconds();

    if (mo < 10) mo = "0" + mo;
    if (d < 10) d = "0" + d;
    if (mi < 10) mi = "0" + mi;
    if (s < 10) s = "0" + s;

    var date = y + "/" + mo + "/" + d + " (" + w + ")";
    var time = h + ":" + mi + ":" + s;

    //document.getElementById("clock_date").innerHTML = y + "/" + mo + "/" + d + " (" + w + ")";
    //document.getElementById("clock_time").innerHTML = h + ":" + mi + ":" + s;
    document.getElementById("clock_date").innerHTML = date;
    document.getElementById("clock_time").innerHTML = time;
    document.getElementById("clock_frame").style.fontSize = window.innerWidth / 10 + "px";

    if (w !== "Sun" || w !== "Sat") { // もし土曜日もしくは日曜日でないなら
        //チャイムを作動させる


    } else {
        // チャイムを作動させない
    }


}

function getData() {
    //var get_time = document.getElementById('clock_time'); // HTML要素オブジェクトを取得
    // console.log(get_time); //[object HTMLParagraphElement]  要素全てをログ出力？


    var get_date = document.getElementById('clock_date').innerHTML;
    console.log(get_date); //日数のみ出力

    var get_time = document.getElementById('clock_time').innerHTML;
    console.log(get_time); //時間のみ出力

    if (get_time === "16:09:10") {
        console.log("時間になりました。");
    }
}
