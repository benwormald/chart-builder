import React from "react";
import { VictoryLabel } from "victory";

export function labelFill(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  let rgb = [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ];
  // set determine color contrast per W3 guidelines: https://www.w3.org/TR/AERT/#color-contrast
  // Color brightness = ((Red value X 299) + (Green value X 587) + (Blue value X 114)) / 1000
  // The range for color brightness difference is 125.
  let brightness = Math.round(
    (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) /
      1000
  );
  let fill = brightness > 125 ? "black" : "white";
  return fill;
}

export function labelPosition(context, cutoff) {
  return (
    <VictoryLabel
      data={context.data}
      text={datum =>
        datum.label
          ? datum.label
          : datum.y.toFixed(context.config.labels.toFixedDecimal)
      }
      dx={
        datum => (datum.y > cutoff ? context.config.labels.labelPositionDX : -5)
        // context.config.labels.labelPositionDX !== null
        //   ? context.config.labels.labelPositionDX
        //   : 0
      }
      dy={
        context.config.labels.labelPositionDY !== null
          ? context.config.labels.labelPositionDY
          : 0
      }
    />
  );
}
