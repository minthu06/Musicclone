import React, { Component } from "react";
import "./Favor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

class Favor extends Component {
  render() {
    return (
      <div className="Music-Favor">
        <div className="header-favor">
          <div className="float">
            <img
              className="img-favor"
              src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
            />
          </div>
          <div className="float">
            <div className="playlist">PLAYLIST</div>
            <div className="Song-favor">Bài hát đã thích</div>
          </div>
        </div>
        <div className="list-favor">
          <div className="list-favor-child">
            <FontAwesomeIcon className="icon-music" icon={faMusic} />
            <h1> Bài hát bạn yêu thích sẽ xuất hiện ở đây</h1>
            <p> Lưu bài hát bằng cách nhấn vào biểu tượng trái tim.</p>
            <button type="button" className="btn-favor-search">
              <strong>Tìm bài hát</strong>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Favor;
