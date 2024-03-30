//create your own hook useSomething should use at least one built-in React hook
import { useEffect } from "react";

function useConsoleLog(varName) {
    useEffect(() => {
        console.log(varName);
    }, [varName]);
}
export default useConsoleLog;

//in App.js file
import { useState } from "react";
import useConsoleLog from "./useConsoleLog";

function App() {
    const [count, setCount] = useState(0);
    useConsoleLog(count);

    function increment() {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Plus 1</button>
        </div>
    );
}
//export default App;