function start()
{
    navigator.mediaDevices.getUserMedia({audio : true}) ; 
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9antuQo0V/model.json' , modelReady)

}

function modelReady() 
{
    classifier.classify(gotResults) ;  
}

function gotResults(error,results) 
{
    if(error)
    {
        console.error(error)
    }
    else 
    {
        console.log(results) 

        document.getElementById("hearspan").innerHTML = results[0].label ;
        per = results[0].confidence * 100
        document.getElementById("accuracyspan").innerHTML = per.toFixed(2) + " %" ; 

        if(results[0].label == "clap") 
        {
            document.getElementById("clapIMG").src = "aliens-01.gif" ;
            document.getElementById("snapIMG").src = "aliens-02.png" ;
            document.getElementById("bellIMG").src = "aliens-03.png" ;
            document.getElementById("bgIMG").src = "aliens-04.png" ; 

        }

        if(results[0].label == "snapping")  
        {
            document.getElementById("clapIMG").src = "aliens-01.png" ;
            document.getElementById("snapIMG").src = "aliens-02.gif" ;
            document.getElementById("bellIMG").src = "aliens-03.png" ;
            document.getElementById("bgIMG").src = "aliens-04.png" ; 
        }

        if(results[0].label == "bell") 
        {
            document.getElementById("clapIMG").src = "aliens-01.png" ;
            document.getElementById("snapIMG").src = "aliens-02.png" ;
            document.getElementById("bellIMG").src = "aliens-03.gif" ;
            document.getElementById("bgIMG").src = "aliens-04.png" ; 
        }

        if(results[0].label == "Background Noise") 
        {
            document.getElementById("clapIMG").src = "aliens-01.png" ;
            document.getElementById("snapIMG").src = "aliens-02.png" ;
            document.getElementById("bellIMG").src = "aliens-03.png" ;
            document.getElementById("bgIMG").src = "aliens-04.gif" ; 

        }
    }
}