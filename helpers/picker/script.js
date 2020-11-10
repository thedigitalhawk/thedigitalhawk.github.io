var nameArray = [];

$("#choose").click(function () {
    pickTheName();
});

//var x = document.getElementById("myAudio");

// function andWereDone() {
//     console.log("Done");
//     //document.querySelector(".gifBox").style.opacity = "100";

//     //document.querySelector(".boom").style.display = "block";
//    // x.play();

//     //setTimeout(() => {
//         //document.querySelector(".gifBox").style.display = "none";
//        // document.querySelector(".boom").style.display = "none";
//     //}, 750);
//     //setTimeout(() => {
//       //  document.querySelector(".gifBox").style.opacity = "0";
//     //}, 1500);
// }

function pickTheName() {
    document.querySelector(".peopleCycle").style.visibility = "visible";
    var names = document.getElementById("names").value;
    document.querySelector("#choose").disabled = true;

    var nameArray = names.split(",");

    fastCycle = setTimeout(() => {
        clearInterval(nameCycle);
        setTimeout(() => {
            clearInterval(nameCycle2);
            setTimeout(() => {
                clearInterval(nameCycle3);
                document.querySelector("#choose").disabled = false;
                //andWereDone();
            }, 2000);
        }, 500);
    }, 750);

    nameCycle = setInterval(() => {
        $("#tribute").text(
            nameArray[Math.floor(Math.random() * nameArray.length)]
        );
    }, 25);

    nameCycle2 = setInterval(() => {
        $("#tribute").text(
            nameArray[Math.floor(Math.random() * nameArray.length)]
        );
    }, 50);

    nameCycle3 = setInterval(() => {
        $("#tribute").text(
            nameArray[Math.floor(Math.random() * nameArray.length)]
        );
    }, 100);

    let tribute = document.querySelector("#tribute").innerText;

    nameArray = nameArray.filter(function (s) {
        return s !== tribute;
    });
    console.log(nameArray);
    document.getElementById("names").value = nameArray;
    document.querySelector(".close").style.visibility = "visible";

    //$("#tribute").text(tribute);
}

function changeName() {
    $("#tribute").text(tribute);
}

function closeCycle() {
    pickTheName();
    //document.querySelector(".peopleCycle").style.visibility = "hidden";
    //document.querySelector(".close").style.visibility = "hidden";
}