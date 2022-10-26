function preload()
{
    classifier=ml5.imageClassifier('Doodlenet');
}

function setup()
{
canvas=createCanvas(370,370)
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas);
synth=window.speechSynthesis;
}

function ClearCanvas()
{
    background("white");
    
}

function draw()
{
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }

}


function classifyCanvas()
{
    classifier.classify(canvas,gotResult);
}

function gotResult(error,results)
{
    if (error){
        console.error(error);
    }
console.log(results);
document.getElementById('label').innerHTML = 'Label:' + result[0].label;

document.getElementById('confidence').inneraHTML = 'Confidence:' + Math.round(results[0].confidence*100) + '%';

utterThis=new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);
}