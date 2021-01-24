/*Written Yasir Faur*/
/*global marginCorrect,document, window*/
var arduino = document.getElementById('arduino');//from navigator
var micro = document.getElementById('micro');//from navigator
var iot = document.getElementById('iot');//from navigator
var about = document.getElementById('about');//from navigator
var basics = document.getElementById('basics');//from navigator
var counter = 0;//for making flash in navigator
var setIntervalStatus;// for controlling setInterval function
var myHeader = document.getElementById('myHeader');
var binaryBackground = document.getElementById('binaryBackground');
var arduinoArticles = document.getElementById('arduinoArticles');//for showing or hidding arduino articles
var microArticles = document.getElementById('microArticles');//for showing or hidding micro artcles
var iotArticles = document.getElementById('iotArticles');//for showing or hidding iot articles
var basicsArticles = document.getElementById('basicsArticles');//for showing or hidding basics articles
var myContainer = document.getElementById('myContainer');
var topic = document.getElementById('topic');
var aboutus = document.getElementById('aboutus');
var aboutusAndSocial = document.getElementById('aboutusAndSocial');
var social = document.getElementById('social');
var facebookIcon = document.getElementById('facebookIcon');
var wordpressIcon = document.getElementById('wordpressIcon');
var youtubeIcon = document.getElementById('youtubeIcon');
var myScreen = document.getElementById('myScreen');

var basicsLesson1 = document.getElementById('bl1');
var basicsLesson2 = document.getElementById('bl2');
var basicsLesson3 = document.getElementById('bl3');
var basicsLesson4 = document.getElementById('bl4');
var basicsLesson5 = document.getElementById('bl5');
var basicsLesson6 = document.getElementById('bl6');
var basicsLesson7 = document.getElementById('bl7');
var basicsLesson8 = document.getElementById('bl8');
var basicsLesson9 = document.getElementById('bl9');
var basicsLesson10 = document.getElementById('bl10');
var basicsLesson11 = document.getElementById('bl11');
var basicsLesson12 = document.getElementById('bl12');
var basicsLesson13 = document.getElementById('bl13');
var basicsLesson14 = document.getElementById('bl14');

function toBasicsLesson1() {/*moving to lesson1 from basics*/
    "use strict";
    window.open('../EmbeddedSystemsWebsite/basics/basics1.html', 'myScreen');
}

function toBasicsLesson2() {/*moving to lesson2 from basics*/
    "use strict";
    window.open('../EmbeddedSystemsWebsite/basics/basics2.html', 'myScreen');
}


function toBasicsLesson3() {/*moving to lesson3 from basics*/
    "use strict";
    window.open('../EmbeddedSystemsWebsite/basics/basics3.html', 'myScreen');
}

function toBasicsLesson4() {/*moving to lesson4 from basics*/
    "use strict";
    window.open('../EmbeddedSystemsWebsite/basics/basics4.html', 'myScreen');
}

function toBasicsLesson5() {/*moving to lesson5 from basics*/
    "use strict";
    window.open('../EmbeddedSystemsWebsite/basics/basics5.html', 'myScreen');
}

function toBasicsLesson6() {/*moving to lesson6 from basics*/
    "use strict";
    window.open('../EmbeddedSystemsWebsite/basics/basics6.html', 'myScreen');
}

function toBasicsLesson7() {/*moving to lesson7 from basics*/
    "use strict";
    window.open('../EmbeddedSystemsWebsite/basics/basics7.html', 'myScreen');
}

function toBasicsLesson8() {/*moving to lesson8 from basics*/
    "use strict";
    window.open('../EmbeddedSystemsWebsite/basics/basics8.html', 'myScreen');
}

function toBasicsLesson9() {/*moving to lesson9 from basics*/
    "use strict";
    window.open('../EmbeddedSystemsWebsite/basics/basics9.html', 'myScreen');
}

function toBasicsLesson10() {/*moving to lesson10 from basics*/
    "use strict";
    window.open('../EmbeddedSystemsWebsite/basics/basics10.html', 'myScreen');
}

function toBasicsLesson11() {/*moving to lesson11 from basics*/
    "use strict";
    window.open('../EmbeddedSystemsWebsite/basics/basics11.html', 'myScreen');
}

function toBasicsLesson12() {/*moving to lesson12 from basics*/
    "use strict";
    window.open('../EmbeddedSystemsWebsite/basics/basics12.html', 'myScreen');
}


function toBasicsLesson13() {/*moving to lesson13 from basics*/
    "use strict";
    window.open('../EmbeddedSystemsWebsite/basics/basics13.html', 'myScreen');
}


function toBasicsLesson14() {/*moving to lesson14 from basics*/
    "use strict";
    window.open('../EmbeddedSystemsWebsite/basics/basics14.html', 'myScreen');
}


