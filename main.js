Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    image_quality:99
});
Webcam.attach('#camera')
camera = document.getElementById("camera");

function Get_Object(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML = '<img id="captured_img" src="'+data_url+'"/>';
    });
}
console.log("ml5.version",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/aLSt0QxGK/model.json",modelLoaded);
function modelLoaded(){
    console.log()
}