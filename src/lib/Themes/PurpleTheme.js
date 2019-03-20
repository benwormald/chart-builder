import { assign } from "lodash";

// *
// * Colors
// *
const purple1 = "#733D47";
const purple2 = "#391E22";
const purple3 = "#552E35";
const purple4 = "#BC7B86";
const purple5 = "#D1A8AF";
const purple6 = "#E8D3D7";
const yellow1 = "#D1A730";
const yellow2 = "#E4CB83";
const yellow3 = "#ECDBAC";
const yellow4 = "#F6EED6";
const colors = [
  purple1,
  purple2,
  purple3,
  purple4,
  purple5,
  yellow1,
  yellow2,
  yellow3,
  yellow4
];
const blueGrey50 = "#ECEFF1";
const blueGrey700 = "#455A64";
const grey900 = "#212121";
const black1 = "#231F20";
const black2 = "#6D6F71";
// *
// * Typography
const sansSerif = "'franklin-gothic-urw', Verdana, Geneva, sans-serif";
const letterSpacing = "normal";
const fontSize = 12;
// *
// * Layout
// *
const padding = 8;
const baseProps = {
  width: 350,
  height: 350,
  padding: 50
};
// *
// * Labels
// *
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding,
  fill: black1,
  stroke: "transparent",
  strokeWidth: 0
};

const centeredLabelStyles = assign({ textAnchor: "middle" }, baseLabelStyles);
// *
// * Strokes
// *
const strokeDasharray = "1,2";
const strokeLinecap = "round";
const strokeLinejoin = "round";

export default {
  area: assign(
    {
      style: {
        data: {
          fill: grey900
        },
        labels: centeredLabelStyles
      }
    },
    baseProps
  ),
  axis: assign(
    {
      style: {
        axis: {
          fill: "transparent",
          stroke: black1,
          strokeWidth: 1,
          strokeLinecap,
          strokeLinejoin
        },
        axisLabel: assign({}, centeredLabelStyles, {
          padding,
          stroke: "transparent"
        }),
        grid: {
          fill: "none",
          stroke: black2,
          strokeDasharray,
          strokeLinecap,
          strokeLinejoin,
          pointerEvents: "painted"
        },
        ticks: {
          fill: "transparent",
          size: 0,
          stroke: black1,
          strokeWidth: 1,
          strokeLinecap,
          strokeLinejoin
        },
        tickLabels: assign({}, baseLabelStyles, {
          fill: black1
        })
      }
    },
    baseProps
  ),
  bar: assign(
    {
      style: {
        data: {
          fill: blueGrey700,
          padding,
          strokeWidth: 0
        },
        labels: baseLabelStyles
      }
    },
    baseProps
  ),
  boxplot: assign(
    {
      style: {
        max: { padding, stroke: blueGrey700, strokeWidth: 1 },
        maxLabels: baseLabelStyles,
        median: { padding, stroke: blueGrey700, strokeWidth: 1 },
        medianLabels: baseLabelStyles,
        min: { padding, stroke: blueGrey700, strokeWidth: 1 },
        minLabels: baseLabelStyles,
        q1: { padding, fill: blueGrey700 },
        q1Labels: baseLabelStyles,
        q3: { padding, fill: blueGrey700 },
        q3Labels: baseLabelStyles
      },
      boxWidth: 20
    },
    baseProps
  ),
  candlestick: assign(
    {
      style: {
        data: {
          stroke: blueGrey700
        },
        labels: centeredLabelStyles
      },
      candleColors: {
        positive: "#ffffff",
        negative: blueGrey700
      }
    },
    baseProps
  ),
  chart: baseProps,
  errorbar: assign(
    {
      borderWidth: 8,
      style: {
        data: {
          fill: "transparent",
          opacity: 1,
          stroke: blueGrey700,
          strokeWidth: 2
        },
        labels: centeredLabelStyles
      }
    },
    baseProps
  ),
  group: assign(
    {
      colorScale: colors
    },
    baseProps
  ),
  legend: {
    colorScale: colors,
    gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle"
      },
      labels: baseLabelStyles,
      title: assign({}, baseLabelStyles, { padding: 5 })
    }
  },
  line: assign(
    {
      style: {
        data: {
          fill: "transparent",
          opacity: 1,
          stroke: blueGrey700,
          strokeWidth: 2
        },
        labels: centeredLabelStyles
      }
    },
    baseProps
  ),
  pie: assign(
    {
      colorScale: colors,
      style: {
        data: {
          padding,
          stroke: blueGrey50,
          strokeWidth: 1
        },
        labels: assign({}, baseLabelStyles, { padding: 20 })
      }
    },
    baseProps
  ),
  scatter: assign(
    {
      style: {
        data: {
          fill: blueGrey700,
          opacity: 1,
          stroke: "transparent",
          strokeWidth: 0
        },
        labels: centeredLabelStyles
      }
    },
    baseProps
  ),
  stack: assign(
    {
      colorScale: colors
    },
    baseProps
  ),
  tooltip: {
    style: assign({}, centeredLabelStyles, {
      padding: 5,
      pointerEvents: "none"
    }),
    flyoutStyle: {
      stroke: grey900,
      strokeWidth: 1,
      fill: "#f0f0f0",
      pointerEvents: "none"
    },
    cornerRadius: 5,
    pointerLength: 10
  },
  voronoi: assign(
    {
      style: {
        data: {
          fill: "transparent",
          stroke: "transparent",
          strokeWidth: 0
        },
        labels: assign({}, centeredLabelStyles, {
          padding: 5,
          pointerEvents: "none"
        }),
        flyout: {
          stroke: grey900,
          strokeWidth: 1,
          fill: "#f0f0f0",
          pointerEvents: "none"
        }
      }
    },
    baseProps
  )
};
