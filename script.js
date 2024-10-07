// Script.js
// Correct Pin Value
let colorChange1 = document.getElementById("pinpad-input");
let beepingaudio = new Audio('sounds/beeping4.mp3');
let correctPin = "7355608";
let defusePin = "999999";
var view = !1; // holds boolean value of the show password input (default is false)

const pass = [], // password array
symbol = "*", // symbol to be used

let btns =
    document.getElementsByClassName(
        "pinpad-btn"
    );
let pinInput = document.getElementById(
    "pinpad-input"
);

for (let i = 0; i < btns.length; i++) {
    let btn = btns.item(i);
    if (
        btn.id &&
        (btn.id === "submit-btn" ||
            btn.id === "delete-btn")
    )
        continue;

    // Add onclick event listener to 
    // Every button from 0 - 9
    btn.addEventListener(
        "click",
        (e) => {
            pinInput.value +=
                e.target.value;
        }
    );
}

let submitBtn = document.getElementById(
    "submit-btn"
);
let delBtn = document.getElementById(
    "delete-btn"
);
let modal =
    document.getElementById("modal");
let result =
    document.getElementById("result");
let closeBtn =
    document.getElementById("close");

submitBtn.addEventListener(
    "click",
    () => {
        if (
            !pinInput ||
            !pinInput.value ||
            pinInput.value === ""
        ) {
            alert(
                "Please enter the arming code first!"
            );
        }
        else if (
            pinInput.value ===
            correctPin
        ) {
            alert("Correct Arming Code");
            function audio1() {
                var plantingaudio = new Audio('sounds/plantingsound1.mp3');
                plantingaudio.play();
                alert("Planting...");
                setTimeout(audio2, 3200);
            }
            setTimeout(audio1, 1000);
            function audio2() {
                var plantedaudio = new Audio('sounds/planted2.mp3');
                plantedaudio.play();
                setTimeout(audio4, 100);
                colorChange1.style.background = "red";
                colorChange1.style.animation = "blink 600ms infinite";
            }
            function audio4() {
                beepingaudio.play();
            }
        
        }
        else if (
            pinInput.value ===
            defusePin
        ) {
          function audio5() {
              var defusingaudio = new Audio('sounds/defusing5.mp3');
              defusingaudio.play();
              alert("Defusing...");
              setTimeout(audio6, 10000);
          }
          setTimeout(audio5, 100);
          function audio6() {
              var defusedaudio = new Audio('sounds/defused6.mp3');
              defusedaudio.play();
              colorChange1.style.background = "green";
              colorChange1.style.animation = "none";
              setTimeout(audio7, 100);
          }
            function audio7() {
                beepingaudio.pause();
          }
        }
        else {
            alert("Incorrect PIN");
        }

            
        
        // Reset the input
        pinInput.value = "999999";
    }
);
// on input handler function
inputHandle = (e)=>{
    if(!e.data && e.inputType=="deleteContentBackward"){
        pass.pop(); // if delete key pressed, remove last value
    }else{
        pass.push(e.data) //else add value pressed to array
    }
    e.target.value = view?pass.join(""):pass.map(i=>symbol).join("");
}
delBtn.addEventListener("click", () => {
    if (pinInput.value)
        pinInput.value =
            pinInput.value.substr(
                0,
                pinInput.value.length -
                    1
            );
});

closeBtn.addEventListener(
    "click",
    () => {
        modal.style.display = "none";
    }
);
