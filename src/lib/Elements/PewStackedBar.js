import React, { Component } from "react";
import {
  VictoryChart,
  VictoryBar,
  VictoryStack,
  VictoryAxis,
  VictoryLabel
} from "victory";
import { DataConsumer } from "../Utilities/DataContext";
import { labelFill } from "../Utilities";
import { PurpleTheme } from "../Themes";

export default class PewStackedBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartWidth: this.props.width,
      labelCutoff: 5
    };
  }
  componentDidMount() {
    this.setState({
      chartWidth:
        this.props.width <= window.innerWidth
          ? this.props.width
          : window.innerWidth,
      labelCutoff: 425 <= window.innerWidth ? 5 : 8
    });
    window.addEventListener("resize", this.updateDimensions.bind(this));
    // remove this on unmount
  }

  updateDimensions(event) {
    this.setState({
      chartWidth:
        this.props.width <= event.target.innerWidth
          ? this.props.width
          : event.target.innerWidth,
      labelCutoff: 425 <= event.target.innerWidth ? 5 : 8
    });
  }

  render() {
    return (
      <DataConsumer>
        {context => (
          <svg
            viewBox={
              "0 0" +
              " " +
              this.state.chartWidth +
              " " +
              context.config.layout.height
            }
            preserveAspectRatio="none"
            width="100%"
            height={context.config.layout.height}
          >
            <VictoryChart
              domainPadding={30}
              padding={{ left: context.config.yAxis.padding }}
              width={this.state.chartWidth}
              height={context.config.layout.height}
              theme={PurpleTheme}
              standalone={false}
            >
              <VictoryAxis dependentAxis style={{ grid: { stroke: null } }} />
              <VictoryStack horizontal colorScale={context.config.colors}>
                {context.data.map((datum, index) => {
                  // let revDatum = datum.reverse();
                  return (
                    <VictoryBar
                      key={index}
                      data={datum}
                      barWidth={24}
                      barRatio={1.3}
                      // labels={d => (d.y > 5 ? `${d.y.toFixed(0)}` : ``)}
                      style={{
                        labels: {
                          fill: labelFill(context.config.colors[index]),
                          size: context.config.labels.fontSize
                        }
                      }}
                      labelComponent={
                        <VictoryLabel
                          data={context.data}
                          text={datum => {
                            if (
                              datum.y.toFixed(
                                context.config.labels.toFixedDecimal
                              ) >= this.state.labelCutoff
                            ) {
                              if (datum.label) {
                                return datum.label;
                              } else {
                                return datum.y.toFixed(
                                  context.config.labels.toFixedDecimal
                                );
                              }
                            } else {
                              return "";
                            }
                          }}
                          dx={context.config.labels.labelPositionDX}
                        />
                      }
                    />
                  );
                })}
              </VictoryStack>
            </VictoryChart>
          </svg>
        )}
      </DataConsumer>
    );
  }
}
