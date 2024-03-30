import { useState } from "react"

function Score(){
    const [score,setScore]=useState('');
    const [comment, setComment]=useState("");
    const handleSubmit = (e) =>
    {
        e.prevenDefault();
        if (Number(score) <= 5 && comment.length <= 10) {
            alert("provide comment for score lower than 5")
            return;
        }
        console.log("submit")
        setComment("")
        setScore("")
    }

    return(
        <form onSubmit={handleSubmit}>
            <fieldset>
                <h2>Feedback form</h2>
                <div>
                    <label>Score: {score}</label>
                    <input type="range" min='0' max='10'
                    value={score} onChange={(e)=> setScore(e.target.value)}/>
                </div>
                <div>
                    <label>Comment: </label>
                    <textarea value={comment}
                    onChange={e =>setComment(e.target.value)}/>
                </div>
                <div>
                    <button type="submit">Submit Form</button>
                </div>
            </fieldset>
        </form>
    )
}