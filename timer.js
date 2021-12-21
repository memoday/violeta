
            var time = 7200; //기준시간 작성
            var min = ""; //분
            var sec = ""; //초
          
            //setInterval(함수, 시간) : 주기적인 실행
            var x = setInterval(function() {
              //parseInt() : 정수를 반환
              min = parseInt(time/60); //몫을 계산
              sec = time%60; //나머지를 계산
          
              document.getElementById("timer").innerHTML = min + "분" + sec + "초";
              time--;
          
              //타임아웃 시
              if (time < 60) {
                document.getElementById('box').style.backgroundColor = 'orange';
              }
              if (time < 55) {
                document.getElementById('box').style.backgroundColor = 'black';
              }
              if (time < 30) {
                document.getElementById('box').style.backgroundColor = 'red';
              }
              if (time < 25) {
                document.getElementById('box').style.backgroundColor = 'black';
              }
              if (time < 0) {
                clearInterval(x); //setInterval() 실행을 끝냄
                document.getElementById("timer").innerHTML = "시간초과";
                document.getElementById('box').style.backgroundColor = 'red';
                setTimeout(timeout, 5000)
              }
            }, 1000);