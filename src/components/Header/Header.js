import React from "react";
import "./Header.scss";

import UserAvatar from "../../assets/images/Avatar.png";

export const Header = () => {

    const [search, setSearch] = React.useState("")

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__search">
          <i className="icon-search"></i>
          <input
            type="text"
            placeholder="Search transactions, invoices or help"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="header__actions">
          <div className="header__action">
            <i className="icon-Path-107"></i>
          </div>
          <div className="header__action">
            <span className="header__action-custom">
            <i className="icon-Path-9 "></i>
            <i className="icon-Path-10 icon-mod"></i>
            </span>
          </div>
          <div className="header__action">
            <i className="icon-bell header__action-bell"></i>
            <span className="header__action-notification"></span>
          </div>
        </div>
        <div className="header__border"></div>
        <div className="header__user">
          <div className="header__user-name">John Doe</div>
          <span className="icon-Path-26"></span>
          <div className="header__user-avatar">
            <img src={UserAvatar} alt="user" />
          </div>
        </div>
      </div>
    </header>
  );
};
