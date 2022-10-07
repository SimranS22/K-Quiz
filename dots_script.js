const quizData = [{
    question: "When Captain Yoo is detained in the barracks, what does Mo Yeon give him?",
    a: "Mosquito Coils",
    b: "Bracelet",
    c: "Phone",
    d: "Blanket",
    correct: "a",
},
{
    question: "Which song is NOT part of the DOTS OST Album?",
    a: "Everytime - Chen, Punch",
    b: "Once Again - Mad Clown",
    c: "This Love - Davichi",
    d: "Orbit - Hwasa",
    correct: "d",
},
{
    question: "What catastrophe occurs at the end of the show ?",
    a: "Tsunami",
    b: "Volcano eruption",
    c: "Landslide",
    d: "Earthquake",
    correct: "b",
},

{
    question: "The character, Lee Chi Hoon, is played by which K-pop Idol ?",
    a: "Rowoon",
    b: "Kim Taehyung (V)",
    c: "Lee Jin Ki (Onew)",
    d: "Park Hyung Sik",
    correct: "c",
},
{
    question: "Which idol group performs for the soldiers, making the girlfriends feel jealous?",
    a: "Mamamoo",
    b: "Wonder Girls",
    c: "Twice",
    d: "Red Velvet",
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
            <h3 class="w-100" style="text-align:center;"> 
            YOU HAVE SCORED ${correct} OUT OF ${total}</h3>
            <div class="im" style="text-align:center;">
                <img src="images/lowscore.jpg" alt="image" height="300">
            </div>
            <h4 class="w-100" style="text-align:center;"> 
            <a href="index.html" style="text-decoration:none;">RETURN TO HOMEPAGE</a></h4>
           
       </div>
   `
} else if(correct >= 2 && correct <= 4){
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
        <h3 class="w-100" style="text-align:center;"> 
            YOU HAVE SCORED ${correct} OUT OF ${total}</h3>
            <div class="im" style="text-align:center;">
                <img src="images/midscore.jpg" alt="image" height="300">
            </div>
            <h4 class="w-100" style="text-align:center;"> 
            <a href="index.html" style="text-decoration:none;">RETURN TO HOMEPAGE</a></h4>
           
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
                <img src="images/highscore.jpg" alt="image" height="300">
            </div>
            <h4 class="w-100" style="text-align:center;"> 
            <a href="index.html" style="text-decoration:none;">RETURN TO HOMEPAGE</a></h4>
           
        </div>
    `
}

}
loadQuestion(index);