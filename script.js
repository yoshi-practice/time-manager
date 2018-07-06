  'use strict';
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let timerText = document.getElementById('timerText');
    let set_btn = document.getElementById('set_btn');
    let delete_btn = document.getElementById('delete_btn');
    let option_hours;
    let option_minutes;
    let parent_list = document.getElementById('parent_list');
    let record = []; //アラーム設定格納
    let x = 0; // 計算用の変数

    //アラーム設定用オブジェクト
    let Setting = function(sethour, setminute) {
        this.sethour = sethour;
        this.setminute = setminute;
    };

    // 時計の"12:1"を"12:01"と表記
    function adjustDigit(num) {
        let digit;
        if (num < 10) {
            digit = `0${num}`;
        } else {
            digit = num;
        }
        return digit;
    }

    // アラームセット
    set_btn.addEventListener('click', function() {
        //アラームは最大5まで
        let lis = parent_list.getElementsByTagName('li');
        let len = lis.length;
        if (len >= 5) {
            return;
        }

        //設定時間を記録
        option_hours = document.alarm_form.option_hours.value;
        option_minutes = document.alarm_form.option_minutes.value;
        record[x] = new Setting(option_hours, option_minutes);

        //設定時間を表示
        let container_list = document.createElement('li');
        let list_content = document.createTextNode(`${record[x].sethour}時${record[x].setminute}分`);
        parent_list.appendChild(container_list);
        container_list.appendChild(list_content);

        //表示削除用ボタン
        let list_span = document.createElement('span');
        let id_li = document.createAttribute('id');
        let id_span = document.createAttribute('id');
        let span_content = document.createTextNode('削除');
        container_list.appendChild(list_span);
        list_span.appendChild(span_content);
        container_list.setAttributeNode(id_li);
        container_list.id = x;
        container_list.classList.add('deletes');
        list_span.classList.add('delete_btn');

        //設定時刻と表示を削除
        let deletes = document.getElementsByClassName('deletes');
        for (var i = 0, de_len = deletes.length; i < de_len; i++) {
            deletes[i].onclick = function() {
                record[this.id] = 'disabled';
                this.id = 'temp';
                var temp = document.getElementById('temp');
                temp.parentNode.removeChild(temp);
            };
        };
        x++;
    });

    //時計を動かす
    function updateCurrentTime() {
        setTimeout(function() {
            currentDate = new Date();
            hours = adjustDigit(currentDate.getHours());
            minutes = adjustDigit(currentDate.getMinutes());
            seconds = adjustDigit(currentDate.getSeconds());
            timerText.innerHTML = `${hours}:${minutes}:${seconds}`;

            //アラーム機能
            for (var i = 0, len = record.length; i < len; i++) {
                if (record[i].sethour == currentDate.getHours() && record[i].setminute == currentDate.getMinutes() && seconds == 0) {
                    alert('The time is now!');
                };
            };
            updateCurrentTime();
        }, 1000);
    }
    updateCurrentTime();
