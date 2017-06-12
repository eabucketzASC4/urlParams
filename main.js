//mahdi-fied from https://www.sitepoint.com/url-parameters-jquery/
//takes a string argument - returns the value of the parameter (by name) from href, if it exists
function getParam(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if(results){
        return results[1];
    }else{
        return undefined;
    }
}

//Grabbing params
var circleCount = getParam("circleCount") || 1;
var colorPick = getParam("colorPick") || "red";
var shapePick = getParam("shapePick") || "circle";

function setup(){
    createCanvas(400,400);
    background(123);

    fill(colorPick);
    if(shapePick == "circle"){
        for(var i = 0; i<circleCount;i++){
            ellipse(random(width),random(height),20,20);
        }
    }else if(shapePick == "square"){
        for(var i = 0; i<circleCount;i++){
            rect(random(width),random(height),20,20);
        }
    }
}
