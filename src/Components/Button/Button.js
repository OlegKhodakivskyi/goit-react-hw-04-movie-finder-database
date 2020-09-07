import React, { Component } from "react";
import styles from "./Button.module.css";
import { withRouter } from "react-router-dom";

class Button extends Component {
  handleGoBack = () => {
    // console.log("button", this.props);

    if (this.props.from) {
      // console.log("first");
      if (this.props.search) {
        // console.log("second");
        this.props.history.push(`${this.props.from}${this.props.search}`);
      }
    } else return this.props.history.push("/");
  };

  render() {
    // console.log(this.props);
    return (
      <div className={styles.buttonWrapper}>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
      </div>
    );
  }
}

export default withRouter(Button);
