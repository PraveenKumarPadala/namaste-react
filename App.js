import React from "react";
import ReactDOM from "react-dom/client";

/*
Header 
      - Logo
      - nav items
Body 
      - search
      - restaurant container
        - restaurant card
          - name of the restaurant
          - star rating
          - cuisine
          - delivery time
Footer 
      - copyright
      - links
      - address
      - contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_ADfR3Rj9bChsD6JGjhn6wwT9acljmhtunOs56kuaw&s=10"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const {restName, dishType} = props;
  console.log(restName)
  console.log(dishType)
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuxgoSwESBIzc7ma_3vH61xhR5plw-D7uJTHHmsDKUdA&s=10"
      />
      <h3>{restName}</h3>
      <h4>{dishType}</h4>
      <h4>Rating</h4>
      <h4>ETA</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard restName="Nani's home foods" dishType="Indian foods"/>
        <RestaurantCard restName="Priya Kitchen" dishType="Italian foods"/>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<AppLayout />);
