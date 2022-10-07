const quizData = [{
    question: "How old is Goblin?",
    a: "900",
    b: "938",
    c: "1000",
    d: "805",
    correct: "b",
},
{
    question: "Deok-hwa, played by Sung-jae, is from which K-pop boyband?",
    a: "BTS",
    b: "EXO",
    c: "BTOB",
    d: "SHINEE",
    correct: "c",
},
{
    question: "What is Ji Eun Tak's dream job?",
    a: "Radio producer",
    b: "Painter",
    c: "Pre-school teacher",
    d: "Drama scriptwriter",
    correct: "a",
},

{
    question: "The Grim Reaper is a reincarnation of Wang Yeo who committed what horrible crime?",
    a: "Enslaved his subjects",
    b: "Killed his brothers to capture the throne",
    c: "Sentenced his wife's family to death for treason",
    d: "Sold the royal secret to the neighbouring kingdom",
    correct: "c",
},
{
    question: "What are the 3 gifts the goblin gave Eun Tak before he thought he was going to die?",
    a: "Perfume, Scarf, Love Letter",
    b: "Necklace, Scarf, Earrings",
    c: "Perfume, Money, Scarf",
    d: "Purse, Perfume, Money",
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