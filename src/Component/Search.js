import React from "react";
import "./search.css";
class Search extends React.Component {
  state = {
    listAlbum: [
      {
        id: 1,
        name: "Podcard ",
        src: "https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5",
        color: "rgb(39, 133, 106)",
      },
      {
        id: 2,
        name: "Dành cho bạn",
        src: "https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe",
        color: "rgb(30, 50, 100)",
      },
      {
        id: 3,
        name: "Bảng xếp hạng",
        src: "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg",
        color: "rgb(141, 103, 171)",
      },
      {
        id: 4,
        name: "Mới phát hành",
        src: "https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112",
        color: "rgb(232, 17, 91)",
      },
      {
        id: 5,
        name: "Khám phá",
        src: "https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg",
        color: "rgb(141, 103, 171)",
      },
      {
        id: 6,
        name: "Sự kiện trực tiếp",
        src: "https://t.scdn.co/images/8cfa9cb1e43a404db76eed6ad594057c",
        color: "rgb(30, 50, 100)",
      },
      {
        id: 7,
        name: "Nhạc Việt",
        src: "https://t.scdn.co/images/6e1202d14b1f400592532c10d10871ef.jpeg",
        color: "rgb(180, 155, 200)",
      },
      {
        id: 8,
        name: "K-pop",
        src: "https://i.scdn.co/image/ab67706f00000002978b9f4a4f40b430fd0d837e",
        color: "rgb(20, 138, 8)",
      },
      {
        id: 9,
        name: "Pop",
        src: "https://t.scdn.co/images/0a74d96e091a495bb09c0d83210910c3",
        color: "rgb(141, 103, 171)",
      },
      {
        id: 10,
        name: "Tâm trạng",
        src: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba",
        color: "rgb(141, 103, 171)",
      },
      {
        id: 11,
        name: "Không gian lãng mạn",
        src: "https://i.scdn.co/image/ab67706f0000000213601d4833623a4d6b328e38",
        color: "rgb(140, 25, 50)",
      },
      {
        id: 12,
        name: "Pride",
        src: "https://t.scdn.co/images/c9a01586687a45a78c56d9be5aed3c79.jpeg",
        color: "rgb(80, 155, 245)",
      },
      {
        id: 13,
        name: "Fresh Finds",
        src: "https://t.scdn.co/images/16e40e64d2a74fa8a0a020d456e6541d.jpeg",
        color: "rgb(105 14 68)",
      },
      {
        id: 14,
        name: "EQUAL",
        src: "https://i.scdn.co/image/ab67706f0000000284a1ec26f589f0d569805a07",
        color: "rgb(20, 138, 8)",
      },
      {
        id: 15,
        name: "Sức khỏe",
        src: "https://i.scdn.co/image/ab67656300005f1ff234909e69a68d92ca0af6ca",
        color: "rgb(165, 103, 82)",
      },
      {
        id: 16,
        name: "Rock",
        src: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba",
        color: "rgb(230, 30, 50)",
      },
      {
        id: 17,
        name: "Hip-Hop",
        src: "https://i.scdn.co/image/ab67706f0000000213601d4833623a4d6b328e38",
        color: "rgb(186, 93, 7)",
      },
      {
        id: 18,
        name: "League of Legends ",
        src: "https://t.scdn.co/images/c9a01586687a45a78c56d9be5aed3c79.jpeg",
        color: "rgb(20, 138, 8)",
      },
      {
        id: 19,
        name: "Ở nhà",
        src: "https://t.scdn.co/images/16e40e64d2a74fa8a0a020d456e6541d.jpeg",
        color: "rgb(71, 125, 149)",
      },
      {
        id: 20,
        name: "Trên xe",
        src: "https://i.scdn.co/image/ab67706f0000000284a1ec26f589f0d569805a07",
        color: "rgb(71, 125, 149)",
      },
      {
        id: 21,
        name: "Ambient",
        src: "https://i.scdn.co/image/ab67656300005f1ff234909e69a68d92ca0af6ca",
        color: "rgb(71, 125, 149)",
      },
    ],
  };
  render() {
    let { listAlbum } = this.state;
    return (
      <>
        <div className=" Search-container">
          <h2 className="Search-text">Duyệt tìm tất cả</h2>
          <div className="flex-container">
            {listAlbum.map((item) => {
              return (
                <>
                  <div
                    className="flex-item"
                    key={item.id}
                    style={{ backgroundColor: item.color }}
                  >
                    <img className="img-album-search" src={item.src} />
                    <h3 className="img-name">{item.name}</h3>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Search;
