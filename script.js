// Script.js
// Correct Pin Value
let beepingaudio = new Audio('sounds/beeping4.mp3');
let correctPin = "7355608";
let defusePin = "834734";

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
          }
            function audio7() {
                beepingaudio.pause();
          }
            setTimeout(audio7, 10100);
        }
        else {
            alert("Incorrect PIN");
        }

            
        
        // Reset the input
        pinInput.value = "*******";
    }
);

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
