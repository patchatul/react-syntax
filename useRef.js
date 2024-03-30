function Ref(){
    const formInputRef = useRef(null);
/*React will create input elements DOM node and render it on the screen.
This DOM node is assigned as the value of the current property of the ref object.
This makes it possible to access the input DOM node and all its properties and values
using the syntax form inputRef.current.*/
    const focusInput =()=>{
        formInput.current.focus(); //use to focus the cursor into an input field.
    }
    return(
        <div>
        <h1>useRef to access underlying DOM</h1>
        <p>persist/keep values b/t renders,store a mutable value that does not cause a re-render when updated,can be used to access a DOM element directly.</p>
        <input ref={formInputRef} type="text"></input>
        <button onClick={focusInput}>focus input</button>
        </div>
    )
}