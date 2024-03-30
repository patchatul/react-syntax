function Example() {
    return (
        <div className="heading">
            <h1>{Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"}</h1>
        </div>
    );
};
//export default Example;
//ES6       name == 'Bob' ? console.log("yes") : console.log("NO");
let name = 'Bob';
if (name == 'Bob'){
    console.log('yes')
} else{
    console.log('no')
}
function If(){
    const randomNum = () =>Math.floor(Math.random()*10)+1

    return(
        <h1>It's {randomNum()}</h1>
    )
}

//
const bool = false;
const str1 = "just";

function First(props) {
    return (
        <div>
            <h2>
            value of toggleBoolean prop:{props.toggleBoolean.toString()}
            </h2>
            <p>value of math prop: <em>{props.math}</em></p>
            <p>value of str prop: <em>{props.str}</em></p>
        </div>
    );
};

export default function Hol() {
    return (
        <div className="Hol">
            <First
                toggleBoolean={!bool}
                math={(10 + 20) / 3}
                str={str1 + ' another ' + 'string'}
            />
        </div>
    );
};
