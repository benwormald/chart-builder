import React, { Component } from "react";
import { VictoryBar, VictoryStack, VictoryGroup, VictoryLabel } from "victory";
import { DataConsumer } from "../Utilities/DataContext";
import { labelFill } from "../Utilities";
import { PurpleTheme } from "../Themes";

export default class PewSingleStackedBar extends Component {
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
            <VictoryGroup
              theme={PurpleTheme}
              width={this.state.chartWidth}
              height={context.config.layout.height}
              standalone={false}
            >
              <VictoryStack horizontal colorScale={context.config.colors}>
                {context.data.map((datum, index) => {
                  return (
                    <VictoryBar
                      key={index}
                      data={datum}
                      barWidth={24}
                      barRatio={1.3}
                      labels={d => (d.y >= 5 ? `${d.y}` : ``)}
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
            </VictoryGroup>
          </svg>
        )}
      </DataConsumer>
    );
  }
}
