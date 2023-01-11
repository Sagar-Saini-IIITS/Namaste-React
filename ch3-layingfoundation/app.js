// importing from node_modules
import React from "react";
import ReactDOM from "react-dom/client";
import './app.css';

// 1. Creating elements using React.createElement()
const heading1 = React.createElement("h1", {}, "Heading 1");

const heading2 = React.createElement("h2", {}, "Heading 2");

const heading3 = React.createElement("h3", {}, "Heading 3");

const container = React.createElement(
  "div",
  {
    class: "title",
  },
  [heading1, heading2, heading3]
);

// 2. creating elements with jsx
const container2 = (
  <div className="title">
    <h1>Heading 1 jsx</h1>
    <h2>Heeading 2 jsx</h2>
    <h3>Heading 3 jsx</h3>
  </div>
);

// 3. functional component and component composition

const Title = () => <h3>testing 1 2 3</h3>
const Header1 = () => {
  return(
  <Title></Title>
  )
};


// 4. creating header component with logo,search box, user icon
const Header2 = () => {
  return(
    <div class="title">
    <img src="https://cdn-media-1.freecodecamp.org/images/1*y6C4nSvy2Woe0m7bWEn4BA.png"></img>
    <input type="text" placeholder="Search.."></input>
    <i className='fas fa-id-card' style={{fontSize:'36px'}}></i>
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header2/>);
