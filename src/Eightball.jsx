
import { useState } from 'react'
import './Eightball.css'

function choose(a) {
    const ind = Math.floor(Math.random() * a.length);
    const ret = a[ind];
    return(ret);
}

function Eightball (props) {
    const processClick = (() => {setAnswerShown(!answerShown)});
    let [answerShown, setAnswerShown] = useState(false);
    let showText;
    let answer, ballColor;
    if (!answerShown) {
        showText = 'Think of a Question';
        ballColor = 'black';
    } else {
        answer = choose(props.answers);
        showText = answer.msg;
        ballColor = answer.color;
    }
    return (
        <div>
            <div className="eightball-box">
                <div className="ball" 
                     onClick = {processClick}
                     style= {{backgroundColor: ballColor}}
                >
                   <div className="ball-text">
                      {showText}
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Eightball

