/* Context API to pass state directly to another component that are not parent -child
ContextProvider - component store state vs ContextConsumer-component that use state
1.In root component Function App(){return( <MealsProvider> <MealList/> <Counter/> </MealProvider>)
2.In MealsProvider file>> const MealsContext = createContext(); const cx =[whatever data..]
const MealsProvider =({children)} =>{const [meals,setMealsList] =useState(cx)
    return(<MealContext.Provider value={{meals}})> {children} </MealContext.Provider>
export const useMealsListContext = () => useContext(MealsContext);
*/

import { createContext } from "react";

//in parent file
const MealsContext =createContext();
const todayMeals = ["a", 'd', 's']
const MealProvider =({children}) =>{
    const [meals, setMeals] = useState(todayMeals)
    return(
        <MealsContext.Provider value={{meals}}>
            {children}
        </MealsContext.Provider>
    )
}
export const useMealsListContext = () => useContext(MealsContext)
export default MealsProvider;
//in child file
import {useMealsListContext} from "./"
const MealsList = () =>{
    const {meals} =useMealsListContext();
    return (
        <div>
            {meals.map((meal, index) => (
                <h2 key={index}> {meal} </h2>
            ))}
        </div>
    )
}