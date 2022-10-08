const quizData = [{
    question: "Who caused Wang So's Scar?",
    a: "Queen Yoo",
    b: "King Taejo",
    c: "King Gwangjong",
    d: "Queen Hwangbo",
    correct: "a",
},
{
    question: "What did Hae Soo make during her stay at the 8th Prince's residence",
    a: "Perfume",
    b: "Soap",
    c: "Hanbok",
    d: "Makeup",
    correct: "b",
},
{
    question: "Who did Hae Soo see in Goryeo that she has met as Go Ha Jin?",
    a: "Queen Yoo",
    b: "Wang Eun",
    c: "Ji Mong",
    d: "Court Lady Oh",
    correct: "c",
},

{
    question: "Who was the 8th Prince?",
    a: "Wang Jung",
    b: "Wang Taejo",
    c: "Wang Yo",
    d: "Wang Wook",
    correct: "d",
},
{
    question: "Who was Wang Eun's Wife?",
    a: "Yeonhwa",
    b: "Im Ryung Gu",
    c: "Park Soon Duk",
    d: "Park Min Young",
    correct: "c",
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
           <h3 class="w-100"> Did you even watch the show?!?!? <br>you've scored ${correct} / ${total} </h3>
       </div>
   `
} else if(correct >= 2 && correct <= 4){
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
        <h3 class="w-100"> You did okay <br>you've scored ${correct} / ${total} </h3>
        </div>
    `
} 
else {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
        <h3 class="w-100"> Wow!!!!! <br>you've scored ${correct} / ${total} </h3>
      
        </div>
    `
}

}
loadQuestion(index);
