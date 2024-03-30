function Btn() {
    const clickHandler = () => console.log('clicked')
    return (
        <button onClick={clickHandler}>CLICK</button>
    ) //onMouseOver onDrag onCoubleClick
}

//<button onCopy={() => console.log('inline ES6')}

function Form() {
    function handleSubmit(e) { //e = event
        e.preventDefault();
        console.log('submit')
    }
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Go</button>
        </form>
    )
}
//light drak mode
function ModeToggler() {
    let darkModeon = true;
    const darkMode = <h1>Dark</h1>
    const lightMode = <h1>Light</h1>

    function handleClick() {
        darkModeOn = !darkModeOn;
        if (darkModeOn === true) {
            console.log({ darkMode })
        } else {
            console.log({ lightMode })
        } return (
            <div>
                {darkModeOn ? darkMode : lightMode}
                <button onClick={handleClick}>Click</button>
            </div>
        )
    }
}
//
function Random(){
    function handleClick(){
        let randomNum = Math.floor(Math.random()*3)+1;
        console.log(randomNum);
        let userInput = prompt('type a num');
        alert("Num; ${randomNum}, Your guess ${userInput}")
    }
    return(
        <div>
            <button onClick={handleClick}>Guess 1-3</button>
        </div>
    )
}