var test = document.getElementById('startBtn');
var time = 7200;
var min = ""; 
var sec = ""; 
var start = new Audio('./sounds/start.mp3')
var oneFive = new Audio('./sounds/15.mp3')
var threeZero = new Audio('./sounds/30.mp3')
var oneFiveOneZero = new Audio('./sounds/1510.mp3')
var oneFiveThreeZero = new Audio('./sounds/1530.mp3')
var threeZeroOneZero = new Audio('./sounds/3010.mp3')
var threeZeroThreeZero = new Audio('./sounds/3030.mp3')
var end = new Audio('./sounds/End.mp3')
var endOneZero = new Audio('./sounds/End10.mp3')
var endThreeZero = new Audio('./sounds/End30.mp3')
var bool = 0;

test.addEventListener('click', function(){
  if ( bool == 0){
    var x = setInterval(function() {

      min = parseInt(time/60);
      sec = time%60;

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
        oneFiveThreeZero.play();
        document.getElementById('timer').style.color = 'white';
      }
      if (time == 6299 || time == 4499 || time == 2699 || time == 899) {
        oneFive.play();
        document.getElementById('timer').style.color = 'white';
      }
      if (time == 5399 || time == 3599 || time == 1799) {
        threeZero.play();
        document.getElementById('timer').style.color = 'white';
      }
      if (time == 6309 || time == 4509 || time == 2709 || time == 909) {
        oneFiveOneZero.play();
        document.getElementById('timer').style.color = 'red';
      }
      if (time == 6329 || time == 4529 || time == 2729 || time == 929) {
        oneFiveThreeZero.play();
      }
      if (time == 5409 || time == 3609 || time == 1809) {
        threeZeroOneZero.play();
        document.getElementById('timer').style.color = 'red';
      }
      if (time == 5429 || time == 3629 || time == 1829) {
        threeZeroThreeZero.play();
      }
      if (time == 29){
        endThreeZero.play();
      }
      if (time == 9){
        endOneZero.play();
        document.getElementById('timer').style.color = 'red';
      }
      if (time < 0) {
        clearInterval(x);
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