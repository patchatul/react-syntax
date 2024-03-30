import { useState } from "react";
//controlled components = control how input datat or this form function after submit
function Form(){
    const [name,setName]=useState(""); //track input data

    const handleSubmit=(e) =>{ //function for handle when form submit
        e.preventDefault();
        setName("");
        alert("summitted!")
    }
//htmlFor * id connect label + input
//input value={nameofusestate} connect w/ onChnage event update data setName(e.target.value})
    return(
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div>
                    <label htmlFor="name">Type your Name:</label>
                    <input id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <button disabled={!name} type="submit">Click</button>
            </fieldset>
        </form>
    )
}