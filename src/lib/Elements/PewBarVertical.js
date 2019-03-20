import React from "react";
import {
  VictoryBar,
  VictoryGroup,
  VictoryLabel,
  VictoryAxis,
  VictoryChart
} from "victory";
import { PurpleTheme } from "../Themes";

const PewBarVertical = ({ data, x, y, colors, width, labelColors }) => (
  <VictoryChart domainPadding={20} theme={PurpleTheme} width={width}>
    <VictoryAxis dependentAxis style={{ axis: { stroke: null } }} />
    <VictoryAxis style={{ grid: { stroke: null } }} />
    <VictoryGroup colorScale={colors}>
      <VictoryBar
        data={data}
        x={x}
        y={y}
        barWidth={24}
        sortKey="y"
        labels={d => `${d.y}`}
        style={{ labels: { fill: labelColors[0] } }}
        labelComponent={<VictoryLabel dy={30} />}
      />
    </VictoryGroup>
  </VictoryChart>
);

export default PewBarVertical;

// export default class PewBarVertical extends Component {
//   render() {
//     const { data, x, y, colors, width } = this.props;
//     return (
//       <VictoryChart domainPadding={20} theme={BlueTheme} width={width}>
//         <VictoryAxis dependentAxis style={{ axis: { stroke: null } }} />
//         <VictoryAxis style={{ grid: { stroke: null } }} />
//         <VictoryGroup colorScale={colors}>
//           <VictoryBar
//             data={data}
//             x={x}
//             y={y}
//             barWidth={24}
//             sortKey="y"
//             labels={d => `${d.y}`}
//             style={{ labels: { fill: "white" } }}
//             labelComponent={<VictoryLabel dy={30} />}
//           />
//         </VictoryGroup>
//       </VictoryChart>
//     );
//   }
// }

// // PewBarVertical.defaultProps = {
// // };

// PewBarVertical.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
//   x: PropTypes.string.isRequired,
//   y: PropTypes.string.isRequired,
//   colors: PropTypes.arrayOf(PropTypes.string).isRequired
// };
