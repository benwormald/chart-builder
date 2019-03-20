import React, { Component } from "react";
import ChartBuilder from "./ChartBuilder";
import { DataProvider } from "../Utilities/DataContext";
// import { ErrorBoundary } from "../Utilities";
// import { LazyLoadModule, Title } from "./Utilities";
// import "./App.css";

class ChartBuilderWrapper extends Component {
  state = {
    data: this.props.data,
    config: this.props.config
  };

  render() {
    return (
      <DataProvider
        value={{
          data: this.state.data,
          config: this.state.config
        }}
      >
        <ChartBuilder />
      </DataProvider>
    );
  }
}

export default ChartBuilderWrapper;
