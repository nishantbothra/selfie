var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    if (content == 'Take my selfie') {
        speak();
    }
}
function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 3 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    camera = document.getElementById("my_webcam");
    Webcam.attach(camera);
    setTimeout(function(){
        take_selfie();
        save();
    }, 3000);
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 100
});

function take_selfie() {
    Webcam.snap(function(data_uri) {
        document.getElementById("selfie_result").innerHTML = '<img id="selfie" src="' + data_uri + '">';
    });
}

function save() {
    link = document.getElementById("auto_download");
    image = document.getElementById("selfie").src;
    link.href = image;
    link.click();
}







