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
              src="https://lh3.googleusercontent.com/aAz4VVpzNtob39hMLrSLPWuClD7YncN1_q5R-qfJgJtMbgev5s1yAsUxl2BgnGNZOBQhm53l5q5m8P8D_ui4NAh5Fg8fJHwEZWXU472YyG-dMizYHgNXQ4WNrRvH1GIO0ZJunrfDyvkznnjtafjbeO8oyDxMJhm21RF4PNL2gn1FVe0QOPEqqx1DAgr1SehfO7Wvq-VA6Kj29TXomQ-41o8e0McYL2GO6JecjiKxJQCVbQ9FX2HHw_2aErAGaFf0N9KLiu-PXfEjahamZ0vUI6az5CJ84D0PSMJltgBJ5HN6r_aF8OixoZuU6dO2fQZ_fIQBqag9kdGqrKkv-uaU90nVx-eWkDKP_-IV8DlB-opohNxumsGjevj3tUSO6f38MaCO0zW7U7iZqgevYegZ2od7-2edF66l22ZZOr6myHCoxCYmXVTVOgaX7dcjJu0oEc46qLsc1CIag0uMyA3j-QCvrOeyFCPiopl2am1Aog_gZpb7sctIk2M8C0q-Mx1IdIKm8b496bQEBCITzHGCbPCobORb6Q4QLSW-3XJDxA3t859OZtx_wddjFGzQgiEc5xIMbrzH1ht8kslkHD344g3cYWDsQJtpqWAI_s8h3Llhe6iIYf3B8kedaToNVKzmw6hTRV3sBli37v6auUdE63g4UC6uozVb7qF2XJY4xOqU_mP4pqEJLk7O12iP4b3s0sCdhfT3dzaxMmsTc3aTli8=s172-no?authuser=1"
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
