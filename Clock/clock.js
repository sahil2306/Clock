function setTime(){  
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    var r = canvas.width/2;
    context.fillStyle = "black";
    context.beginPath();
    context.arc(r,r,r,0,2*Math.PI);
    context.fill();
    context.stroke();

    context.fillStyle = "white";
    context.font = r/10 + "px arial";
    context.textAlign = "center";
    context.textBaseline = "middle";

    for(var i=1;i<=12;i++){
        context.fillText(i,r + r * 0.9*Math.sin(i*2*Math.PI/12),r - (r*0.9*Math.cos(i*2*Math.PI/12)));
    }

    var date = new Date();

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    var fullhours = (hours%12) + (minutes/60) + (seconds/3600);
    var hoursAngle = fullhours * 2 * Math.PI/12;
    var minutesAngle = minutes * 2 * Math.PI/60;
    var secondsAngle = seconds * 2 * Math.PI/60;

    context.beginPath();
    context.arc(r,r,10,0,2*Math.PI);
    context.fill();
    
    context.strokeStyle = "white";
    context.lineWidth = 5;
    context.moveTo(r,r);
    context.lineTo(r + r * 0.6*Math.sin(hoursAngle),r - (r*0.6*Math.cos(hoursAngle)));
    context.stroke();

    context.strokeStyle = "white";
    context.lineWidth = 3;
    context.moveTo(r,r);
    context.lineTo(r + r * 0.8*Math.sin(minutesAngle),r - (r*0.8*Math.cos(minutesAngle)));
    context.stroke();

    context.strokeStyle = "white";
    context.lineWidth = 2;
    context.moveTo(r,r);
    context.lineTo(r + r * 0.8*Math.sin(secondsAngle),r - (r*0.8*Math.cos(secondsAngle)));
    context.stroke();
    
    var midday = "AM";
    midday = (hours >= 12) ? "PM" : "AM";

    var h;
    if(hours==12){
        h = 12;
    }
    else{
        h = hours%12;
    }
    document.getElementById("digital").innerHTML = h + ":" + minutes + ":" + seconds + " " + "  " + midday;
    
  }
  
  setInterval(setTime,1000);