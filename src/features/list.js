import React, { Component } from "react";
import makeGetRequest from "../requestHelper";
import { Link } from "react-router-dom";

const MAIN_WRAPPER = {
  width: "100%",
  height: "200px",
  borderBottom: "2px solid black",
  marginTop: "20px"
};
const IMAGE_STYLE = {
  float: "left",
  marginLeft: "10px"
};
class Listview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  componentDidMount() {
    this.list();
  }
  fetchList() {
    return makeGetRequest("https://jsonplaceholder.typicode.com/photos");
  }
  list = async () => {
    const albumList = await this.fetchList();
    if (albumList) {
      this.setState({ list: albumList });
    }
  };

  render() {
    const { list } = this.state;
    return (
      <div
        style={{
          width: "50%",
          border: "2px solid black",
          marginTop: "20px",
          marginLeft: "20%",
          height: "700px",
          overflow: "scroll"
        }}
      >
        {list.map((item, index) => {
          if (index < 10) {
            return (
              <a style={{ textDecoration: "none" }} href={`/${item.id}`}>
                <div style={MAIN_WRAPPER}>
                  <img style={IMAGE_STYLE} src={item.thumbnailUrl} />
                  <div
                    style={{
                      //TODO: use flex-box
                      marginLeft: "190px",
                      marginTop: "100px",
                      color: "black",
                      textDecoration: "none"
                    }}
                  >
                    <p style={{ fontWeight: "bold" }}>title {index}</p>
                    <span className="description">{item.title}</span>
                  </div>
                </div>
              </a>
            );
          }
        })}
      </div>
    );
  }
}
export default Listview;
