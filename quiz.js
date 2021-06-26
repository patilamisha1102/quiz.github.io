var questions = ['Who is the prime minister of INDIA = ?', 'Pink city of India = ?', 'Ladakh is situated in which state = ?', 'How many bones are present in a human body = ?']
var count = 0

function myFunction()
{
    var person = prompt("Please Enter your Name", "Amisha")
    if(person != null && person != " ")
    {
        document.getElementById("demo").innerHTML = "Hello "+ person+ ".....!!! We will start the  quiz when you click the start button"
        document.getElementById("star").style.display = "block";
    }
}

function afunc()
{
    document.getElementById("ques").innerHTML = questions[0]
    count = 0
    document.getElementById('demo').innerHTML = ""
    document.getElementById("skr").innerHTML = ""
    document.getElementById("hela").style.display = "none"   
}

function bfunc(i)
{
    var c = i+1
    document.getElementById("ques").innerHTML = questions[c]
    ans()
}

function Next()
{
    document.getElementById("result").innerHTML = ""
    var i = 0
    var c =  questions.length

    for(i; i<c; i++){
        if(document.getElementById("ques").innerHTML === questions[i])
        {
            bfunc(i)
            break;
        }
    }
}


function score()
{
    document.getElementById("skr").innerHTML = "Your Score is: " + count + " out of 4"
}

function ans()
{
    if(document.getElementById("ques").innerHTML === "Who is the prime minister of INDIA = ?"){
        var opt1 = document.createElement("button")
        opt1.innerHTML = "Amit Shah"
        document.body.appendChild(opt1)
        opt1.onclick = function (){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is Wrong"
            setTimeout(Next,1000)
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";
        }

        var opt2 = document.createElement("button")
        opt2.innerHTML = "Narendra modi"
        document.body.appendChild(opt2)
        opt2.onclick = function (){
            document.getElementById("result").style.color = "green"
            document.getElementById("result").innerHTML = "Your Answer is Correct"
            count++
            setTimeout(Next,1000)
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";
        }

        var opt3 = document.createElement("button")
        opt3.innerHTML = "Narendra singh tomar"
        document.body.appendChild(opt3)
        opt3.onclick = function (){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is Wrong"
            setTimeout(Next,1000)
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";
        }

        var opt4 = document.createElement("button")
        opt4.innerHTML = "Rajiv gandhi"
        document.body.appendChild(opt4)
        opt4.onclick = function(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is Wrong"
            setTimeout(Next,1000)
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";
        }
    }

    else if(document.getElementById("ques").innerHTML === "Pink city of India = ?"){
        var opt1 = document.createElement("button");
        opt1.innerHTML = "Jaipur";
        opt1.onclick = function opta(){
          document.getElementById("result").innerHTML = "your answer is right.";
          document.getElementById("result").style.color = "green";
             setTimeout(Next, 1000);
             count++
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt4.style.display = "none";
             opt3.style.display = "none";
        }
        document.body.appendChild(opt1);

        var opt2 = document.createElement("button");
        opt2.innerHTML = "Banglore";
        opt2.onclick = function optb(){
          document.getElementById("result").innerHTML = "your answer is wrong.";
          document.getElementById("result").style.color = "red";
             setTimeout(Next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt4.style.display = "none";
             opt3.style.display = "none";
        }
        document.body.appendChild(opt2);

        var opt3 = document.createElement("button");
        opt3.innerHTML = "Udaipur";
        opt3.onclick = function optc(){
          document.getElementById("result").innerHTML = "your answer is wrong.";
          document.getElementById("result").style.color = "red";
             setTimeout(Next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt4.style.display = "none";
             opt3.style.display = "none";
        }
        document.body.appendChild(opt3);

        var opt4 = document.createElement("button");
        opt4.innerHTML = "Mumbai";
        opt4.onclick = function optd(){
          document.getElementById("result").innerHTML = "your answer is wrong.";
          document.getElementById("result").style.color = "red";
             setTimeout(Next, 1000);
              count++;
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt4.style.display = "none";
             opt3.style.display = "none";
          }
        document.body.appendChild(opt4);
  }

  else if(document.getElementById("ques").innerHTML === "Ladakh is situated in which state = ?"){
        var opt1 = document.createElement("button");
        opt1.innerHTML = "Rajasthan";
        opt1.onclick = function opta(){
          document.getElementById("result").innerHTML = "your answer is wrong.";
          document.getElementById("result").style.color = "red";
             setTimeout(Next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt4.style.display = "none";
             opt3.style.display = "none";
        }
        document.body.appendChild(opt1);

        var opt2 = document.createElement("button");
        opt2.innerHTML = "Jammu & Kashmir";
        opt2.onclick = function optb(){
          document.getElementById("result").innerHTML = "your answer is right.";
          document.getElementById("result").style.color = "green";
             setTimeout(Next, 1000);
             count++;
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt4.style.display = "none";
             opt3.style.display = "none";
        }
        document.body.appendChild(opt2);

        var opt3 = document.createElement("button");
        opt3.innerHTML = "Uttarakhand";
        opt3.onclick = function optc(){
          document.getElementById("result").innerHTML = "your answer is wrong.";
          document.getElementById("result").style.color = "red";
             setTimeout(Next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt4.style.display = "none";
             opt3.style.display = "none";
          }
        document.body.appendChild(opt3);

        var opt4 = document.createElement("button");
        opt4.innerHTML = "Gujarat";
        opt4.onclick = function optd(){
          document.getElementById("result").innerHTML = "your answer is wrong.";
          document.getElementById("result").style.color = "red";
             setTimeout(Next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt4.style.display = "none";
             opt3.style.display = "none";
        }
        document.body.appendChild(opt4);
  }

  else if(document.getElementById("ques").innerHTML === "How many bones are present in a human body = ?"){
        var opt1 = document.createElement("button");
        opt1.innerHTML = "200";
        opt1.onclick = function opta(){
          document.getElementById("result").innerHTML = "your answer is wrong.";
          document.getElementById("result").style.color = "red";
             setTimeout(Next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt4.style.display = "none";
             opt3.style.display = "none";
        }
        document.body.appendChild(opt1);

        var opt2 = document.createElement("button");
        opt2.innerHTML = "206";
        opt2.onclick = function optb(){
          document.getElementById("result").innerHTML = "your answer is right.";
          document.getElementById("result").style.color = "green";
             setTimeout(Next, 1000);
               count++;
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt4.style.display = "none";
             opt3.style.display = "none";
        }
        document.body.appendChild(opt2);

        var opt3 = document.createElement("button");
        opt3.innerHTML = "204";
        opt3.onclick = function optc(){
          document.getElementById("result").innerHTML = "your answer is wrong.";
          document.getElementById("result").style.color = "red";
             setTimeout(Next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt4.style.display = "none";
             opt3.style.display = "none";
        }
        document.body.appendChild(opt3);

        var opt4 = document.createElement("button");
        opt4.innerHTML = "208";
        opt4.onclick = function optd(){
          document.getElementById("result").innerHTML = "your answer is wrong.";
          document.getElementById("result").style.color = "red";
             setTimeout(Next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt4.style.display = "none";
             opt3.style.display = "none";
        }
        document.body.appendChild(opt4);
  }

  else{
    document.getElementById("ques").innerHTML="Quiz ends here.";
    score()
  }
}