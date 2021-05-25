import { generateId } from "../Utils/GenerateId.js"


export class Question {
    constructor(data) {
        this.id = generateId()
        this.category = data.category
        this.type = data.type
        this.difficulty = data.difficulty
        this.question = data.question
        this.correctAnswer = data.correct_answer
        this.incorrectAnswers = data.incorrect_answers
    }

    get questionTemplate() {
        return `
       <div class = "card" m-2>
       <p>
        ${this.question}
       </p>
       </div>
       <div>
       ${this.Answers()}
       </div>
       `
    }

    Answers() {

        let newArr = [...this.incorrectAnswers, this.correctAnswer]
        for (var i = newArr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = newArr[i];
            newArr[i] = newArr[j];
            newArr[j] = temp;

        }
        let template = ""

        newArr.forEach(a => {
            template += `
            <button onclick= "app.questionController.checkAnswer()" class = "btn-block btn-primary">${a}</button>
             `


        })
        return template
    }


}