const withMousePosition = (WrappedComponent) =>{
    return(props) =>{
        const [mousePosition, setMousePosition] = useState({x:0,y:0})

        useEffect(()=>{
            const handleMousePositionChange =(e) =>{
                setMousePosition({x: e.clientX, y: e.clientY})
            }
            window.addEventListener("mousemove", handleMousePositionChange)
            return ()=>{
                window.removeEventListener("mousemove", handleMousePositionChange)
            }
    },[]);
        return(
            <WrappedComponent {...props}/>
        )
    }
}


const PanelMouseLogger =({mousePosition}) =>{
    if(!mousePosition){
        return null;
    }
    return(
    <div>
        <p>Mouse position:</p>
        <div>
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
        </div>
    </div>)
}

const PointMouseLogger = ({mousePosition}) =>{
    if(!mousePosition){
        return null;
    }
    return(
        <p>({mousePosition.x}, {mousePosition.y})</p>
    )
}
const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker =withMousePosition(PointMouseLogger);

function Mouse(){
    return(
        <div>
            <header>Mouse Position of cursor</header>
            <PanelMouseTracker/>
            <PointMouseTracker/>
        </div>
    )
}

/* import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  return render({ mousePosition });
};

const PanelMouseLogger = () => {
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <MousePosition
        render={({ mousePosition }) => (
          <div className="Row">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>
        )}
      />
    </div>
  );
};

const PointMouseLogger = () => {
  return (
    <MousePosition
      render={({ mousePosition }) => (
        <p>
          ({mousePosition.x}, {mousePosition.y})
        </p>
      )}
    />
  );
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;

CSS
.App {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
}

.Header {
  margin: 32px;
}

.Row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 64px;
}

p {
  margin: 0;
}

.BasicTracker {
  border: 1px solid black;
  padding: 16px;
  margin-bottom: 128px;
}*/