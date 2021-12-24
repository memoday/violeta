var test = document.getElementById('test');
var time = 7200; //기준시간 작성
var min = ""; //분
var sec = ""; //초
var start = new Audio('./sounds/start.m4a')
var oneFive = new Audio('./sounds/15.m4a')
var threeZero = new Audio('./sounds/30.m4a')
var oneFiveOneZero = new Audio('./sounds/1510.m4a')
var oneFiveThreeZero = new Audio('./sounds/1530.m4a')
var threeZeroOneZero = new Audio('./sounds/3010.m4a')
var threeZeroThreeZero = new Audio('./sounds/3030.m4a')
var end = new Audio('./sounds/End.m4a')
var endOneZero = new Audio('./sounds/End10.m4a')
var endThreeZero = new Audio('./sounds/End30.m4a')
var bool = 0;

test.addEventListener('click', function(){
  if ( bool == 0){
    var x = setInterval(function() {

      min = parseInt(time/60); //몫을 계산
      sec = time%60; //나머지를 계산

      document.getElementById("timer").innerHTML = min + "분" + sec + "초";
      time--;
      bool++;

//120분 7200 타이머 시작
//105분 6300 15분 알림
//90분 5400 30분 알림
//75분 4500 15분 알림
//60분 3600 30분 알림
//45분 2700 15분 알림
//30분 1800 30분 알림
//15분 900 15분 알림
//0분 0 30분 알림

      if (time == 7199) {
        start.play();
        document.getElementById('timer').style.color = 'red';
      }
      if (time == 6299 || time == 4499 || time == 2699 || time == 899) {
        oneFive.play();
      }
      if (time == 5399 || time == 3599 || time == 1799) {
        threeZero.play();
      }
      if (time == 6309 || time == 4509 || time == 2709 || time == 909) {
        oneFiveOneZero.play();
      }
      if (time == 6329 || time == 4529 || time == 2729 || time == 929) {
        oneFiveThreeZero.play();
      }
      if (time == 5409 || time == 3609 || time == 1809) {
        threeZeroOneZero.play();
      }
      if (time == 5429 || time == 3629 || time == 1829) {
        threeZeroThreeZero.play();
      }
      if (time == 29){
        endThreeZero.play();
      }
      if (time == 9){
        endOneZero.play();
      }
      if (time < 0) {
        clearInterval(x); //setInterval() 실행을 끝냄
        end.play();
        document.getElementById("timer").innerHTML = "수고하셨습니다.";
        document.getElementById('timer').style.backgroundColor = 'red';
        setTimeout(timeout, 5000)
      }
    }, 1000)}
    
  else {
    history.go(0);
  };

  })