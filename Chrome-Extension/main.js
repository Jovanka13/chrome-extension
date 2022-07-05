window.onload = function () {

    function changeImage() {   
        let backgroundImg = ["images/img1.jpg",
                            "images/img2.jpg",
                            "images/img3.jpg",
                            "images/img4.jpg",
                            "images/img5.jpg",
                            "images/img6.jpg",
                            "images/img7.jpg",
                            "images/img8.jpg",
                            "images/img9.jpg",
                            "images/img10.jpg",
                            "images/img11.jpg",
                            "images/img12.jpg",
                            "images/img13.jpg"
        ];
        let i = Math.floor((Math.random() * 13));
        document.body.style.backgroundImage = 'url("' + backgroundImg[i] + '")';
    }
    window.setInterval(changeImage, 5000);
}


function clock() {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let period = "AM";
  
    if (hrs == 0) hrs = 12;
    if (hrs > 12) {
      hrs = hrs - 12;
      period = "PM";
    }
  
    hrs = hrs < 10 ? `0${hrs}` : hrs;
    mins = mins < 10 ? `0${mins}` : mins;
  
    let time = `${hrs}:${mins} ${period}`;
    setInterval(clock, 1000);
    document.getElementById("clock").innerText = time;
}
  
clock();



function openOption() {
    document.getElementById("option").classList.toggle("option-open");
}

document.getElementById("option-btn").addEventListener('click', openOption);

function saveName() {
    localStorage.setItem('receivedName', userName);
}

let userName = localStorage.getItem('receivedName');

if (userName === null) {
    userName = "friend";
}

function changeName() {
    userName = document.getElementById("name-input").value;
    saveName();

    getGreeting();
}

document.getElementById("name-form").addEventListener('submit', function(e) {
    e.preventDefault();

    changeName();
});

function getGreeting() {
    document.getElementById("message").innerHTML  = `Hello, ${userName}. Enjoy your day!`;
}