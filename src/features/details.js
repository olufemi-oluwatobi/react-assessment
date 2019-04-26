import React, { Component } from "react";
import makeGetRequest from "../requestHelper";
import { Icon } from "antd";

const MAIN_BODY = {
  marginTop: "40px",
  width: "50%",

  marginLeft: "20%"
};
const BUTTON_STYLE = {
  float: "right",
  background: "#0b2581",
  color: "white",
  width: "50px",
  height: "50px",
  marginTop: "-50px",
  borderRadius: "2px",
  fontWeight: "bold",
  padding: "zero",
  border: "none"
};
const FOOTER_ICON_STYLES = { fontSize: "50px", color: "white" };

const footerStyle = type => {
  return {
    float: type === "left" ? "left" : "right",
    width: "50%",
    height: "50px",
    background: type === "left" ? "#1a1818" : "#0b2581",
    textAlign: "center",
    cursor: "pointer"
  };
};

class DetailsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: {}
    };
  }
  componentDidMount() {
    const {
      match: {
        params: { photoId }
      }
    } = this.props;
    this.details(photoId);
  }
  fetchDetails(id) {
    return makeGetRequest(`https://jsonplaceholder.typicode.com/photos/${id}`);
  }
  details = async id => {
    const photo = await this.fetchDetails(id);
    if (photo) {
      this.setState({ photo });
    }
  };

  render() {
    const { photo } = this.state;
    console.log();
    return (
      <div style={MAIN_BODY}>
        <img src={photo.url} style={{ width: "100%", height: "300px" }} />
        <div style={{ marginleft: "5px", marginRight: "5px" }}>
          <div style={{ padding: "10px" }}>
            <div>
              <p style={{ fontWeight: "bold" }}>title{photo.id}</p>
              <span>
                <p>{photo.title}</p>
              </span>
            </div>
            <button style={BUTTON_STYLE}>GO</button>
          </div>
          <div
            style={{ marginTop: "10px", padding: "10px", textAlign: "justify" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          <div>
            <span style={footerStyle("left")}>
              <Icon type="phone" style={FOOTER_ICON_STYLES} />
            </span>
            <span style={footerStyle("right")}>
              <Icon type="mail" style={FOOTER_ICON_STYLES} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default DetailsView;
