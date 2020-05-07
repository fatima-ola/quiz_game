var quizContainer=document.querySelector('#questionContainer');
var btn=document.querySelector('#btn');
var scoreBox=document.querySelector('#scoreBox');
var listing=document.querySelector('#listing');
var option1=document.querySelector('#option1');
var option2=document.querySelector('#option2');
var option3=document.querySelector('#option3');
var option4=document.querySelector('#option4');

var app={
    questions:[
        {q:'DOM stands for?',options:['Document Object Model','Directory Option Model','Document Objective Modelling','Document Option Model'],answer:1},
        {q:'How is everything treated in HTML DOM?',options:['Attributes','Node','Elements','Arrays'],answer:2},
        {q:'In general, event handler is nothing but ____________',options:['event',' handler','function','interface'],answer:3},
        {q:'Which event can be fired on any scrollable document element?',options:['Window','Load','Unload','Scroll'],answer:4},
        {q:'Which event is fired when a document and all of its external resources are fully loaded and displayed to the user?',options:['Window','Load','Element','Handler'],answer:2}
    ],
    index:0,
    load: function(){
        if(this.index<+this.questions.length-1){
            quizContainer.innerHTML=this.index+1+"."+this.questions[this.index].q;
            option1.innerHTML=this.questions[this.index].options[0];
            option2.innerHTML=this.questions[this.index].options[1];
            option3.innerHTML=this.questions[this.index].options[2];
            option4.innerHTML=this.questions[this.index].options[3];
        }else{
            quizContainer.innerHTML="Quiz Over !!!";
            option1.style.display="none";
            option2.style.display="none";
            option3.style.display="none";
            option4.style.display="none";
            btn.style.display="none";
        }
            
    },
    next: function(){
        this.index++;
        this.load();
    },
    check:function(e){
        var id=e.id.split('');

        if(id[id.length-1]==this.questions[this.index].answer){
           this.score++;
            e.className="correct";
            e.innerHTML="Correct";
            this.scoreBox();
        }else{
            e.className="wrong";
            e.innerHTML="Wrong";
        }
    },
    notClickAble: function(){
        for(let i = 0; i < listing.children.length; i++){
            listing.children[i].style.pointerEvents="none";
        }
    },
    clickAble: function(){
        for(let i = 0; i < listing.children.length; i++){
            listing.children[i].style.pointerEvents="auto";
            listing.children[i].className="";
        }
    },
    score:0,
    scoreBox:function(){
        scoreBox.innerHTML=this.score+"/"+this.questions.length;
    }
}

window.onload=app.load();

function button(e){
    app.check(e);
    app.notClickAble();
}
function next(){
    app.next();
    app.clickAble();
}
