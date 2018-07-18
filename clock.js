function clock() {
    "use strict";

    var bell = document.getElementById('bell'),
        auld_lang_syne = document.getElementById('auld_lang_syne'),
        weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], //曜日を出力
        now = new Date(),
        y = now.getFullYear(),
        mo = now.getMonth() + 1,
        d = now.getDate(),
        w = weeks[now.getDay()],
        h = now.getHours(),
        mi = now.getMinutes(),
        s = now.getSeconds();

    // if (mo < 10) {
    //     mo = "0" + mo;
    // }
    // if (d < 10) {
    //     d = "0" + d;
    // }
    // if (mi < 10) {
    //     mi = "0" + mi;
    // }
    // if (s < 10) {
    //     s = "0" + s;
    // }

    var date,
        time;

    function dateformat(y, mo, d, w) {
        var y0 = ("0000" + y).slice(-4);
        var mo0 = ("00" + mo).slice(-2);
        var d0 = ("00" + d).slice(-2);
        date = y0 + "/" + mo0 + "/" + d0 + " (" + w + ")";
        return date;
    }

    function timeformat(h, mi, s) {
        var h0 = ("00" + h).slice(-2);
        var mi0 = ("00" + mi).slice(-2);
        var s0 = ("00" + s).slice(-2);
        time = h0 + ":" + mi0 + ":" + s0;
        return time;
    }

    dateformat(y, mo, d, w);
    timeformat(h, mi, s);


    // var date = y + "/" + mo + "/" + d + " (" + w + ")",
    //     time = h + ":" + mi + ":" + s;

    document.getElementById("clock_date").innerHTML = date;
    document.getElementById("clock_time").innerHTML = time;
    document.getElementById("clock_frame").style.fontSize = window.innerWidth / 10 + "px";

    //var get_time = document.getElementById('clock_time'); // HTML要素オブジェクトを取得
    // console.log(get_time); //[object HTMLParagraphElement]  要素全てをログ出力

    var get_date = document.getElementById('clock_date').innerHTML, //console.log(get_date); //日数のみ出力
        get_time = document.getElementById('clock_time').innerHTML; //console.log(get_time); //時間のみ出力


    //console.log(w); //曜日を出力


    var NOW = Math.floor(bell.currentTime);

    //console.log(NOW);
    if (NOW === 26) {
        bell.pause();
        bell.currentTime = 0;
    }


    const data = {
        "09:30:00": {
            lesson: 0,
            message: "始まり"
        },
        "09:45:00": {
            lesson: 1,
            message: "始まり"
        },
        "10:35:00": {
            lesson: 1,
            message: "終わり"
        },
        "10:45:00": {
            lesson: 2,
            message: "始まり"
        },
        "11:35:00": {
            lesson: 2,
            message: "終わり"
        },
        "11:45:00": {
            lesson: 3,
            message: "始まり"
        },
        "12:35:00": {
            lesson: 3,
            message: "終わり"
        },
        "13:15:00": {
            lesson: 4,
            message: "始まり"
        },
        "14:05:00": {
            lesson: 4,
            message: "終わり"
        },
        "14:15:00": {
            lesson: 5,
            message: "始まり"
        },
        "15:05:00": {
            lesson: 5,
            message: "終わり"
        },
        "15:15:00": {
            lesson: 6,
            message: "始まり"
        },
        "16:05:00": {
            lesson: 6,
            message: "終わり"
        },
        "16:15:00": {
            lesson: 7,
            message: "始まり"
        },
        "17:05:00": {
            lesson: 7,
            message: "終わり"
        },
        "17:50:00": {
            lesson: 8,
            message: "下校する時間の10分前になりました。"
        },
        "18:00:00": {
            lesson: 9,
            message: "下校する時間になりました。"
        }
    };



    function notification() {
        // Notification対応しているかどうか
        if (window.Notification) {
            // alert('Notificationは有効です');

            // Permissionの確認
            if (Notification.permission === 'granted') {

                // 許可されている場合はNotificationで通知
                // alert('通知許可されています');


            } else if (Notification.permission === 'denied') {

                // alert('通知拒否されています');

            } else if (Notification.permission === 'default') {

                // alert('通知可能か不明です');

                // 許可が取れていない場合はNotificationの許可を取る
                Notification.requestPermission(function (result) {
                    if (result === 'denied') {

                        // alert('リクエスト結果：通知許可されませんでした');

                    } else if (result === 'default') {

                        //     alert('リクエスト結果：通知可能か不明です');

                    } else if (result === 'granted') {

                        //     alert('リクエスト結果：通知許可されました！！');

                    }
                })
            }
        } else {
            //alert('Notificationは無効です');
        }

    }

    notification();


    if (time in data) {
        bell.play();

        if (data[time].lesson < 8) {
            // alert(`${data[time].lesson}時限目が${data[time].message}ました。`);
            var n = new Notification(`${data[time].lesson}時限目が${data[time].message}ました。`);
        } else {
            alert(data[time].message);
            if (data[time].lesson === 8) {
                //蛍の光を18時までならす
                auld_lang_syne.play(); //蛍の光
                var n = new Notification(data[time].message);
            } else {
                // 18時になったので音楽を停止する
                var n = new Notification(data[time].message);
                auld_lang_syne.pause();
                auld_lang_syne.currentTime = 0;
            }
        }
    }
}




//setInterval(String,mmS) 1000mms = 1s
setInterval(clock, 1000); //1秒ごとに結果を反映
