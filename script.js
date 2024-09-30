// Script.js
// Correct Pin Value
var plantingaudio = new Audio('sounds/plantingsound1.mp3');
var plantedaudio = new Audio('sounds/planted2.mp3');
let correctPin = "1234";

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
        } else if (
            pinInput.value ===
            correctPin
        ) {
            alert("Correct Arming Code");
            alert("Planting...");
        setTimout(function() {
            plantingaudio.play();
        }, 1000)
        setTimeout(function() {
            plantedaudio.play();
        }, 3200)
            setTimeout(function, 40000)
        } else {
            alert("Incorrect PIN");
        }
        // Reset the input
        pinInput.value = "";
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
