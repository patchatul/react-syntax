/*Prop vs State =props object represents data that is external to a component mean that data depend on their parent +can’t control its own data >use to store 1 info for display =stateless
state represents data that is internal to a component means data only exist/depend in their own page component *declare useState hook for component to have+control its own state. > use to store form’s data/input from user that can be updated/many new data keep coming=stateful
For passing state data = should declare in parent/root component then pass to specific component
*/
import { React, useState } from 'react';
function Date() {
    const [date, setDate] = useState(new Date());
    return (
        <h1>{date}</h1>
    )
}

//when click word change
function Word() {
    const [word, setWord] = useState("Sleep");

    function handleClick() {
        setWord('Eat')
    }
    return (
        <div>
            <h1>{word}</h1>
            <button onClick={handleClick}>click</button>
        </div>
    )
}

export default function InputComponent() {
    const [inputText, setText] = useState('hello');

    function handleChange(e) {
        setText(e.target.value); //handleChange function, reads the latest input value from the browser’s input DOM element, and calls the setText function, to update the local state of inputText.
    }
    return (
        <>
            <input value={inputText} onChange={handleChange} />
            <p>You typed: {inputText}</p>
            <button onClick={() => setText('hello')}>
                Reset
            </button>
        </>
    );
}
//change array data to object data state-update by use .prop
export default function App() {
    const [greeting, setGreeting] = useState({ greet: "Hello, World" });
    console.log(greeting, setGreeting);

    function updateGreeting() {
        const newGreeting = { ...greeting };
        newGreeting.greet = "Hello, World-Wide Web";
        //clone-copy or just use .prop>  greeting.greet = "Hello";
        setGreeting(newGreeting); /* setGreeting(prevState => {
            return {...prevState, place: "World-Wide Web"} */
    }

    return (
        <div>
            <h1>{greeting.greet}</h1>
            <button onClick={updateGreeting}>Update greeting</button>
        </div>
    );
}

//form
import { useState } from 'react';

export default function RegisterForm() {
    const [form, setForm] = useState({
        firstName: 'Luke',
        lastName: 'Jones',
        email: 'lukeJones@sculpture.com',
    });
    return (
        <>
            <label>
                First name:
                <input
                    value={form.firstName}
                    onChange={e => {
                        setForm({
                            ...form,
                            firstName: e.target.value
                        });
                    }}
                />
            </label>
            <label>
                Last name:
                <input
                    value={form.lastName}
                    onChange={e => {
                        setForm({
                            ...form,
                            lastName: e.target.value
                        });
                    }}
                />
            </label>
            <label>
                Email:
                <input
                    value={form.email}
                    onChange={e => {
                        setForm({
                            ...form,
                            email: e.target.value
                        });
                    }}
                />
            </label>
            <p>
                {form.firstName}{' '}
                {form.lastName}{' '}
                ({form.email})
            </p>
        </>
    );
}

//
function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus();
    };
    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}/* Using the ref attribute on the input element, I can then access the current value and invoke the focus() method on it, thereby focusing the input field.
  There are situations where accessing the DOM directly is needed, and this is where the useRef hook comes into play. */