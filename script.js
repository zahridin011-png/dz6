     let now = new Date();
        let nextYear = new Date(now.getFullYear() + 1, 0, 1);
        let days = Math.ceil((nextYear - now) / (1000 * 60 * 60 * 24));
        document.getElementById('newYear').innerText = "До Нового года осталось " + days + " дней";

        let tSec = 10;
        let tInt;
        function startTimer() {
            clearInterval(tInt);
            tInt = setInterval(() => {
                if (tSec > 0) {
                    tSec--;
                    document.getElementById('timerText').innerText = tSec;
                } else {
                    clearInterval(tInt);
                    alert("Время вышло!");
                }
            }, 1000);
        }
        function resetTimer() {
            clearInterval(tInt);
            tSec = 10;
            document.getElementById('timerText').innerText = tSec;
        }

        let swSec = 0;
        let swInt;
        function startSw() {
            clearInterval(swInt);
            swInt = setInterval(() => {
                swSec++;
                document.getElementById('swText').innerText = swSec;
            }, 1000);
        }
        function addLap() {
            let li = document.createElement('li');
            li.innerText = "Круг: " + swSec + " сек";
            document.getElementById('laps').append(li);
        }
        function resetSw() {
            clearInterval(swInt);
            swSec = 0;
            document.getElementById('swText').innerText = 0;
            document.getElementById('laps').innerHTML = "";
        }

        let alarmInt;
        function setAlarm() {
            let userTime = document.getElementById('alarmInput').value;
            document.getElementById('alarmMsg').innerText = "Ждём " + userTime + "...";
            
            clearInterval(alarmInt);
            alarmInt = setInterval(() => {
                let d = new Date();
                let current = String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0');
                
                if (current === userTime) {
                    document.getElementById('alarmMsg').innerText = "Пора!";
                    clearInterval(alarmInt);
                }
            }, 1000);
        }
