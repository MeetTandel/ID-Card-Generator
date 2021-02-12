function displayCard() {
    //display id card when button is clicked.
    document.querySelector(".card").style.display = "flex";

    //get all vlaues when text is typed in input boxes.
    let name = document.querySelector("#name").value;
    let college = document.querySelector("#college").value;
    let location = document.querySelector("#location").value;

    // display stored value in respective attribuetes in card
    document.querySelector("#displayName").innerHTML = name;
    document.querySelector("#displayCollege").innerHTML = college;
    document.querySelector("#displayLocation").innerHTML = location;
}

let loadFile = function (event) {
    let reader = new FileReader();
    reader.onload = function () {
        let output1 = document.querySelector("#inputImage");
        let output2 = document.querySelector("#outputImage");
        output1.src = reader.result;
        output2.src = reader.result;
        output1.style.display = "block";
    }
    reader.readAsDataURL(event.target.files[0]);
}