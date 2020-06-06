$("#button1").click(() => {
    alert("Yeah, you clicked me")
});

$("#button2").click(() => {
    $("#button1").text("changed text")
});

let input = "blue";

$("#button3").one("click",() => {
    $("button").css("background-color", input)
});