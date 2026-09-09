import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => Object => HTMLElement(render)

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;

const HeadingComponent = () => (
  <div>
    <h1 className="heading">This is a React functional component</h1>
  </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<HeadingComponent/>)
