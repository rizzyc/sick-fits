import React, { Component } from "react";
import Header from "../components/Header";
import Meta from "../components/Meta";
import styled from "styled-components";

const MyButton = styled.button`
  background: rebeccapurple;
  font-size: 50px;
  border-radius: 10px;
  span {
    font-size: 100px;
  }
`;

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <MyButton>
          Click Me
          <span>C</span>
        </MyButton>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
