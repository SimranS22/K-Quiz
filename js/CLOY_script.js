const quizData = [{
    question: "Kim Ju Moek is obsessed with which South Korean Actress?",
    a: "Jun Ji Hyun",
    b: "Choi Ji Woo",
    c: "Shin Min Ah",
    d: "Son Ye Jin",
    correct: "b",
},
{
    question: "What was the reason why Se Ri call Jung Hyuk for the first time while he is at work?",
    a: "She wants scented candles",
    b: "She needs body wash",
    c: "The elctricity went out",
    d: "She wants another pair of clothes",
    correct: "b",
},
{
    question: "Why did Ri Jung Hyuk tie Se Ri's hair up?",
    a: "Because her hair was flying all over the place",
    b: "The police would catch her",
    c: "She looks like a foriegner.",
    d: "Her hair would fall out",
    correct: "c",
},

{
    question: "Who was the North Korean Villain out to kill Yoon Seri?",
    a: "Ri Jung Hyuk",
    b: "Hong Chang Sik ",
    c: "Cho Choel Gang",
    d: "Park Hyung Sik",
    correct: "c",
},
{
    question: "Who is Seo Dan's Mother?",
    a: "Ko Myeong Eun",
    b: "Han Jeong-yeon",
    c: "Yang Ok-geum",
    d: "Hyeon Myeong-soon",
    correct: "d",
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