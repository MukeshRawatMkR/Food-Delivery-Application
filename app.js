import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://dynamic.brandcrowd.com/asset/logo/7628e6e4-aced-4ca2-be50-9f2bee547c71/logo-search-grid-1x?logoTemplateVersion=1&v=638018268549530000"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li> <li>Home</li> <li>Home</li> <li>Home</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () =>{
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" src ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b318c0b4bc2169550145ace1d6e791a2"/>
            <h3 style={{margin:0}}>Pyari Pahadan</h3>
            <h3 style={{margin:0}}>Paneer, Alo Paratha</h3>
            <h3 style={{margin:0}}>4.4 stars</h3>
            <h3  style={{margin:0}}>38 minutes</h3>
    
        </div>
    );
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search </div>
      <div className="res-container">
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div id="app">
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); //to render
/*
const jsxHeading=<h1>Hello this is heading using JSX</h1>;
console.log(jsxHeading);//object

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);//to render
*/