basicsLesson1.onclick = function () {"use strict"; toBasicsLesson1(); };/*move to lesson1 from basics*/
basicsLesson2.onclick = function () {"use strict"; toBasicsLesson2(); };/*move to lesson2 from basics*/
basicsLesson3.onclick = function () {"use strict"; toBasicsLesson3(); };/*move to lesson3 from basics*/
basicsLesson4.onclick = function () {"use strict"; toBasicsLesson4(); };/*move to lesson4 from basics*/
basicsLesson5.onclick = function () {"use strict"; toBasicsLesson5(); };/*move to lesson5 from basics*/
basicsLesson6.onclick = function () {"use strict"; toBasicsLesson6(); };/*move to lesson6 from basics*/
basicsLesson7.onclick = function () {"use strict"; toBasicsLesson7(); };/*move to lesson7 from basics*/
basicsLesson8.onclick = function () {"use strict"; toBasicsLesson8(); };/*move to lesson8 from basics*/
basicsLesson9.onclick = function () {"use strict"; toBasicsLesson9(); };/*move to lesson9 from basics*/
basicsLesson10.onclick = function () {"use strict"; toBasicsLesson10(); };/*move to lesson10 from basics*/
basicsLesson11.onclick = function () {"use strict"; toBasicsLesson11(); };/*move to lesson11 from basics*/
basicsLesson12.onclick = function () {"use strict"; toBasicsLesson12(); };/*move to lesson12 from basics*/
basicsLesson13.onclick = function () {"use strict"; toBasicsLesson13(); };/*move to lesson13 from basics*/
basicsLesson14.onclick = function () {"use strict"; toBasicsLesson14(); };/*move to lesson14 from basics*/


basicsArticles.onclick = function () {
    "use strict";
    window.location.href = '#myScreen';
};

iotArticles.onclick  = function () {
    "use strict";
    window.location.href = '#myScreen';
};

microArticles.onclick  = function () {
    "use strict";
    window.location.href = '#myScreen';
};

arduinoArticles.onclick  = function () {
    "use strict";
    window.location.href = '#myScreen';
};

facebookIcon.onclick = function () {
    "use strict";
    window.open("https://www.facebook.com/yasir.faur.3", "_blank", "", "false");
};

wordpressIcon.onclick = function () {
    "use strict";
    window.open("https://yasirfaur.wordpress.com", "_blank", "", "false");
};

youtubeIcon.onclick = function () {
    "use strict";
    window.open("https://www.youtube.com/c/YasirFaur", "_blank", "", "false");
};

function moving() {//making flash by changing shadow attribute
    "use strict";
    /*counter += 1;
    switch (counter) {
    case 1:
        arduino.style.textShadow = '0px 0px 8px #fff';
        about.style.textShadow = '0px 0px 2px #fff';
        break;
    case 2:
        micro.style.textShadow = '0px 0px 8px #fff';
        arduino.style.textShadow = '0px 0px 2px #fff';
        break;
    case 3:
        iot.style.textShadow = '0px 0px 8px #fff';
        micro.style.textShadow = '0px 0px 2px #fff';
        break;
    case 4:
        about.style.textShadow = '0px 0px 8px #fff';
        iot.style.textShadow = '0px 0px 2px #fff';
        counter = 0;
        break;
    }*/
    
    var binaryString = "", bit = 0;//binary decoration
    for (bit = 0; bit < 128; bit += 1) {//binary decoration
        if ((Math.round(((Math.random() * 100))) % 2) === 1) {//binary decoration
            binaryString += "1";//binary decoration
        } else {//binary decoration
            binaryString += "0";//binary decoration
        }//binary decoration
    }//binary decoration
    binaryBackground.textContent = binaryString;
}

(function () {//self function
    "use strict";
    /*setIntervalStatus = setInterval(moving, 250);*/
    moving();
    marginCorrect();
}());

function marginCorrect() {
    "use strict";
    var value1 = window.innerHeight, value2 = document.body.clientHeight;
    if (value1 > value2) {
        value1 -= value2;
        myHeader.style.marginTop = (value1 / 2) + 'px';
    } else {
        myHeader.style.marginTop = '0px';
    }
}

window.onresize = function () {
    "use strict";
    marginCorrect();
};

basics.onclick = function () {
    "use strict";
    topic.style.display = 'flex';//for showing articles or topics
    basicsArticles.style.display = 'inline';
    arduinoArticles.style.display = 'none';
    microArticles.style.display = 'none';
    iotArticles.style.display = 'none';
    marginCorrect();
    aboutus.style.display = 'none';
    social.style.paddingTop = '200px';
};

arduino.onclick = function () {
    "use strict";
    topic.style.display = 'flex';//for showing articles or topics
    basicsArticles.style.display = 'none';
    arduinoArticles.style.display = 'inline';
    microArticles.style.display = 'none';
    iotArticles.style.display = 'none';
    marginCorrect();
    aboutus.style.display = 'none';
    social.style.paddingTop = '200px';
};

micro.onclick = function () {
    "use strict";
    topic.style.display = 'flex';//for showing articles or topics
    basicsArticles.style.display = 'none';
    arduinoArticles.style.display = 'none';
    microArticles.style.display = 'inline';
    iotArticles.style.display = 'none';
    marginCorrect();
    aboutus.style.display = 'none';
    social.style.paddingTop = '200px';
    
};

iot.onclick = function () {
    "use strict";
    topic.style.display = 'flex';//for showing articles or topics
    basicsArticles.style.display = 'none';
    arduinoArticles.style.display = 'none';
    microArticles.style.display = 'none';
    iotArticles.style.display = 'inline';
    aboutus.style.display = 'none';
    social.style.paddingTop = '200px';
    marginCorrect();
};

about.onclick = function () {
    "use strict";
    topic.style.display = 'none';//for hidding all articles and topics
    aboutus.style.display = 'block';
    social.style.paddingTop = '5px';
    marginCorrect();
};

