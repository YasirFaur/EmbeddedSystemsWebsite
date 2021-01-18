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

basicsArticles.onclick = function(){
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

basics.onclick = function() {
    "use strict"
    topic.style.display = 'flex';//for showing articles or topics
    basicsArticles.style.display = 'inline';
    arduinoArticles.style.display = 'none';
    microArticles.style.display = 'none';
    iotArticles.style.display = 'none';
    marginCorrect();
    aboutus.style.display = 'none';
    social.style.paddingTop = '200px';
}

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

