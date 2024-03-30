function Eff() {
    const [toggle, setToggle] = useState(flase);
    const clickHandler = () => {
        setToggle(!toggle);
    }
    useEffect(() => toggle ? "render after hook" : "use useEffect hook", [])
    //check if toggle variable true : flase & updtate or show on tab of browser at the top
    // [] dependency array means useEffect invoke only once after no invoke/no update tab no matter what change
    return (
        <div>
            <h1>UseEffect hook to perform side effect</h1>
            <h2>app works well but not update text in browser tab</h2>
            <button onClick={clickHandler}>Click</button>
            {toggle && <h2>render after click</h2>}
        </div>
    )
}
//fetching data from a third-party API is considered a side-effect that requires the use of the useEffect hook to deal with the Fetch API calls in React.
/*
useEffect(() => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then((response) => response.json())
      .then((jsonData) => setBtcData(jsonData.bpi.USD))
      .catch((error) => console.log(error));
  }, []);
*/
/*
const fetchData = () => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then((response) => response.json())
      .then((jsonData) => setBtcData(jsonData.bpi.USD))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);  */