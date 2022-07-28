import React from "react";
import UserImg from "E:/React/music/src/assets/img/user.png";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSearch } from "@fortawesome/free-solid-svg-icons";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <div className="user">
          <form role="search" className="search-bar">
            <button className="btn-search">
              <FontAwesomeIcon
                className="img-search"
                icon={faSearch}
                style={{ color: "black" }}
              ></FontAwesomeIcon>
            </button>
            <input
              className="input-search"
              type="text"
              placeholder="Nghệ sĩ, bài hát hoặc album"
            />
          </form>
          <form className="user-account">
            <img src={UserImg} style={{ width: "40px" }} />
            <button onclick="myFunction()" className="color-grey btn-user">
              Minh Thư Nguyễn
            </button>
            <FontAwesomeIcon className="icon-down" icon={faSortDown} />
          </form>
        </div>
      </>
    );
  }
}
export default HomePage;
