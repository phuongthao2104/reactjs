//state có thay đổi bất kí khi nào muốn
import React, { useState } from "react";
 
class Socail extends React.Component {
  constructor(props) {
    super(props);
    //Chỉ định một state
    this.state = { name: "Reactjs" };
  }
  render() {
    return (
      <div>
        <h1>Học {this.state.name}</h1>
      </div>
    );
  }
};

export default Socail;