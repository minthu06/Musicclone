import React from "react";
// import { Slide } from "react-slideshow-image";
import img1 from "../assets/img/img1.svg";
import banner from "../assets/img/img3.jpg";
// import Carousel from "react-bootstrap/Carousel";
import "./slide.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

class SlideShow extends React.Component {
  state = {
    slideImages: [
      { url: img1, caption: "Slide1" },
      { url: banner, caption: "Slide2" },
    ],
    genres: [
      { id: 1, Topic: "Bảng xếp hạng Nổi bật", TopicDirection: "Xem tất cả" },
      {
        id: 2,
        Topic: "Chương trình đáng để thử",
        TopicDirection: "Xem tất cả",
      },
      { id: 3, Topic: "Hoài niệm", TopicDirection: "Xem tất cả" },
    ],
    listAlbum: [
      {
        id: 1,
        name: "Bài hát hàng đầu tại Toàn Cầu",
        src: "https://charts-images.scdn.co/assets_generated/locale_vi/regional/weekly/region_global_default.jpg",
        direction:
          "Thông tin cập nhật hằng tuần về những bản nhạc được nghe nhiều nhất hiện nay tại Toàn Cầu.",
      },
      {
        id: 2,
        name: "Bài hát hàng đầu tại Việt Nam",
        src: "https://charts-images.scdn.co/assets_generated/locale_vi/regional/weekly/region_vn_default.jpg",
        direction:
          "Thông tin cập nhật hằng tuần về những bản nhạc được nghe nhiều nhất hiện nay tại Việt Nam.",
      },
      {
        id: 3,
        name: "50 bài hát hàng đầu tại Toàn Cầu",
        src: "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg",
        direction:
          "Thông tin cập nhật hằng ngày về những bản nhạc được nghe nhiều nhất hiện nay tại Toàn Cầu.",
      },
      {
        id: 4,
        name: "50 bài hát hàng đầu tại Việt Nam",
        src: "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_vn_default.jpg",
        direction:
          "Thông tin cập nhật hằng ngày về những bản nhạc được nghe nhiều nhất hiện nay tại Việt Nam.",
      },
      {
        id: 5,
        name: "50 bài hát thịnh hành nhất tại Toàn Cầu",
        src: "https://charts-images.scdn.co/assets/locale_en/viral/daily/region_global_default.jpg",
        direction:
          "Thông tin cập nhật hằng ngày về những bản nhạc thịnh hành nhất hiện nay tại Toàn Cầu.",
      },
      {
        id: 6,
        name: "50 bài hát thịnh hành nhất tại Việt Nam",
        src: "https://charts-images.scdn.co/assets/locale_en/viral/daily/region_vn_default.jpg",
        direction:
          "Thông tin cập nhật hằng ngày về những bản nhạc thịnh hành nhất hiện nay tại Việt Nam.",
      },
    ],
    listAlbum2: [
      {
        id: 1,
        name: "Rintik Sedu",
        src: "https://i.scdn.co/image/ab67656300005f1fc2b0862f6b12340651dd89e0",
        direction: "Rintiksedu",
      },
      {
        id: 2,
        name: "Radio Thìa Đầy Thơ",
        src: "https://i.scdn.co/image/ab67656300005f1f037da4fdf67e594dccf975c3",
        direction: "Radio Thìa Đầy Thơ",
      },
    ],
  };
  onMouseAlbum = (event) => {
    const btn = event.currentTarget;
    btn.style.backgroundColor = "#292828";
  };
  onMouseOutAlbum = (event) => {
    const btn = event.currentTarget;
    btn.style.backgroundColor = "#191919";
  };
  render() {
    let { listAlbum, listAlbum2, genres, slideImages } = this.state;
    return (
      <>
        <div className="Slide-container">
          {/* <Slide>
            {slideImages.map((slideImage, index) => {
              <div className="each-slide" key={index}>
                <div style={{ backgroundImage: `url(${slideImage.url})` }}>
                  <span>{slideImage.caption}</span>
                </div>
              </div>;
            })}
          </Slide> */}
          {/* <img className="pd-25px" src={img1} /> */}
          <div className="topic pd-25px">
            {genres.map((genre, index) => {
              return (
                <>
                  <div className="topic-name" key={genre.id}>
                    <h2 href="#trending" className="text name">
                      {genre.Topic}
                    </h2>
                    <h3 href="#trending" className="text see-all">
                      {genre.TopicDirection}
                    </h3>
                  </div>
                  {genre.id !== 2 ? (
                    <div className="topic-list">
                      {listAlbum.map((item) => {
                        return (
                          <div
                            className="topic-member"
                            key={item.id}
                            onMouseOver={(item) => this.onMouseAlbum(item)}
                            onMouseOut={(item) => this.onMouseOutAlbum(item)}
                          >
                            <img className="img-album" src={item.src} />
                            <a class="member-name">
                              <strong>{item.name}</strong>
                            </a>
                            <p class="member-direction">{item.direction}</p>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="topic-list">
                      {listAlbum2.map((item) => {
                        return (
                          <div
                            className="topic-member"
                            key={item.id}
                            onMouseOver={(item) => this.onMouseAlbum(item)}
                            onMouseOut={(item) => this.onMouseOutAlbum(item)}
                          >
                            <img className="img-album" src={item.src} />
                            <p class="member-name">
                              <strong>{item.name}</strong>
                            </p>
                            <p class="member-direction">{item.direction}</p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
export default SlideShow;
