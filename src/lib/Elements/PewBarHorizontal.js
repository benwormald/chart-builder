import React, { Component } from "react";
import { VictoryBar, VictoryGroup, VictoryAxis, VictoryChart } from "victory";
import { DataConsumer } from "../Utilities/DataContext";
import { labelFill, labelPosition, ErrorBoundary } from "../Utilities";
import { PurpleTheme } from "../Themes";

export default class PewBarHorizontal extends Component {
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
      labelCutoff: 425 <= window.innerWidth ? 5 : 10
    });
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions(event) {
    this.setState({
      chartWidth:
        this.props.width <= event.target.innerWidth
          ? this.props.width
          : event.target.innerWidth,
      labelCutoff: 425 <= event.target.innerWidth ? 5 : 10
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
            <ErrorBoundary>
              <VictoryChart
                domain={{
                  x: context.config.xAxis.domain
                }}
                domainPadding={context.config.yAxis.domainPadding}
                padding={{ left: context.config.yAxis.padding }}
                theme={PurpleTheme}
                width={this.state.chartWidth}
                height={context.config.layout.height}
                standalone={false}
              >
                <VictoryGroup horizontal>
                  <VictoryBar
                    data={context.data}
                    x={context.config.data.x}
                    y={context.config.data.y}
                    sortKey={
                      context.config.data.sortKey == "noSort"
                        ? undefined
                        : context.config.data.sortKey
                    }
                    sortOrder={
                      context.config.data.sortOrder == "noSort"
                        ? undefined
                        : context.config.data.sortOrder
                    }
                    barWidth={context.config.bar.width}
                    barRatio={context.config.bar.barToSpaceRatio}
                    labels={d => `${d.y}`}
                    style={{
                      labels: {
                        fill: d =>
                          d.y > this.state.labelCutoff
                            ? labelFill(context.config.colors[0])
                            : context.config.labels.color
                      },
                      data: { fill: context.config.colors[0] }
                    }}
                    labelComponent={labelPosition(
                      context,
                      this.state.labelCutoff
                    )}
                  />
                </VictoryGroup>
                <VictoryAxis style={{ grid: { stroke: null } }} />
              </VictoryChart>
            </ErrorBoundary>
          </svg>
        )}
      </DataConsumer>
    );
  }
}
