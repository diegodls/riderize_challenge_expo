import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

const ArrowRightIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill='none' {...props}>
    <Path
      d='M8 0 6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8-8-8Z'
      fill='#fff'
    />
  </Svg>
);

export { ArrowRightIcon };
