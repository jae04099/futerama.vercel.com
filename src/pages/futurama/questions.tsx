import type { NextPage } from "next";
import styled from 'styled-components';
import { useApi } from "../../hooks/useApi";
import { TYPES } from "../../constants";
import  {Question} from "../../types/question";
import {Error, Loading} from "../../components/index"; 

const QuestionPage: NextPage = () => {
    const {data, error} = useApi(TYPES[5]);
    if(error) return <Error />
    if(!data) return <Loading />
    return (
        <Container>
            <h1>QUESTIONS. </h1>
            {data.map((questionData: Question) => {
                return (
                    <div className="question-wrap" key={questionData.id}>
                                <p>{questionData.id}. {questionData.question}</p>
                                <ul>
                                    {questionData.possibleAnswers.map((e) => {
                                        return <li key={questionData.id}>
                                            {e}
                                            </li> 
                                        })}
                                </ul>
                                <p>correctAnswer: {questionData.correctAnswer}</p>
                    </div>
                )
            })}
        </Container>
    )
}

export default QuestionPage;

const Container = styled.div`
 background: #222;
 width: 100%;
 height: 100%;
color: white;
display: flex;
flex-wrap: wrap;
.question-wrap {
    /* background: #5a0fbd; */
    max-width: 300px;
    margin: 15px;
    padding: 15px;
    border: 1px solid #fff;
}
`