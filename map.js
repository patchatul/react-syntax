const anList = [{ //original data
    id: 1,
    title: "A",
    description: 'A data',
}, {
    id: 2,
    title: "B",
    description: 'B data'
},
{
    id: 3,
    title: "C",
    description: 'C data'
}
]

function Obj() {
    const newList = anList.map(newFunc => { //get original data from .map( new name to store data)
        const newItems = `${newFunc.id} and ${newFunc.title}`//create new data from original data
        return <li>{newItems}</li>
    })
    return (
        <div>
            <ul>
                {newList}
            </ul>
        </div>
    )
}
export default Obj;

/*
const desserts = [
  {
    title: 'Chocolate Cake',
    description: 'Chocolate cake is a cake flavored with melted chocolate',
    calories: 500,
  }
];

const newDesserts = desserts.map((dessert) => {
  return {
    title: dessert.title.toUpperCase(),
    ...dessert,
    kCal: dessert.calories / 1000,
  };
});

//show [
  {
    title: 'CHOCOLATE CAKE',
    description: 'Chocolate cake is a cake flavored with melted chocolate',
    calories: 500,
    kCal: 0.5,
  }
]
*/