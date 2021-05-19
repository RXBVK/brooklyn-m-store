import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import About from "../About/About";
import Shop from "../Shop/Shop";
import ServiceAndParts from "../ServiceAndParts/ServiceAndParts";
import Financing from "../Financing/Financing";
import "./styles/navigation.css";

export default function Navigation() {
  return (
    <>
      <nav className="main__navigation">
        <NavLink exact to="/">
          <li className="main__navigation-text">ABOUT</li>
        </NavLink>
        <NavLink exact to="/shop">
          <li className="main__navigation-text">SHOP</li>
        </NavLink>
        <NavLink exact to="/">
          <li>
            <img
              src="https://drive.google.com/uc?export=view&id=1bwrfRFuekPI4i7lBFgxU0OD5euzfOytN"
              alt="brooklyn mayd logo"
            ></img>
          </li>
        </NavLink>
        <NavLink exact to="/parts-and-service">
          <li className="main__navigation-text">PARTS &#38; SERVICE</li>
        </NavLink>
        <NavLink exact to="/financing">
          <li className="main__navigation-text">FINANCING</li>
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route exact path="/parts-and-service">
          <ServiceAndParts />
        </Route>
        <Route exact path="/financing">
          <Financing />
        </Route>
        {/* <Route>
                        <NotFound />
                    </Route> */}
      </Switch>
    </>
  );
}
