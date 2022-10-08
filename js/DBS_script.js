const quizData = [{
    question: "What is Bong Soon's favourite food?",
    a: "Pork belly",
    b: "Kimchi",
    c: "Rice cakes",
    d: "Chicken feet",
    correct: "d",
},
{
    question: "What did Bong Soon's mom want her daughter to become once she was older?",
    a: "Pilot",
    b: "Chess Master",
    c: "Farmer",
    d: "Weightlifter",
    correct: "c",
},
{
    question: "Why did Bong Soon lose her powers for a little while?",
    a: "She hurt an innocent person",
    b: "She started weighlifting again",
    c: "She did not fulfill the prophecy given to her by Delphi",
    d: "The tree rooted to her powers started dying",
    correct: "a",
},
{
    question: "What do Bong Soon's parents specialize and sell in the bakery?",
    a: "Baguette",
    b: "Walnut pies",
    c: "Cakes/Cupcakes",
    d: "Apple pies",
    correct: "b",
},
{
    question: "Ahn Min Hyuk is the CEO of which company?",
    a: "Ainsoft",
    b: "Seri's Choice",
    c: "NCTSOFT",
    d: "Gamer's Cove",
    correct: "a",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",

function() {
    var checked_gender = document.querySelector('input[name = "option"]:checked');
    if(checked_gender != null){
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()

}
else {
    alert("Please Select One Option.");
}   
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {

if(correct >= 0 && correct <= 1){
    // console.log(document.getElementsByClassName("container"));
   document.getElementsByClassName("container")[0].innerHTML = `
       <div class="col">
            <h3 class="w-100" style="text-align:center;"> 
            YOU HAVE SCORED ${correct} OUT OF ${total}</h3>
            <div class="im" style="text-align:center;">
                <img src="../images/lowscore.jpg" alt="image" height="300">
            </div>
            <h4 class="w-100" style="text-align:center;"> 
            <a href="../index.html" style="text-decoration:none;">RETURN TO HOMEPAGE</a></h4>
           
       </div>
   `
} else if(correct >= 2 && correct <= 4){
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
        <h3 class="w-100" style="text-align:center;"> 
            YOU HAVE SCORED ${correct} OUT OF ${total}</h3>
            <div class="im" style="text-align:center;">
                <img src="../images/midscore.jpg" alt="image" height="300">
            </div>
            <h4 class="w-100" style="text-align:center;"> 
            <a href="../index.html" style="text-decoration:none;">RETURN TO HOMEPAGE</a></h4>
           
        </div>
    `
} 
else {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
        <h3 class="w-100" style="text-align:center;"> 
            YOU HAVE SCORED ${correct} OUT OF ${total}</h3>
            <div class="im" style="text-align:center;">
                <img src="../images/highscore.jpg" alt="image" height="300">
            </div>
            <h4 class="w-100" style="text-align:center;"> 
            <a href="../index.html" style="text-decoration:none;">RETURN TO HOMEPAGE</a></h4>
           
        </div>
    `
}

}
loadQuestion(index);