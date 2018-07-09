//setInterval(String,mmS) 1000mms = 1s
setInterval(clock, 1000); //1秒ごとに結果を反映


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


    if (mo < 10) {
        mo = "0" + mo
    };
    if (d < 10) {
        d = "0" + d;
    }
    if (mi < 10) {
        mi = "0" + mi;
    }
    if (s < 10) {
        s = "0" + s;
    }

    var date = y + "/" + mo + "/" + d + " (" + w + ")";
    var time = h + ":" + mi + ":" + s;


    document.getElementById("clock_date").innerHTML = y + "/" + mo + "/" + d + " (" + w + ")";
    document.getElementById("clock_time").innerHTML = h + ":" + mi + ":" + s;
    //document.getElementById("clock_date").innerHTML = date;
    //document.getElementById("clock_time").innerHTML = time;
    document.getElementById("clock_frame").style.fontSize = window.innerWidth / 10 + "px";






    //var get_time = document.getElementById('clock_time'); // HTML要素オブジェクトを取得
    // console.log(get_time); //[object HTMLParagraphElement]  要素全てをログ出力？


    var get_date = document.getElementById('clock_date').innerHTML;
    console.log(get_date); //日数のみ出力

    var get_time = document.getElementById('clock_time').innerHTML;
    console.log(get_time); //時間のみ出力


    console.log(w);

    if (w === "Sun" || w === "Sat") { // もし土曜日もしくは日曜日でないなら
        console.log("休日");

        // チャイムを作動させない
    } else {
        console.log("平日");

        switch (time) {
            case "09:30:00": //0限START
                document.getElementById("Sound").play();
                alert("0限目が始まりました。");
                break;

            case "09:45:00": //0限END・1限START
                document.getElementById("Sound").play();
                alert("1限目が始まりました。");
                break;

            case "10:35:00": //1限END・休み時間START
                document.getElementById("Sound").play();
                alert("1限目が終わりました。");
                break;

            case "10:45:00": //休み時間END・2限START
                document.getElementById("Sound").play();
                alert("2限目が始まりました。");
                break;

            case "11:35:00": //2限END・休み時間START
                document.getElementById("Sound").play();
                alert("2限目が終わりました。");
                break;

            case "11:45:00": //休み時間END・3限START
                document.getElementById("Sound").play();
                alert("3限目が始まりました。");
                break;

            case "12:35:00": //3限END・昼休みSTART
                document.getElementById("Sound").play();
                alert("3限目が終わりました。");
                break;

            case "13:15:00": //昼休みEND・4限START
                document.getElementById("Sound").play();
                alert("4限目が始まりました。");
                break;

            case "14:05:00": //4限END・休み時間START
                document.getElementById("Sound").play();
                alert("4限目が終わりました。");
                break;

            case "14:15:00": //休み時間END・5限START
                document.getElementById("Sound").play();
                alert("5限目が始まりました。");
                break;

            case "15:05:00": //5限END・休み時間START
                document.getElementById("Sound").play();
                alert("5限目が終わりました。");
                break;

            case "15:15:00": //休み時間END・6限START
                document.getElementById("Sound").play();
                alert("6限目が始まりました。");

                break;

            case "16:05:00": //6限END・終礼など
                document.getElementById("Sound").play();
                alert("6限目が終わりました。");

                break;

            case "16:15:00": //休み時間END・7限START
                document.getElementById("Sound").play();
                alert("7限目が始まりました。");

                break;

            case "17:05:00": //7限END
                document.getElementById("Sound").play();
                alert("7限目が終わりました。");

                break;

            case "17:50:00": //下校の促し

                document.getElementById("Sound").play();
                alert("下校する時間の10分前になりました。");


                break;

            case "18:00:00": //完全下校
                document.getElementById("Sound").play();
                alert("下校する時間になりました。");

                //音楽を再生する

                break;

            default:
                break;

        }
    }


}
