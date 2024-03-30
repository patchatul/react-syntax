import * as React from "react";

export const RadioGroup = ({ onChange, selected, children }) => {
    const RadioOptions = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            onChange,
            checked: child.props.value === selected,
        });//1st argument is the children prop, 2nd argument is a transformation function that returns a new React element.
    });
    return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
    return (
        <div className="RadioOption">
            <input
                id={value}
                type="radio"
                name={value}
                value={value}
                checked={checked}
                onChange={(e) => {
                    onChange(e.target.value);
                }}
            />
            <label htmlFor={value}>{children}</label>
        </div>
    );
};
/* in App.js file
import "./App.css";
import { RadioGroup, RadioOption } from "./Radio";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("");
  return (
    <div className="App">
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
    </div>
  );
}

export default App;

*/

/*
const buttonElement = {
  type: SubmitButton,
  props: {
    color: "green",
    children: "Submit!",
  },
};
const output = React.cloneElement(buttonElement,
     {disabled: true, color: “blue” });

{
  type: SubmitButton,
  props: {
    color: "blue",
    children: "Submit!",
    disabled: true;
  },
};
     */
