import React from "react";
import { ChartBuilderWrapper } from "../lib";
const data = [
  { x: "Print", y: 15.0559, label: "15" },
  { x: "Radio", y: 4, label: "4" },
  { x: "TV", y: 35.9595, label: "36" },
  { x: "Social media", y: 11.5297, label: "12" },
  { x: "News website/app", y: 26.6457, label: "27" }
];
const config = {
  layout: {
    type: "bar",
    orientation: "horizontal",
    width: 640,
    height: data.length * 32,
    padding: [0, 0, 0, 0]
  },
  xAxis: {
    domain: null
  },
  yAxis: {
    padding: 100,
    domain: null,
    domainPadding: 20
  },
  data: {
    x: "x",
    y: "y",
    sortKey: "y",
    sortOrder: "ascending"
  },
  legend: {
    show: true,
    legendPosition: "top"
  },
  bar: {
    width: 24,
    barToSpaceRatio: 1.1
  },
  colors: ["#733D47", "#BD7C87", "#D1A8AF", "#E8D3D7"],
  labels: {
    color: "black",
    fontWeight: 200,
    fontSize: 10,
    labelPositionDX: -27,
    labelPositionDY: null,
    pieLabelRadius: 60,
    toFixedDecimal: 0
  }
};
const App = () => (
  <div>
    <ChartBuilderWrapper data={data} config={config} />
  </div>
);

export default App;
