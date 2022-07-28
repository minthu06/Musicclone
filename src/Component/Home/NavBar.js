import React, { useState } from "react";
import "./style.css";
import Logo from "E:/React/music/src/assets/img/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faSearch, faBook } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faPlusSquare } from "@fortawesome/free-regular-svg-icons";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <div className="sidebar">
          <img src={Logo} style={{ marginLeft: "9px", padding: "12px" }} />
          <div className="Nav-child">
            <div className="nav-member">
              <a className="#home">
                <a className="color-grey" href="Home">
                  <FontAwesomeIcon className="icon" icon={faHouse} />
                  Home
                </a>
              </a>
              <a className="#search">
              <a className="color-grey" href="Search">
                <FontAwesomeIcon className="icon" icon={faSearch} />
                Search
              </a>
              </a>
              <a className="color-grey" href="Genres">
                <FontAwesomeIcon className="icon" icon={faBook} />
                Genres
              </a>
            </div>
            <div className="nav-member">
              <a className="color-grey" href="Favorite">
                <FontAwesomeIcon className="icon" icon={faHeart} />
                My Favorite
              </a>
              <button
                type="button"
                className="btn-playlist color-grey"
                onClick={(event) => this.handleOnClickAdd(event)}
              >
                <FontAwesomeIcon className="icon" icon={faPlusSquare} />
                Create Playlist
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default NavBar;
