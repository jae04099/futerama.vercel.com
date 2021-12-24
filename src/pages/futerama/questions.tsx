import type { NextPage } from "next";
import { useApi } from "../../hooks/useApi";
import { TYPES } from "../../constants";
import  {Question} from "../../types/question";
import {Error, Loading} from "../../components/index"; 

const QuestionPage: NextPage = () => {
    const {data, error} = useApi(TYPES[5]);
    if(error) return <Error />
    if(!data) return <Loading />
    return (
        <div>
            {data.map((questionData: Question) => {
                return (
                    <div key={questionData.id}>
                                <p>title: {questionData.question}</p>
                                <ul>
                                    {questionData.possibleAnswers.map((e) => {return <li key={questionData.id}>{e}</li> })}
                                </ul>
                                <p>correctAnswer: {questionData.correctAnswer}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default QuestionPage;