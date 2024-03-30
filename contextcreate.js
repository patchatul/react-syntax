import { createContext, useState } from "react"
//choosing context instead of local state=global application state/theme/locale preferences./language that should be used in the app’s text,alert overlays into whole page, current authenticated user.
//use Context when data state need in many component
const UserContext = createContext(undefined) //create API for context consumers via useContext, what’s the argument you have to provide to the useContext call
//you always have to pass a context object as argument to the useContext hook.-Context object obtained via the createContext call.
export const UserProvider =({children}) =>{
    //put data/ state is defined
    const [user] =useState({
        name: "j",
        email:'@'
    })
    return <UserContext.Provider value={{user}}></UserContext.Provider>
//UserContext.Provider component is what allows consuming components to subscribe to context changes.
}
export const useUser = () => useContext(UserContext) //hook state to the value prop
// create a custom hook that wraps the use context hook, which is the way to consume a context value.

//go to root file/parent component that contain many children and add this
function App(){
    return(
    <UserProvider>
        <Header/>
    </UserProvider>)
}
//in file that need this data
const {user} =useUser();
//use it
<p>{user.name}</p>

/* prevent unnecessary top-level re-renders with React.memo and how object references work in JavaScript.
utilize the useMemo hook to guarantee object references don’t change during re-rendering
useMemo will memoize the returned value from the function passed as the first argument
and will only re-run computation if any of values are passed into array as a second argument change.
const App = () => {
  const a = 'hi';
  const b = 'bye';
  const value = useMemo(() => ({a, b}), [a, b]);

  return (
    <AppContext.Provider value={value}>
      <ComponentA />
    </AppContext.Provider>
  );
};

const ComponentA = React.memo(() => <ComponentB />);
const ComponentB = () => <ComponentC />;
const ComponentC = () => {
  const contextValue = useContext(AppContext);
  return null;
};*/