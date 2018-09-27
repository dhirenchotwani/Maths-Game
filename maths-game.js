document.getElementById("startreset").innerHTML="Start game";
var playing=false;// to set start or reset;
var score;
var timer;
var c_ans;
document.getElementById("startreset").onclick=function(){
   
    if(playing==true){
        location.reload(); //refresh /  reload the page
    }
    else{
        
        playing=true;
        score=0;
        document.getElementById("score-value").innerHTML=score;
        hide("gameover");
        show("timeremaining")
        timer=6;
        document.getElementById("time-value").innerHTML=timer;
        startCountdown();
        document.getElementById("startreset").innerHTML="Reset Game";
        genrateQA();
    }
}
function startCountdown(){
    var action=setInterval(function(){                    
        timer-=1;
    document.getElementById("time-value").innerHTML=timer;
        if(timer == 0){                                 
            clearInterval(action);
                                show("gameover");
            document.getElementById("gameover").innerHTML=" Game over <br/> <br/> <br/> Your score is " + score;
                                hide("timeremaining");
                               playing=false;          
                document.getElementById("startreset").innerHTML="Start Game";
        }
                           },1000);
            
}

//handlimg events for answer boxes
for( i=1 ;i<5;i++){
document.getElementById("box" +i).onclick=function(){
    if(playing==true){
        if(this.innerHTML == c_ans){
            score++;
            document.getElementById("score-value").innerHTML=score;
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000);
            
            //genrate a new qa
            genrateQA();
            
        }
    else{
        //wrong ans
        hide("corect");
        show("wrong");
        setTimeout(function(){
            hide("wrong");
        },1000);
      }
    }
}
}
function genrateQA(){
    let x = 1+ Math.round(9 * Math.random());
    var y = 1+ Math.round(9 * Math.random());
    c_ans= x * y;
//    console.log(c_ans);
    document.getElementById("question").innerHTML = x + "x" + y;
    
    var c_position= 1 + Math.round(3* Math.random());
    document.getElementById("box" + c_position).innerHTML= c_ans ;
    
    var answers=[c_ans];
    for(i=1;i<5;i++){
        if(i!=c_position){
            var wrong_ans;
            do{
        wrong_ans = (1+ Math.round(9 * Math.random())) * (1+ Math.round(9 * Math.random()));
            }while(answers.indexOf(wrong_ans) > -1)
                answers.push(wrong_ans);
        document.getElementById("box" + i).innerHTML=wrong_ans;
        }
    }
}



function show(id){
    document.getElementById(id).style.display="block";
}
function hide(id){
    document.getElementById(id).style.display="none";
}