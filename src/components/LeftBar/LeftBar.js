import React from "react";
import { NavLink } from "react-router-dom";
import "./LeftBar.scss";

export const LeftBar = () => {
  return (
    <div className="LeftBar">
      <div className="LeftBar__logo">IMPEKABLE</div>
      <div className="LeftBar__body">
        <ul className="LeftBar__list">
          <li className="LeftBar__item">
            <i className="icon-Path-357"></i>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="LeftBar__item">
            <i className="icon-chart"></i>
            <NavLink to="/">Dashboard</NavLink>
          </li>
          <li className="LeftBar__item">
            <i className="icon-Path-358"></i>
            <NavLink to="/">Inbox</NavLink>
          </li>
          <li className="LeftBar__item">
            <i className="icon-products"></i>
            <NavLink to="/">Products</NavLink>
          </li>
          <li className="LeftBar__item">
            <i className="icon-Path-102"></i>
            <NavLink to="/">Invoices</NavLink>
          </li>
          <li className="LeftBar__item">
            <i className="icon-customers"></i>
            <NavLink to="/">Customers</NavLink>
          </li>
          <li className="LeftBar__item">
            <i className="icon-chat"></i>
            <NavLink to="/">Chat Room</NavLink>
          </li>
          <li className="LeftBar__item active">
            <i className="icon-calendar"></i> 
            <NavLink to="/">Calendar</NavLink>
          </li>
          <li className="LeftBar__item">
            <i className="icon-Path-107"></i>
            <NavLink to="/">Help Center</NavLink>
          </li>
          <li className="LeftBar__item">
            <i className="icon-Path-108"></i>
            <NavLink to="/">Settings</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
