import React, { Component } from "react";
import { VictoryPie } from "victory";
import { DataConsumer } from "../Utilities/DataContext";
import { labelFill } from "../Utilities";
import { PurpleTheme } from "../Themes";

export default class PewPie extends Component {
  render() {
    return (
      <DataConsumer>
        {context => (
          <VictoryPie
            theme={PurpleTheme}
            width={context.config.layout.width}
            height={context.config.layout.height}
            padding={{
              top: context.config.layout.padding[0],
              right: context.config.layout.padding[1],
              bottom: context.config.layout.padding[2],
              left: context.config.layout.padding[3]
            }}
            data={context.data}
            colorScale={context.config.colors}
            labels={d => `${d.y}%`}
            labelRadius={context.config.labels.pieLabelRadius}
            style={{
              labels: {
                fill: d => d.fill,
                fontWeight: context.config.labels.fontWeight
              },
              data: {
                stroke: "white",
                strokeWidth: 0.5
              }
            }}
          />
        )}
      </DataConsumer>
    );
  }
}
