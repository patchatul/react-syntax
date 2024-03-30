//litle lemon keep track of cost of buying ingredients and income generated from selling the finished meals to the customers. 
function Reduce(){

    const reducer =(state, action) =>{
        if (action.type === 'buy') return {money:state.money - 10};
        if (action.type === 'sell') return {money:state.mpney + 10};
        return state;//can add many type like new category
    }
    const initialState ={money:1000}; //default value to display or do something to it
    const[state, dispatch] =useReducer(reducer, initialState);
//state = const reducer, dispatch=function that do something to initialState
    return(
        <div>
            <h1>Money in storage: {state.money}</h1>
            <button onClick={()=> dispatch({type:'buy'})}>Buy</button>
            <button onClick={()=> dispatch({type:'sell'})}>Sell</button>
        </div>

    )
}