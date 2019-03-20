import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import styled from "styled-components";
import { DataConsumer } from "../Utilities/DataContext";
import { ErrorBoundary } from "../Utilities";
import {
  PewBarHorizontal,
  PewBarVertical,
  PewPie,
  PewStackedBar,
  PewSingleStackedBar
} from "../Elements";

export default class ChartBuilder extends Component {
  render() {
    return (
      <DataConsumer>
        {context => {
          console.log(context.data);
          switch (context.config.layout.type) {
            case "bar":
              if (context.config.layout.orientation === "vertical") {
                return (
                  <ChartContainer
                    width={context.config.layout.width}
                    height={context.config.layout.height}
                  >
                    <PewBarVertical
                      width={context.config.layout.width}
                      height={context.config.layout.height}
                    />
                  </ChartContainer>
                );
              } else {
                return (
                  <ChartContainer
                    width={context.config.layout.width}
                    height={context.config.layout.height}
                  >
                    <ErrorBoundary>
                      <PewBarHorizontal
                        width={context.config.layout.width}
                        height={context.config.layout.height}
                      />
                    </ErrorBoundary>
                  </ChartContainer>
                );
              }
            case "pie":
              return (
                <ChartContainer
                  width={context.config.layout.width}
                  height={context.config.layout.height}
                >
                  <PewPie />
                </ChartContainer>
              );
            case "stacked-bar":
              return (
                <ChartContainer
                  width={context.config.layout.width}
                  height={context.config.layout.height}
                >
                  <PewStackedBar
                    width={context.config.layout.width}
                    height={context.config.layout.height}
                  />
                </ChartContainer>
              );
            case "single-stacked-bar":
              return (
                <ChartContainer
                  width={context.config.layout.width}
                  height={context.config.layout.height}
                >
                  <PewSingleStackedBar
                    width={context.config.layout.width}
                    height={context.config.layout.height}
                  />
                </ChartContainer>
              );
          }
        }}
      </DataConsumer>
    );
  }
}

const ChartContainer = styled.div`
  max-width: ${props => props.width}px;
  max-height: ${props => props.height}px;
`;
