/*Written Yasir Faur*/
/*global document, setInterval, clearInterval */
var startQuiz = document.getElementById('sq');//sq: clik me for starting quiz
var question1 = document.getElementById('q1');//first question 
var question2 = document.getElementById('q2');//second question
var question3 = document.getElementById('q3');//third question
var quizTime = 30;// how many seconds for quiz
var countdownTimer = 0;//for stopping setInterval
var notAgain = 0;// you can start quiz once every quizTime
var result = 0;// result of quiz
var q1a1 = document.getElementById('q1a1');//q1a1: first answer for first question
var q1a2 = document.getElementById('q1a2');//q1a2: second answer for first question
var q1a3 = document.getElementById('q1a3');//q1a3: third answer for first question

var q2a1 = document.getElementById('q2a1');//q2a1: first answer for second question
var q2a2 = document.getElementById('q2a2');//q2a2: second answer for second question
var q2a3 = document.getElementById('q2a3');//q2a3: third answer for second question

var q3a1 = document.getElementById('q3a1');//q3a1: first answer for third question
var q3a2 = document.getElementById('q3a2');//q3a2: second answer for third question
var q3a3 = document.getElementById('q3a3');//q3a3: third answer for third question

startQuiz.onclick = function () {
    'use strict';
    if (notAgain === 0) {
        notAgain = 1;
        question1.style.opacity = "1";
        question2.style.opacity = "1";
        question3.style.opacity = "1";
        
        question1.style.display = 'block';
        question2.style.display = 'block';
        question3.style.display = 'block';
    
        countdownTimer = setInterval(
            function () {
                quizTime = quizTime - 1;
                startQuiz.innerHTML = quizTime;
            
                if (quizTime === 21) {
                    question1.style.opacity = "0.5";
                }
            
                if (quizTime === 12) {
                    question2.style.opacity = "0.5";
                }
            
                if (quizTime === 2) {
                    question3.style.opacity = "0.5";
                }
            
                if (quizTime === 0) {
                    clearInterval(countdownTimer);
                    quizTime = 30;// reset quizTime
                    
                    if (result >= 2) {startQuiz.innerHTML = "أحسنت! يمكنك الانتقال للدرس التالي."; } else {startQuiz.innerHTML = "يمكنك المحاولة مجددا, انقر هنا!"; }
                    
                    notAgain = 0;//reset notAgain, you can again start quiz
                    result = 0;//reset result
                    q1a1.checked = false;//clear answer
                    q1a2.checked = false;//clear answer
                    q1a3.checked = false;//clear answer
                    
                    q2a1.checked = false;//clear answer
                    q2a2.checked = false;//clear answer
                    q2a3.checked = false;//clear answer
                
                    q3a1.checked = false;//clear answer
                    q3a2.checked = false;//clear answer
                    q3a3.checked = false;//clear answer
                    
                    question1.style.display = 'none';//hide first question
                    question2.style.display = 'none';//hide second question
                    question3.style.display = 'none';//hide third question
                }
            },
            1000
        );
    }
};

q1a1.onclick = function () {"use strict"; result += 1; };//right answer
q2a1.onclick = function () {"use strict"; result += 1; };//right answer
q3a1.onclick = function () {"use strict"; result += 1; };//right answer

q1a2.onclick = function () {"use strict"; result += 0; };//I don't know
q2a2.onclick = function () {"use strict"; result += 0; };//I don't know
q3a2.onclick = function () {"use strict"; result += 0; };//I don't know

q1a3.onclick = function () {"use strict"; result -= 1; };//right answer
q2a3.onclick = function () {"use strict"; result -= 1; };//right answer
q3a3.onclick = function () {"use strict"; result -= 1; };//right answer


