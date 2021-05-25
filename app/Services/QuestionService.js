import { ProxyState } from "../AppState.js"
import { Question } from "../Models/Question.js"



export class QuestionService {
    async getQuestions(url) {
        let res = await fetch(url)
        let data = await res.json()

        console.log("questionservice", data.map(question => new Question(question)))
        ProxyState.questions = data.map(question => new Question(question))
        console.log(ProxyState.questions)
    }
    async getTriviaQuestions() {
        let res = await fetch(`https://opentdb.com/api.php?amount=10&difficulty=easy`)
        let data = await res.json()
        console.log(data)
        ProxyState.questions = data.results.map(p => new Question(p))
    }

}



export const questionService = new QuestionService()