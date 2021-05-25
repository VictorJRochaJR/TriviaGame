import { ProxyState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { questionService } from "../Services/QuestionService.js"

export default class QuestionController {
    constructor() {
        ProxyState.on("questions", this.drawQuestions)
        this.getQuestions()
        this.drawQuestions()
    }
    drawQuestions() {
        let template = ""
        console.log(ProxyState.questions)
        ProxyState.questions.forEach(question => {
            console.log("drawQuestions", template)
            template += question.questionTemplate


        })
        console.log("drawquestions")
        document.getElementById("questions").innerHTML = template
    }
    getQuestions() {
        questionService.getTriviaQuestions()
    }

    checkAnswer() {
        console.log("check answer")


    }


}

