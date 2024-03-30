import { useState } from "react";
function GoalForms(props){ //capture new goals
    const [formData, setFormData] =useState({goal:"", date:""})

    function changeHandler(e){ //copy form data don't work directly w/ data
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    function submitHandler(e){
        e.preventDefault();
        props.onAdd(formData);
        setFormData({goal:'', date:''})
    }
    return(
        <div>
        <h1>Goals</h1>
        <form onSubmit={submitHandler}>
        <input type="text" placeholder="My goal is to..."
            name="goal" value={formData.goal} onChange={changeHandler}> </input>
            <input type="text" placeholder="when..."
            name="date" value={formData.date} onChange={changeHandler}> </input>
        </form>
        </div>
    )
}

function ListOfGoals(props){ //loop over all goals+display in page
    return(
        <ul>
            {props.allGoals.map((g)=>(
                <li key={g.goal}>
                    <span>My goal is to{g.goal}, {g.date}</span>
                </li>
            ))}
        </ul>
    )
}

export default function Root(){ //puts 2 above components together+ rende+ pass functions they'll be working with through props
    const [allGoals, updateAllGoals] =useState([])
    function addGoal(goal){
        updateAllGoals([...allGoals, goal])
    }
    return(
        <div>
            <GoalForms onAdd={addGoal}/>
            <ListOfGoals allGoals={allGoals}/>
        </div>
    )
}