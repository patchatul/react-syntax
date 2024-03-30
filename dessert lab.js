import DessertsList from "./DessertsList";

const desserts = [
    {
        name: "Chocolate Cake",
        calories: 400,
        createdAt: "2022-09-01",
    },
    {
        name: "Ice Cream",
        calories: 200,
        createdAt: "2022-01-02",
    },
    {
        name: "Tiramisu",
        calories: 300,
        createdAt: "2021-10-03",
    },
    {
        name: "Cheesecake",
        calories: 600,
        createdAt: "2022-01-04",
    },
];

function App() {
    return (
        <div className="App">
            <h2>List of low calorie desserts:</h2>
            <DessertsList data={desserts} />
        </div>
    );
}

//export default App;

//in DesertsList file
const DessertsList = (props) => {
const lowCaloriesDesserts = props.data
    .filter((dessert) => { //filter out data that we need
        return dessert.calories < 500;
    })
    .sort((a, b) => { //sort datat in order of some comparison like low to high
        return a.calories - b.calories;
    })
    .map((dessert) => { //
        return (
            <li>
                {dessert.name} - {dessert.calories} cal
            </li>
        );
    });
return <ul>{lowCaloriesDesserts}</ul>;
}
export default DessertsList;