let questions = [
    {
        question: "who is captain of indian cricket team?",
        options: {
            1: "Virat",
            2: "Rohit",
            3: "Dhoni",
            4: "Kl Rahul"
        },
        correct: "Rohit"

    },
    {
        question: " Which is the captital of India?",
        options: {
            1: "Delhi",
            2: "Kolkata",
            3: "Lucknow",
            4: "Bangalore"
        },

        correct: "Delhi"
    },

    {
        question: " What country has the highest life expectancy",
        options: {
            1: "Taiwan",
            2: "USA",
            3: "Japan",
            4: "Hong-Kong"
        },

        correct: "Hong-Kong"
    },

    {
        question: " What does FIFA stand for in English?",
        options: {
            1: "International Federation of Association Football",
            2: "International Foundation of Association Football",
            3: "International Footbal of Association Federation",
            4: "International Federation of Agency Football"
        },

        correct: "International Federation of Association Football"
    },

    {
        question: " What height is a regulation NBA basket?",
        options: {
            1: "10 feet",
            2: "20 feet",
            3: "30 feet",
            4: "40 feet"
        },

        correct: "10 feet"
    },

    {
        question: " Where is Disney's European theme park located?",
        options: {
            1: "Paris",
            2: "London",
            3: "Usa",
            4: "UK"
        },

        correct: "Paris"
    }

]

let index = 0
let answer = ""
let score=0

function displayQuestion(index) {
    let data = questions[index].question

    let questionBox = document.getElementById("question");
    let options = document.querySelectorAll(".answer");

    questionBox.innerText = data;
    options[0].innerText = questions[index].options[1]
    options[1].innerText = questions[index].options[2]
    options[2].innerText = questions[index].options[3]
    options[3].innerText = questions[index].options[4]

}

function checkAnswer() {
    let submitButton = document.getElementById("btn")
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();

        getAnswer()

        let correctAnswer = (questions[index].correct)
        if (answer === correctAnswer) {
            index = index + 1;
            displayQuestion(index)
            console.log("correct")
            result.innerText = "Correct-Answer"
            score+=10
            
            scores.innerText=`Your Score - ${score}`
           
        } else {
            console.log("bye-bye")
            result.innerText = "Wrong-Answer"
           

        }





    })
}

function getAnswer() {
    let options = document.querySelectorAll(".answer");
    options.forEach((option) => {
        option.addEventListener("click", (e) => {
            e.preventDefault();
            let ans = (option.innerText)
            answer = ans;

        })
    })

}





displayQuestion(index);
checkAnswer(answer);
getAnswer();
