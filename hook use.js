/*
State generally refers to data or properties that need to be tracked in an app.


1.useState() =track & update state when using new state through function, how to change state/response to user generated events-button clicks.
declare const[color,Setcolor]=useState(‘red’) ใช้<p>{color.}

2.useEffect() =perform side effects of impure function within functional components, to control when to run using dependency array through a practical demonstration.
useEffect(() => {setColor(()=>{color.current= blue});}); + fetch data from api [phone, browser talks to server through an API-type safety=get the right type of data like img]

3.useContext() = manage state globally, can be used together with the useState
const user = useContext(UserContext); ใช้ const UserContext = createContext(); return(<UserContext.Provider value={user}>Q</UserContext.Provider>);}

4.useRef() =persist/keep values b/t renders,store a mutable value that doesn’t cause a re-render when updated,can be used to access a DOM element directly.
const input = useRef(); const focusInput =()=> {inputElement.current.focus();}; return(<input ref={input}/><button onClick={focusInput}>
const count =useRef(0); useEffec(()=>{count.current =count.current+1})

5.useReducer() =like useState [initial state+reducer function], to track many complex states, logic to add/ delete/complete can be contained in a single useReducer Hook by adding more actions.
const [todos, dispatch] = useReducer(reducer,initialTodos); declare reducer,initialTodos before >const y=(todo)=> {dispatch({type:"COMPLETE”,id:todo.id});};  return ({todos.map((todo) =>(

6.useCallback() =returns a memoized callback function, only re-render when 1 of its dependencies update, prevent function from being recreated unless necessary.
const addTodo=useCallback(() => {setTodos((t) => [...t, "New Todo"]);}, [todos]);

7.useMemo() = to keep expensive, resource intensive functions from needlessly running like useCallback
const calculation = useMemo(() => expensiveCalculation(count), [count]);

8.Custom Hook =Hooks are reusable functions. When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. start with "use"useFetch
const a =usePrevious() function usePrevious(){const ref=useRef(); useEffect(()=>{ref.current = A}, [A]) }
*/