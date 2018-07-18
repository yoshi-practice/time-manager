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
        
    function dateformat(y, mo, d, w){
        var y =  ("0000" + y).slice(-4);
        var mo = ("00" +  mo).slice(-2);
        var d =  ("00" + d).slice(-2);
        date = y + "/" + mo + "/" + d + " (" + w + ")";
        return date;
    }

    function timeformat(h, mi, s){
        var h = ("00" + h).slice(-2);
        var mi= ("00" + mi).slice(-2);
        var s = ("00" + s).slice(-2);
        time = h + ":" + mi + ":" + s;
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



    if (time in data) {
        bell.play();

        if (data[time].lesson < 8) {
            // alert(`${data[time].lesson}時限目が${data[time].message}ました。`);
        } else {
            alert(data[time].message);
            if (data[time].lesson === 8) {
                //蛍の光を18時までならす
                auld_lang_syne.play(); //蛍の光
            } else {
                // 18時になったので音楽を停止する
                auld_lang_syne.pause();
                auld_lang_syne.currentTime = 0;
            }
        }
    }
}

//setInterval(String,mmS) 1000mms = 1s
setInterval(clock, 1000); //1秒ごとに結果を反映
